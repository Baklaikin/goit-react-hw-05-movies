import "./App.css";
import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import Navigation from "components/Navigation/Navigation";
import NotFound from "views/NotFound/NotFound";

const Homepage = lazy(() => import("./views/homepage/homepage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);
const MoviePage = lazy(() => import("./views/MoviePage/MoviePage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Wait a sec...</h1>}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/MoviePage/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/MoviePage">
            <MoviePage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
