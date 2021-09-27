import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
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
  width: 100%;
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-top: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
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
