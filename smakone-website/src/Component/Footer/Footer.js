import React from 'react'

// Icon for Email, Instagram, Line, and Youtube
import { BsInstagram } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
import { FaLine } from "react-icons/fa";


import LogoPenabur from "../../Image/Penabur_logo.png"
import LogoOsis from "../../Image/OSIS_Logo.png"
import Logo_SMAK1 from "../../Image/Logo_SMAK1.png"


const Footer = () => {
  return (
  <div>
    <footer>
    <div className='container mx-auto'>


      <div className="py-20 px-10">
          <div className="bg-cover bg-footer-image rounded-xl py-28">
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold leading-normal text-white text-center mb-10 break-all">
                  Cari Tahu Informasi Terkini Mengenai SMAK 1
                </p>
                <div className="rounded-full bg-blue-500 py-4 px-16  flex justify-center">
                  <a href="https://www.instagram.com/smukiee/" target="blank" className="text-xl text-white font-bold">
                    @smukiee
                  </a>
                </div>
              </div>
          </div>
        </div>
      
        <div className='pt-12'>
          <div className='pb-12 flex justify-around'>
            <div>
              <img className='object-scale-down h-8' alt='smakone' src={Logo_SMAK1}/>
            </div>
            <div className='flex flex-col text-xl gap-y-7 font-bold text-gray-500'>
              <div className='text-black'>Osis</div>
              <div>Visi & Misi Kami</div>
              <div>Bertemu dengan Kami</div>
              <div>Services</div>
            </div>
            <div className='flex flex-col text-xl gap-y-7 font-bold text-gray-500'>
              <div className='text-black'>Kehidupan SMUKIERS</div>
              <div>Kegiatan</div>
              <div>Kehidupan SMUKIERS</div>
              <div>Alumni</div>
            </div>
            <div className='flex gap-x-2'>
              <div><RiMailLine size={25}/></div>
              <div><BsInstagram size={25}/></div>
              <div><FaLine size={25}/></div>
              <div><FaYoutubeSquare size={25}/></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 px-8">
            <div className="flex justify-self-center lg:justify-self-start ">
                    <img src={LogoPenabur} className="object-scale-down h-28 mr-2" alt="BPK PENABUR Logo"/>
                    <img src={LogoOsis} className="object-scale-down h-28" alt="OSIS SMAK 1 Logo"/>
            </div>
            {/* <div className="flex justify-self-center object-center py-3 lg:py-6"> */}
            <div className="flex justify-self-center place-self-end">
                <p className="text-center font-bold text-gray-500">
                    Jalan Tanjung Duren Raya Nomor 4<br/>
                    Jakarta Barat, DKI Jakarta 11470<br/>
                    Tel:(+62)21 5666962
                </p>
            </div>
            <div className="text-xs object-bottom place-self-end">
                <p className='font-bold text-gray-500'>
                  Copyright © 2021 SMAK ONE Student Council All Rights Reserved
                </p>
            </div>
          </div>
        </div>
    </div>
    </footer>
  </div>
    
  )
}

export default Footer