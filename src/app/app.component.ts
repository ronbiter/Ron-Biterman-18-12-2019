import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './shared/services/theme-service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  currentDarkTheme = false;

  constructor(private themeService: ThemeService,
              private storage: StorageMap) { }

  ngOnInit() {
    this.storage.get('IsDarkTheme', { type: 'boolean' })
      .subscribe((val) => {
        this.currentDarkTheme = val;
        this.themeService.setDarkTheme(this.currentDarkTheme);
      });
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme() {
    this.currentDarkTheme = !this.currentDarkTheme;
    this.themeService.setDarkTheme(this.currentDarkTheme);
  }
}
