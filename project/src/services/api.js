import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTrending = async () => {
  try {
    const response = await api.get('/trending/all/day');
    return response.data;
  } catch (error) {
    console.error('Error fetching trending:', error);
    return { results: [] };
  }
};

export const fetchMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/popular', { params: { page } });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { results: [] };
  }
};

export const fetchTVShows = async (page = 1) => {
  try {
    const response = await api.get('/tv/popular', { params: { page } });
    return response.data;
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return { results: [] };
  }
};

export const fetchDetails = async (mediaType, id) => {
  try {
    const response = await api.get(`/${mediaType}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    return null;
  }
};