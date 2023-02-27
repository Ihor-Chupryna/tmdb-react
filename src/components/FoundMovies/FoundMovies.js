import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { movieActions } from "../../redux/slices";
import css from './FoundMovies.module.css';

const FoundMovies = () => {
    const { foundMovies } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    return (
        <div
            className={css.foundMoviesContainer}
            onClick={() => dispatch(movieActions.cleanArray([]))}>
            {foundMovies.map(value => <div key={value.id}>
                <NavLink to={'#'}> {value.name} </NavLink></div>)}
        </div>
    );
};

export { FoundMovies };