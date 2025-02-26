import React from 'react'
import taskGoBg from '../assets/taskgo-bg.webp';

const Companies = () => {

    const containerStyle = {
        position: 'relative',
        backgroundImage: `url(${taskGoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <div className='mb-20' style={containerStyle}>
                <div className="max-w-7xl mx-auto p-4">
                    <div className='text-center p-4 mt-10 lg:mt-0'>
                        <h2 className='text-3xl md:text-5xl text-center font-bold mb-6'>We bring companies and customers together</h2>
                        <p className=' mb-6 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui temporibus minima harum deleniti sint impedit assumenda aperiam ratione consequatur totam, error illum. Vero ipsam modi earum necessitatibus sed voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut quisquam molestias? Doloremque vel animi nemo fuga facere rerum consectetur beatae aliquid, laudantium nulla id repellendus unde eaque similique sapiente!</p>
                        <button className='px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105'>Learn More</button>
                        <div class="relative bg-transparent text-center text-black">
                            <div class="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/20 to-transparent rounded-full"></div>
                            <div class="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent rounded-full"></div>
                            <h2 className='text-3xl md:text-4xl text-center font-bold mb-6 mt-12 p-7'>Over 100, companies, both big and small, are growing their business with TaskGO.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies