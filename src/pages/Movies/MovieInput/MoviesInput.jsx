import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'components/Api/Api';
import MovieGallary from '../MovieGalary/MovieGallary';
// import { FaSearch } from "react-icons/fa";
import ClipLoader from 'react-spinners/ClipLoader';
//стилі
import { H1,Div,Form,Input } from './MovieInput.styled';

export function Movie() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState();

  const movieSearch = searchParams.get('query');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const onFormSubmit = event => {
    event.priventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (movieSearch) return;
    async function serachMovies() {
      try {
        setIsLoading(true);
        const movieResponse = await getSearchMovie(movieSearch);
        setMovies(movieResponse);
      } catch (error) {
        console.log('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    serachMovies();
  }, [movieSearch]);

  return (
    <main>
      <Div>
        <H1>поиск фильмов</H1>
        <Form action="" onSubmit={onFormSubmit}>
          <label htmlFor="">
            <Input
              type="text"
              name="query"
              value={query}
              onChange={handleChange}
            />
          </label>
          <button type="submit"></button>
        </Form>
        {isLoading ? (
          <ClipLoader />
        ) : (
          movies && <MovieGallary movies={movies} />
        )}
        {movies.length > 0 && 'no films'}
      </Div>
    </main>
  );
}
