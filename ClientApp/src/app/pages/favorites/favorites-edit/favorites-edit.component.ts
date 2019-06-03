import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Collection } from 'src/app/types';

@Component({
  selector: 'app-favorites-edit',
  templateUrl: './favorites-edit.component.html',
  styleUrls: ['./favorites-edit.component.sass']
})
export class FavoritesEditComponent implements OnInit {
  @ViewChild('name') name;
  @ViewChild('description') description;

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }
  
  public favorite: Collection;

  ngOnInit() {
    if(this.route.snapshot.params.id) {
      this.data.getFavoritesDetail(this.route.snapshot.params.id).subscribe(favorite => {
        this.favorite = favorite;
      });
    }
  }

  submit() {
    if(this.route.snapshot.params.id) {
      this.favorite.name = this.name.nativeElement.value;
      this.favorite.description = this.description.nativeElement.value;
      this.data.putFavorites(this.favorite).subscribe(data => {
        this.router.navigate(['/favorites']);
      });
    } else {
      this.favorite = {
        name: this.name.nativeElement.value,
        description: this.description.nativeElement.value
      }
      this.data.postFavorites(this.favorite).subscribe(data => {
        this.router.navigate(['/favorites']);
      });
    }
  }

}
