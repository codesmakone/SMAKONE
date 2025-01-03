import React from 'react' 
import InstagramEmbed from '../../Clubs/SYC/InstagramEmbed'
import OpenTab from "../../../Image/Clubs/SYC/opentab.png";
import TentangSYC from "../../../Image/Clubs/SYC/TentangSYC.png";


const Penampilan = () => {

    return(
        <div className="container mx-auto mt-2 md:mt-6 px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center">
            
            <div>
                <h1 className="font-bold text-3xl text-center md:text-5xl">Tentang SYC</h1>
                <img src={TentangSYC} className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[34rem] max-w-auto mx-auto rounded-3xl my-6"/>
                <p className="text-lg  mt-3 text-justify xl:px-10" >
                SYC atau Smukiez Youth Chambers adalah klub orchestra SMAK 1 Penabur Jakarta yang memainkan berbagai genre lagu, meliputi klasik, pop, OST, game OST, dan lainnya. Dalam SYC, kita tidak hanya memainkan musik, tetapi juga mempelajari cara menciptakan lagu, mengaransemen, dan melatih/conducting latihan dan penampilan.
                </p>
            </div>
            
            <div className="mt-12">
                <h1 className="font-bold text-3xl text-center md:text-5xl">Video Penampilan SYC</h1>

                <div className="relative overflow-hidden pt-[56.25%] mt-4 ">
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
                
                    <h2 className="font-bold text-md text-left md:text-2xl relative">
                        Kumpulan Skor SYC
                    </h2>
                    <img src={OpenTab} className="h-4 ml-2" alt="Open new tab" />
                </div>
            </div>
            
            <div>
                <h1 className="font-bold text-3xl text-center md:text-5xl">Lihat Lebih Banyak!</h1>
                <InstagramEmbed url="https://www.instagram.com/p/DBWLKTSSI6S/?utm_source=ig_embed&utm_campaign=loading" />
            </div>
            
    </div>
    );
};



export default Penampilan