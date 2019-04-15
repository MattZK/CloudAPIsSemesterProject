import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_CLIENT: string;
  private API_SECRET: string;

  constructor() {
    this.getAPICredentials();
  }

  public APIKeyStatus() {
    if (this.API_CLIENT && this.API_SECRET)
      return true;
    return false;
  }

  public setAPICredentials(CLIENTID: string, CLIENTSECRET: string) {
    if (CLIENTID && CLIENTSECRET) {
      localStorage.setItem('API_CLIENT', CLIENTID);
      localStorage.setItem('API_SECRET', CLIENTSECRET);
      this.getAPICredentials();
      return true;
    }
    return false;
  }

  private getAPICredentials() {
    this.API_CLIENT = localStorage.getItem('API_CLIENT');
    this.API_SECRET = localStorage.getItem('API_SECRET');
  }
}
