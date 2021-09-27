import { FetchTrendingMovies } from "api/ApiService";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import {
  Title,
  Item,
  StyledLink,
  SmallTitle,
  List,
  MoviePicture,
} from "./homepage.styled";

export default function Homepage() {
  const [popularToday, setPopularToday] = useState([]);

  useEffect(() => {
    FetchTrendingMovies().then(setPopularToday);
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <List>
        {popularToday &&
          popularToday.map((item) => {
            return (
              <StyledLink to={`/MoviePage/${item.id}`} key={item.id}>
                <Item key={item.id}>
                  <MoviePicture
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    // width="240"
                  />
                  <SmallTitle>{item.title}</SmallTitle>
                </Item>
              </StyledLink>
            );
          })}
      </List>
    </>
  );
}
