import * as ApiService from "../../api/ApiService";
import { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
// import MovieDetailsPage from "views/MovieDetailsPage/MovieDetailsPage";

export default function MoviePage() {
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!searchWord) {
      return;
    }
    ApiService.SearchMovies(`${searchWord}`).then(setMovies);
  }, [searchWord]);

  const SearchWord = (e) => {
    e.preventDefault();
    const name = e.target.searchForm.value;
    setSearchWord(name);
    history.push({
      ...location,
      search: `query=${name}`,
    });
  };

  return (
    <>
      <form onSubmit={SearchWord}>
        <input name="searchForm" type="text" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
