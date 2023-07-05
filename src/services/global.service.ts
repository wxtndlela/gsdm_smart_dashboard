import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserModal } from "../providers/user.modal";
import { Storage } from "@ionic/storage-angular";

@Injectable()
export class GlobalSettings {
  isLoggedin: boolean = false;
  isLoggingIn: boolean = false;
  isRegistering: boolean = false;

  showSidebar: boolean = false;
  showNavbar: boolean = false;
  showFooter: boolean = false;
  userRole: any = "";
  public Offline: Storage;
  public showSync: boolean = false;

  constructor(public zone: NgZone) {
    this.User = new BehaviorSubject<UserModal>(null);
    //     this.isLoggedin = new BehaviorSubject<boolean>(false);
    //     this.isLoggingIn = new BehaviorSubject<boolean>(false);
    //     this.isRegistering = new BehaviorSubject<boolean>(false);
  }

  public User: BehaviorSubject<UserModal>;
  set_User(newValue): void {
    this.User.next(newValue);
  }
  get_User(): Observable<UserModal> {
    return this.User.asObservable();
  }

  // public isLoggedin: BehaviorSubject<boolean>;
  // set_isLoggedin(newValue): void {
  //     this.User.next(newValue);
  // }
  // get_isLoggedin(): Observable<boolean> {
  //     return this.isLoggedin.asObservable();
  // }

  // public isLoggingIn: BehaviorSubject<boolean>;
  // set_isLoggingIn(newValue): void {
  //     this.User.next(newValue);
  // }
  // get_isLoggingIn(): Observable<boolean> {
  //     return this.isLoggingIn.asObservable();
  // }

  // public isRegistering: BehaviorSubject<boolean>;
  // set_isRegistering(newValue): void {
  //     this.User.next(newValue);
  // }
  // get_isRegistering(): Observable<boolean> {
  //     return this.isRegistering.asObservable();
  // }
}
