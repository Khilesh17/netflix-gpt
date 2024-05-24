import { API_OPTIONS, GET_UPCOMING_MOVIES_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);


    const getUpcomingMovies = async () => {
        try {
            const data = await fetch(GET_UPCOMING_MOVIES_API, API_OPTIONS);
            const json = await data.json();

            dispatch(addUpcomingMovies(json?.results));
        }
        catch (err) {
            //console.log("Not able to fetch Upcoming Movies");
        }
    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;