import { useNavigate } from "react-router-dom";

import css from './MovieListCardStyle.module.css';

const MovieListCard = ({ movie }) => {
    const { original_title, id } = movie;
    const navigate = useNavigate();

    const enter = (e) => {
        e.target.className = css.red

    }
    const out = (e) => {
        e.target.className = css.none
        // console.log(e)
    }

    return (
        <div>
            {movie && <div onClick={() => navigate(id.toString(), {state: movie})}>
                <div onMouseEnter={enter} onMouseOut={out}>{original_title}</div>
            </div>}
        </div>
    );
};

export { MovieListCard };