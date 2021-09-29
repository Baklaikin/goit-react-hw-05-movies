// import { useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import * as ApiService from "../../api/ApiService";
import { useEffect } from "react/cjs/react.development";
import {
  List,
  Item,
  Image,
  SmallTitle,
  Paragraph,
  ImgThumb,
} from "../Cast/Cast.styled";

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
                <ImgThumb>
                  {person.profile_path !== null ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                      alt={person.name}
                    />
                  ) : (
                    <Image
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU`}
                      alt={person.name}
                    />
                  )}
                </ImgThumb>

                <SmallTitle>{person.name}</SmallTitle>
                <Paragraph>Character: {person.character}</Paragraph>
              </Item>
            );
          })}
      </List>
    </>
  );
}
