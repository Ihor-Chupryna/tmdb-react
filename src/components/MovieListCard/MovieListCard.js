import { useNavigate } from "react-router-dom";
import { Rating } from "@mantine/core";

import css from './MovieListCard.module.css';
import { urls } from "../../configs";

const MovieListCard = ({ movie }) => {
    const { original_title, id, poster_path, vote_average } = movie;
    const navigate = useNavigate();

    return (
        <div className={css.movieContainer}>
            {movie && <div onClick={() => navigate(id.toString(), { state: movie })}>
                <img src={urls.images(300, poster_path)} alt="movie poster"/>
                <Rating value={vote_average} fractions={1} count={10} size="xs" readOnly/>
                <p>{original_title}</p>
            </div>}
        </div>
    );
};

export { MovieListCard };