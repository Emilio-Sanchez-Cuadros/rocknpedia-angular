import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AlbumsService {


  url: string = 'http://localhost:3003/bands'; 
  constructor(private http: HttpClient) {}

  getAlbums(band_id: number) {
    return this.http.get(this.url + `/${band_id}/albumes`);
  }


}
