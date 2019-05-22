import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    console.log(`https://api.foursquare.com/v2/venues/search?near=${ location }&query=${ query }&limit=10&client_id=${ this.API_CLIENT }&client_secret=${ this.API_SECRET }&v=20190522`);
    return this.http.get<FourSquareSearchResponse.RootObject>(`https://api.foursquare.com/v2/venues/search?near=${ location }&query=${ query }&limit=10&client_id=${ this.API_CLIENT }&client_secret=${ this.API_SECRET }&v=20190522`);
  }

  public getVenueById(venueid) {
    return this.http.get(`https://api.foursquare.com/v2/venues/${ venueid }?client_id=${ this.API_CLIENT }&client_secret=${ this.API_SECRET }&v=20190522`);
  }

  public getExploreVenuesByLocation(location) {
    return this.http.get(`https://api.foursquare.com/v2/venues/explore?near=${ location }&limit=10&client_id=${ this.API_CLIENT }&client_secret=${ this.API_SECRET }&v=20190522`);
  }

  public getExploreVenuesByLocationCord(latitude: number, longitude: number) {
    const location = `${latitude},${longitude}`;
    console.log(location);
    return this.http.get(`https://api.foursquare.com/v2/venues/explore?ll=${ location }&limit=10&client_id=${ this.API_CLIENT }&client_secret=${ this.API_SECRET }&v=20190522`);
  }

  public getTrendingVenuesByLocation(location) {
    return this.http.get(`https://api.foursquare.com/v2/venues/trending?near=${ location }&limit=10&client_id=${ this.API_CLIENT }&client_secret=${ this.API_SECRET }&v=20190522`);
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