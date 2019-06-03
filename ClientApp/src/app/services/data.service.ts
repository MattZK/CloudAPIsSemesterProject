import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FourSquareVenueResponse, FourSquareExploreResponse, FourSquareSearchResponse, FourSquareTrendingResponse, Collection } from 'src/app/types';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public API_CLIENT: string;
  public API_SECRET: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.getAPICredentials();
  }

  public APICredentialsStatus() {
    if (this.API_CLIENT && this.API_SECRET)
      return true;
    return false;
  }

  public setAPICredentials(CLIENTID: string, CLIENTSECRET: string) {
    localStorage.setItem('API_CLIENT', CLIENTID);
    localStorage.setItem('API_SECRET', CLIENTSECRET);
    this.getAPICredentials();
    return true;
  }

  private getAPICredentials() {
    this.API_CLIENT = localStorage.getItem('API_CLIENT');
    this.API_SECRET = localStorage.getItem('API_SECRET');
  }

  public getVenuesBySearch (query: string, location: string) {
    const params = new HttpParams()
    .set('near', location)
    .set('query', query)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareSearchResponse.RootObject>(`https://api.foursquare.com/v2/venues/search`, { params: params });
  }

  public getVenueById(venueid: string) {
    const params = new HttpParams()
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareVenueResponse.RootObject>(`https://api.foursquare.com/v2/venues/${ venueid }`, { params: params });
  }

  public getExploreVenuesByLocation(location: string) {
    const params = new HttpParams()
    .set('near', location)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareExploreResponse.RootObject>(`https://api.foursquare.com/v2/venues/explore`, { params: params });
  }

  public getExploreVenuesByLocationCord(latitude: number, longitude: number) {
    const params = new HttpParams()
    .set('ll', `${latitude},${longitude}`)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareExploreResponse.RootObject>(`https://api.foursquare.com/v2/venues/explore`, { params: params });
  }

  public getTrendingVenuesByLocation(location: string) {
    const params = new HttpParams()
    .set('near', location)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareTrendingResponse.RootObject>(`https://api.foursquare.com/v2/venues/trending`, { params: params });
  }

  public getTrendingVenuesByLocationCord(latitude: number, longitude: number) {
    const params = new HttpParams()
    .set('ll', `${latitude},${longitude}`)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareTrendingResponse.RootObject>(`https://api.foursquare.com/v2/venues/trending`, { params: params });
  }

  public getFavorites() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
    return this.http.get<Collection[]>('/api/collections', { headers: headers });
  }

  public getFavoritesDetail(id: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
    return this.http.get<Collection>(`/api/collections/${id}`, { headers: headers });
  }

  public putFavorites(favoriteList: Collection) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
    return this.http.put(`/api/collections`, favoriteList, { headers: headers });
  }

  public postFavorites(favoriteList: Collection) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
    return this.http.post(`/api/collections`, favoriteList, { headers: headers });
  }

  public deleteFavorites(id: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
    return this.http.delete(`/api/collections/${id}`, { headers: headers });
  }
}