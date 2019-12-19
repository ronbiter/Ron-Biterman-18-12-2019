import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IFiveDaysWeatherForecast } from '../models/five-days-weather';

const BACKEND_URL = environment.apiUrl + 'forecasts/v1';
const API_KEY = environment.apiKey;


@Injectable({providedIn: 'root'})
export class WeatherService {

    private isMetric = true;
    private fiveDaysForecastUpdate = new Subject<IFiveDaysWeatherForecast>();

    constructor(
        private http: HttpClient,
        private router: Router
        ) { }

    toggleMetricUnits() {
        this.isMetric = !this.isMetric;
    }

    getCurrentWeather(key: string) {
        
    }

    getWeatherForCityFiveDays(key: string) {
        const queryParams = `?apikey=${API_KEY}&metric=${this.isMetric}`;
        if (!environment.production) {
            this.http.get<IFiveDaysWeatherForecast>('assets/stubs/forecast/fiveDay').subscribe((data) => {
                // this.autocompleteResults = data;
                this.fiveDaysForecastUpdate.next(data);
            });
        } else {
            this.http.get<IFiveDaysWeatherForecast>(BACKEND_URL + '/daily/5day/' + key + queryParams)
            .subscribe((data) => {
                // this.autocompleteResults = data;
                this.fiveDaysForecastUpdate.next(data);
            });
        }
    }

    getFiveDaysForecastUpdateListener() {
        return this.fiveDaysForecastUpdate.asObservable();
    }

}
