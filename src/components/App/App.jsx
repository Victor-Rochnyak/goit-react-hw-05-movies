import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Movie } from 'pages/Movies/MovieInput/MoviesInput';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { MoviesCast } from 'components/MovieDetails/MoviesCast';
import { MoviesReviews } from 'components/MovieDetails/MoviesReviews';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
