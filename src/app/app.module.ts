import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbNavegacionComponent } from './plantilla/navb-navegacion/navb-navegacion.component';
import { FooterNavegacionComponent } from './plantilla/footer-navegacion/footer-navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbNavegacionComponent,
    FooterNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
