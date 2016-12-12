import { Injectable } from '@angular/core';
import { Solicitante } from './solicitante';
import { Solicitud } from './solicitud';
import { Tramite } from './tramite';
import { Seguimiento } from './seguimiento';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';






@Injectable()
export class SeguimientoService {

   private seguimientosUrl = 'http://localhost:8080/Tramites/controladorseguimiento?operacion=listarjson&id_solicitud=47'; // URL to JSON file o URL to web API

   constructor (private http: Http) {}

	//getHeroes
  getSolicitantes(): Observable<Solicitante[]> {
    //alert('dentro de getheroes');
 		return this.http.get(this.seguimientosUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
	}

  //getSolicitudes
  getSolicitudes(): Observable<Solicitud[]> {
    //alert('dentro de getsolicitudes');
     return this.http.get(this.seguimientosUrl)
                    .map(this.extractDataSolic)
                    .catch(this.handleError);
  }


  //getSolicitudes
  getTramites(): Observable<Tramite[]> {
    //alert('dentro de getsolicitudes');
     return this.http.get(this.seguimientosUrl)
                    .map(this.extractDataTram)
                    .catch(this.handleError);
  }


  //getSolicitudes
  getSeguimientos(): Observable<Seguimiento[]> {
    //alert('dentro de getsolicitudes');
     return this.http.get(this.seguimientosUrl)
                    .map(this.extractDataSeg)
                    .catch(this.handleError);
  }

  addSolicitante (name: string): Observable<Solicitante> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.seguimientosUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    //alert('res '+res);
    let body = res.json();

    return body.data || { };
  }


  private extractDataSolic(res: Response) {
    //alert('res en datasolic '+res);
    let body = res.json();
    //alert('body '+body);

    return body.solicitud || { };
  }


  private extractDataTram(res: Response) {
    //alert('res en datasolic '+res);
    let body = res.json();
    //alert('body '+body);

    return body.tramite || { };
  }

  private extractDataSeg(res: Response) {
    //alert('res en datasolic '+res);
    let body = res.json();
    //alert('body '+body);

    return body.seguimientos || { };
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
  getSolicitante(id: number): Observable<Solicitante> {
    return this.getSolicitantes()
               .map(solicitantes => solicitantes.find(solicitante => solicitante.id_solicitante === id));
  }

}