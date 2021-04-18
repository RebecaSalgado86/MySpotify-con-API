import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './artista/artista.component';
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: '/home'
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'artista/:id',
    component: ArtistaComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
