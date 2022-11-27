import { Layout } from 'components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Movie } from 'pages/Movies/MovieInput/MoviesInput';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'components/MovieParams/MovieDetails/MovieDetails';
import { MoviesCast } from 'components/MovieParams/MovieCast/MoviesCast';
import { MoviesReviews } from 'components/MovieParams/MovieReviews/MoviesReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
