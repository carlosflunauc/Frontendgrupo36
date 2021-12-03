import { ModeloIdentificar } from './../../modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navb-navegacion',
  templateUrl: './navb-navegacion.component.html',
  styleUrls: ['./navb-navegacion.component.css']
})
export class NavbNavegacionComponent implements OnInit {

  seInicioSesion: boolean= false;

  subs: Subscription= new Subscription();

  constructor(private SeguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.SeguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
      this.seInicioSesion=datos.siestaIdentificado;
    })
  }

}
