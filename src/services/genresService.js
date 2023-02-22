import { apiService } from "./apiService";
import { urls } from "../configs/urls";

const genresService = {
    getGenresList: () => apiService.get(urls.genres),
    getMoviesByGenre: (page = 1, genreId) => apiService.get(urls.movies, { params: { with_genres: genreId, page } })
}

export { genresService }