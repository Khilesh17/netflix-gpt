import { API_OPTIONS, GET_POPULAR_MOVIES_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const usePopularMovies = () => {
    
    const dispatch = useDispatch();
    
    const getPopularMovies = async () => {
        const data = await fetch(GET_POPULAR_MOVIES_API, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addPopularMovies(json?.results));
    }
    
    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;