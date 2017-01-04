import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Seguimiento } from '../seguimientos/seguimiento';
import { SeguimientoRoutingModule} from '../seguimientos/seguimientos-routing.module'

@Component({
  selector:    'app-boton-buscar',
  templateUrl: './boton-buscar.component.html',
  styleUrls:  ['./boton-buscar.component.css']
})
export class BotonBuscarComponent implements OnInit {

  constructor(
     private router: Router

  ) { }

  ngOnInit() {
  }

    enviaSolicitud(idSolicitud:number) {
      //recuperar del currentUser solo el id

     if (idSolicitud>0) {
       this.router.navigate(['/seguimientos',idSolicitud]);
      } else {
      alert('Solicitud no válida');;
      }

	  }

}
