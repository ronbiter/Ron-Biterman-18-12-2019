import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() ToggleTheme = new EventEmitter<void>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onToggleTheme() {
    this.ToggleTheme.emit();
  }

  toggleMetric() {
    this.weatherService.toggleMetricUnits();
  }

}
