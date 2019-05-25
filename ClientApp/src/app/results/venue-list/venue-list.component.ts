import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.sass']
})
export class VenueListComponent implements OnInit {
  @Input("venues") venues;

  constructor() { }

  ngOnInit() {
  }

}
