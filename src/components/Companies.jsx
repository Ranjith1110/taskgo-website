import React from 'react';
import taskGoBg from '../assets/taskgo-bg.webp';
import logo from '../assets/logo2.png';
// import company1 from '../assets/company1.jpg'; 
// import company2 from '../assets/company2.jpg'; 
// import company3 from '../assets/company3.jpg'; 

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
            <div className='h-3/4'>
                <div className="max-w-5xl mx-auto p-4">
                    <div className='text-center p-4'>
                        <div className="relative bg-transparent text-center text-black">
                            {/* <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/20 to-transparent rounded-full"></div>
                            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent rounded-full"></div> */}
                            <h2 className='text-3xl md:text-5xl text-center font-bold p-7'>Brands that trust us</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-zinc-100 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                            <img src={logo} alt="Company 1" className="w-2/4 py-8 h-auto object-contain" />
                        </div>
                        <div className="bg-zinc-100 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                            <img src={logo} alt="Company 2" className="w-2/4 py-8 h-auto object-contain" />
                        </div>
                        <div className="bg-zinc-100 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                            <img src={logo} alt="Company 3" className="w-2/4 py-8 h-auto object-contain" />
                        </div>
                    </div>
                </div>
                {/* <div className="max-w-7xl h-screen mt-10 flex items-center justify-center mx-auto">
                    <iframe
                        className="w-full h-full"
                        src="https://app.fabric.microsoft.com/reportEmbed?reportId=61a85e65-f483-4562-8e3b-d89421ca5b3e&autoAuth=true&ctid=be039413-6351-4884-94f9-697882454fe4"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    ></iframe>
                </div>
                <div className="max-w-7xl h-screen mt-10 flex items-center justify-center mx-auto">
                    <iframe
                        className="w-full h-full"
                        src="https://app.fabric.microsoft.com/reportEmbed?reportId=7599910b-cfa1-4d52-b311-8bd35b3854c7&autoAuth=true&ctid=be039413-6351-4884-94f9-697882454fe4"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    ></iframe>
                </div> */}
            </div>
        </>
    );
};

export default Companies;