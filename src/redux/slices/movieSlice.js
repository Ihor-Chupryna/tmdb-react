import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { moviesService as genresService, moviesService } from "../../services";

const initialState = {
    movies: [],
    foundMovies: [],
    movieById: null,
    genres: [],
    themeTrigger: false,
    errors: null,
    loading: null,
    page: 1,
    videos: [],
    trailer: []
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({ genreId, page }, thunkAPI) => {
        try {
            const { data } = await moviesService.getAll(genreId, page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({ movieId }, thunkAPI) => {
        try {
            const { data } = await moviesService.getById(movieId);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchByKeyword = createAsyncThunk(
    'movieSlice/searchByTitle',
    async ({ title }, thunkAPI) => {
        try {
            const { data } = await moviesService.searchByKeyword(title);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, thunkAPI) => {
        try {
            const { data } = await genresService.getGenresList();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getVideos = createAsyncThunk(
    'movieSlice/getVideos',
    async ({ movieId }, thunkAPI) => {
        try {
            const { data } = await moviesService.getVideo(movieId);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setThemeTrigger: (state, action) => {
            state.themeTrigger = action.payload
        },
        cleanArray: (state, action) => {
            state.foundMovies = action.payload
            state.genres = action.payload
        }
    },

    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.movies = action.payload.results
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false
                state.movieById = action.payload
            })
            .addCase(getById.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(searchByKeyword.fulfilled, (state, action) => {
                state.foundMovies = action.payload.results
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.loading = false
                state.genres = action.payload.genres
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.videos = action.payload.results
                state.trailer = action.payload.results.find(value => value.type === 'Trailer')
            })
});


const { reducer: movieReducer, actions: { setThemeTrigger, cleanArray } } = movieSlice;

const movieActions = {
    getAll,
    getById,
    searchByKeyword,
    getGenres,
    getVideos,
    setThemeTrigger,
    cleanArray,
}

export { movieReducer, movieSlice, movieActions }