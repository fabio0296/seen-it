import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MovieService } from './shared/movie/movie.service';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SearchMoviesBarComponent } from './search-movies-bar/search-movies-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MoviesRoutingModule
  ],
  exports:[MoviesRoutingModule, MovieSearchComponent],
  providers: [MovieService],
  declarations: [MovieSearchComponent, SearchMoviesBarComponent],
})
export class MoviesModule { }
