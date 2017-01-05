import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Seguimiento } from '../seguimientos/seguimiento';
import { SeguimientoRoutingModule} from '../seguimientos/seguimientos-routing.module';
import { AlertService} from '../_services/index';
import { User } from '../_models/index'; 

@Component({
  selector:    'app-boton-buscar',
  templateUrl: './boton-buscar.component.html',
  styleUrls:  ['./boton-buscar.component.css']
})
export class BotonBuscarComponent implements OnInit {
  private idSolicitante:number;
  currentUser:Array<any>;
  
  constructor(
     private router: Router,
     private alertService: AlertService
    
  ) { }

  ngOnInit() {
  }

    enviaSolicitud(idSolicitud:number) {
      //recuperar del currentUser solo el id
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
      let x=0;
      for (x=0;x<this.currentUser.length;x++){
        this.idSolicitante=this.currentUser[x].id;
        
      }
      //alert('el id del solicitante es: '+this.idSolicitante);

     if (idSolicitud>0) {
       this.router.navigate(['/seguimientos',idSolicitud,this.idSolicitante])
      } else {
        this.alertService.error("Núm. Solicitud NO válida...")
      }

	  }

}
