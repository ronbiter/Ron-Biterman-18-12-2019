import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { IAutocompleteResult } from '../../shared/models/autocomplete-result.model';
import { IFiveDaysWeatherForecast } from 'src/app/shared/models/five-days-weather.model';

import { LocationsService } from '../../shared/services/locations-service';
import { WeatherService } from '../../shared/services/weather-service';
import { FavoriteService } from '../../shared/services/favorite-service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, debounceTime } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.less']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {

  searchSubject: Subject<string> = new Subject();
  searchValue = '';
  cities: IAutocompleteResult[] = [];
  currentLatLong: {};
  currentLocation: any;
  selectedLocation: any;
  locationFromRoute: any;
  selectedLocationWeather: IFiveDaysWeatherForecast;
  private citiesSub: Subscription;
  private currentPosSub: Subscription;
  private weaterForecastSub: Subscription;
  isLoading = true;
  isSearching = false;

  constructor(public locationService: LocationsService,
              public weatherService: WeatherService,
              public favoritesService: FavoriteService,
              private route: ActivatedRoute,
              private snackbar: MatSnackBar) { }

  ngOnInit() {

    this.locationFromRoute = this.route.snapshot.paramMap.get('key');

    if (this.locationFromRoute) {
      this.locationService.getCurrentLocationByKey(this.locationFromRoute);
    } else if (navigator.geolocation) {
      const geoSuccess = (position) => {
          this.currentLatLong = position;
          this.locationService.getCurrentLocationByLatLong(position.coords.latitude, position.coords.longitude);
      };
      const geoFail = () => {
        this.getDefaultLocation();
      };
      navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
    } else {
      const msg = 'Geolocation is not supported for this Browser/OS.';
      this.openErrorSnackbar(msg);
      this.getDefaultLocation();
    }

    this.citiesSub = this.locationService.getAutocompleteUpdateListener()
      .subscribe((data) => {
          this.isSearching = false;
          this.cities = data;
      }, error => {
        this.openErrorSnackbar(error.Message);
        this.isLoading = false;
      });

    this.weaterForecastSub = this.weatherService.getFiveDaysForecastUpdateListener()
      .subscribe((data) => {
          this.isLoading = false;
          this.selectedLocationWeather = data;
      }, error => {
        this.openErrorSnackbar(error.Message);
        this.isLoading = false;
      });

    this.currentPosSub = this.locationService.getCurrentLocationUpdateListener()
      .subscribe((data) => {
        this.currentLocation = data;
        this.selectedLocation = data;
        this.weatherService.getWeatherForCityFiveDays(this.selectedLocation.Key);
      }, error => {
        this.openErrorSnackbar(error.Message);
        this.isLoading = false;
      });

    this.searchSubject
      .pipe(debounceTime(700))
      .subscribe(() => {
        if (this.searchValue.length >= 2) {
          this.isSearching = true;
          this.locationService.getAutocompleteCitys(this.searchValue);
        } else {
          this.cities = [];
        }
        }
      );
  }

  getDefaultLocation() {
    console.log('getting default location');
    const lat = 32.109333;
    const long = 34.855499;
    this.locationService.getCurrentLocationByLatLong(lat, long);
  }

  onStartSearch() {
    this.searchSubject.next();
  }

  onSelectCity($event) {
    console.log($event);
    this.searchValue = $event.option.value.LocalizedName;
    this.selectedLocation = $event.option.value;
    this.weatherService.getWeatherForCityFiveDays(this.selectedLocation.Key);
  }

  isLocationInFavs() {
    if (!this.selectedLocation) { return false; }
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

  openErrorSnackbar(msg?: string) {
    const errorMsg = msg && msg.length > 0 ? msg : 'Oops, something went wrong';
    this.snackbar.open(errorMsg, 'dismiss', {
      duration: 4000,
      panelClass: 'shake-horizontal'
    });
  }

  ngOnDestroy(): void {
    this.citiesSub.unsubscribe();
    this.currentPosSub.unsubscribe();
    this.weaterForecastSub.unsubscribe();
  }
}
