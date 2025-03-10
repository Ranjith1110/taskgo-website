import React, { useState } from 'react';
import dashboard1 from '../assets/dashboard-1.png';
import dashboard2 from '../assets/dashboard-2.png';
import dashboard3 from '../assets/dashboard-3.png';
import dashboardlogin from '../assets/dashboardlogin.png';

const DashboardImg = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    // Function to open the modal
    const openModal = (imgSrc) => {
        setSelectedImg(imgSrc);
        setIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
        setSelectedImg(null);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto p-4 my-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Dashboard Images</h2>
                {/* Two-column images */}
                <div className="dashboardimg grid grid-cols-12 gap-3">
                    <div className="col-span-6 flex justify-center">
                        <img
                            className="w-3/4 cursor-pointer"
                            src={dashboardlogin}
                            alt="Dashboard"
                            onClick={() => openModal(dashboardlogin)}
                        />
                    </div>
                    <div className="col-span-6 flex justify-center">
                        <img
                            className="w-3/4 cursor-pointer"
                            src={dashboard1}
                            alt="Dashboard"
                            onClick={() => openModal(dashboard1)}
                        />
                    </div>
                    <div className="col-span-6 flex justify-center">
                        <img
                            className="w-3/4 cursor-pointer"
                            src={dashboard2}
                            alt="Dashboard"
                            onClick={() => openModal(dashboard2)}
                        />
                    </div>
                    <div className="col-span-6 flex justify-center">
                        <img
                            className="w-3/4 cursor-pointer"
                            src={dashboard3}
                            alt="Dashboard"
                            onClick={() => openModal(dashboard3)}
                        />
                    </div>
                </div>


                {/* Fullscreen Modal */}
                {isOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center z-50"
                        onClick={closeModal} // Click outside to close
                    >
                        <button
                            className="absolute top-5 right-5 text-white text-3xl bg-gray-800 px-4 py-2 rounded-full"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            className="max-w-[80%] object-contain"
                            src={selectedImg}
                            alt="Fullscreen Dashboard"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default DashboardImg;
