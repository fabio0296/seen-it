import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Movie } from '../shared/movie';
import { MovieService } from '../shared/movie/movie.service';
import '../shared/rxjs-operators';

@Component({
  selector: 'app-search-movies-bar',
  templateUrl: './search-movies-bar.component.html',
  styleUrls: ['./search-movies-bar.component.scss']
})
export class SearchMoviesBarComponent implements OnInit {
  movies: Movie[];
  @Input()
  movieTitle: String = '';
  searchControl = new FormControl();
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.searchControl.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .subscribe((newValue)=>{ this.movieService.search(newValue)});
  }

  searchMovie(){
    this.movieService.search(this.movieTitle);
  }

}
