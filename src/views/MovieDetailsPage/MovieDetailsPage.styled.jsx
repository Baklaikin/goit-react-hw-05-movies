import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 24px;
`;

export const ImgContainer = styled.div`
  margin-right: 30px;
`;

export const Poster = styled.img`
  width: 280px;
  height: auto;
  display: block;
`;

export const ContentContainer = styled.div`
  width: 800px;
  margin-right: 20px;
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const StyledLink = styled(Link)`
  width: 80px;
  color: black;
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-left: 24px;
`;
