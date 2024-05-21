import React, { useEffect } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../redux/slices/userSlice'


const Body = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //User Signed in
                const {
                    uid,
                    email,
                    displayName,
                    photoURL
                } = user;

                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))

                navigate("/browse");
            }
            else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <Outlet />
    )
}

export default Body