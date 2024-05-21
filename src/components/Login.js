import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/userSlice';
import { PROFILE_LOGO } from '../utils/constants';



const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: PROFILE_LOGO
                    }).then(() => {
                        const {
                            uid,
                            email,
                            displayName,
                            photoURL
                        } = auth.currentUser;

                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                        navigate("/browse")
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });

                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(errorCode + " : " + errorMessage);
                    setErrorMessage("User Already Registered. Please Sign in.")
                });
        }
        else {
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + " : " + errorMessage);
                    setErrorMessage("Wrong Email and Password.")
                });
        }
    }

    return (
        <div className='bg-movies bg-cover  bg-opacity-50 min-h-[100vh]'>
            <Header />

            <div className='py-28'>

                <form className="w-8/12 lg:w-5/12 p-12 bg-black mx-auto text-white rounded-lg bg-opacity-80">

                    <h1 className="font-bold text-3xl py-4">
                        {
                            isSignInForm
                                ? "Sign In"
                                : "Sign Up"
                        }
                    </h1>

                    {
                        !isSignInForm && <input
                            ref={name}
                            type="text"
                            placeholder='Full Name'
                            className="p-4 my-4 w-full bg-gray-700"
                        />
                    }

                    <input
                        ref={email}
                        type="email"
                        placeholder='Email Address'
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder='Password'
                        className="p-4 my-4 w-full bg-gray-700"
                    />

                    <p className="text-red-500 font-semibold text-lg py-2">
                        {errorMessage}
                    </p>

                    <button
                        className="p-4 my-6 bg-red-700 w-full rounded-lg"
                        onClick={handleSubmit}
                    >
                        {
                            isSignInForm
                                ? "Sign In"
                                : "Sign Up"
                        }
                    </button>

                    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                        {
                            isSignInForm
                                ? (<p className='text-slate-300'>New to Netflix ? <span className='font-bold text-slate-100'>Sign Up Now</span></p>)
                                : (<p className='text-slate-300'>Already registered ? <span className='font-bold text-slate-100'>Sign In Now</span></p>)
                        }

                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login