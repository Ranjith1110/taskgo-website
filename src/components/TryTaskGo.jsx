import React from 'react';
import herobg from '../assets/hero-bg.jpg';
import { FaExternalLinkAlt } from "react-icons/fa";

const TryTaskGo = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 my-10 lg:my-28 bg-zinc-100 rounded shadow">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-20">Try TaskGo for free. No credit card required, no software to install.</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
              <span>See Pricing</span>
              <FaExternalLinkAlt />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={herobg} alt="Sample" className="w-full md:w-3/4 h-auto object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default TryTaskGo;