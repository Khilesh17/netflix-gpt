import { API_OPTIONS, GET_TOP_RATED_MOVIES_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
        try {
            
            const data = await fetch(GET_TOP_RATED_MOVIES_API, API_OPTIONS);
            const json = await data.json();
            
            dispatch(addTopRatedMovies(json?.results));
        }
        catch (err) {
            //console.log("Not able to fetch Top Rated Movies");
        }
    }
    
    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;