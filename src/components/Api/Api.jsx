import axios from 'axios'; 

import { KEY, API } from './ApiConfig';

// axios.defaults.baseURL = API;
// axios.defaults.params = {
//   api_key: KEY,
//   language: 'en-US',
// };

// const getData = async url => {
//   try {
//     const response = await axios.get(url);
//     return response;
//   } catch (error) {
//     toast.error('Sorry, We don`t have this film`s information');
//   }
// };

export const getTrendingMovie = async () => {
  const response = await axios.get(`${API}3/trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const getSearchMovie = async query => {
  const response = await axios.get(`${API}3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  return response.data.results;
};
export const getMovieDetails = async movieId => {
  const response = await axios.get(`${API}3/movie/${movieId}?api_key=${KEY}&language=en-US&page=1`);
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(`${API}3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`${API}3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
  return response.data.results;
};




// const getData = async url => {
//     try {
//       const response = await axios.get(url);
//       return response;
//     } catch (error) {
//       toast.error('Sorry, We don`t have this film`s information');
//     }
//   };
  
//   export const getMovieReviews = movieId => {
//     const url = `${API}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
//     return getData(url);
//   }
  
//   export const getMovieDetails = movieId => {
//     const url = `${API}3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`;
//     return getData(url);
//   };
  
//   export const getTrendingMovie = () => {
//     const url = `${API}3/trending/all/day?api_key=${API_KEY}`;
//     return getData(url);
//   };
  
//   export const getSearchMovie = (query) => {
//     const url = `${API}3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
//     return getData(url);
//   };
  
//   export const getMovieCast = (movieId) => {
//     const url = `${API}3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
//     return getData(url);
//   };

