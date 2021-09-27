import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  flex-basis: calc(100% / 5);
`;

export const Item = styled.li`
  /* width: 100%; */
  height: auto;
  padding: 4px;
  box-shadow: 0px 2px 10px 3px rgba(34, 60, 80, 0.2);
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const SmallTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px 0 auto;
  padding: 16px;
  list-style: none;
  flex-grow: 1;
`;

export const MoviePicture = styled.img`
  width: 100%;
  display: block;
  height: auto;
`;
