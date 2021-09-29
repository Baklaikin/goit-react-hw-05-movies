import { useState, useEffect } from "react";
import { useParams, Route, useRouteMatch, Switch } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
import Cast from "views/Cast/Cast";
import Reviews from "views/Reviews/Reviews";
import {
  MainContainer,
  Button,
  ImgContainer,
  Poster,
  ContentContainer,
  Span,
  Paragraph,
  InfoContainer,
  StyledLink,
} from "./MovieDetailsPage.styled";

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
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

  const GoBackFn = () => {
    history.push(location.state?.from ? location.state?.from : "/");
  };

  return (
    <>
      {movie && (
        <>
          <Button type="button" onClick={GoBackFn}>
            Go back
          </Button>
          <MainContainer>
            <ImgContainer>
              <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            </ImgContainer>
            <ContentContainer>
              <h2>{movie.original_title}</h2>
              <Paragraph>
                <Span>User score</Span>: {movie.vote_average * 10}%
              </Paragraph>
              <Paragraph>
                <Span>Overview:</Span> {movie.overview}
              </Paragraph>
              <Paragraph>
                <Span>Genres:</Span>{" "}
                {movie.genres.map((genre) => genre.name).join(" ")}
              </Paragraph>
            </ContentContainer>
          </MainContainer>
          <InfoContainer>
            <Paragraph>Additional information</Paragraph>
            <StyledLink
              to={{
                pathname: `${url}/Cast`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
            >
              {" "}
              Cast
            </StyledLink>
            <StyledLink
              to={{
                pathname: `${url}/Reviews`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
            >
              {" "}
              Reviews
            </StyledLink>
          </InfoContainer>
        </>
      )}
      <Switch>
        <Route path={`${url}/Cast`}>
          <Cast data={movieId} />
        </Route>
        <Route path={`${url}/Reviews`}>
          <Reviews data={movieId} />
        </Route>
      </Switch>
    </>
  );
}
