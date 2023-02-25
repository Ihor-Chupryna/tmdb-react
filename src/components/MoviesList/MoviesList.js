import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { movieActions } from "../../redux/slices";
import { MovieListCard } from "../MovieListCard/MovieListCard";

const MoviesList = () => {
    const dispatch = useDispatch();
    const { movies, loading } = useSelector(state => state.movieReducer);
    const { state } = useLocation();

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
        dispatch(movieActions.getAll({ genreId: id, page: 2 }))
    }, [dispatch, id]);

    return (
        <div onClick={()=> dispatch(movieActions.cleanArray([]))}>
            {loading && <h2>LOADING....</h2>}
            <h1>{genres}</h1>
            {movies.map(value => <MovieListCard key={value.id} movie={value}/>)}
        </div>
    );
};

export { MoviesList };