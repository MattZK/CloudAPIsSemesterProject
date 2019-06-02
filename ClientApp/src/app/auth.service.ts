import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "../environments/environment";
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getMSAuthTokenURL() {
    const params = new HttpParams()
      .set('client_id', environment.microsoft.client)
      .set('response_type', 'code')
      .set('redirect_uri', environment.microsoft.redirect)
      .set('response_mode', 'query')
      .set('scope', 'user.read');
    return `https://login.microsoftonline.com/${environment.microsoft.tenant}/oauth2/v2.0/authorize?` + params.toString();
  }

  getApiToken(queryParams: ActivatedRouteSnapshot["queryParams"]) {
    const params = new HttpParams()
      .set('code', queryParams.code)
      .set('session_state', queryParams.session_state)
    console.log(`https://localhost:5001/token?` + params.toString());
  }
}
