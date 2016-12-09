import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { Hero } from './hero';
import { Solicitud } from './solicitud';
import { Tramite } from './tramite';
import { Seguimiento } from './seguimiento';
import {HeroService} from './hero.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
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
export class HeroListComponent implements OnInit {
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
  private heroes: Hero[];
  private solicitudes: Solicitud[];
  private tramites: Tramite[];
  private seguimientos: Seguimiento[];
  private hero:Hero;
  private x: Observable<Hero[]>;
  private y: Observable<Solicitud[]>;
  private z: Observable<Tramite[]>;
  private a: Observable<Seguimiento[]>;

  private selectedId: number;



  	constructor(
      private router: Router,
      private route: ActivatedRoute,
      private heroservice: HeroService
    )
    {}


  	ngOnInit() {

      this.getHeroes();
      this.getSolicitud();
      this.getTramite();
      this.getSeguimiento();
    };




  	title = 'Listado de Seguimientos';
    selectedHero: Hero;

    getHeroes() {
        this.x=this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) =>
        {

          this.selectedId= +params['id'];
          return this.heroservice.getHeroes()
        })

        this.x.subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);


    };

    getSolicitud() {
        this.y=this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) =>
        {

          //this.selectedId= +params['id'];
          return this.heroservice.getSolicitudes()
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
          return this.heroservice.getTramites()
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
          return this.heroservice.getSeguimientos()
        })

        this.a.subscribe(
                       seguimiento => this.seguimientos = seguimiento,
                       error =>  this.errorMessage = <any>error);

    };




    addHero (name: string) {
      if (!name) { return; }
      this.heroservice.addHero(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  this.errorMessage = <any>error);
    }

  	onSelect(seguimiento: Seguimiento) {
    	this.router.navigate(['/adjunto', seguimiento.id_seguimiento]);
	  }

    isSelected(hero: Hero) {/*alert ('dentro hero.id'+hero.id+' selectedId '+this.selectedId);*/ return hero.id_solicitante === this.selectedId; }

}