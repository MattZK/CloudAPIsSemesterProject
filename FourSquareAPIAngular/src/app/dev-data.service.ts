import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FourSquareVenueResponse, FourSquareExploreResponse, FourSquareSearchResponse, FourSquareTrendingResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class DevDataService {

  constructor(private http: HttpClient) { }

  public getVenuesBySearch (query, location) {
    return this.http.get<FourSquareSearchResponse.RootObject>(`https://matthiaswillemsen.me/cloud/venuesearch.json`);
  }

  public getVenueById(venueid) {
    return this.http.get<FourSquareVenueResponse.RootObject>(`https://matthiaswillemsen.me/cloud/venuedetail.json`);
  }

  public getExploreVenuesByLocation(location) {
    return this.http.get<FourSquareExploreResponse.RootObject>(`https://matthiaswillemsen.me/cloud/venueexplore.json`);
  }

  public getExploreVenuesByLocationCord(latitude: number, longitude: number) {
    return this.http.get<FourSquareExploreResponse.RootObject>(`https://matthiaswillemsen.me/cloud/venueexplore.json`);
  }

  public getTrendingVenuesByLocation(location) {
    return this.http.get<FourSquareTrendingResponse.RootObject>(`https://matthiaswillemsen.me/cloud/venuetrending.json`);
  }

  public getTrendingVenuesByLocationCord(latitude: number, longitude: number) {
    return this.http.get<FourSquareTrendingResponse.RootObject>(`https://matthiaswillemsen.me/cloud/venuetrending.json`);
  }
}
