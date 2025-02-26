import React from 'react'
import taskGoBg from '../assets/taskgo-bg.webp';

const Companies = () => {

    const containerStyle = {
        position: 'relative',
        backgroundImage: `url(${taskGoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem 0',
    };

    return (
        <>
            <div className='relative companies-container' style={containerStyle}>
                <div className="max-w-7xl mx-auto p-4">
                    <div className='text-center mt-10 lg:mt-0'>
                        <h2 className='text-3xl md:text-6xl text-center font-bold mb-6'>We bring companies and customers together</h2>
                        <p className=' mb-6 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui temporibus minima harum deleniti sint impedit assumenda aperiam ratione consequatur totam, error illum. Vero ipsam modi earum necessitatibus sed voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut quisquam molestias? Doloremque vel animi nemo fuga facere rerum consectetur beatae aliquid, laudantium nulla id repellendus unde eaque similique sapiente!</p>
                        <button className='px-4 py-2 bg-[#229ea6] text-white rounded hover:bg-[#000000] transition duration-300 ease-in-out transform hover:scale-105'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies