import { apiService } from "./apiService";
import { urls } from "../configs/urls";

const moviesService = {
    getAll: (page = 1) => apiService.get(urls.movies, { params: { page } }),
    getById: (movieId) => apiService.get(`${urls.movie}/${movieId}`)
}

export { moviesService }