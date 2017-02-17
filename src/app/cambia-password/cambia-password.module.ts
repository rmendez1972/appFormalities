import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CambiaPasswordComponent }  from './cambia-password.component';
import { CambiaPasswordRoutingModule } from './cambia-password-routing.module';
import { CambioPasswordService } from '../_services/index';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CambiaPasswordRoutingModule

  ],
  declarations: [
    CambiaPasswordComponent

  ],
  providers: [
    CambioPasswordService 

  ]
})
export class CambiaPasswordModule {}