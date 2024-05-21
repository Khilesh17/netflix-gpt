import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { SlInfo } from "react-icons/sl";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">

            <h1 className="text-3xl md:text-6xl font-bold">
                {title}
            </h1>
            <p className="hidden lg:inline-block pt-6 text-lg w-2/4">
                {overview}
            </p>
            <div className="flex gap-4 my-4 pt-2">
                <button className="flex justify-center items-center gap-2 bg-white text-black text-xl px-6 py-3 rounded-lg hover:bg-opacity-80">
                    <FaPlay /> Play
                </button>
                <button className="bg-gray-500 text-white bg-opacity-50 flex justify-center items-center gap-2 text-xl px-6 py-3 rounded-lg hover:bg-opacity-60">
                    <SlInfo /> More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle