import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ContactoComponent }  from './contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactoRoutingModule

  ],
  declarations: [
    ContactoComponent

  ],
  providers: [

  ]
})
export class ContactoModule {}