import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  @ViewChild('fsqclientid') FSQClientIDField;
  @ViewChild('fsqclientsecret') FSQClientSecretField;

  private APICredentialsStatus: Boolean

  constructor(private dataService: DataService) {
    this.APICredentialsStatus = this.dataService.APICredentialsStatus();
  }

  ngOnInit() {
    this.FSQClientIDField.nativeElement.value = this.dataService.API_CLIENT;
    this.FSQClientSecretField.nativeElement.value = this.dataService.API_SECRET;
  }

  save() {
    this.dataService.setAPICredentials(this.FSQClientIDField.nativeElement.value, this.FSQClientSecretField.nativeElement.value);
    this.APICredentialsStatus = this.dataService.APICredentialsStatus();
  }

}
