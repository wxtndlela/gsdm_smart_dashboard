import { Component, OnInit } from "@angular/core";
import { GlobalSettings } from "../../../services/global.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Users } from "../../../services/db";
import { UserModal } from "../../../providers/user.modal";
import { AuthService } from "../../../services/auth.service";
import * as moment from "moment";
import * as uuid from "uuid";
import { PasswordService } from "../../../services/password.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  private salt;
  private user_id;
  private today = moment();
  error: any;

  constructor(
    public global: GlobalSettings,
    private fb: FormBuilder,
    private users: Users,
    private auth: AuthService,
    private password: PasswordService,
    private conpassword: PasswordService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      conpassword: ["", Validators.required],
      //user_role: ["", Validators.required],
    });
  }

  goto_login() {
    this.global.isRegistering = false;
    this.global.isLoggingIn = true;
  }

  async do_register() {
    let password = this.registerForm.get("password").value;
    let conpassword = this.registerForm.get("conpassword").value;

    if (password != conpassword) {
      this.error = "Passwords do not match!";
      return;
    }
    let email: string = this.registerForm.get("email").value;
    let hash_password = this.password.hash_password(password).pass;
    let province = "Gauteng";
    let username = email.substring(0, email.indexOf("@"));
    let date_created = moment().format("DD/MM/yyyy HH:MM:SS");
    let date_modified = moment().format("DD/MM/yyyy HH:MM:SS");

    if (this.registerForm.invalid) {
      this.error = "Fill in all fields";
      return;
    }

    (await this.users.get(email)).subscribe((data: UserModal) => {
      this.global.set_User(data);
      if (data && data.email) {
        //do somthing boring here
        this.error = "Email already exists!, Login";
        return;
      } else {
        //user does not exist
        this.users.create({
          date_created: date_created,
          date_modified: date_modified,
          email: email,
          password: hash_password,
          photo_url: "",
          province: province,
          user_id: "",
          user_role: "User",
          //user_role: user_role,
          username: username,
        });

        alert("Success: User Account Created!, Login");
      }
    });
  }
}
