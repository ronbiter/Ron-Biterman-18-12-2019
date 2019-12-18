import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IAutocompleteResult } from './autocomplete-result-model';

const BACKEND_URL = environment.apiUrl + '/locations/v1';
const API_KEY = environment.apiKey;


@Injectable({providedIn: 'root'})
export class LocationsService {

    private autocompleteResults: IAutocompleteResult[] = [];
    private autocompleteUpdate = new Subject<IAutocompleteResult[]>();

    constructor(
        private http: HttpClient,
        private router: Router
        ) { }

    getAutocompleteCitys(value: string) {
        const queryParams = `?apikey=${API_KEY}&q=${value}`;
        this.http.get<IAutocompleteResult[]>(BACKEND_URL + 'cities/autocomplete' + queryParams)
            .subscribe((data) => {
                this.autocompleteResults = data;
                this.autocompleteUpdate.next([...data]);
            });
    }

}
