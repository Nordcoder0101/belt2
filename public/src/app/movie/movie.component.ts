import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: String;
  movieToShow = {};

  constructor(private _http: HttpService, 
    private route: ActivatedRoute,
    private _router: Router) {
    this.movieToShow = {
      _id: String,
      title: String,
      reviews: []
    }
   }

  ngOnInit() {
    this.id = this.route.params['_value']['id']
    this.getMovie()
    
    
  }

  getMovie(){
    this._http.getMovie(this.id)
    .subscribe(data => {
      this.movieToShow = data['data']
      console.log(this.movieToShow)
    })
  }

  deleteMovie(id){
    this._http.deleteMovie(id)
    .subscribe(()=>{
      this._router.navigate(['/movies'])
    })
  }

}
