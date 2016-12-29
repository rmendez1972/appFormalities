import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SeguimientoRoutingModule } from './seguimientos/seguimientos-routing.module';

<<<<<<< HEAD
=======


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

>>>>>>> 566fcb41c3759978e078747ff917fdb5e8ceaa63

import { AppComponent } from './app.component';
import { MenuComponent } from './menus/menu.component';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { AdjuntosModule } from './adjuntos/adjuntos.module';
<<<<<<< HEAD

import { BotonBuscarComponent } from './boton-buscar/boton-buscar.component';
=======
import { ContactoModule } from './contacto/contacto.module';
import { BotonBuscarModule } from './boton-buscar/boton-buscar.module';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
>>>>>>> 566fcb41c3759978e078747ff917fdb5e8ceaa63




@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuComponent,
    BotonBuscarComponent
=======
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent
    //BotonBuscarComponent
>>>>>>> 566fcb41c3759978e078747ff917fdb5e8ceaa63
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
<<<<<<< HEAD
    SeguimientoRoutingModule,
=======
>>>>>>> 566fcb41c3759978e078747ff917fdb5e8ceaa63
    SeguimientosModule,
    AdjuntosModule,
    BotonBuscarModule,
    ContactoModule
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

  bootstrap: [AppComponent, MenuComponent]

})
export class AppModule {

}
