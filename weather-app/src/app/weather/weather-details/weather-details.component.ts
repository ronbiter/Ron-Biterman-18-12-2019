import { IAutocompleteResult } from './../autocomplete-result-model';
import { Component, OnInit } from '@angular/core';

import { LocationsService } from './../locations-service';
import { WeatherService } from 'src/app/shared/services/weather-service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.less']
})
export class WeatherDetailsComponent implements OnInit {

  cities: IAutocompleteResult[] = [];

  constructor(public locationService: LocationsService,
              public weatherService: WeatherService) { }

  ngOnInit() {
  }

}
