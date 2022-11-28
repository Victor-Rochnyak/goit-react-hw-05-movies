import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'components/Api/Api';
import { URL_POSTER } from 'components/Api/ApiConfig';
import ClipLoader from 'react-spinners/ClipLoader';

export function MoviesCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieId() {
      try {
        setIsLoading(true);
        const idResp = await getMovieCast(movieId);
        setCast(idResp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieId();
  }, [movieId]);

  if (cast.length === 0) {
    return "We don't have any cast information on this movie.";
  }

  return (
    <div>
      {isLoading ? (
        <ClipLoader />
      ) : (
        cast.map(({ profile_path, name, character, id }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `${URL_POSTER}${profile_path}`
                    : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'
                }
                alt=""
                width="200"
              />
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })
      )}
    </div>
  );
}
