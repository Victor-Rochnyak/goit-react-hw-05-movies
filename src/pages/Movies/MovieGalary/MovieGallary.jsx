import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { URL_POSTER } from 'components/Api/ApiConfig';
import ClipLoader from 'react-spinners/ClipLoader';

// стилі
import {
  Ul,
  Li,
  Img,
  Div,
  P,
  DivP,
  NavItem,
} from '../MovieGalary/MoviesGalary.styled';
// import { toast } from 'react-toastify';
// Рендер  інфо фільма в MovieGallary на сторінці Home
export default function MovieGallary({ movies, isLoading }) {
  const location = useLocation();

  return (
    <Div>
      <Ul>
        {isLoading ? (
          <ClipLoader />
        ) : (
          movies.map(({ id, original_title, poster_path, title }) => (
            <Li key={id}>
              <NavItem to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={poster_path ? `${URL_POSTER}${poster_path}` : `no image`}
                  alt={title}
                  width={350}
                  height={525}
                />

                <DivP>
                  <P>{original_title}</P>
                </DivP>
              </NavItem>
            </Li>
          ))
        )}
      </Ul>
    </Div>
  );
}
