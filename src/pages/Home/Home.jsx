import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendingMovie } from 'components/Api/Api';
import MovieGallary from 'pages/Movies/MovieGalary/MovieGallary';
// стилі
import { Section } from './Home.styled';

export function Home() {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // віклик функції запросу API trending films
  useEffect(() => {
    const renderTrendMovies = async () => {
      try {
        const trendMovies = await getTrendingMovie();
        setTrendingMovie(trendMovies);
        console.log(trendMovies);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    renderTrendMovies();
  }, []);

  //Рендер розмітки з  MovieGallary
  return (
    <main>
      <Section>
        <h1>Trading movies today</h1>
        <MovieGallary isLoading={isLoading} movies={trendingMovie} />
      </Section>
    </main>
  );
}
