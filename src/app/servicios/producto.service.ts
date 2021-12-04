import { ModelProducto } from './../modelos/producto.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

   ObtenerRegistrosPorId(id: string): Observable<ModelProducto>{
    return this.http.get<ModelProducto>(`${this.url}/productos/${id}`);
   }

   CrearProducto(producto: ModelProducto): Observable<ModelProducto>{
     return this.http.post<ModelProducto>(`${this.url}/productos`, producto,{
       headers: new HttpHeaders({
         'Authorization': `Bearer ${this.token}`
       })
     })
   }

   ActualizarProducto(producto: ModelProducto): Observable<ModelProducto>{
     return this.http.put<ModelProducto>(`${this.url}/productos/${producto.id}`, producto,{
        headers: new HttpHeaders({
          'Authorization': `Bearer${this.token}`
        })
     })
   }
   
   EliminarProducto(id: string): Observable<any>{
     return this.http.delete(`${this.url}/productos/${id}`,{
       headers: new HttpHeaders({
        'Authorization': `Bearer${this.token}`
       })
     })
   }
}