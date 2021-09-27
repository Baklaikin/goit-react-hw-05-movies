import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  /* margin: 0 auto; */
  margin-right: -50px;
  padding: 8px;
`;

export const Item = styled.li`
  width: calc((100% / 5) - 30px);
  padding: 8px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 10px 3px rgba(34, 60, 80, 0.2);
  border-radius: 4px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const SmallTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0;
`;

export const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0;
`;
