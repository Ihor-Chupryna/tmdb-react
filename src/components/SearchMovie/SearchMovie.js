import { createRef } from "react";
import { useDispatch } from "react-redux";

import { movieActions } from "../../redux/slices";
import { FoundMovies } from "../FoundMovies/FoundMovies";

const SearchMovie = () => {
    const dispatch = useDispatch();
    const movie = createRef();

    const searchMovie = () => {
        const keyword = movie.current.value
        movie.current.value = ' '
        dispatch(movieActions.searchByKeyword({ title: keyword }))
    }

    return (
        <div>
            <div>
                <input type={'text'} placeholder={'search movie'} name={'movie'} ref={movie}/>
                <button onClick={() => searchMovie()}>Search</button>
            </div>
            <div>
                <FoundMovies/>
            </div>
        </div>
    );
};

export { SearchMovie };