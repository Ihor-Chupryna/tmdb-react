import { apiService } from "./apiService";
import { urls } from "../configs/urls";

const genresService = {
    getGenresList: () => apiService.get(urls.genres)
}

export { genresService }