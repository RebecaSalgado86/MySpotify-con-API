import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = '';

  artists = [
    {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx"
        },
        "followers": {
            "href": null,
            "total": 2583641
        },
        "genres": [
            "canadian electronic",
            "edm",
            "electro house",
            "pop dance",
            "progressive house"
        ],
        "href": "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx",
        "id": "2CIMQHirSU0MQqyYHq0eOx",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/00de6379faa5c8b1006fe858cea1b2916b90352b",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/88ff724abdd8347723397d535971219d3155ad46",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/aadbfa4db66928b01332f4bc07825e2deaaf814f",
                "width": 160
            }
        ],
        "name": "deadmau5",
        "popularity": 71,
        "type": "artist",
        "uri": "spotify:artist:2CIMQHirSU0MQqyYHq0eOx"
    }]
  
    setValue() {
        this.title = 'algo';
      }

}
