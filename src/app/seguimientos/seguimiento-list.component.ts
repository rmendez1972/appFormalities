import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { Solicitante } from './solicitante';
import { Solicitud } from './solicitud';
import { Tramite } from './tramite';
import { Seguimiento } from './seguimiento';
import { SeguimientoService} from './seguimiento.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-seguimiento-list',
  templateUrl: './seguimiento-list.component.html',
  styleUrls: ['./seguimiento-list.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.8s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class SeguimientoListComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  private errorMessage: string;
  private solicitantes: Solicitante[];
  private solicitudes: Solicitud[];
  private tramites: Tramite[];
  private seguimientos: Seguimiento[];
  private solicitante: Solicitante;
  private x: Observable<Solicitante[]>;
  private y: Observable<Solicitud[]>;
  private z: Observable<Tramite[]>;
  private a: Observable<Seguimiento[]>;

  private selectedId: number;



  	constructor(
      private router: Router,
      private route: ActivatedRoute,
      private seguimientoservice: SeguimientoService
    )
    {}


  	ngOnInit() {

      this.getSolicitantes();
      this.getSolicitud();
      this.getTramite();
      this.getSeguimiento();
    };




  	title = 'Listado de Seguimientos';
    selectedSolicitante: Solicitante;

    getSolicitantes() {
        this.x=this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) =>
        {

          this.selectedId= +params['id'];
          return this.seguimientoservice.getSolicitantes()
        })

        this.x.subscribe(
                       solicitantes => this.solicitantes = solicitantes,
                       error =>  this.errorMessage = <any>error);


    };

    getSolicitud() {
        this.y=this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) =>
        {

          //this.selectedId= +params['id'];
          return this.seguimientoservice.getSolicitudes()
        })

        this.y.subscribe(
                       solicitud => this.solicitudes = solicitud,
                       error =>  this.errorMessage = <any>error);

    };

    getTramite() {
        this.z=this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) =>
        {

          //this.selectedId= +params['id'];
          return this.seguimientoservice.getTramites()
        })

        this.z.subscribe(
                       tramite => this.tramites = tramite,
                       error =>  this.errorMessage = <any>error);

    };


    getSeguimiento() {
        this.a=this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) =>
        {

          //this.selectedId= +params['id'];
          return this.seguimientoservice.getSeguimientos()
        })

        this.a.subscribe(
                       seguimiento => this.seguimientos = seguimiento,
                       error =>  this.errorMessage = <any>error);

    };




    addSolicitante (name: string) {
      if (!name) { return; }
      this.seguimientoservice.addSolicitante(name)
                     .subscribe(
                       solicitante  => this.solicitantes.push(solicitante),
                       error =>  this.errorMessage = <any>error);
    }

  	onSelect(seguimiento: Seguimiento) {
    	this.router.navigate(['/adjunto', seguimiento.id_seguimiento]);
    }

    isSelected(seguimiento: Seguimiento) {/*alert ('dentro hero.id'+hero.id+' selectedId '+this.selectedId);*/ return seguimiento.id_seguimiento === this.selectedId; }

}
