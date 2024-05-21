import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MovieTrailer from './MovieTrailer';
import MoviesContainer from './MoviesContainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MovieTrailer />
      <MoviesContainer />
    </div>
  )
}

export default Browse