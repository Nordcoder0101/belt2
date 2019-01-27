import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router  } from '@angular/router';


@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  id: String;
  movieToShow = {};
  error: Boolean;
  errors: any;
  movieData: {};
  numReviews: Number;

  constructor(private _http: HttpService, 
    private route: ActivatedRoute,
    private _router: Router) {

    this.movieToShow = {
      title: String,
      reviews: []
    }
    this.error = false;
    this.movieData = {
      title: "",
      reviewer: "",
      stars: "",
      review: "",
    
    }

    this.numReviews = 0;
    this.errors = [];
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id']
    this.getMovie()
    

  }

  getMovie() {
    this._http.getMovie(this.id)
      .subscribe(data => {
        this.movieToShow = data['data']
        this.numReviews = data['data']['reviews'].length;
        console.log(this.numReviews)
      })
  }

  createReview() {
    this._http.createReview(this.id, this.movieData)
    .subscribe(data => {
      console.log(data)
      this.errors = [];
      this.error = false;
      if (data['data']['errors']) {
        if (data['data'].errors[`reviews.${this.numReviews}.reviewer`]) {
          this.error = true;
          this.errors.push('Your name is required and must be at least three characters long');
          console.log(this.errors)
        }
        if (data['data'].errors[`reviews.${this.numReviews}.review`]) {
          this.error = true;
          this.errors.push('A review is required and must be at least three characters long');
        }
        if (data['data'].errors[`reviews.${this.numReviews}.stars`]) {
          this.error = true;
          this.errors.push('A Stars rating is required');
        }
      } else {
        this._router.navigate(['/movies'])
      }
    })
  }
}
