import { API_OPTIONS, GET_UPCOMING_MOVIES_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();
    
    const getUpcomingMovies = async () => {
        const data = await fetch(GET_UPCOMING_MOVIES_API, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addUpcomingMovies(json?.results));
    }
    
    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;