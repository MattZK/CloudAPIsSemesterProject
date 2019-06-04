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

  /**
   * Check if JWT is set. Does not check validity of the token nor if it has expired
   * 
   * @returns  {boolean} JWT Set
   */
  public getJWTCredentialsStatus() {
    if (this.JWT)
      return true;
    return false;
  }

  /**
   * Set and save a JWT after retrieval
   * 
   * @param {string} token The JWT extracted from the MS Redirect
   * @returns {boolean} JWT Set
   */
  public setJWTCredentials(token: string) {
    if (token) {
      localStorage.setItem('JWT', token);
      this.getJWTCredentials();
      return true;
    }
    return false;
  }

  /**
   * Get the JWT stored in LocalStorage and store it as a local variable
   * 
   * @returns {void}
   */
  private getJWTCredentials() {
    this.JWT = localStorage.getItem('JWT');
  }


  /**
   * Get the JWT stored as a local variable
   * 
   * @returns {JWT|string} The JWT
   */
  public getToken() {
    return this.JWT;
  }

  /**
   * Remove the JWT stored in LocalStorage and local variable
   * 
   * @returns {void}
   */
  public removeJWTCredentials() {
    localStorage.removeItem('JWT');
    this.JWT = null;
  }

  /**
   * Redirect to the Microsoft Oauth2 Authorize endpoint
   * 
   * @returns {void}
   */
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