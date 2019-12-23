import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IAutocompleteResult } from '../models/autocomplete-result.model';

const BACKEND_URL = environment.apiUrl + 'locations/v1';
const API_KEY = environment.apiKey;


@Injectable({providedIn: 'root'})
export class LocationsService {

    private autocompleteUpdate = new Subject<IAutocompleteResult[]>();
    private currentPosUpdate = new Subject<any>();

    constructor(private http: HttpClient) { }


    getCurrentLocationByLatLong(lat: number, long: number) {
        const queryParams = `?apikey=${API_KEY}&q=${lat},${long}&toplevel=true`;
        if (!environment.production) {
            this.http.get<IAutocompleteResult>('assets/stubs/location/getLocationByLatLong')
            .subscribe((data) => {
                if (data && data.Key) {
                    this.currentPosUpdate.next(data);
                } else {
                    const error = {
                        Message: 'cities/geoposition/search api error'
                    };
                    this.currentPosUpdate.error(error);
                }
            }, error => {
                this.currentPosUpdate.error(error);

            });
        } else {
        this.http.get<IAutocompleteResult>(BACKEND_URL + '/cities/geoposition/search' + queryParams)
            .subscribe((data) => {
                this.currentPosUpdate.next(data);
                if (data && data.Key) {
                    this.currentPosUpdate.next(data);
                } else {
                    const error = {
                        Message: 'cities/geoposition/search api error'
                    };
                    this.currentPosUpdate.error(error);
                }
            }, error => {
                this.currentPosUpdate.error(error);
            });
        }
    }

    getCurrentLocationByKey(key: string) {
        const queryParams = `?apikey=${API_KEY}`;
        if (!environment.production) {
            this.http.get<IAutocompleteResult>('assets/stubs/location/location')
            .subscribe((data) => {
                if (data && data.Key) {
                    this.currentPosUpdate.next(data);
                } else {
                    const error = {
                        Message: 'location api error'
                    };
                    this.currentPosUpdate.error(error);
                }
            }, error => {
                this.currentPosUpdate.error(error);
            });
        } else {
        this.http.get<IAutocompleteResult>(BACKEND_URL + '/' + key + queryParams)
            .subscribe((data) => {
                if (data && data.Key) {
                    this.currentPosUpdate.next(data);
                } else {
                    const error = {
                        Message: 'location api error'
                    };
                    this.currentPosUpdate.error(error);
                }
            }, error => {
                this.currentPosUpdate.error(error);

            });
        }
    }

    getAutocompleteCitys(value: string) {
        const queryParams = `?apikey=${API_KEY}&q=${value}`;
        if (!environment.production) {
            this.http.get<IAutocompleteResult[]>('assets/stubs/location/autocomplete')
            .subscribe((data) => {
                if (data && data.length >= 0) {
                    this.autocompleteUpdate.next([...data]);
                } else {
                    const error = {
                        Message: 'cities/autocomplete api error'
                    };
                    this.autocompleteUpdate.error(error);
                }
            }, error => {
                this.autocompleteUpdate.error(error);
            });
        } else {
            this.http.get<IAutocompleteResult[]>(BACKEND_URL + '/cities/autocomplete' + queryParams)
            .subscribe((data) => {
                if (data && data.length >= 0) {
                    this.autocompleteUpdate.next([...data]);
                } else {
                    const error = {
                        Message: 'cities/autocomplete api error'
                    };
                    this.autocompleteUpdate.error(error);
                }
            }, error => {
                this.autocompleteUpdate.error(error);
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
