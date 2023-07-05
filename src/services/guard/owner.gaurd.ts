import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class OwnerGuard implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    /**
     * Check if the user is logged in before calling http
     *
     * @param route
     * @param state
     * @returns {boolean}
     */
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        let user_role = localStorage.getItem('user_role');

        //testing purposes only
        return true;
        //end

        if (this.auth.isLoggedin() && user_role === 'Media_owner') {
            return true;
        }
        this.router.navigate(['/home'], { queryParams: {} });
        return;
    }
}