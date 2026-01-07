import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: import.meta.env.VITE_LANGUAGE || "pt-BR",
  },
});

export default api;
