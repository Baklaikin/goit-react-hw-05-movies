import { FetchTrendingMovies } from "api/ApiService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [popularToday, setPopularToday] = useState([]);

  useEffect(() => {
    FetchTrendingMovies().then(setPopularToday);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {popularToday &&
          popularToday.map((item) => {
            return (
              <Link to={`/MoviePage/${item.id}`} key={item.id}>
                <li key={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    width="240"
                  />
                  <h3>{item.title}</h3>
                </li>
              </Link>
            );
          })}
      </ul>
    </>
  );
}
