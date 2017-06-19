import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component'
const ROUTES : Routes = [
  {
    path: 'search',
    component: MovieSearchComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
