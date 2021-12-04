import { AdministracionModule } from './../../administracion.module';
import { ModelProducto } from './../../../../modelos/producto.modelo';
import { ProductoService } from './../../../../servicios/producto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  fgValidador: FormGroup=this.fb.group({
    'nombre':['',[Validators.required]],
    'precio':['',[Validators.required]],
    'imagen':['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }
  GuardarPoducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let imagen = this.fgValidador.controls["imagen"].value;

    let p = new ModelProducto();
    p.nombre= nombre;
    p.precio= precio;
    p.imagen= imagen;

    this.servicioProducto.CrearProducto(p).subscribe((datos: ModelProducto) =>{
      alert("Producto Almacenado correctamente");
      this.router.navigate(["/administracion/buscar-producto"]);
    }, (error: any)=>{
      alert("Error almacenado el producto");
    })
  }
}
