import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { AdjuntoDetailComponent }  from './adjunto-detail.component';

const adjuntosRoutes: Routes = [
    { path: 'adjunto/:id', component: AdjuntoDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adjuntosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdjuntoRoutingModule { }