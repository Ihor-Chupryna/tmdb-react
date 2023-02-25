import { apiService } from "./apiService";
import { urls } from "../configs/urls";

const moviesService = {
    getAll: (genreId = null, page = 1) => apiService.get(urls.movies, { params: { with_genres: genreId, page } }),
    getById: (movieId) => apiService.get(`${urls.movie}/${movieId}`),
    searchByKeyword: (text) => apiService.get(urls.search, {params: {query: text}})
}

export { moviesService }