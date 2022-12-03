import React from 'react';
import { URL_POSTER, URL_BACKDROP } from 'components/Api/ApiConfig';
import { HiBackspace } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { useLocation, NavLink } from 'react-router-dom';

import { getMovieDetails } from 'components/Api/Api';
import { MovieDetails } from '../MovieDetails/MovieDetails';

// стилі
import { Div, NavItem, Img } from './MovieInfo.styled';

export function MovieInfo({ info }) {
  const location = useLocation();

  const {
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    // production_companies,
  } = info;

  const from = location.state?.from ?? '/';

  const getYear = () => new Date(`${release_date}`).getFullYear();
  const getScore = () => Math.round(`${vote_average}` * 10);

  return (
    <div backdrop={info}>
      <NavItem to={from}>
        <IconContext.Provider value={{ color: '#734cf7' }}>
          <HiBackspace size={35} />
        </IconContext.Provider>
      </NavItem>
      <div>
        {/* <Img
          src={poster_path ? `${URL_POSTER}${poster_path}` : 'no image'}
          alt={original_title}
          width="300"
          height="450"
        /> */}
        <div>
          <p>
            {original_title} ({getYear()})
          </p>
          <p>Use Score : {getScore()}%</p>
          <p>Overview:</p>
          <p>{overview}</p>
          <p>Genres:</p>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
