import React from 'react';
import logo from '../assets/logo2.png';
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md fixed w-full z-50 top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="w-40 lg:w-48" src={logo} alt="Company Logo" />
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="/login" className="px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
                                <RiContactsFill />
                                <span className='text-sm'>Login</span>
                            </a>
                            <div className="flex gap-1 flex-col items-center max-sm:hidden">
                                <a href="/contact" className="text-gray-600 hover:text-blue-500 underline transition duration-300 ease-in-out transform hover:scale-105 text-sm">
                                    Contact Us
                                </a>
                                <span className="text-sm text-gray-600">+91 9900887766</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;