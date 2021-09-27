import * as ApiService from "../../api/ApiService";
import { useEffect, useState } from "react";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import {
  Form,
  Input,
  List,
  Button,
  StyledLink,
  MoviePicture,
  Item,
  SmallTitle,
} from "../MoviePage/MoviePage.styled";

export default function MoviePage() {
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const { url } = useRouteMatch();
  const name = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (name !== null) setSearchWord(name);
    if (!searchWord) return;
    ApiService.SearchMovies(`${searchWord}`).then(setMovies);
  }, [searchWord, name]);

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
      <Form onSubmit={SearchWord}>
        <Input name="searchForm" type="text" autoComplete="off" autoFocus />
        <Button type="submit">Search</Button>
      </Form>
      <List>
        {movies &&
          movies.map((movie) => {
            return (
              <StyledLink to={`${url}/${movie.id}`} key={movie.id}>
                <Item key={movie.id}>
                  <MoviePicture
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <SmallTitle>{movie.title}</SmallTitle>
                </Item>
              </StyledLink>
            );
          })}
      </List>
    </>
  );
}
