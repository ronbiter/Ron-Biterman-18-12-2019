import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;


@Injectable({providedIn: 'root'})
export class WeatherService {

    constructor(
        private http: HttpClient,
        private router: Router
        ) { }

    getWeatherForCity() {

    }

}