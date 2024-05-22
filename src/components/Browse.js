import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MovieTrailer from './MovieTrailer';
import MoviesContainer from './MoviesContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch
          ? (<GptSearch />)
          : (<>
            <MovieTrailer />
            <MoviesContainer />
          </>)
      }
    </div>
  )
}

export default Browse