import { API_OPTIONS, GET_POPULAR_MOVIES_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        try {
            const data = await fetch(GET_POPULAR_MOVIES_API, API_OPTIONS);
            const json = await data.json();

            dispatch(addPopularMovies(json?.results));
        }
        catch (err) {
            //console.log("Not able to fetch Popular Movies");
        }
    }

    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;