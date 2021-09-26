// import { useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import * as ApiService from "../../api/ApiService";
import { useEffect } from "react/cjs/react.development";

export default function Reviews({ data }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiService.MovieReviews(data).then(setReviews);
  }, [data]);

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews &&
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        {"There is no review on this movie"}
      </ul>
    </>
  );
}
