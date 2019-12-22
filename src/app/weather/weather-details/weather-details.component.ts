import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IAutocompleteResult } from '../../shared/models/autocomplete-result.model';
import { IFiveDaysWeatherForecast } from 'src/app/shared/models/five-days-weather.model';

import { LocationsService } from '../../shared/services/locations-service';
import { WeatherService } from '../../shared/services/weather-service';
import { FavoriteService } from '../../shared/services/favorite-service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.less']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {

  searchValue = '';
  cities: IAutocompleteResult[] = [];
  currentLatLong: {};
  currentLocation: any;
  selectedLocation: any;
  selectedLocationWeather: IFiveDaysWeatherForecast;
  private citiesSub: Subscription;
  private currentPosSub: Subscription;
  private weaterForecastSub: Subscription;
  isLoading = false;

  constructor(public locationService: LocationsService,
              public weatherService: WeatherService,
              public favoritesService: FavoriteService) { }

  ngOnInit() {

    if (navigator.geolocation) {
      const geoSuccess = (position) => {
          this.currentLatLong = position;
          this.locationService.getCurrentLocationByLatLong(position.coords.latitude, position.coords.longitude);
      };
      const geoFail = () => {
        this.getDefaultLocation();
      };
      navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
      this.getDefaultLocation();
    }

    this.citiesSub = this.locationService.getAutocompleteUpdateListener()
      .subscribe((data) => {
          this.isLoading = false;
          this.cities = data;
      });

    this.weaterForecastSub = this.weatherService.getFiveDaysForecastUpdateListener()
      .subscribe((data) => {
          this.isLoading = false;
          this.selectedLocationWeather = data;
      });

    this.currentPosSub = this.locationService.getCurrentLocationUpdateListener()
      .subscribe((data) => {
        this.currentLocation = data;
        this.selectedLocation = data;
        this.weatherService.getWeatherForCityFiveDays(this.selectedLocation.Key);
      });
  }

  getDefaultLocation() {
    console.log('getting default location');
    const lat = 32.109333;
    const long = 34.855499;
    this.locationService.getCurrentLocationByLatLong(lat, long);
  }

  onStartSearch() {
    if (this.searchValue.length >= 2) {
      this.isLoading = true;
      this.locationService.getAutocompleteCitys(this.searchValue);
    } else {
      this.cities = [];
    }
  }

  onSelectCity($event) {
    console.log($event);
    this.searchValue = $event.option.value.LocalizedName;
    this.selectedLocation = $event.option.value;
    this.weatherService.getWeatherForCityFiveDays(this.selectedLocation.Key);
  }

  isLocationInFavs() {
    const favs = this.favoritesService.getFavorites();
    for (const fav of favs) {
      if (fav.key === this.selectedLocation.Key) {
        return true;
      }
    }
    return false;
  }

  addLocationToFavorite() {
    this.favoritesService.addToFavorites(this.selectedLocation.LocalizedName, this.selectedLocation.Key);
  }
  removeLocationToFavorite() {
    this.favoritesService.removeFromFavorites(this.selectedLocation.Key);
  }

  ngOnDestroy(): void {
    this.citiesSub.unsubscribe();
    this.currentPosSub.unsubscribe();
  }
}
