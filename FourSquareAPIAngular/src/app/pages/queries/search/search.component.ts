import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService, FourSquareSearchResponse } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @ViewChild('query') searchQuery;

  private lastQuery: String;
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
