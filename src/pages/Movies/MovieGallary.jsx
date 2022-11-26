import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { URL_POSTER } from 'components/Api/ApiConfig';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
// Рендер  інфо фільма в MovieGallary на сторінці Home
export default function MovieGallary({ movies, isLoading }) {
  const location = useLocation();

  return (
    <ul>
      {isLoading ? (
        movies.map(({ id, original_title, poster_path, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={poster_path ? `${URL_POSTER}${poster_path}` : `no image`}
                alt={title}
                width={350}
                height={525}
              />

              <div>
                <p>{original_title}</p>
              </div>
            </NavLink>
          </li>
        ))
      ) : (
        <ClipLoader />
      )}
    </ul>
  );
}
