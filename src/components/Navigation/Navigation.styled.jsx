import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  color: darkgrey;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: darkgreen;
  }

  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Navigation = styled.nav`
  padding: 12px;
`;
