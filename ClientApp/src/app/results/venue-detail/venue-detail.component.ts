import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FourSquareVenueResponse } from 'src/app/types';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.sass']
})
export class VenueDetailComponent implements OnInit {
  public venue: FourSquareVenueResponse.Venue;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.data.getVenueById(this.route.snapshot.params.id).subscribe(response => {
        this.venue = response.response.venue;
        console.log(this.venue);
      });
    } else {
      this.router.navigate(['home']);
    }
  }

  addToList() {
    this.data.postPlace(1, {
      name: this.venue.name,
      location: this.venue.location.city,
      fsqid: this.venue.id,
      icon: this.venue.bestPhoto.prefix + '300' + this.venue.bestPhoto.suffix
    }).subscribe(data => {});
  }
}
