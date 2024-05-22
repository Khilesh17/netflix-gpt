import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div className='min-h-screen bg-movies bg-cover'>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch