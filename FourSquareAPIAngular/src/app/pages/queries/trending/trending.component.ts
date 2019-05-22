import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.sass']
})
export class TrendingComponent implements OnInit {
  @ViewChild("locationBtn") locationButton;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      this.locationButton.nativeElement.classList.remove("disabled");
    }
  }

  location() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.dataService.getExploreVenuesByLocationCord(position.coords.latitude, position.coords.longitude).subscribe(data => {
          console.log(data);
        })
      });
    }
  }

}
