import { ModeloProducto } from './../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url="http://127.0.0.1:3000";
  token: String = '';

  constructor(private http: HttpClient,
    private seguirdadServicios: SeguridadService) { 

      this.token = this.seguirdadServicios.ObtenerToken();
    }

    CrearProducto(producto: ModeloProducto): Observable<ModeloProducto>{
      return this.http.post<ModeloProducto>(`${this.url}/productos`, producto,{
        headers: new HttpHeaders({
          'Authorization':`Bearer ${this.token}`
        })
      })
    }
    
}
