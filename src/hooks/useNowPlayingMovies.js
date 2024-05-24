import { API_OPTIONS, GET_NOWPLAYING_MOVIES_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies, showBrowsePageError } from '../redux/slices/moviesSlice'
import { useEffect } from 'react';


const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    
    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(GET_NOWPLAYING_MOVIES_API, API_OPTIONS);
            const json = await data.json();
            
            dispatch(addNowPlayingMovies(json?.results));
        }
        catch (err) {
            //console.log("Not able to Fetch Now playing Movies")
            dispatch(showBrowsePageError());
        }
    }
    
    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;