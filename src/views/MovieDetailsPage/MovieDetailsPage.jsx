// import * as ApiService from "../../api/ApiService";
import { useState, useEffect } from "react";
import { useParams, Route, useRouteMatch, Switch } from "react-router";
import { Link } from "react-router-dom";
import Cast from "views/Cast/Cast";
import Reviews from "views/Reviews/Reviews";

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=6a3a6be92d24591726e00b5f937294e0`
    )
      .then((r) => r.json())
      .then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <div>
            <button type="button">Go back</button>
            <div>
              <img
                width="320"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div>
              <h2>{movie.original_title}</h2>
              <p>User score: {movie.vote_average}</p>
              <p>Overview: {movie.overview}</p>
              <p>Genres: {movie.genres.map((genre) => genre.name).join(",")}</p>
            </div>
            <div>
              <p>Additional information</p>
              <Link to={`${url}/Cast`}>Cast</Link>
              <Link to={`${url}/Reviews`}>Reviews</Link>
            </div>
          </div>
        </>
      )}
      <hr />
      <Switch>
        <Route path={`${url}/Reviews`}>
          <Reviews />
        </Route>
        <Route path={`${url}/Cast`}>
          <Cast />
        </Route>
      </Switch>
    </>
  );
}
