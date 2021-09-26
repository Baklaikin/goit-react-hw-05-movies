import { NavLink } from "react-router-dom";
// import { NavigationLink } from "components/Navigation/Navigation.styled";

export default function Nav() {
  return (
    <nav>
      <NavLink exact to="/">
        HOME
      </NavLink>
      <NavLink to="/MoviePage">MOVIES</NavLink>
    </nav>
  );
}
