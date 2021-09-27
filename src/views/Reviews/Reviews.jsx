// import { useParams, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import * as ApiService from "../../api/ApiService";
import { useEffect } from "react/cjs/react.development";
import { Title, Item, Paragraph } from "../Reviews/Reviews.styled";

export default function Reviews({ data }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiService.MovieReviews(data).then(setReviews);
  }, [data]);

  return (
    <>
      <ul>
        {reviews.length === 0 ? (
          <h2>There is no review on this movie</h2>
        ) : (
          reviews.map((review) => {
            return (
              <Item key={review.id}>
                <Title>Author: {review.author}</Title>
                <Paragraph>{review.content}</Paragraph>
              </Item>
            );
          })
        )}
      </ul>
    </>
  );
}
