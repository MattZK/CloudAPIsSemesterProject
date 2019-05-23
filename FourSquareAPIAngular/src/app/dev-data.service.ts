import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevDataService {

  constructor(private http: HttpClient) { }

  public getVenuesBySearch (query, location) {
    return this.http.get(`https://matthiaswillemsen.me/cloud/venuesearch.json`);
  }

  public getVenueById(venueid) {
    return this.http.get(`https://matthiaswillemsen.me/cloud/venuedetail.json`);
  }

  public getExploreVenuesByLocation(location) {
    return this.http.get(`https://matthiaswillemsen.me/cloud/venueexplore.json`);
  }

  public getExploreVenuesByLocationCord(latitude: number, longitude: number) {
    return this.http.get(`https://matthiaswillemsen.me/cloud/venueexplore.json`);
  }

  public getTrendingVenuesByLocation(location) {
    return this.http.get(`https://matthiaswillemsen.me/cloud/venuetrending.json`);
  }

  public getTrendingVenuesByLocationCord(latitude: number, longitude: number) {
    return this.http.get(`https://matthiaswillemsen.me/cloud/venuetrending.json`);
  }
}
