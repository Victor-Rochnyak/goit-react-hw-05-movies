import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { getMovieDetails } from 'components/Api/Api';
// import { HiBackspace } from 'react-icons/hi';
// import { IconContext } from 'react-icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { MovieInfo } from '../MovieInfo/MovieInfo';
import styled from 'styled-components';
import { URL_POSTER, URL_BACKDROP } from 'components/Api/ApiConfig';
//Стилі

import { Div } from './MovieDetails.styled';

export function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieId() {
      try {
        setIsLoading(true);
        const response = await getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
    getMovieId();
  }, [movieId]);
  // const from = location.state?.from ?? '/';

  return (
    <>
      {movie && (
        <main>
          <Div
            style={{
              backgroundImage: `url(${URL_BACKDROP}${
                movie.backdrop_path || movie.poster_rath
              })`,
            }}
          ></Div>
          {isLoading ? <ClipLoader /> : <MovieInfo info={movie}></MovieInfo>}
          <div>
            <p> Additional information</p>
            <ul>
              <li>
                <NavLink to="cast">
                  {/* state={{ from }} */}
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews">
                  {/*  state={{ from }} */}
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      )}
    </>
  );
}
