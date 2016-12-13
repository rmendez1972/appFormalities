import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUrl {
	public URL: String;
	public URLadjuntos:String;
	public URLadjuntosdescarga:String;

	constructor(){}

  		getUrl():String{
	  			return this.URL='http://localhost:8083/tramites/controladorseguimiento?operacion=listarjson&id_solicitud=45';
	  	}

	  	getUrladjuntos():String{
	  			return this.URLadjuntos='http://localhost:8083/tramites/controladoradjunto?operacion=listarjson&id_seguimiento=';
	  	}

	  	getUrladjuntosdescarga():String{
	  			return this.URLadjuntosdescarga='http://localhost:8083/tramites/adjuntos/';
	  	}


}
