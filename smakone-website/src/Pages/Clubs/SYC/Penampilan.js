import React from 'react' 
import OpenTab from "../../../Image/Clubs/SYC/opentab.png";
import TentangSYC from "../../../Image/Clubs/SYC/TentangSYC.png";


const Penampilan = () => {

    return(
        <div className="container mx-auto mt-10 md:mt-6 px-8 md:px-16 lg:px-24 xl:px-32 pt-10 justify-center">
            
            <div>
                <h2 className="mt-14 text-xl md:text-2xl xl:text-2xl font-semibold text-center">Clubs</h2>
                <h1 className="text-3xl md:text-5xl xl:text-5xl font-black text-center">Smukiez Choir</h1>
                <img src={TentangSYC} className="object-cover h-auto md:h-[20rem] lg:h-[32rem] xl:h-[30rem] max-w-auto mx-auto rounded-3xl my-6"/>
                <p className="text-lg  mt-3 text-justify xl:px-10" >
                SYC atau Smukiez Youth Chambers adalah klub orchestra SMAK 1 Penabur Jakarta yang memainkan berbagai genre lagu, meliputi klasik, pop, OST, game OST, dan lainnya. Dalam SYC, kita tidak hanya memainkan musik, tetapi juga mempelajari cara menciptakan lagu, mengaransemen, dan melatih/conducting latihan dan penampilan.
                </p>
            </div>
            
            <div className="mt-12">
                <h1 className="font-bold text-3xl text-center md:text-5xl">Video Penampilan SYC</h1>
            <div className=" mx-auto md:px-12 lg:px-16 xl:px-24">

                <div className="relative overflow-hidden pt-[56.25%] mt-4">
                    <iframe className="absolute top-0 left-0 w-full h-full "
                        src="https://www.youtube.com/embed/8cZoz6kebYM" 
                        title="SMUKIEZ YOUTH CHAMBER -Mini concert.  Pada pertemuan Ortu kelas X dan XI. 20 Juli 2024." 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                     >
                    </iframe>
                </div>

                <div 
                    className="flex items-center mt-3 mb-12 cursor-pointer group" 
                    onClick={() => window.open('https://drive.google.com/drive/folders/1x9VAScghbzVWnsY8PIQXvi5kHzXEY7ZD?usp=drive_link', '_blank')}
                >
                
                    <h2 className="font-bold text-md text-left md:text-xl relative">
                        Kumpulan Skor SYC
                    </h2>
                    <img src={OpenTab} className="h-4 ml-2" alt="Open new tab" />
                </div>
            </div>
            </div>
            
           
            
    </div>
    );
};



export default Penampilan