import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SeguimientoRoutingModule } from './seguimientos/seguimientos-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menus/menu.component';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { AdjuntosModule } from './adjuntos/adjuntos.module';

//import { MenuModule } from './menus/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SeguimientoRoutingModule,
    SeguimientosModule,
    AdjuntosModule

  ],
  providers: [],
  bootstrap: [AppComponent,MenuComponent]
})
export class AppModule { }
