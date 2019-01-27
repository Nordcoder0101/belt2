import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMovies = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getMovies()
    
  }

  getMovies(){
    this._http.getAllMovies()
      .subscribe(data => {
        this.allMovies = data['data'];
        console.log(this.allMovies)
    })
  }

}
