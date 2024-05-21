import { API_OPTIONS, GET_NOWPLAYING_MOVIES_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();
    
    const getNowPlayingMovies = async () => {
        const data = await fetch(GET_NOWPLAYING_MOVIES_API, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addNowPlayingMovies(json?.results));
    }
    
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;