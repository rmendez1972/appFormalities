import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CrisisListComponent } from './crisis-center/crisis-list.component';
//import { HeroListComponent } from './heroes/hero-list.component';
//import { HeroDetailComponent }  from './heroes/hero-detail.component';

// vector vacio por q las rutas las controlo en cada componente
const appRoutes: Routes = [
//{
    //path: '',
    //redirectTo: '/heroes',
    //pathMatch: 'full'
  //}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}