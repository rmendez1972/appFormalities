import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SeguimientoListComponent }    from './seguimiento-list.component';
import { SeguimientoDetailComponent }  from './seguimiento-detail.component';
import { AuthGuard } from '../_guards/auth.guard';

const seguimientosRoutes: Routes = [
<<<<<<< HEAD
  { path: 'seguimientos',  component: SeguimientoListComponent, canActivate: [AuthGuard] },
  { path: 'seguimiento/:id', component: SeguimientoDetailComponent }
=======
  { path: 'seguimientos',  component: SeguimientoListComponent },
  { path: 'seguimientos/:id', component: SeguimientoListComponent }
>>>>>>> 3555f8bdcb5ede96439912e54b26ad7e0b8165de
];

@NgModule({
  imports: [
    RouterModule.forChild(seguimientosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SeguimientoRoutingModule {  }
