import { Injectable } from '@angular/core';
import { Solicitante } from './solicitante';
import { Solicitud } from './solicitud';
import { Tramite } from './tramite';
import { Seguimiento } from './seguimiento';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
import { ServiceUrl } from '../serviceUrl';
import { AlertService} from '../_services/index';





@Injectable()
export class SeguimientoService {

  private seguimientosUrl: string;


  constructor (private http: Http, 
      private url:ServiceUrl,
      private alertService: AlertService) 
      {this.seguimientosUrl=String(this.url.getUrl());}

	//getSolicitantes
  getSolicitantes(idSolicitud: number): Observable<Solicitante[]> {
    
 		return this.http.get(this.seguimientosUrl+idSolicitud)
                    .map(this.extractData)
                    .catch(this.handleError);
                                       
	}

  //getSolicitudes
  getSolicitudes(idSolicitud: number): Observable<Solicitud[]> {

     return this.http.get(this.seguimientosUrl+idSolicitud)
                    .map(this.extractDataSolic)
                    .catch(this.handleError);
  }


  //getTramites
  getTramites(idSolicitud: number): Observable<Tramite[]> {

     return this.http.get(this.seguimientosUrl+idSolicitud)
                    .map(this.extractDataTram)
                    .catch(this.handleError);
  }


  //getSeguimientos
  getSeguimientos(idSolicitud: number): Observable<Seguimiento[]> {

     return this.http.get(this.seguimientosUrl+idSolicitud)
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

    let body = res.json();
        if(body.data.length > 0){
          //this.alertService.success("Núm. Solicitud encontrada exitosamente!") 
          alert("Este areglo NO esta vacio")
        }/*else {
          this.alertService.error("Núm. Solicitud NO encontrada!");
          alert("este arreglo está vacio");
        }*/

    return body.data || { };
    
  }


  private extractDataSolic(res: Response) {
    //alert('res en datasolic '+res);

    let body = res.json();
   
    return body.solicitud || { };
    
  }


  private extractDataTram(res: Response) {
    //alert('res en datasolic '+res);
    let body = res.json();
   

    return body.tramite || { };
  }

  private extractDataSeg(res: Response) {
    //alert('res en datasolic '+res);
    let body = res.json();
    

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
  getSolicitante(id: number, idSolicitud: number): Observable<Solicitante> {
    return this.getSolicitantes(idSolicitud)
               .map(solicitantes => solicitantes.find(solicitante => solicitante.id_solicitante === id));
  }

  /*login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                    this.alertService.success("autenticado exitosamente...");
                },
                error => {
                    this.alertService.error(error);
                    //this.loading = false;
                });
    }*/

}
