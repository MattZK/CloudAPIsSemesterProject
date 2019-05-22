import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @ViewChild('query') searchQuery;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  search() {
    if(!this.searchQuery.nativeElement.value) return;
    this.dataService.getVenuesBySearch(this.searchQuery.nativeElement.value, "Antwerp").subscribe(data => {
      console.log(data);
    });
  }
}
