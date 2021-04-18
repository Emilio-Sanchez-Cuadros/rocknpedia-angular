import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Review } from '../models/reviews';

@Injectable({
    providedIn: "root"
})
export class ReviewService {

    urlReviews: string = 'http://localhost:3003'
    constructor(private http: HttpClient) { }

    getAlbumsReviews(album_id: number) {
        return this.http.get(this.urlReviews + `/reviews/${album_id}`);
    }

    postAlbumsReviews(user_id: number, album_id: number, review: Review) {
        return this.http.post(this.urlReviews + `/reviews/${user_id}/${album_id}`, review);
    }


}
