import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MoviesContainer = () => {

  const movies = useSelector(state => state.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 lg:-mt-48 pl-4 lg:pl-12 static lg:relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Upcoming"}
            movies={movies.upcomingMovies}
          />
          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Top Rated"}
            movies={movies.topRatedMovies}
          />
        </div>
      </div>
    )
  )
}

export default MoviesContainer