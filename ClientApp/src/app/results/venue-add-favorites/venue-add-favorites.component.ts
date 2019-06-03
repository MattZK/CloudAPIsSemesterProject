import { Component, OnInit } from '@angular/core';
import { Collection, FourSquareVenueResponse } from 'src/app/types';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venue-add-favorites',
  templateUrl: './venue-add-favorites.component.html',
  styleUrls: ['./venue-add-favorites.component.sass']
})
export class VenueAddFavoritesComponent implements OnInit {

  public favorites: Collection[];
  public venue: FourSquareVenueResponse.Venue;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.data.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
    this.data.getVenueById(this.route.snapshot.params.id).subscribe(venue => {
      this.venue = venue.response.venue;
    })
  }

  addToList(listid: number) {
    this.data.postPlace(listid, {
      name: this.venue.name,
      location: this.venue.location.city,
      fsqid: this.venue.id,
      icon: this.venue.bestPhoto.prefix + '300' + this.venue.bestPhoto.suffix
    }).subscribe(data => {
      this.router.navigate(['/favorites', listid]);
    });
  }

}
