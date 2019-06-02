import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Collection } from 'src/app/types';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public favorites: Collection[];

  ngOnInit() {
    this.dataService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }

}
