import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeguimientoListComponent }    from './seguimiento-list.component';
import { SeguimientoDetailComponent }  from './seguimiento-detail.component';

const seguimientosRoutes: Routes = [
  { path: 'seguimientos',  component: SeguimientoListComponent },
  { path: 'seguimientos/:id', component: SeguimientoListComponent }
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