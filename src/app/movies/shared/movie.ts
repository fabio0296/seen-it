import { IMovie } from './imovie';

export class Movie implements IMovie {
  imdbID : String;
  Title : String;
  Type ?: String;
  Poster ?: String;
  Year ?: String;

  constructor(imdbID: String, Title: String, Type ?: String, Poster ?: String, Year ?: String) {
    this.imdbID = imdbID;
    this.Title = Title;
    if (Type) { this.Type = Type; }
    if (Year) { this.Year = Year; }
    if(Poster) { this.Poster = Poster; }
  }


}
