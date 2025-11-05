const API_KEY = "fd499ae399643a3ffc7733ab6b3c1bb0";
const BASE_URL = "https://api.themoviedb.org/3";

export const img = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export const fetcher = (endpoint) =>
  fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-MX`)
    .then(r => r.json());