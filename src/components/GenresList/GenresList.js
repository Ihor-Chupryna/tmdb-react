import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { movieActions } from "../../redux/slices";
import css from './GenresList.module.css';

const GenresList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { genres, themeTrigger } = useSelector(state => state.movieReducer);

    const getGenresList = () => {
        dispatch(movieActions.getGenres())
    };

    return (
        <div>
            <button className={css.genresButton} onClick={() => getGenresList()}>Genres</button>
            <div className={`${css.genresContainer} ${themeTrigger ? css.darkGenres : css.lightGenres}`}
                 onClick={()=> dispatch(movieActions.cleanArray([]))}>

                {genres.map(value => <p key={value.id} onClick={()=> navigate('/movies', { state: value })}>
                        {value.name}
                </p>)}
            </div>
        </div>
    );
};

export { GenresList };