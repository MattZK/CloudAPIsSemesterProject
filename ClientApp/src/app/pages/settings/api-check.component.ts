import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-api-check',
  template: `
    <div class="ui negative six wide column message" *ngIf="!check" [routerLink]="['/settings']">
      <div class="header">
        Please set API Credentials
      </div>
      <p>Go to the settings page</p>
    </div>
    <br>
  `
})
export class ApiCheckComponent implements OnInit {

  constructor(private data: DataService) { }

  public check: boolean;

  ngOnInit() {
    this.check = this.data.APICredentialsStatus();
  }

}
