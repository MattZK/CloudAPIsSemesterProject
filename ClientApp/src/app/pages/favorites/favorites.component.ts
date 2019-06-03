import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Collection } from 'src/app/types';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {

  constructor(private data: DataService) { }

  public favorites: Collection[];

  ngOnInit() {
    this.data.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }

  delete(id: number) {
    this.data.deleteFavorites(id).subscribe(data => {});
  }

}
