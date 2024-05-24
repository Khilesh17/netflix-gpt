import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleGptLimitModal } from '../redux/slices/gptSlice';

const GptLimitModal = () => {

  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(toggleGptLimitModal());
  }

  return (
    <div className='absolute top-0  bg-black text-white h-screen w-screen bg-opacity-70 flex justify-center items-center'>
      <div className='w-10/12 md:w-7/12 text-center bg-black p-8 md:p-14 -mt-40 md:mt-0'>
        <h1 className='text-red-500 text-2xl md:text-3xl font-bold'>Oops ! Sorry for the Incosistency</h1>
        <p className='text-lg mt-5'>It seems we've reached our OpenAI API limit. Please bear with us as this feature will be unavailable for a while. We are working on resolving the issue.</p>
        <button
          onClick={closeModalHandler}
          className='font-bold text-white bg-red-600 hover:bg-red-600 px-8 py-3 rounded-md mt-6 text-xl transition-all'>
          Close
        </button>
      </div>
    </div>
  )
}

export default GptLimitModal