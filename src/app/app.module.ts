import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SeguimientoRoutingModule } from './seguimientos/seguimientos-routing.module';
import { BuscarSolicitudRoutingModule } from './buscar-solicitud/buscar-solicitud-routing.module';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http'

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';


import { AppComponent } from './app.component';
import { MenuComponent } from './menus/menu.component';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { AdjuntosModule } from './adjuntos/adjuntos.module';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { BotonBuscarComponent } from './boton-buscar/boton-buscar.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    BuscarSolicitudComponent,
    BotonBuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
<<<<<<< HEAD
=======
    SeguimientoRoutingModule,
    BuscarSolicitudRoutingModule,
>>>>>>> 3555f8bdcb5ede96439912e54b26ad7e0b8165de
    SeguimientosModule,
    AdjuntosModule



  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    //fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
<<<<<<< HEAD
  //bootstrap: [AppComponent, MenuComponent, BuscarSolicitudComponent]
  bootstrap: [AppComponent, MenuComponent, BuscarSolicitudComponent ]
=======
  providers: [],
  bootstrap: [AppComponent, MenuComponent, BotonBuscarComponent]
>>>>>>> 3555f8bdcb5ede96439912e54b26ad7e0b8165de
})
export class AppModule {

}
