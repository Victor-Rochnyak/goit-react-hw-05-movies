import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { getMovieDetails } from 'components/Api/Api';
// import { HiBackspace } from 'react-icons/hi';
// import { IconContext } from 'react-icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { MovieInfo } from '../MovieInfo/MovieInfo';

//Стилі
import { Div} from './MovieDetails.styled';
export function MovieDetails() {
  const [movie, setMovie] = useState(0);
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
          {isLoading ? <ClipLoader /> : <MovieInfo info={movie}></MovieInfo>}
          <div>
            <div> Additional information</div>
            <div>
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
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      )}
    </>
  );
}
