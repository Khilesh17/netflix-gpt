import React from 'react'
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {

    const navigate = useNavigate();
    
    const user = useSelector(state => state.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }

    return (
        <div className="w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img
                className="w-44"
                src={NETFLIX_LOGO}
                alt="logo"
            />
            {user && (
                <div className="flex p-2 gap-3 items-center ">
                    <img
                        className="w-14 h-14"
                        alt="usericon"
                        src={user?.photoURL}
                    />
                    <button onClick={handleSignOut} className="font-bold text-white bg-red-500 px-4 py-3 rounded-md">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header