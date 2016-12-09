import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AdjuntoListComponent }    from './adjunto-list.component';


import { AdjuntoService } from './adjunto.service';

import { AdjuntoRoutingModule } from './adjuntos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdjuntoRoutingModule
  ],
  declarations: [
    AdjuntoListComponent

  ],
  providers: [
    AdjuntoService
  ]
})
export class AdjuntosModule {}