import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FourSquareExploreResponse } from 'src/app/types';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.sass']
})
export class ExploreComponent implements OnInit {
  @ViewChild('query') exploreQuery;
  @ViewChild("locationBtn") locationButton;

  public venueList: FourSquareExploreResponse.Venue[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      this.locationButton.nativeElement.classList.remove("disabled");
    }
  }

  searchVenueByUserInput(event?: Event) {
    if(!this.exploreQuery.nativeElement.value) return;
    this.dataService.getExploreVenuesByLocation(this.exploreQuery.nativeElement.value).subscribe(data => {
      this.venueList = [];
      data.response.groups[0].items.forEach(item => {
        this.venueList.push(item.venue);
      });
    });
  }

  searchVenueByUserLocation(event?: Event) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.dataService.getExploreVenuesByLocationCord(position.coords.latitude, position.coords.longitude).subscribe(data => {
          this.venueList = [];
          data.response.groups[0].items.forEach(item => {
            this.venueList.push(item.venue);
          });
        });
      });
    }
  }

}
