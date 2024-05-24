import React from 'react'

const VpnError = () => {

    const handleRefresh = () => {
        window.location.reload();
    }

    return (
        <div className='min-h-screen bg-movies flex justify-center items-center'>
            <div className='bg-black text-white p-12 rounded-md opacity-80 text-center w-11/12 md:w-9/12'>
                <h1 className='font-bold text-4xl text-red-500'>Vpn Problem</h1>
                <p className='font-semibold mt-6 text-2xl'>TMDB Api is Currently Blocked in India. So please Use Vpn to access the Netflix-GPT</p>
                <button
                    onClick={handleRefresh}
                    className='font-bold text-white bg-red-600 hover:bg-red-600 px-4 py-3 rounded-md mt-6 text-xl transition-all'>
                    Refresh
                </button>
            </div>
        </div>
    )
}

export default VpnError