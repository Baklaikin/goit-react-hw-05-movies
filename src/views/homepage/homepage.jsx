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
              <li key={item.id}>
                <Link to={`/MoviePage/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
