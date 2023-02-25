import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { movieActions } from "../../redux/slices";
import css from './GenresList.module.css';

const GenresList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { genres } = useSelector(state => state.movieReducer);

    const getGenresList = () => {
        dispatch(movieActions.getGenres())
    };

    return (
        <div>
            <button onClick={() => getGenresList()}>Genres</button>
            <div className={css.genresContainer} onClick={()=> dispatch(movieActions.cleanArray([]))}>

                {genres.map(value => <div key={value.id} onClick={()=> navigate('/movies', { state: value })}>
                        {value.name}
                </div>)}
            </div>
        </div>
    );
};

export { GenresList };