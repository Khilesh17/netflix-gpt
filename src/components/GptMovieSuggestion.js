import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptMovieSuggestion = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="md:pt-4 mt-6 md:mt-8 bg-black text-white bg-opacity-90">
      <div className='w-11/12 mx-auto'>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion