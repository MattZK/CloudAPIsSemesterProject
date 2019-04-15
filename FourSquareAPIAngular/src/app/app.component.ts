import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('ClientID') ClientIDElement;
  @ViewChild('ClientSecret') ClientSecretElement;

  private APIKeyState: Boolean;

  constructor(private dataService: DataService) {
    this.APIKeyState = this.getAPICredentialsState();
  }

  setAPICredentials(event: Event) {
    if (this.dataService.setAPICredentials(this.ClientIDElement.nativeElement.value, this.ClientSecretElement.nativeElement.value))
      this.getAPICredentialsState();
  }

  getAPICredentialsState() {
    return this.APIKeyState = this.dataService.APIKeyStatus();
  }
}
