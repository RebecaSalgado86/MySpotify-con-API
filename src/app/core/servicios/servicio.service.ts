import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root',
})


export class ServicioService {

  artistas:any [] = []; //arreglo de artistas
  urlBusqueda:string = "https://api.spotify.com/v1/search"; // endpoint servicio search
  urlArtista:string = "https://api.spotify.com/v1/artists";
  //cambiar token dado que se quema 
  token:any = 'Bearer BQDeVyMKfG7XAvoYN78YxR74EhWEBlB74NCbblOEuHri7glwsVxIx-lgz55uIZdrJrPRwdFn4nwNSMx3oqGhFDRGaiaTFW_PkcR-MuV_qTbzFUPSGSLsJReDT9sRRgRkfgz-rYqR-efl7S60WsAw2r2Q2ynQmVjXtTKlILq_cC5JdLl4hzHO5XwpBCqYGSMvtU5Gjiul987yLacPbtohJipqD5mhhvAYyZ1gvChrEU12i6xUoc_E2Jmqdlqpm-tkGmy3AVCUw39D17jwHwJbAeIWdkbWn9zl4RS20enM';

  constructor(private http: Http) { }

  getArtistas(busqueda:string){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = `?q=${ busqueda }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
                  .map( response => {
                    this.artistas = response.json().artists.items;
                    console.log(response.json().artists.items);

                    return response.json().artists.items;
                  })



  }

  getArtista(id:string){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
                  .map( response => {
                    console.log(response.json());
                    return response.json();
                  })

  }

  getTop(id:string){

    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = `/${ id }/top-tracks?country=CL`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
                  .map( response => {
                    console.log(response.json().tracks);
                    return response.json().tracks;
                  })

  }

}
