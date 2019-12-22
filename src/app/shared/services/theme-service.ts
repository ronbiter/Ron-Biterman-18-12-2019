import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private darkTheme = new Subject<boolean>();
  isDarkTheme = this.darkTheme.asObservable();

  constructor(private storage: StorageMap) { }

  setDarkTheme(isDarkTheme: boolean): void {
    this.storage.set('IsDarkTheme', isDarkTheme).subscribe(() => {});
    this.darkTheme.next(isDarkTheme);
  }
}
