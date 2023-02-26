import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pagination } from "@mantine/core";

import { movieActions } from "../../redux/slices";
import { MovieListCard } from "../MovieListCard/MovieListCard";
import css from './MoviesList.module.css';

const MoviesList = () => {
    const dispatch = useDispatch();
    const { movies, loading, themeTrigger } = useSelector(state => state.movieReducer);
    const { state } = useLocation();
    const [page, setPage] = useState(1);

    let id
    let genres
    if (state) {
        id = state.id
        genres = state.name
    } else {
        id = null
        genres = 'All genres'
    }

    useEffect(() => {
        dispatch(movieActions.getAll({ genreId: id, page: page }))
    }, [dispatch, id, page]);

    return (
        <div className={css.mainContainer} onClick={() => dispatch(movieActions.cleanArray([]))}>
            {loading &&
                <h2 className={`${css.moviesLoading} ${themeTrigger ? css.moviesLoadingDark : css.moviesList}`}>LOADING....</h2>}
            <h1>{genres}</h1>
            <div className={css.moviesList}>{movies.map(value => <MovieListCard key={value.id} movie={value}/>)}</div>
            <div className={css.pagination}><Pagination page={page} position="center" size="md" color='gray'
                                                        onChange={setPage} total={500}/></div>
        </div>
    );
};

export { MoviesList };