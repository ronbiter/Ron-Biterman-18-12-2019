import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherDetailsComponent } from './../../weather/weather-details/weather-details.component';
import { FavoritesComponent } from 'src/app/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: WeatherDetailsComponent },
  { path: 'home/:key', component: WeatherDetailsComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
