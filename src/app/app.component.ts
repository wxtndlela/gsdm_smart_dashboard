import { Component, OnInit } from "@angular/core";
import {
  Router,
  NavigationEnd,
  NavigationStart,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
} from "@angular/router";
import { Users, Billboards, Vehicles } from "../services/db";
import { AuthService } from "../services/auth.service";
import { GlobalSettings } from "../services/global.service";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "demo1";
  user_id = localStorage.getItem("uuid");
  user_role = localStorage.getItem("user_role");

  showSidebar: boolean = false;
  showNavbar: boolean = false;
  showFooter: boolean = false;
  isLoggedin: boolean = true;
  isLoggingIn: boolean = false;
  isRegistering: boolean;
  isLoading: boolean;

  constructor(
    private router: Router,
    private db_users: Users,
    private db_billboards: Billboards,
    private db_vehicles: Vehicles,
    private auth: AuthService,
    private storage: Storage,
    public global: GlobalSettings
  ) {
    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          event["url"] == "/user-pages/login" ||
          event["url"] == "/user-pages/register" ||
          event["url"] == "/error-pages/404" ||
          event["url"] == "/error-pages/500"
        ) {
          this.showSidebar = false;
          this.showNavbar = false;
          this.showFooter = false;
          document.querySelector(".main-panel").classList.add("w-100");
          document
            .querySelector(".page-body-wrapper")
            .classList.add("full-page-wrapper");
          document
            .querySelector(".content-wrapper")
            .classList.remove("auth", "auth-img-bg");
          document
            .querySelector(".content-wrapper")
            .classList.remove("auth", "lock-full-bg");
          if (
            event["url"] == "/error-pages/404" ||
            event["url"] == "/error-pages/500"
          ) {
            document.querySelector(".content-wrapper").classList.add("p-0");
          }
        } else {
          this.showSidebar = true;
          this.showNavbar = true;
          this.showFooter = true;
          document.querySelector(".main-panel").classList.remove("w-100");
          document
            .querySelector(".page-body-wrapper")
            .classList.remove("full-page-wrapper");
          document
            .querySelector(".content-wrapper")
            .classList.remove("auth", "auth-img-bg");
          document.querySelector(".content-wrapper").classList.remove("p-0");
        }
      }
    });

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
  }

  async ngOnInit() {
    await this.storage.create();
    this.auth.auth(localStorage.getItem("uuid"), "");
    this.db_billboards.getAll();
    this.db_vehicles.getAll();

    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
