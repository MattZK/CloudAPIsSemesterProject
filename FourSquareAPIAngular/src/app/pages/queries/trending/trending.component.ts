import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DevDataService } from 'src/app/dev-data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.sass']
})
export class TrendingComponent implements OnInit {
  @ViewChild("locationBtn") locationButton;
  @ViewChild("query") queryField;

  constructor(private dataService: DevDataService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      this.locationButton.nativeElement.classList.remove("disabled");
    }
  }

  searchVenueByUserLocation(event?: Event) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.dataService.getTrendingVenuesByLocationCord(position.coords.latitude, position.coords.longitude).subscribe(data => {
          console.log(data);
        });
      });
    }
  }

  searchVenueByUserInput(event?: Event) {
    if (!this.queryField.nativeElement.value) return;
    this.dataService.getTrendingVenuesByLocation(this.queryField.nativeElement.value).subscribe(data => {
      console.log(data);
    });
  }

}
