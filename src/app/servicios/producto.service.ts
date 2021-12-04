import { ModelProducto } from './../modelos/producto.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='http://127.0.0.1:3000';

  token: String='';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token =this.seguridadServicio.ObtenerToken();
   }

   ObtenerRegistros(): Observable<ModelProducto[]>{
     return this.http.get<ModelProducto[]>(`${this.url}/productos`);
   }
}
