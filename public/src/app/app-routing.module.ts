import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { NewReviewComponent } from './new-review/new-review.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'movies', component: HomeComponent },
  { path: 'movies/new', component: NewmovieComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'movies/:id/review', component: NewReviewComponent}
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
