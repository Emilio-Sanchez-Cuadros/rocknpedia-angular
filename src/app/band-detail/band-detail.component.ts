import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandsService } from '../services/bands';
import { AlbumsService } from '../services/albums';
import { Album } from '../models/album';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  url: string = 'http://localhost:3003/'
  band: any;
  band_id: number;
  album_id: number;
  albumes: Album[] = new Array<Album>();

  constructor(
    public bandService: BandsService,
    public albumsService: AlbumsService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.band_id = this.activeRoute.snapshot.params.band_id;
    this.bandService.getBand(this.band_id).subscribe((band => this.band = band))
    this.albumsService.getAlbums(this.band_id).subscribe((albumes) => {
      for (let i = 0; i < Object.keys(albumes).length; i++) {
          this.albumes.push(albumes[i]);
          this.album_id = albumes[i].album_id;
          console.log(this.album_id);
      }
    });
  }

}
