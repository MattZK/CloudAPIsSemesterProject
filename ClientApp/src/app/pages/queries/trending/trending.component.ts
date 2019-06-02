import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FourSquareTrendingResponse } from 'src/app/types';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.sass']
})
export class TrendingComponent implements OnInit {
  @ViewChild("locationBtn") locationButton;
  @ViewChild("query") queryField;

  public venueList: FourSquareTrendingResponse.Venue[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      this.locationButton.nativeElement.classList.remove("disabled");
    }
  }

  searchVenueByUserLocation(event?: Event) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.dataService.getTrendingVenuesByLocationCord(position.coords.latitude, position.coords.longitude).subscribe(data => {
          this.venueList = data.response.venues;
        });
      });
    }
  }

  searchVenueByUserInput(event?: Event) {
    if (!this.queryField.nativeElement.value) return;
    this.dataService.getTrendingVenuesByLocation(this.queryField.nativeElement.value).subscribe(data => {
      this.venueList = data.response.venues;
    });
  }

}
