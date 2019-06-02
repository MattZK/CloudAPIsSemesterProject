import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from 'src/app/types';

@Component({
  selector: 'app-favorites-detail',
  templateUrl: './favorites-detail.component.html',
  styleUrls: ['./favorites-detail.component.scss']
})
export class FavoritesDetailComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { }

  public favoritesList: Collection;

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.data.getFavoritesDetail(this.route.snapshot.params.id).subscribe(favoritelist => {
        this.favoritesList = favoritelist;
      });
    } else {
      this.router.navigate(['favorites']);
    }
  }

}
