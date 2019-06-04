import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FourSquareVenueResponse, FourSquareExploreResponse, FourSquareSearchResponse, FourSquareTrendingResponse, Collection, Place } from 'src/app/types';
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

  /**
   * Check if Foursquare API Credentials are set
   * @returns {boolean} Credentials set
   */
  public APICredentialsStatus() {
    if (this.API_CLIENT && this.API_SECRET)
      return true;
    return false;
  }

  /**
   * Save the API Credentials to LocalStorage
   * @param {string} CLIENTID Foursquare Client ID
   * @param {string} CLIENTSECRET Foursquare Client Secret
   */
  public setAPICredentials(CLIENTID: string, CLIENTSECRET: string) {
    localStorage.setItem('API_CLIENT', CLIENTID);
    localStorage.setItem('API_SECRET', CLIENTSECRET);
    this.getAPICredentials();
    return true;
  }

  /**
   * Get the API Credentials stored in LocalStorage and store it as a local variable
   * @returns {void}
   */
  private getAPICredentials() {
    this.API_CLIENT = localStorage.getItem('API_CLIENT');
    this.API_SECRET = localStorage.getItem('API_SECRET');
  }

  /**
   * Get Venues by search and location parameters
   * @param {string} query The search query
   * @param {string} location The location to preform the location query on
   * @returns {Observable<FourSquareSearchResponse.RootObject>}
   */
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

  /**
   * Get Venue by unique id
   * @param {string} venueid The id of the venue
   * @returns {Observable<FourSquareVenueResponse.RootObject>}
   */
  public getVenueById(venueid: string) {
    const params = new HttpParams()
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareVenueResponse.RootObject>(`https://api.foursquare.com/v2/venues/${ venueid }`, { params: params });
  }

  /**
   * Get Explore Venues by location parameter
   * @param {string} location The location to preform the explore search on
   * @returns {Observable<FourSquareExploreResponse.RootObject>}
   */
  public getExploreVenuesByLocation(location: string) {
    const params = new HttpParams()
    .set('near', location)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareExploreResponse.RootObject>(`https://api.foursquare.com/v2/venues/explore`, { params: params });
  }

  /**
   * Get Explore Venues by location coordinates parameters
   * @param {string} latitude The latitude of the location to preform the explore search on
   * @param {string} longitude The longitude of the location to preform the explore search on
   * @returns {Observable<FourSquareExploreResponse.RootObject>}
   */
  public getExploreVenuesByLocationCord(latitude: number, longitude: number) {
    const params = new HttpParams()
    .set('ll', `${latitude},${longitude}`)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareExploreResponse.RootObject>(`https://api.foursquare.com/v2/venues/explore`, { params: params });
  }

  /**
   * Get Trending Venues by location parameter
   * @param {string} location The location to preform the trending search on
   * @returns {Observable<FourSquareTrendingResponse.RootObject>}
   */
  public getTrendingVenuesByLocation(location: string) {
    const params = new HttpParams()
    .set('near', location)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareTrendingResponse.RootObject>(`https://api.foursquare.com/v2/venues/trending`, { params: params });
  }

  /**
   * Get Trending Venues by location coordinates parameters
   * @param {string} latitude The latitude of the location to preform the trending search on
   * @param {string} longitude The longitude of the location to preform the trending search on
   * @returns {Observable<FourSquareTrendingResponse.RootObject>}
   */
  public getTrendingVenuesByLocationCord(latitude: number, longitude: number) {
    const params = new HttpParams()
    .set('ll', `${latitude},${longitude}`)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareTrendingResponse.RootObject>(`https://api.foursquare.com/v2/venues/trending`, { params: params });
  }

  // Custom API Routes
  public getFavorites() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.getToken() }`);
    return this.http.get<Collection[]>('/api/collections', { headers: headers });
  }

  public getFavoritesDetail(id: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.getToken() }`);
    return this.http.get<Collection>(`/api/collections/${id}`, { headers: headers });
  }

  public putFavorites(favoriteList: Collection) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.getToken() }`);
    return this.http.put(`/api/collections`, favoriteList, { headers: headers });
  }

  public postFavorites(favoriteList: Collection) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.getToken() }`);
    return this.http.post(`/api/collections`, favoriteList, { headers: headers });
  }

  public deleteFavorites(id: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.getToken() }`);
    return this.http.delete(`/api/collections/${id}`, { headers: headers });
  }

  public postPlace(parent: number, place: Place) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.getToken() }`);
    return this.http.post(`/api/places/${ parent }`, place, { headers: headers });
  }

  public deletePlace(id: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.auth.getToken() }`);
    return this.http.delete(`/api/places/${id}`, { headers: headers });
  }

}