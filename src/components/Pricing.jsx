import React from 'react';

const Pricing = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 my-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-3xl font-bold mb-4">$10/month</p>
                    <button className="px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105">
                        Choose Plan
                    </button>
                </div>
                <div className="bg-zinc-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">Standard Plan</h3>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-3xl font-bold mb-4">$20/month</p>
                    <button className="px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105">
                        Choose Plan
                    </button>
                </div>
                <div className="bg-zinc-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-3xl font-bold mb-4">$30/month</p>
                    <button className="px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105">
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;