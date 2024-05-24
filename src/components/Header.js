import React from 'react'
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../redux/slices/gptSlice';
import { changeLanguage } from '../redux/slices/configSlice';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (event) => {
        dispatch(changeLanguage(event.target.value))
    }

    return (
        <div className="absolute w-screen px-2 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center md:justify-between overflow-x-hidden">
            <img
                className="w-44"
                src={NETFLIX_LOGO}
                alt="logo"
            />
            {user && (
                <div className="flex p-2 gap-3 items-center ">

                    {showGptSearch && <select
                        className="p-3 md:p-4 rounded-md bg-gray-700 text-white cursor-pointer outline-none"
                        onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option
                                key={lang.identifier}
                                value={lang.identifier}
                            >
                                {lang.name}
                            </option>
                        ))}
                    </select>}

                    <button
                        onClick={handleGptSearch}
                        className="font-bold text-slate-800 bg-slate-200 px-3 md:px-4 py-2 md:py-3 rounded-md hover:bg-slate-300 transition-all mr-2"
                    >
                        {
                            showGptSearch
                                ? "Home"
                                : "Search"
                        }
                    </button>

                    <img
                        className="w-12 md:w-14 h-12 md:h-14"
                        alt="usericon"
                        src={user?.photoURL}
                    />
                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white bg-red-500 hover:bg-red-600 px-3 md:px-4 py-2 md:py-3  rounded-md transition-all">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header