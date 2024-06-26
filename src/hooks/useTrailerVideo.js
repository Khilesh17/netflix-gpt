import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../redux/slices/moviesSlice';
import { useEffect } from 'react';

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);


    const getMovieVideo = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filteredTrailer = json?.results.filter(video => video.type === "Trailer");

        const trailer = filteredTrailer.length
            ? filteredTrailer[0]
            : json.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieVideo();
    }, []);
}

export default useTrailerVideo;