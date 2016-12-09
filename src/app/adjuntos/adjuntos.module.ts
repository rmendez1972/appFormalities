import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list.component';
import { AdjuntoDetailComponent }  from './adjunto-detail.component';

import { HeroService } from './hero.service';

import { AdjuntoRoutingModule } from './adjuntos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdjuntoRoutingModule
  ],
  declarations: [
    HeroListComponent,
    AdjuntoDetailComponent
  ],
  providers: [
    HeroService
  ]
})
export class AdjuntosModule {}