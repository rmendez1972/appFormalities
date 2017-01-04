import { Injectable } from '@angular/core';
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
<<<<<<< HEAD
        return this.http.post('http://localhost:8083/tramites/controladorregistro?operacion=apilogin', JSON.stringify({ username: username, password: password }))
=======
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let miusuario={'nombre':username,'password':password};

        let jsonData =JSON.stringify(miusuario);
        console.log({Data: JSON.stringify(miusuario)});

        return this.http.post(this.loginUrl+username+"&password="+password, {Data: JSON.stringify(miusuario)} , options)
>>>>>>> e8ce4d860a9f87094bf2eb42b109db3c85f33df5
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                //let connection: MockConnection;
                //connection.mockError(new Error('Username or password is incorrect'));

                if (user) {

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}