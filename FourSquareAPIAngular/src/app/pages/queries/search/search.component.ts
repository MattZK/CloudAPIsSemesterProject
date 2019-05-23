import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DevDataService } from 'src/app/dev-data.service';
import { FourSquareSearchResponse } from 'src/app/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @ViewChild('query') searchQuery;

  private venueList: FourSquareSearchResponse.Venue[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  searchVenueByUserInput(event?: Event) {
    if(!this.searchQuery.nativeElement.value) return;
    this.dataService.getVenuesBySearch(this.searchQuery.nativeElement.value, "Antwerp").subscribe(data => {
      this.venueList = data.response.venues;
      console.log(this.venueList);
    });
  }
}
