import React from "react";
import Basket from '../../../Image/Clubs/Shutterone/ShutterBasket.jpg';
import Camera1 from '../../../Image/Clubs/Shutterone/ShutterCameraScreen.JPG';
import Camera2 from '../../../Image/Clubs/Shutterone/ShutterCamScenaric.jpg';
import Standing from '../../../Image/Clubs/Shutterone/ShutterCamStand.jpg';
import CheckCam from '../../../Image/Clubs/Shutterone/ShutterCheckCam.JPG';
import F1RST from '../../../Image/Clubs/Shutterone/ShutterF1RST.JPG';
import Light1 from '../../../Image/Clubs/Shutterone/ShutterLight.JPG';
import Light2 from '../../../Image/Clubs/Shutterone/ShutterLighting.JPG';
import Actor from '../../../Image/Clubs/Shutterone/ShutterPhoto.JPG';
import Piano from '../../../Image/Clubs/Shutterone/ShutterPiano.JPG';
import Dance from '../../../Image/Clubs/Shutterone/ShutterTari.JPG';
import Voli from '../../../Image/Clubs/Shutterone/ShutterVoli.jpg';

const Portofolio = () => {
    return (
        <div class='px-10 xl:px-0 mx-auto mt-[5rem] relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%]'>
            <div class='border bg-gray-100 bg-white rounded-3xl shadow-2xl'>
                <h2 class='border rounded-xl bg-white shadow-md mb-6 py-3 text-center font-bold text-3xl'>Portofolio</h2>
                <div class='mt-5 md:mt-10 md:mb-10 md:mx-10 px-5 pb-5 h-[20rem] sm:h-[40rem] grid grid-cols-2 gap-2 md:gap-6 overflow-auto'>
                    <img class='relative h-full w-full' src={Basket} alt='Basket'/>
                    <img class='relative h-auto w-full' src={Light1} alt='2 Member Mengatur Lighting'/>
                    <img class='relative h-auto w-full' src={Piano} alt='Piano'/>
                    <img class='relative h-auto w-full' src={Standing} alt='Member bekerja'/>
                    <div class='relative col-start-1 row-start-3'>
                        <img class='relative h-auto w-full' src={CheckCam} alt='Member Memeriksa Hasil Foto'/>
                        <img class='relative h-auto w-full mt-2 md:mt-6' src={Light2} alt='Member Mengatur Lighting'/>
                    </div>
                    <img class='relative h-full w-full col-start-2 row-start-3' src={Voli} alt='Bermain Voli'/>
                    <img class='relative h-auto w-full row-end-6' src={Camera2} alt='Camera Scenaric Version'/>
                    <img class='relative h-full w-full row-span-2 row-start-4 col-start-1 my-auto' src={F1RST} alt='F1RST'/>
                    <img class='relative h-auto w-full' src={Camera1} alt='Camera'/>
                    <img class='relative h-auto w-full' src={Actor} alt='Aktor'/>
                    <img class='relative h-auto w-full' src={Dance} alt='Menari'/>
                </div>
            </div>
        </div>
    );
};

export default Portofolio;