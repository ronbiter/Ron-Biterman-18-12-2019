import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageMap } from '@ngx-pwa/local-storage';

import { IFiveDaysWeatherForecast } from '../models/five-days-weather.model';

const BACKEND_URL = environment.apiUrl + '';
const API_KEY = environment.apiKey;


@Injectable({providedIn: 'root'})
export class WeatherService {

    private isMetric = true;
    private fiveDaysForecastUpdate = new Subject<IFiveDaysWeatherForecast>();
    private curretnConditionsUpdate = new Subject<any>();

    constructor(
        private http: HttpClient,
        private router: Router,
        private storage: StorageMap
        ) {
            this.storage.get('IsMetric', { type: 'boolean' }).subscribe({
                next: (data) => {
                    /* Called if data is valid or `undefined` */
                    this.isMetric = data ? data : false;
                },
                error: (error) => {
                    /* Called if data is invalid */
                    this.isMetric = true;
                 }
            });
         }

    get IsMetric() {
        return this.isMetric;
    }

    toggleMetricUnits() {
        this.isMetric = !this.isMetric;
        this.storage.set('IsMetric', this.isMetric).subscribe(() => {});
        window.location.reload();
    }

    getCurrentConditions(key: string) {
        const queryParams = `?apikey=${API_KEY}&metric=${this.isMetric}`;
        if (!environment.production) {
            this.http.get<any>('assets/stubs/currentconditions/currentconditions')
            .subscribe((data) => {
                if (data && data.length > 0) {
                    data[0].Key = key;
                    this.curretnConditionsUpdate.next(data[0]);
                } else {
                    const error = {
                        Message: 'currentconditions api error'
                    };
                    this.curretnConditionsUpdate.error(error);
                }
            }, error => {
                this.curretnConditionsUpdate.error(error);
            });
        } else {
            this.http.get<any>(BACKEND_URL + 'currentconditions/v1/' + key + queryParams)
            .subscribe((data) => {
                if (data && data.length > 0) {
                    data[0].Key = key;
                    this.curretnConditionsUpdate.next(data[0]);
                } else {
                    const error = {
                        Message: 'currentconditions api error'
                    };
                    this.curretnConditionsUpdate.error(error);
                }
            }, error => {
                this.curretnConditionsUpdate.error(error);
            });
        }
    }

    getWeatherForCityFiveDays(key: string) {
        const queryParams = `?apikey=${API_KEY}&metric=${this.isMetric}`;
        if (!environment.production) {
            this.http.get<IFiveDaysWeatherForecast>('assets/stubs/forecast/fiveDay')
            .subscribe((data) => {
                if (data && data.DailyForecasts) {
                    this.fiveDaysForecastUpdate.next(data);
                } else {
                    const error = {
                        Message: 'forecasts/v1/daily/5day api error'
                    };
                    this.fiveDaysForecastUpdate.error(error);
                }
            }, error => {
                this.fiveDaysForecastUpdate.error(error);
            });
        } else {
            this.http.get<IFiveDaysWeatherForecast>(BACKEND_URL + 'forecasts/v1/daily/5day/' + key + queryParams)
            .subscribe((data) => {
                if (data && data.DailyForecasts) {
                    this.fiveDaysForecastUpdate.next(data);
                } else {
                    const error = {
                        Message: 'forecasts/v1/daily/5day api error'
                    };
                    this.fiveDaysForecastUpdate.error(error);
                }
            }, error => {
                this.fiveDaysForecastUpdate.error(error);
            });
        }
    }

    getFiveDaysForecastUpdateListener() {
        return this.fiveDaysForecastUpdate.asObservable();
    }

    getCurretnConditionsUpdateListener() {
        return this.curretnConditionsUpdate.asObservable();
    }

}
