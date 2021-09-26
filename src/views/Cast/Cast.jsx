// import { useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import * as ApiService from "../../api/ApiService";
import { useEffect } from "react/cjs/react.development";

export default function Cast({ data }) {
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    ApiService.MovieCasting(data).then(setCastInfo);
  }, [data]);

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {castInfo &&
          castInfo.map((person) => {
            return (
              <li key={person.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  width="180"
                  alt={person.name}
                />
                <h3>{person.name}</h3>
                <p>Character: {person.character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
