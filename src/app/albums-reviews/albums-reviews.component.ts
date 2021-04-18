import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../services/review'; 
import { Review } from '../models/reviews';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { StarRatingComponent } from 'ng-starrating';
import { UserLogged } from '../models/login';
import decode from 'jwt-decode';


@Component({
  selector: 'app-albums-reviews',
  templateUrl: './albums-reviews.component.html',
  styleUrls: ['./albums-reviews.component.css']
})
export class AlbumsReviewsComponent implements OnInit {
  userLogged: UserLogged;
  url: string = 'http://localhost:3003/';
  album_id: number;
  user_id: number;
  review: Review;
  reviews: Review[] = new Array<Review>();
  album_image: string;
  album_name: string;
  record_label: string;
  rating: number;
  totalstars: number = 5;
  token: string = sessionStorage.getItem("token");
  public Editor = ClassicEditor;
  public model = {
    editorData: ''
};
  constructor(
    public reviewsService: ReviewService, 
    private activeRoute: ActivatedRoute,
    
    ) { }

  ngOnInit(): void {
    this.album_id = this.activeRoute.snapshot.params.album_id;
    this.reviewsService.getAlbumsReviews(this.album_id).subscribe((reviews) => {
      for (let i = 0; i < Object.keys(reviews).length; i++) {
      this.reviews.push(reviews[i]);
      this.album_image = reviews[i].album_image;
      this.album_name = reviews[i].album_name;
      this.record_label = reviews[i].record_label;  
      this.user_id = reviews[i].user_id;  
    }
  });


  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.rating = $event.newValue;  
    console.log(this.rating);
  }

  sendReview() {
    if(this.token) {
      this.userLogged = decode(this.token) as UserLogged;
      // console.log(this.userLogged.user_id);
      this.user_id = this.userLogged.user_id;
      this.reviewsService.postAlbumsReviews(this.user_id, this.album_id, this.review).subscribe(review => console.log(review))
      console.log(this.model.editorData);
    }
  }
}
