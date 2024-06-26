import React, { useRef } from 'react'
import lang from '../utils/languageContants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { addGptMovies, toggleGptLimitModal } from '../redux/slices/gptSlice'
import GptLimitModal from './GptLimitModal'
import { API_OPTIONS } from '../utils/constants'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
    const showGptLimitModal = useSelector(store => store.gpt.gptLimitModal);
    
    const searchText = useRef("");
    
    const dispatch = useDispatch();

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
        try {
            const gptQuery =
                "Act as a Movie Recommendation system and suggest some movies for the query : " +
                searchText.current.value +
                ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

            // const gptResults = await openai.chat.completions.create({
            //     messages: [{
            //         role: "user",
            //         content: gptQuery
            //     }],
            //     model: "gpt-3.5-turbo",
            // });

            // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

            //* Dummy Api Response
            const response = "Avengers, Thor, Flash, Captain America, King Kong";

            const gptMovies = response.split(",");

            //console.log(gptMovies);

            const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

            const tmdbResult = await Promise.all(promiseArray);
 
            dispatch(addGptMovies({
                movieNames: gptMovies,
                movieResult: tmdbResult
            }))
        }
        catch (err) {
            console.log("Error Occured While Fetching the Movies");
            console.log(err.message);
            dispatch(toggleGptLimitModal());
        }
    }

    return (
        <div className="pt-[40%] md:pt-[10%] flex justify-center">
            <form
                className="w-full md:w-1/2 bg-black bg-opacity-70 grid grid-cols-12"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className=" p-4 m-4 col-span-8 md:col-span-9"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="col-span-4 md:col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>

            {
                showGptLimitModal && <GptLimitModal />
            }
        </div>
    )
}

export default GptSearchBar