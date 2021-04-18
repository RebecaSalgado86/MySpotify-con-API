import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ArtistaComponent } from './artista/artista.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ServicioService} from './core/servicios/servicio.service'
import { DomseguroPipe } from './pipes/domseguro.pipe'
import { SinfotoPipe } from './pipes/sinfoto.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    SearchComponent,
    HomeComponent,
    DomseguroPipe,
    SinfotoPipe
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    HttpModule,
    
    
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
