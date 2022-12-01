import React from 'react';
import { URL_POSTER, LOGO_URL } from 'components/Api/ApiConfig';
import { GiFilmSpool } from 'react-icons/gi';
import { HiBackspace } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { useLocation, NavLink } from 'react-router-dom';
// стилі
import { Div } from './MovieInfo.styled';

export function MovieInfo({ info }) {
  const location = useLocation();

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    production_companies,
  } = info;
  const from = location.state?.from ?? '/';

  const getYear = () => new Date(`${release_date}`).getFullYear();
  const getScore = () => Math.round(`${vote_average}` * 10);

  return (
    <Div backdrop={info}>
      <NavLink to={from}>
        <IconContext.Provider value={{ color: '#734cf7' }}>
          <HiBackspace size={35} />
        </IconContext.Provider>
      </NavLink>
      <div>
        <img
          src={poster_path ? `${URL_POSTER}${poster_path}` : 'no image'}
          alt={original_title}
          width="300"
          height="450"
        />
        <div>
          {production_companies.map(({ logo_path, id }) => (
            <div key={id}>
              {logo_path ? (
                <img src={`${LOGO_URL}${logo_path}`} alt="logo" />
              ) : (
                <></>
                // <GiFilmSpool size={65} />
              )}
            </div>
          ))}
        </div>
      </div>
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
    </Div>
  );
}
