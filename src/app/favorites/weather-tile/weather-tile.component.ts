import { Component, OnInit, Input } from '@angular/core';

import { IFavorite } from '../../shared/models/favorite.model';
import { WeatherService } from '../../shared/services/weather-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.less']
})
export class WeatherTileComponent implements OnInit {

  @Input() location: IFavorite;
  locationWeather: any;
  private weaterForecastSub: Subscription;

  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentConditions(this.location.key);
    this.weaterForecastSub = this.weatherService.getCurretnConditionsUpdateListener()
    .subscribe((data) => {
        if (data.Key === this.location.key) {
          this.locationWeather = data;
        }
    });
  }

}
