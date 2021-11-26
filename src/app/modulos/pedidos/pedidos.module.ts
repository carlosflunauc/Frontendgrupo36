import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { GenerarPedidoComponent } from './generar-pedido/generar-pedido.component';


@NgModule({
  declarations: [
    GenerarPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
