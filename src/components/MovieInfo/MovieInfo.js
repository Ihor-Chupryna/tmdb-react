import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { movieActions } from "../../redux/slices";
import css from './MovieInfo.module.css';

const MovieInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movieId } = useParams();
    const { movieById, loading } = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getById({ movieId }))
    }, [dispatch, movieId])

    return (
        <div>
            {loading && <h2 className={css.movieInfoLoading}>LOADING...</h2>}

            {/*{errors && <h1 style={{*/}
            {/*    height: '90vh',*/}
            {/*    width: '99vw',*/}
            {/*    position: 'absolute',*/}
            {/*    top: '60px',*/}
            {/*    background: 'white'*/}
            {/*}}>{errors.status_message}</h1>}*/}

            {movieById && <div>
                <h1>{movieById.original_title}</h1>
            </div>}
            <button style={{position: 'absolute', right: '15px', top: '100px'}} onClick={()=> navigate(-1)}>BACK</button>
        </div>
    );
};

export { MovieInfo };