import { Injectable } from '@angular/core';

@Injectable()
export class ServiceUrl {
public URL: String;
public URLadjuntos: String;
public URLadjuntosdescarga: String;
public URLbuscarsolicitud: String;
public URLlogin: String;
public URLcambiapassword: String;

constructor() {}


  		getUrl():String{
	  			return this.URL='http://localhost:8083/tramites/controladorseguimiento?operacion=listarjson&id_solicitud=';
	  	}

	  	getUrladjuntos():String{
	  			return this.URLadjuntos='http://localhost:8083/tramites/controladoradjunto?operacion=listarjson&id_seguimiento=';
	  	}

	  	getUrladjuntosdescarga():String{
	  			return this.URLadjuntosdescarga='http://localhost:8083/tramites/adjuntos/';
	  	}

	  	getUrllogin():String{
	  			return this.URLlogin='http://localhost:8083/tramites/controladorregistro?operacion=apilogin&username=';
	  	}
		
		getUrlCambiaPassword():String{
	  			return this.URLcambiapassword='http://localhost:8083/tramites/controladorregistro?operacion=apiSolicitanteCambioPassword&id_solicitante=';
	  	}
		  


}
