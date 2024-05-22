import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ movie }) => {
    
    console.log(movie);
    const { poster_path } = movie;

    return (
        <div className='w-36 md:w-48 pr-4'>
            <img src={IMG_CDN_URL + poster_path} alt="poster" />
        </div>  
    )
}

export default MovieCard