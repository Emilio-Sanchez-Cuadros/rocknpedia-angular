import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Band } from '../models/band';

@Injectable({
  providedIn: "root"
})
export class BandsService {

    band_id: number;
    bands: Band[];

  url: string = 'http://localhost:3003/bands';  
  constructor(private http: HttpClient) {}

  getBands() {
    return this.http.get(this.url);
  }

  getBand(band_id) {
      return this.http.get(this.url + `/${band_id}`);
  }

  getAlbums(band_id) {
    return this.http.get(this.url + `/${band_id}/albumes`);
  }

}
