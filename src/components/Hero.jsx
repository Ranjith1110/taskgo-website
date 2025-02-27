import React from 'react';
import herobg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <>
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto h-screen p-4">
            <div className="md:w-1/2 p-4 flex flex-col justify-center mt-28 lg:mt-0 md:mt-0 text-left">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">Lorem, ipsum dolor sit amet consectetur</h1>
                <p className="text-lg mb-4 text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt consectetur commodi harum omnis cum ipsa maxime, soluta animi est laboriosam perspiciatis illum laudantium dolores quo distinctio deleniti dolor tempora.
                </p>
                <div className="flex text-left">
                    <button className="px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105">
                        Start Free Trial
                    </button>
                </div>
            </div>
            <div className="md:w-2/3 p-4 flex justify-center">
                <video className="w-full h-auto z-10" controls>
                    <source src="path/to/your/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <img src={herobg} alt="" className="hidden lg:block absolute top-0 right-0 w-2/5 h-auto object-cover rounded-tl-full" />
        </>
        
    );
};

export default Hero;