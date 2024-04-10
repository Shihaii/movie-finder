export interface Movie {
  imdbID: string;
  poster: string;
  title: string;
  type: string;
  year: number;
}

export interface MovieDetailed extends Movie {
  actors: string;
  awards: string;
  boxOffice: string;
  country: string;
  dvd: string;
  director: string;
  genre: string;
  language: string;
  metascore: number;
  plot: string;
  production: string;
  rated: string;
  ratings: Rating[];
  released: string;
  response: string;
  runtime: string;
  website: string;
  writer: string;
  imdbRating: number;
  imdbVotes: number;
}

export interface Rating {
  source: string;
  value: string;
}

export interface NavigationLink{
  name: string;
  url: string;
}
