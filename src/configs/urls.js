const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    search: '/search/keyword',
    genres: '/genre/movie/list',
    images: (width = 300, image) => `https://image.tmdb.org/t/p/w${width}/${image}`
}

export { baseURL, urls }