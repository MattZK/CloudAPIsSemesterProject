import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DevDataService } from 'src/app/dev-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.sass']
})
export class ExploreComponent implements OnInit {
  @ViewChild('query') exploreQuery;

  constructor(private dataService: DevDataService) { }

  ngOnInit() {
  }

  searchVenueByUserInput(event?: Event) {
    if(!this.exploreQuery.nativeElement.value) return;
    this.dataService.getExploreVenuesByLocation(this.exploreQuery.nativeElement.value).subscribe(data => {
      console.log(data);
    });
  }

}
