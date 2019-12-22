import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './shared/modules/app-routing.module';
import { AppMaterialModule } from './shared/modules/app-material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WeatherTileComponent } from './favorites/weather-tile/weather-tile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageModule } from '@ngx-pwa/local-storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    WeatherDetailsComponent,
    FavoritesComponent,
    WeatherTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    StorageModule.forRoot({ IDBNoWrap: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
