import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeroRoutingModule } from './heroes/heroes-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menus/menu.component';
import { HeroesModule } from './heroes/heroes.module';

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
    HeroRoutingModule,
    HeroesModule

  ],
  providers: [],
  bootstrap: [AppComponent,MenuComponent]
})
export class AppModule { }
