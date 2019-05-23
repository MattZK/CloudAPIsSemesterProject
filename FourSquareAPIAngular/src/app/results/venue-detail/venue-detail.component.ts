import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevDataService } from 'src/app/dev-data.service';
import { FourSquareVenueResponse } from 'src/app/types';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.sass']
})
export class VenueDetailComponent implements OnInit {
  private venue: FourSquareVenueResponse.Venue;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.dataService.getVenueById(this.route.snapshot.params.id).subscribe(response => {
        this.venue = response.response.venue;
        console.log(this.venue);
      });
    } else {
      this.router.navigate(['home']);
    }
  }

}
