import { Component, OnInit } from "@angular/core";
import { GlobalSettings } from "../../../services/global.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Users } from "../../../services/db";
import { UserModal } from "../../../providers/user.modal";
import { AuthService } from "../../../services/auth.service";
import { PasswordService } from "../../../services/password.service";
import {
  CanActivate,
  ActivatedRoute,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  error: any;
  returnUrl: string;

  constructor(
    public global: GlobalSettings,
    private fb: FormBuilder,
    private users: Users,
    private storage: Storage,
    private auth: AuthService,
    private password: PasswordService,
    private router: Router,
    private active_route: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.active_route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }
      this.returnUrl = params.returnUrl;
      console.log(this.returnUrl); // price
    });
  }

  goto_register() {
    this.global.isRegistering = true;
    this.global.isLoggingIn = false;
  }

  async do_login() {
    let email = this.loginForm.get("email").value;
    let password = this.loginForm.get("password").value;
    // const loading = await

    if (this.loginForm.invalid) {
      this.error = "fill in all the fields";
      return;
    }

    (await this.users.get(email)).subscribe(async (data: UserModal) => {
      this.global.set_User(data);

      //console.log("RES:", res);
      //localStorage.setItem("user", data);
      if (data && data.user_id) {
        //validate password here
        (await this.password.validate_password(password, data.password))
          ? this.authorise(data)
          : (this.error = "wrong email or password");
      } else {
        this.error = "wrong email or password";
      }
    });
  }

  authorise(data) {
    this.auth.auth(data.user_id, "");
    localStorage.setItem("user_id", data.user_id);
    this.storage.set("User", data).then(async (res) => {
      this.global.userRole = data.user_role;
      this.returnUrl
        ? this.router.navigateByUrl(this.returnUrl)
        : this.router.navigateByUrl("/home");

      //window.location.reload();
    });
  }
}
