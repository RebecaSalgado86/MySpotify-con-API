import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../core/servicios/servicio.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  artista:any;
  canciones:any[];

  constructor(private activatedRoute: ActivatedRoute,
              private _spotifyService: ServicioService) { }

  ngOnInit() {
    this.activatedRoute.params
        .map( parametros => parametros['id'])
        .subscribe(id =>{
          this._spotifyService.getArtista( id )
            .subscribe( data => this.artista = data );
          this._spotifyService.getTop( id )
            .subscribe( data => this.canciones = data );
        })

  }

}
