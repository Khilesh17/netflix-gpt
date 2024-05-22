import { API_OPTIONS, GET_TOP_RATED_MOVIES_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();
    
    const getTopRatedMovies = async () => {
        const data = await fetch(GET_TOP_RATED_MOVIES_API, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addTopRatedMovies(json?.results));
    }
    
    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;