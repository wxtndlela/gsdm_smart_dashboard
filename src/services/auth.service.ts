import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { Users, Billboards } from "./db/index";
import { UserModal } from "../providers/user.modal";
import { GlobalSettings } from "../services/global.service";
import { GeolocationService } from "../services/geolocation.service";
import { Storage } from "@ionic/storage-angular";

@Injectable()
export class AuthService {
  private returnValue: any;

  constructor(
    private router: Router,
    private user: Users,
    private billboard: Billboards,
    private storage: Storage,
    private global: GlobalSettings,
    private location_services: GeolocationService
  ) {
    this.day = moment().add(0, "d").format().toString();
  }

  public day;

  //login
  login(email, password) {
    // return this.http.post<any>(this.api._Url + '/auth/login', { email, password });
  }

  async auth(uuid, user_role): Promise<void> {
    if (uuid) {
      localStorage.setItem("uuid", uuid);
      this.location_services.start_browser_tracking();
      (await this.user.get(uuid)).subscribe((data: UserModal) => {
        // console.log('auth', data)
        this.global.set_User(data);
        this.global.isLoggedin = true;
      });
    } else {
      this.logout();
    }

    this.enable_notifications();
  }

  isLoggedin(): boolean {
    if (localStorage.getItem("uuid")) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    // this.global.set_isLoggingIn(true);
    // this.global.set_isLoggedin(false);

    this.storage.set("User", null).then(() => {
      this.global.userRole = "";
      localStorage.removeItem("uuid");
      localStorage.removeItem("user_role");
      this.router.navigateByUrl("/");
    });
  }

  add_user_token(token) {
    let user_id = localStorage.getItem("uuid");
    let addedondatetime = this.day.substr(0, 10) + " " + this.day.substr(11, 5);
    if (user_id != null) {
      // this.api.add_new_device(user_id, addedondatetime, token).subscribe(res => {
      //     console.log(res);
      // })
    }
  }

  enable_notifications() {}
}
