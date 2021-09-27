import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Form = styled.form`
  width: 400px;
  margin: 20px auto;
`;

export const Input = styled.input`
  width: 80%;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px 0 auto;
  padding: 16px;
  list-style: none;
  flex-grow: 1;
`;

export const ListItem = styled.li`
  height: auto;
  padding: 4px;
  box-shadow: 0px 2px 10px 3px rgba(34, 60, 80, 0.2);
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-left: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  flex-basis: calc(100% / 5);
`;

export const MoviePicture = styled.img`
  width: 100%;
  display: block;
  height: auto;
`;

export const Item = styled.li`
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
