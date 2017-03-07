import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from '../_guards/index';

import { UploadComponent }    from './upload.component';


//const botonbuscarRoutes: Routes = [
const uploadRoutes: Routes = [  

	//{ path: 'boton-buscar', component: BotonBuscarComponent, canActivate: [AuthGuard] }
  { path: 'upload', component:  UploadComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [
    //RouterModule.forChild(botonbuscarRoutes)
    RouterModule.forChild(uploadRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UploadRoutingModule {  }
