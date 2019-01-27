import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllMovies() {
    return this._http.get('/getallmovies');
  }

  createMovie(data) {
    return this._http.post('/createnewmovie', data);
  }

  getMovie(id) {
    return this._http.get(`/getmoviebyid/${id}`)
  }

  removeMovie(id) {
    return this._http.delete(`/deletemovie/${id}`)
  }

  createReview(id, data){
    return this._http.post(`/createnewreview/${id}`, data)
  }

  deleteMovie(id) {
    return this._http.delete(`deletemovie/${id}`)
  }
}