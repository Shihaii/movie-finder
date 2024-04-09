import type { Movie, MovieDetailed, Rating } from "@/types";
import axios from "axios";

export const getMovieByName = async (title: string): Promise<Movie[]> => {
  let movies: Movie[] = [];
  await axios
    .get(`http://www.omdbapi.com/?apikey=b4e91b14&s=${title}`)
    .then((response: { data: any }) => {
      for (let i = 0; i < response.data.Search.length; i++) {
        let movie: Movie = {
          poster: response.data.Search[i].Poster,
          title: response.data.Search[i].Title,
          type: response.data.Search[i].Type,
          year: response.data.Search[i].Year,
          imdbID: response.data.Search[i].imdbID,
        };
        movies.push(movie);
      }
    });

  return movies;
};

export const getMovieById = async (id: string): Promise<MovieDetailed> => {
  let response = await axios.get(
    `http://www.omdbapi.com/?apikey=b4e91b14&i=${id}`
  );

  let ratings: Rating[] = [];
  for (let i = 0; i < response.data.Ratings.length; i++) {
    let rating: Rating = {
      source: response.data.Ratings[i].Source,
      value: response.data.Ratings[i].Value,
    };
    ratings.push(rating);
  }
  let movie: MovieDetailed = {
    poster: response.data.Poster,
    title: response.data.Title,
    type: response.data.Type,
    year: response.data.Year,
    imdbID: response.data.imdbID,
    actors: response.data.Actors,
    awards: response.data.Awards,
    boxOffice: response.data.BoxOffice,
    country: response.data.Country,
    dvd: response.data.DVD,
    director: response.data.Director,
    genre: response.data.Genre,
    language: response.data.Language,
    metascore: response.data.Metascore,
    plot: response.data.Plot,
    production: response.data.Production,
    rated: response.data.Rated,
    ratings: ratings,
    released: response.data.Released,
    response: response.data.Response,
    runtime: response.data.Runtime,
    website: response.data.Website,
    writer: response.data.Writer,
    imdbRating: response.data.imdbRating,
    imdbVotes: response.data.imdbVotes,
  };

  return movie;
};
