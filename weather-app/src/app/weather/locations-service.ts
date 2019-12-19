import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IAutocompleteResult } from './autocomplete-result-model';

const BACKEND_URL = environment.apiUrl + 'locations/v1';
const API_KEY = environment.apiKey;


@Injectable({providedIn: 'root'})
export class LocationsService {

    private autocompleteResults: IAutocompleteResult[] = [];
    private autocompleteUpdate = new Subject<IAutocompleteResult[]>();
    private currentPosUpdate = new Subject<any>();

    constructor(
        private http: HttpClient,
        private router: Router
        ) { }


    getCurrentLocationByLatLong(lat: number, long: number) {
        const queryParams = `?apikey=${API_KEY}&q=${lat},${long}&toplevel=true`;
        if (!environment.production) {
            this.http.get<IAutocompleteResult[]>('assets/stubs/location/getLocationByLatLong')
            .subscribe((data) => {
                this.currentPosUpdate.next(data);
            });
        } else {
        this.http.get<IAutocompleteResult[]>(BACKEND_URL + '/cities/geoposition/search' + queryParams)
            .subscribe((data) => {
                this.currentPosUpdate.next(data);
            });
        }
    }

    getAutocompleteCitys(value: string) {
        const queryParams = `?apikey=${API_KEY}&q=${value}`;
        if (!environment.production) {
            this.http.get<IAutocompleteResult[]>('assets/stubs/location/autocomplete')
            .subscribe((data) => {
                this.autocompleteResults = data;
                this.autocompleteUpdate.next([...data]);
            });
        } else {
            this.http.get<IAutocompleteResult[]>(BACKEND_URL + '/cities/autocomplete' + queryParams)
            .subscribe((data) => {
                this.autocompleteResults = data;
                this.autocompleteUpdate.next([...data]);
            });
        }
    }

    getAutocompleteUpdateListener() {
        return this.autocompleteUpdate.asObservable();
    }
    getCurrentLocationUpdateListener() {
        return this.currentPosUpdate.asObservable();
    }
}
