import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeguimientoListComponent }    from './seguimiento-list.component';
import { SeguimientoDetailComponent }  from './seguimiento-detail.component';

const seguimientosRoutes: Routes = [
  { path: 'seguimientos',  component: SeguimientoListComponent },
  { path: 'seguimiento/:id', component: SeguimientoDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(seguimientosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SeguimientoRoutingModule { }