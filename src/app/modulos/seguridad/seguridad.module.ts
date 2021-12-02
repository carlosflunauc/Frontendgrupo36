import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    RecuperarClaveComponent,
    CambioClaveComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
