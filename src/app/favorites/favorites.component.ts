import { Component, OnInit, OnDestroy } from '@angular/core';

import { FavoriteService } from '../shared/services/favorite-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less']
})
export class FavoritesComponent implements OnInit, OnDestroy{

  favoritesList = [];
  private favoriteSub: Subscription;

  constructor(public favoritesService: FavoriteService,
              private router: Router) { }

  ngOnInit() {
    this.favoritesList = this.favoritesService.getFavorites();
    this.favoriteSub = this.favoritesService.getFavUpdateListener()
    .subscribe((data) => {
        this.favoritesList = data;
    });
  }

  goToLocation(location) {
    this.router.navigate([ 'home/', location.key ]);
  }

  ngOnDestroy(): void {
    this.favoriteSub.unsubscribe();
  }

}
