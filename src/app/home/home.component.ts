import { Component, OnInit } from '@angular/core';
import { BandsService } from '../services/bands';
import { Band } from '../models/band';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url: string = 'http://localhost:3003/'
  bands: Band[] = new Array<Band>()

  constructor(public bandService: BandsService) { }

  ngOnInit(): void {
    this.bandService.getBands().subscribe((bandas) => {
      for (let i = 0; i < Object.keys(bandas).length; i++) {
          this.bands.push(bandas[i]);
      }
    });
  }

}
