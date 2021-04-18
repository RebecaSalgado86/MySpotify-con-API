import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../core/servicios/servicio.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  termino:string = "";

  constructor(public _spotifyService: ServicioService) { }

  ngOnInit() {
  }

  buscarArtistas(){
    this._spotifyService.getArtistas(this.termino).subscribe();
  }

}
