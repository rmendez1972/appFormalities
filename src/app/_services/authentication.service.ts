﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from '../_models/index';
import { ServiceUrl } from '../serviceUrl';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private loginUrl: string;

    constructor(private http: Http, private url:ServiceUrl) { this.loginUrl=String(this.url.getUrllogin()); }

    login(username: string, password: string) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let miusuario={'nombre':username,'password':password};

        let jsonData =JSON.stringify(miusuario);
        console.log({Data: JSON.stringify(miusuario)});

        return this.http.post(this.loginUrl+username+"&password="+password, {Data: JSON.stringify(miusuario)} , options)

            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();

                //let connection: MockConnection;
                //connection.mockError(new Error('Username or password is incorrect'));
<<<<<<< HEAD

=======
>>>>>>> f5b449487558c18f7a3b7702f192191d8f16901e
                //alert('user.user '+JSON.stringify(user.user).length);
                if (JSON.stringify(user.user).length > 10) {


                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                }
<<<<<<< HEAD
                else{
                    //alert('dentro de else en el service');
=======
                /*else{
                    alert('dentro de else en el service');
>>>>>>> f5b449487558c18f7a3b7702f192191d8f16901e
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                    //this.logout();
                }*/


            });
    }

    logout() {

        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}