import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather-service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.less']
})
export class SidenavListComponent implements OnInit {

  @Output() CloseSidenav = new EventEmitter();
  @Output() ToggleTheme = new EventEmitter();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  toggleMetric() {
    this.weatherService.toggleMetricUnits();
    this.CloseSidenav.emit();
  }

  onToggleTheme() {
    this.ToggleTheme.emit();
  }

  onClose() {
    this.CloseSidenav.emit();
  }

}
