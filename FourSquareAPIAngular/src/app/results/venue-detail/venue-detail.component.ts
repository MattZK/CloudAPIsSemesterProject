import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.sass']
})
export class VenueDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

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
