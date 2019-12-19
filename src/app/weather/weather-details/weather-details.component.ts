import { IAutocompleteResult } from './../autocomplete-result-model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LocationsService } from './../locations-service';
import { WeatherService } from 'src/app/shared/services/weather-service';
import { IFiveDaysWeatherForecast } from 'src/app/shared/models/five-days-weather';
import { FormControl } from '@angular/forms';

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
  selectedLocationWeather: IFiveDaysWeatherForecast; // [TODO] change later to an interface
  private citiesSub: Subscription;
  private currentPosSub: Subscription;
  private weaterForecastSub: Subscription;
  isLoading = false;

  constructor(public locationService: LocationsService,
              public weatherService: WeatherService) { }

  ngOnInit() {

    if (navigator.geolocation) {
      const geoSuccess = (position) => {
          this.currentLatLong = position;
          this.locationService.getCurrentLocationByLatLong(position.coords.latitude, position.coords.longitude);
          this.currentPosSub = this.locationService.getCurrentLocationUpdateListener()
            .subscribe((data) => {
              this.currentLocation = data;
              this.selectedLocation = data;
              this.weatherService.getWeatherForCityFiveDays(this.selectedLocation.Key);
            });
      };
      navigator.geolocation.getCurrentPosition(geoSuccess);
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
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
  }

  onStartSearch() {
    if (this.searchValue.length > 2) {
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

  ngOnDestroy(): void {
    this.citiesSub.unsubscribe();
    this.currentPosSub.unsubscribe();
  }
}
