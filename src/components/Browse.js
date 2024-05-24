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
import VpnError from './VpnError';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const showBrowsePage = useSelector(store => store.movies.showBrowsePage);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showBrowsePage
          ? <VpnError />
          : showGptSearch
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