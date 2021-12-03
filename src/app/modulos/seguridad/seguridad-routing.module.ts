import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdentificacionComponent
  },
{
  path: 'cerrar-sesion',
  component: CerrarSesionComponent
},
{
  path:'cambio-clave',
  component: CambioClaveComponent
},
{
  path: 'recuperar-clave',
  component: RecuperarClaveComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
