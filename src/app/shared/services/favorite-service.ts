import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageMap, JSONSchema } from '@ngx-pwa/local-storage';

import { IFavorite } from '../models/favorite.model';

const FAV_NAME = 'userFavoritesWeatherList';
const schema: JSONSchema = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            cityName: { type: 'string' },
            key: { type: 'string' }
        }
    }
};

@Injectable({providedIn: 'root'})
export class FavoriteService {

    private favorites: IFavorite[] = [];
    private favoriteUpdate = new Subject<IFavorite[]>();

    constructor(private storage: StorageMap) {
        this.storage.get<IFavorite[]>(FAV_NAME, schema).subscribe({
            next: (favs) => {
                this.favorites = favs ? favs : [];
                this.favoriteUpdate.next([...this.favorites]);
            },
            error: (error) => {
                this.favorites = [];
             }
        });
    }

    addToFavorites(name: string, key: string) {
        const fav: IFavorite = {
            cityName: name,
            key
        };
        this.favorites.push(fav);
        this.storage.set(FAV_NAME, this.favorites).subscribe(() => {});
        this.favoriteUpdate.next([...this.favorites]);
    }

    getFavorites() {
        return [...this.favorites];
    }

    removeFromFavorites(key: string) {
        let index = -1;
        for (let i = 0; i < this.favorites.length; i++) {
            if (this.favorites[i].key === key) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.storage.set(FAV_NAME, this.favorites).subscribe(() => {});
            this.favoriteUpdate.next([...this.favorites]);
        }
    }

    getFavUpdateListener() {
        return this.favoriteUpdate.asObservable();
    }

}
