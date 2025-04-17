import React from 'react' 

import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'
import Basket from '../../Image/Clubs/Shutterone/ShutterBasket.jpg'
import Camera1 from '../../Image/Clubs/Shutterone/ShutterCameraScreen.JPG'
import Camera2 from '../../Image/Clubs/Shutterone/ShutterCamScenaric.jpg'
import Standing from '../../Image/Clubs/Shutterone/ShutterCamStand.jpg'
import CheckCam from '../../Image/Clubs/Shutterone/ShutterCheckCam.JPG'
import F1RST from '../../Image/Clubs/Shutterone/ShutterF1RST.JPG'
import Light1 from '../../Image/Clubs/Shutterone/ShutterLight.JPG'
import Light2 from '../../Image/Clubs/Shutterone/ShutterLighting.JPG'
import Actor from '../../Image/Clubs/Shutterone/ShutterPhoto.JPG'
import Piano from '../../Image/Clubs/Shutterone/ShutterPiano.JPG'
import Dance from '../../Image/Clubs/Shutterone/ShutterTari.JPG'
import Voli from '../../Image/Clubs/Shutterone/ShutterVoli.jpg'
import GroupPic from '../../Image/Clubs/Shutterone/Shutterone.jpg'
import Logo from '../../Image/Clubs/Shutterone/ShutterLogo.gif'

const Shutterone = () => {
    return(
        <div>
            <Nav/>
            <p class='mt-20 pt-10 text-center font-bold text-xl'>Clubs</p>
            <h1 class='-mt-5 text-center font-bold text-5xl'>Shutterone</h1>
            <div class='container mx-auto mt-6'>
                <div class='relative mx-10 lg:mx-20 shadow-2xl rounded-b-3xl'>
                    <div class='relative overflow-hidden rounded-t-3xl'>
                        <img class='container h-[400px] md:h-[600px] lg:h-[1000px] object-cover object-[100%_70%] md:object-[100%_60%]' src={GroupPic} alt='Group'/>
                        <div class='absolute inset-x-0 bottom-0 w-full h-[25px] bg-gradient-to-t from-black to-transparent'></div>
                    </div>
                    <div class='relative overflow-hidden'>
                        <img class='container h-[90px] md:h-[150px] object-cover object-center mx-auto' src={Logo} alt='Playback Logo Animation'/>
                        <div class='absolute inset-x-0 bottom-0 w-full h-[10px] bg-gradient-to-t from-white to-black'></div>
                    </div>
                    <p class='text-lg md:text-xl -mt-3 p-5 text-center'>Shutterone adalah organisasi kreatif di bawah naungan OSIS SMAK 1 PENABUR Jakarta yang menjadi wadah bagi siswa-siswi berbakat dalam video editing, medokumentasikan foto dan video dari acara-acara di SMAK1.</p>
                </div>
                <div class='border bg-gray-100 mt-20 mx-10 lg:mx-20 bg-white rounded-3xl shadow-2xl'>
                    <h2 class='border rounded-xl bg-white shadow-md mb-6 py-3 text-center font-bold text-3xl'>Portofolio</h2>
                    <div class='mt-5 md:mt-10 md:mb-10 md:mx-10 px-5 pb-5 grid grid-cols-2 gap-2 md:gap-6'>
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
            <Footer/>
        </div>
    )
}

export default Shutterone