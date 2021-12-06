import { ModeloProducto } from './../../../../modelos/producto.modelo';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'imagen': ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { 

    }

  ngOnInit(): void {
  }

  GuardarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseFloat(this.fgValidador.controls["precio"].value);
    let imagen = this.fgValidador.controls["imagen"].value;

    let p = new ModeloProducto();

    p.nombre= nombre;
    p.precio = precio;
    p.imagen = imagen;

    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) =>{
      alert("Producto Almacenado Correctamente");
      this.router.navigate(["/administracion/buscar-producto"]);
    }, (error: any) =>{
      alert("Error Almacenando el producto");
    })
  }
}
