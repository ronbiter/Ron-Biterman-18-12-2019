import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './shared/services/theme-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  currentDarkTheme = false;

  constructor(private themeService: ThemeService) { }
  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme() {
    this.currentDarkTheme = !this.currentDarkTheme;
    this.themeService.setDarkTheme(this.currentDarkTheme);
  }
}
