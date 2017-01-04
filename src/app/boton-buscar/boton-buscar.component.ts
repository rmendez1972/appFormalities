import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Seguimiento } from '../seguimientos/seguimiento';
import { SeguimientoRoutingModule} from '../seguimientos/seguimientos-routing.module'
import { AlertService} from '../_services/index'; 

@Component({
  selector:    'app-boton-buscar',
  templateUrl: './boton-buscar.component.html',
  styleUrls:  ['./boton-buscar.component.css']
})
export class BotonBuscarComponent implements OnInit {

  constructor(
     private router: Router,
     private alertService: AlertService

  ) { }

  ngOnInit() {
  }

    enviaSolicitud(idSolicitud:number) {


     if (idSolicitud>0) {
       this.router.navigate(['/seguimientos',idSolicitud])
      } else {
        this.alertService.error("Núm. Solicitud NO válida...")
      }

	  }

}
