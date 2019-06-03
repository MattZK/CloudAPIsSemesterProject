import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.getJWTCredentials();
  }

  private JWT: string;

  public getJWTCredentialsStatus() {
    if (this.JWT)
      return true;
    return false;
  }

  public setJWTCredentials(token: string) {
    if (token) {
      localStorage.setItem('JWT', token);
      this.getJWTCredentials();
      return true;
    }
    return false;
  }

  private getJWTCredentials() {
    this.JWT = localStorage.getItem('JWT');
  }

  public getToken() {
    return this.JWT;
  }

  public removeJWTCredentials() {
    localStorage.removeItem('JWT');
  }

  getMSWebToken() {
    const params = new HttpParams()
      .set('client_id', environment.microsoft.client)
      .set('response_type', 'id_token')
      .set('redirect_uri', window.location.href)
      .set('scope', 'openid email')
      .set('nonce', '123456');
      window.location.href = `https://login.microsoftonline.com/${environment.microsoft.tenant}/oauth2/v2.0/authorize?` + params.toString();
  }
}