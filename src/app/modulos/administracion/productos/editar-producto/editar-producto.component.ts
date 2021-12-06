import { ModeloProducto } from './../../../../modelos/producto.modelo';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id : string= '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'imagen': ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) {

     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioProducto.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloProducto) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
    });
  }
  EditarProducto(){

    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseFloat(this.fgValidador.controls["precio"].value);
    let imagen = this.fgValidador.controls["imagen"].value;

    let p = new ModeloProducto();

    p.nombre= nombre;
    p.precio=precio;
    p.imagen=imagen;
    p.id=this.id;

    this.servicioProducto.ActulizarProducto(p).subscribe((datos:ModeloProducto) =>{
      alert("Producto Actualizado Correctamente");
      this.router.navigate(["/administracion/buscar-producto"]);
    },(error: any) =>{
      alert("Error Actualizando el Producto");
    })

  }
}
