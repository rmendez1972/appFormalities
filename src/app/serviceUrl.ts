import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUrl {
public URL: String;
public URLadjuntos: String;
public URLadjuntosdescarga: String;
public URLbuscarsolicitud: String;

constructor() {}

<<<<<<< HEAD
  		getUrl():String{
	  			return this.URL='http://localhost:8080/Tramites/controladorseguimiento?operacion=listarjson&id_solicitud=47';
	  	}

	  	getUrladjuntos():String{
	  			return this.URLadjuntos='http://localhost:8080/Tramites/controladoradjunto?operacion=listarjson&id_seguimiento=';
	  	}

	  	getUrladjuntosdescarga():String{
	  			return this.URLadjuntosdescarga='http://localhost:8080/Tramites/adjuntos/';
	  	}
=======
getUrl(): String {
return this.URL = 'http://localhost:8083/tramites/controladorseguimiento?operacion=listarjson&id_solicitud=45';
}

getUrlbuscarsolicitud(): String {
return this.URLbuscarsolicitud = 'http://localhost:8083/tramites/controladorseguimiento?operacion=listarjson&id_solicitud=45';
}

getUrladjuntos(): String {
return this.URLadjuntos = 'http://localhost:8083/tramites/controladoradjunto?operacion=listarjson&id_seguimiento=';
}
>>>>>>> 3555f8bdcb5ede96439912e54b26ad7e0b8165de

getUrladjuntosdescarga(): String {
return this.URLadjuntosdescarga = 'http://localhost:8083/tramites/adjuntos/';
}

}
