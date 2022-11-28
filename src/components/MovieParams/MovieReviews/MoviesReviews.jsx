import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "components/Api/Api"; 
import ClipLoader from 'react-spinners/ClipLoader';


export  function MoviesReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieId() {
      try {
        setIsLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
    getMovieId();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <ClipLoader />
      ) : (
        <ul>
          {isLoading ? (
            <ClipLoader />
          ) : (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
}