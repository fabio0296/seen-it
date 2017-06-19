import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const URL = 'http://www.omdbapi.com/';

@Injectable()
export class MovieService {

movies: Movie[];
  constructor(private http: Http) { }

 search( keyword: String){
  this.getMovies(keyword)
  .subscribe(
    (movies)=>{ this.movies = movies; console.log(movies);
    },
    (err)=>{ console.log(err);
    }
  );
 }
 
  getMovies( keyword: String): Observable<Movie[]>{
    return this.http
    .get(`${URL}?s=${keyword}`)
    .map(this.parseResponse)
    .catch( ()=> Observable.throw("Fallo la peticion"));
  }

  parseResponse(res : Response ): Movie[]{
    if(!res.json() || !res.json().Search){
      return [];
    }
    
    return res.json().Search.map( (movie) =>{ 
      return new Movie(
      movie['imdbID'],
      movie['Title'],
      movie['Type'],
      movie['Year'],
      movie['Poster'],
      )
    });
  } 
}
