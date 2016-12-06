import { Component, OnInit, Input, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
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
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('2.0s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class HeroDetailComponent implements OnInit {

	@HostBinding('@routeAnimation') get routeAnimation() {
    	return true;
  	}

  	@HostBinding('style.display') get display() {
    	return 'block';
  	}

  	@HostBinding('style.position') get position() {
    	return 'relative';
  	}

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private service: HeroService
  ) { }

  ngOnInit() {
  	this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getHero(+params['id']))
    .subscribe((hero: Hero) => this.hero = hero);
  }

  title: 'detalle';
  active = true;
  submitted = false;
  onSubmit() { this.submitted = true; }
  //@Input()
  hero: Hero;

  gotoHeroes() {
  	let heroId = this.hero ? this.hero.id : null;
  	// Pass along the hero id if available
  	// so that the HeroList component can select that hero.
  	this.router.navigate(['/heroes', { id: heroId }]);
  }

}
