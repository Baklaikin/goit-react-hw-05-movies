import {
  NavigationLink,
  Navigation,
} from "components/Navigation/Navigation.styled";

export default function Nav() {
  return (
    <Navigation>
      <NavigationLink exact to="/">
        HOME
      </NavigationLink>
      <NavigationLink to="/MoviePage">MOVIES</NavigationLink>
    </Navigation>
  );
}
