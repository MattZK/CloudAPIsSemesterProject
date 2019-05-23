import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DevDataService } from 'src/app/dev-data.service';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.sass']
})
export class VenueDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DevDataService) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.dataService.getVenueById(this.route.snapshot.params.id).subscribe(venue => {
        console.log(venue);
      });
    } else {
      this.router.navigate(['home']);
    }
  }

}
