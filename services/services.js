import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=fecd7450ab2f3fb03c1527ccc730a3aa';
const language = '&language=pt-BR'; // en-US

// Get Popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${baseUrl}movie/popular?${apiKey}${language}`);
  return resp.data.results;
};

// Get Upcoming movies
export const getUpComingMovies = async () => {
  const resp = await axios.get(`${baseUrl}movie/upcoming?${apiKey}${language}`);
  return resp.data.results;
};

// Get Popular TV
export const getPopularTv = async () => {
  const resp = await axios.get(`${baseUrl}tv/popular?${apiKey}${language}`);
  return resp.data.results;
};
