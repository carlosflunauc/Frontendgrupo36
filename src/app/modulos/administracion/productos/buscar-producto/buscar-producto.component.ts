import { ProductoService } from './../../../../servicios/producto.service';
import { ModelProducto } from './../../../../modelos/producto.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  listadoRegistros : ModelProducto[] = [];
  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }
  ObtenerListadoProductos(){
    this.productoServicio.ObtenerRegistros().subscribe((datos: ModelProducto[])=>{
      this.listadoRegistros = datos;
    })
  }

}
