import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SeguimientoRoutingModule } from './seguimientos/seguimientos-routing.module';
import { BuscarSolicitudRoutingModule } from './buscar-solicitud/buscar-solicitud-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menus/menu.component';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { AdjuntosModule } from './adjuntos/adjuntos.module';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { BotonBuscarComponent } from './boton-buscar/boton-buscar.component';

//import { MenuModule } from './menus/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BuscarSolicitudComponent,
    BotonBuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SeguimientoRoutingModule,
    BuscarSolicitudRoutingModule,
    SeguimientosModule,
    AdjuntosModule

  ],
  providers: [],
  bootstrap: [AppComponent, MenuComponent, BotonBuscarComponent]
})
export class AppModule { }
