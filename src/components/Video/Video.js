import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from "../../redux/slices";

const Video = ({ movieId }) => {
    const { trailer } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getVideos({ movieId }))
    }, [dispatch, movieId])

    return (
        <div>
            {trailer && <div>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={`http://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=0&origin=http://example.com`}/>
            </div>}
        </div>
    );
};

export { Video };