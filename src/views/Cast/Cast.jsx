// import { useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import * as ApiService from "../../api/ApiService";
import { useEffect } from "react/cjs/react.development";
import { List, Item, Image, SmallTitle, Paragraph } from "../Cast/Cast.styled";

export default function Cast({ data }) {
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    ApiService.MovieCasting(data).then(setCastInfo);
  }, [data]);

  return (
    <>
      <List>
        {castInfo &&
          castInfo.map((person) => {
            return (
              <Item key={person.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  // width="180"
                  alt={person.name}
                />
                <SmallTitle>{person.name}</SmallTitle>
                <Paragraph>Character: {person.character}</Paragraph>
              </Item>
            );
          })}
      </List>
    </>
  );
}
