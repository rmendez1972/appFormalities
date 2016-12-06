import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { Hero } from './hero';
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


	heroes:Observable<Hero[]>;
  private selectedId: number;

  	constructor(
      private router: Router,
      private route: ActivatedRoute,
      private heroservice: HeroService
    )
    {
  		/*this.heroservice.getHeroes()
  			.then(heroes => this.heroes = heroes)
  			.catch(err => console.log(err) );*/
  	}

  	ngOnInit() {
      this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.heroservice.getHeroes();
      });

  	}

  	title = 'Listado de Heroes';




    selectedHero: Hero;

  	onSelect(hero: Hero) {
    	this.router.navigate(['/hero', hero.id]);
	  }

    isSelected(hero: Hero) { return hero.id === this.selectedId; }

}