import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public API_CLIENT: string;
  public API_SECRET: string;

  constructor(private http: HttpClient) {
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

  public getVenuesBySearch (query, location) {
    const params = new HttpParams()
    .set('near', location)
    .set('query', query)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get<FourSquareSearchResponse.RootObject>(`https://api.foursquare.com/v2/venues/search`, { params: params });
  }

  public getVenueById(venueid) {
    const params = new HttpParams()
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get(`https://api.foursquare.com/v2/venues/${ venueid }`, { params: params });
  }

  public getExploreVenuesByLocation(location) {
    const params = new HttpParams()
    .set('near', location)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get(`https://api.foursquare.com/v2/venues/explore`, { params: params });
  }

  public getExploreVenuesByLocationCord(latitude: number, longitude: number) {
    const params = new HttpParams()
    .set('ll', `${latitude},${longitude}`)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get(`https://api.foursquare.com/v2/venues/explore`, { params: params });
  }

  public getTrendingVenuesByLocation(location) {
    const params = new HttpParams()
    .set('near', location)
    .set('limit', '10')
    .set('client_id', this.API_CLIENT)
    .set('client_secret', this.API_SECRET)
    .set('v', '20190522');
    return this.http.get(`https://api.foursquare.com/v2/venues/trending`, { params: params });
  }
}

export declare namespace FourSquareSearchResponse {

  export interface Meta {
      code: number;
      requestId: string;
  }

  export interface LabeledLatLng {
      label: string;
      lat: number;
      lng: number;
  }

  export interface Location {
      address: string;
      lat: number;
      lng: number;
      labeledLatLngs: LabeledLatLng[];
      postalCode: string;
      cc: string;
      neighborhood: string;
      city: string;
      state: string;
      country: string;
      formattedAddress: string[];
  }

  export interface Icon {
      prefix: string;
      suffix: string;
  }

  export interface Category {
      id: string;
      name: string;
      pluralName: string;
      shortName: string;
      icon: Icon;
      primary: boolean;
  }

  export interface Venue {
      id: string;
      name: string;
      location: Location;
      categories: Category[];
      referralId: string;
      hasPerk: boolean;
  }

  export interface Center {
      lat: number;
      lng: number;
  }

  export interface Ne {
      lat: number;
      lng: number;
  }

  export interface Sw {
      lat: number;
      lng: number;
  }

  export interface Bounds {
      ne: Ne;
      sw: Sw;
  }

  export interface Geometry {
      center: Center;
      bounds: Bounds;
  }

  export interface Feature {
      cc: string;
      name: string;
      displayName: string;
      matchedName: string;
      highlightedName: string;
      woeType: number;
      slug: string;
      id: string;
      longId: string;
      geometry: Geometry;
  }

  export interface Geocode {
      what: string;
      where: string;
      feature: Feature;
      parents: any[];
  }

  export interface Response {
      venues: Venue[];
      geocode: Geocode;
  }

  export interface RootObject {
      meta: Meta;
      response: Response;
  }

}