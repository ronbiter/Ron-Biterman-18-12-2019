import { Component, OnInit, Input } from '@angular/core';

import { IFavorite } from '../../shared/models/favorite.model';
import { WeatherService } from '../../shared/services/weather-service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.less']
})
export class WeatherTileComponent implements OnInit {

  @Input() location: IFavorite;
  locationWeather: any;
  private weaterForecastSub: Subscription;

  constructor(public weatherService: WeatherService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.weatherService.getCurrentConditions(this.location.key);
    this.weaterForecastSub = this.weatherService.getCurretnConditionsUpdateListener()
    .subscribe((data) => {
        if (data.Key === this.location.key) {
          this.locationWeather = data;
        }
    }, error => {
      this.openErrorSnackbar(error.Message);
    });
  }

  openErrorSnackbar(msg?: string) {
    const errorMsg = msg && msg.length > 0 ? msg : 'Oops, something went wrongs';
    this.snackbar.open(errorMsg, 'dismiss', {
      duration: 4000,
      panelClass: 'shake-horizontal'
    });
  }

}
