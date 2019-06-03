import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  @ViewChild('fsqclientid') FSQClientIDField;
  @ViewChild('fsqclientsecret') FSQClientSecretField;

  private _APICredentialsStatus: Boolean
  get APICredentialsStatus () {
    return this._APICredentialsStatus;
  }

  constructor(private dataService: DataService) {
    this._APICredentialsStatus = this.dataService.APICredentialsStatus();
  }

  ngOnInit() {
    this.FSQClientIDField.nativeElement.value = this.dataService.API_CLIENT;
    this.FSQClientSecretField.nativeElement.value = this.dataService.API_SECRET;
  }

  save() {
    this.dataService.setAPICredentials(this.FSQClientIDField.nativeElement.value, this.FSQClientSecretField.nativeElement.value);
    this._APICredentialsStatus = this.dataService.APICredentialsStatus();
  }

}
