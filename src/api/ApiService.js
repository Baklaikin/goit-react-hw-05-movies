const KEY = "6a3a6be92d24591726e00b5f937294e0";
const BASE_URL = "https://api.themoviedb.org/3";
const PARAMS = "?api_key=";

export async function FetchMovies(url = "", config = {}) {
  const response = await fetch(url, config)
    .then((response) => {
      if (response.ok) return response.json();
      Promise.reject(new Error("error"));
    })
    .then((data) => {
      console.log(data.results);
      return data.results;
    });
  return response;
}

export function FetchTrendingMovies() {
  return FetchMovies(`${BASE_URL}/trending/movie/day${PARAMS}${KEY}`);
}

export function SearchMovies(movieName) {
  return FetchMovies(
    `${BASE_URL}/search/movie${PARAMS}${KEY}&query=${movieName}&page=1`
  );
}

export function SearchMovieDetails(movieId) {
  return FetchMovies(`${BASE_URL}/movie/${movieId}${PARAMS}${KEY}&page=1`);
}

export function MovieCasting(movieId) {
  return FetchMovies(
    `${BASE_URL}/movie/${movieId}/credits${PARAMS}${KEY}&page=1`
  );
}

export function MovieReviews(movieId) {
  return FetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews${PARAMS}${KEY}&page=1&language=en-US*`
  );
}
