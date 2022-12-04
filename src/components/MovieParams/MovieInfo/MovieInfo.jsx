import React from 'react';
import { URL_POSTER, URL_BACKDROP } from 'components/Api/ApiConfig';
import { HiBackspace } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { useLocation, NavLink } from 'react-router-dom';

import { getMovieDetails } from 'components/Api/Api';
import { MovieDetails } from '../MovieDetails/MovieDetails';

// стилі
import {
  DivBackdrop,
  NavItem,
  Img,
  MoveInfo,
  PosterInfo,
  Genres,
  Item,SpanGenres,H1Title,Overview,POverview
} from './MovieInfo.styled';

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
    
  } = info;

  const from = location.state?.from ?? '/';

  // const getYear = () => new Date(`${release_date}`).getFullYear();
  // const getScore = () => Math.round(`${vote_average}` * 10);

  return (
    <DivBackdrop backdrop={info}>
      <NavItem to={from}>
       {/* <IconContext.Provider value={{ color: '#734cf7' }}>
         <HiBackspace size={35} />
       </IconContext.Provider> */}
     </NavItem>
      <MoveInfo>
        <Img
          src={poster_path ? `${URL_POSTER}${poster_path}` : 'no image'}
          alt={original_title}
          width="300"
          height="450"
        />
        <PosterInfo className="move-conteiner__poster__info">
          <H1Title>
            {original_title}
            {/* ({getYear()}) */}
          </H1Title>
          {/* <p>Use Score : {getScore()}%</p> */}
          <Genres className="jenres">
            {genres &&
              genres
                .slice(0, 5)
                .map((genre, i) => <SpanGenres key={i}>{genre.name}</SpanGenres>)}
                <POverview>Overview:</POverview>
                <Overview>{overview}</Overview>
            {/* <p>Genres:</p> */}
            {/* <Item>{genres.map(genre => genre.name).join(', ')}</Item> */}
          </Genres>
        </PosterInfo>
      </MoveInfo>
    </DivBackdrop>
  );
}
