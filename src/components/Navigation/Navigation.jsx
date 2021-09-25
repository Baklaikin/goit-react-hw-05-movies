import { NavLink } from "react-router-dom";

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
