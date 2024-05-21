import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MovieTrailer = () => {

    const movies = useSelector(state => state.movies?.nowPlayingMovies);

    if (movies === null) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const { id, original_title, overview } = mainMovie;

    return (
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle
                title={original_title}
                overview={overview}
            />
            <VideoBackground
                movieId={id}
            />
        </div>
    )
}

export default MovieTrailer