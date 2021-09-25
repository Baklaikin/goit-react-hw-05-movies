import "./App.css";
import { Route, Switch } from "react-router";
import Homepage from "./views/homepage/homepage";
import MoviePage from "./views/MoviePage/MoviePage";
import Navigation from "components/Navigation/Navigation";
import MovieDetailsPage from "views/MovieDetailsPage/MovieDetailsPage";
import NotFound from "views/NotFound/NotFound";
// import Cast from "views/Cast/Cast";
// import Reviews from "views/Reviews/Reviews";

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/MoviePage/:movieId">
          <MovieDetailsPage />
        </Route>

        {/* <Route path="/MoviePage/:movieId/Cast">
      <Cast/>
      </Route>

      <Route path="/MoviePage/:movieId/Reviews">
      <Reviews/>
      </Route> */}

        <Route path="/MoviePage">
          <MoviePage />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
