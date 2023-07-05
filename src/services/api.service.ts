import { Injectable, NgZone } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ApiService {
    private _url_payment = 'https://novopay.onrender.com';
    sitename: any = 'sitelive';

    constructor(
        public zone: NgZone,
        private http: HttpClient,
    ) {
        
    }

    /**
     * init_transaction
     */
    public init_transaction(email, amount) {
        let sitename = this.sitename;
        return this.http.post(`${this._url_payment}/v1/transaction/request`, {email, amount, sitename})
    }
}
