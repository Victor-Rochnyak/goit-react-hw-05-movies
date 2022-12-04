import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/Api/Api';
import ClipLoader from 'react-spinners/ClipLoader';

// Стилі
import {
  PAuthor,
  PContent,
  DivContainer,
  DivAuthorContent,DivImg,Img
} from './MovieReviews.styled';

export function MoviesReviews() {
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
        setIsLoading(false);
      }
    }
    getMovieId();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <ClipLoader />
      ) : (
        <DivContainer>
          <ul>
            {isLoading ? (
              <ClipLoader />
            ) : (
              reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <DivAuthorContent>
                    <PContent>{content}</PContent>
                    <DivImg>
                      
                        <Img
                          src="https://cdn.icon-icons.com/icons2/510/PNG/512/ios7-contact-outline_icon-icons.com_50287.png" width={50} height={50}
                          alt=""
                        />
                      
                      <PAuthor>Author: {author}</PAuthor>
                    </DivImg>
                  </DivAuthorContent>
                </li>
              ))
            )}
          </ul>
        </DivContainer>
      )}
    </>
  );
}
