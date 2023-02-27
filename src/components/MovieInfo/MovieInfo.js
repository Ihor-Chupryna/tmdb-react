import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mantine/core";

import css from './MovieInfo.module.css';
import { movieActions } from "../../redux/slices";
import { Video } from "../Video/Video";
import { urls } from "../../configs";

const MovieInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movieId } = useParams();
    const { movieById: movie, loading, themeTrigger } = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getById({ movieId }))
    }, [dispatch, movieId])

    return (
        <div className={css.movieContainer}>
            {loading &&
                <h2 className={`${css.movieInfoLoading} ${themeTrigger ? css.loadingDark : css.loadingLight}`}>LOADING...</h2>}

            {movie && <div>
                <div className={css.movieInfo}>
                    <img src={urls.images(300, movie.poster_path)} alt="movie poster"/>
                    <div className={css.description}>
                        <h1>{movie.original_title}</h1>
                        <p>{movie.overview}</p>
                        <div className={css.rating}><Rating value={movie.vote_average} fractions={10} count={10}
                                                            size="xl" readOnly/>
                            <h3>{movie.vote_average}</h3></div>
                        <div className={css.genresContainer}>{movie.genres.map(value => <div className={css.genre}
                                                                                             key={value.id}>{value.name}</div>)}</div>
                        <div className={css.otherInfo}>
                            <p>Budget: {movie.budget}</p>
                            <p>Time: {movie.runtime} min</p>
                            <p>Release: {movie.release_date}</p>
                            <p>Web Site: <Link
                                to={movie.homepage}>https://www.dreamworks.com/movies/puss-in-boots-the-last-wish</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={css.mediaContainer}>
                    <div className={css.companies}>
                        <h3>Production Companies</h3>
                        {movie.production_companies.map(value => <div className={css.company}>
                        <div>Name: {value.name} </div>
                        <div>Country: {value.origin_country}</div>
                        </div>)}</div>

                    <img src={urls.images(500, movie.backdrop_path)} alt="movie poster"/>
                    <Video movieId={movieId}/>
                </div>
            </div>}

            <button onClick={() => navigate('/movies')}>BACK</button>
        </div>
    );
};


export { MovieInfo };