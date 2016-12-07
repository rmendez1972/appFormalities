import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';






@Injectable()
export class HeroService {

   private heroesUrl = 'http://localhost:8080/Tramites/controladordirecciones?operacion=listarPorunidadjson&id_unidadadministrativa=4'; // URL to JSON file o URL to web API

   constructor (private http: Http) {}

	//getHeroes
  getHeroes(): Observable<Hero[]> {
 		return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
	}

  addHero (name: string): Observable<Hero> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.heroesUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {

    let body = res.json();

    return body.data || { };
  }
  private handleError (error: Response | any) {

    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  //getHero
  getHero(id: number): Observable<Hero> {
    return this.getHeroes()
               .map(heroes => heroes.find(hero => hero.id_direccion === id));
  }

}