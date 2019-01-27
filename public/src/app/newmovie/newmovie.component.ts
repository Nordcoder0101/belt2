import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.css']
})
export class NewmovieComponent implements OnInit {
  error: Boolean;
  errors: any;
  movieData: {};

  constructor(private _http: HttpService,
    private _router: Router) { 
    this.error = false;
    this.movieData = {
      title: "",
      reviewer: "",
      stars: "",
      review: ""
    }
    this.errors = [];
  }

  ngOnInit() {
  }

  createMovie(){
    this._http.createMovie(this.movieData)
    .subscribe( data => {
      this.errors = [];
      this.error = false;
      if (data['data']['errors']){
        if (data['data'].errors.title) {
          this.error = true;
          this.errors.push('A movie title is required and must be at least three characters long');
        }
        if (data['data'].errors['reviews.0.reviewer']) {
          this.error = true;
          this.errors.push('Your name is required and must be at least three characters long');
          console.log(this.errors)
        }
        if (data['data'].errors['reviews.0.review']) {
          this.error = true;
          this.errors.push('A review is required and must be at least three characters long');
        }
        if (data['data'].errors['reviews.0.stars']) {
          this.error = true;
          this.errors.push('A Stars rating is required');
        }
      } else {
        this._router.navigate(['/movies'])
      }
      
    });
  };
};
