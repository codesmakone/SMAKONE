import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Icon for Email, Instagram, Line, and Youtube
import { ImMail2 } from "react-icons/im";
import { FaYoutubeSquare, FaTiktok, FaInstagramSquare, FaInstagram} from "react-icons/fa";

import LogoPenabur from "../../Image/Penabur_logo.webp"
import LogoOsis from "../../Image/OSIS_Logo.webp"
import Logo_SMAK1 from "../../Image/Logo_SMAK1.webp"
import Logo_CodeOne from "../../Image/logo_codeone.webp"


const Footer = () => {

  return (
  <div>
    <footer>
    <div className='mx-auto'>


      <div className="py-20 px-5 sm:px-10 md:px-12">
          <div className="bg-cover bg-footer-image rounded-xl py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
              <div className="flex flex-col items-center">
                <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-normal text-white text-center mb-10 mx-6">
                  Cari Tahu Informasi Terkini Mengenai SMAK 1 <br/>di Instagram Kami 
                </p>
                <div>
                    <a href="https://www.instagram.com/smukiee/" target="blank" className="text-xl md:text-2xl text-white font-bold rounded-full bg-light-blue py-3 px-6 md:px-8 md:py-4 lg:py-4 lg:px-9 xl:px-10 flex justify-center hover:bg-blue-700">
                    <div className='flex gap-1.5'>
                      <div className='mt-0.5'>
                      <FaInstagram className='h-full w-full'/>
                      </div>
                    <span>smukiee</span>
                    </div>
                    </a>
                </div>
              </div>
          </div>
        </div>
      
        <div>
          <div>
            <img className='object-scale-down mx-auto h-8 w-1/2 sm:w-9/12 mb-8 sm:mb-12' alt='smakone' src={Logo_SMAK1}/>
          </div>

          <div>
            <div className=' flex justify-center gap-3 md:justify-around px-8 md:mx-10 md:pb-12'>
              <div className='flex flex-col gap-y-2 xl:gap-y-4 text-gray-500 md:font-bold text-[0.9rem] sm:text-lg xl:text-xl'>
                <Link to="/OSIS"className='hover:text-gray-500 font-bold text-black'>Tentang OSIS</Link>
                <HashLink to="/OSIS#visi&misi" className='hover:text-black' >Visi & Misi Kami</HashLink>
                <HashLink to="/OSIS#bidang" className='hover:text-black' >Services</HashLink>
                <Link to="/OSIS/Emagz" className='hover:text-black' >E-Magazine</Link>
                <Link to="/OSIS/ASS1ST" className='hover:text-black' >Ass1st</Link>
              </div>
              <div className='flex flex-col text-[0.9rem] sm:text-lg xl:text-xl gap-y-2 xl:gap-y-4 text-gray-500 md:font-bold'>
                <Link to="/Kehidupan_smukiers" className='hover:text-gray-500 font-bold text-black'>Kehidupan SMUKIERS</Link >
                <Link to="/Kehidupan_smukiers/Tips" className='hover:text-black'>Tips Belajar</Link>
                <Link to="/Kehidupan_smukiers/Kegiatan" className='hover:text-black' >Kegiatan</Link>
                <Link to="/Kehidupan_smukiers/Alumni" className='hover:text-black' >Alumni</Link>
              </div>

              <div className='hidden md:inline'>
                <p className='pb-2 text-lg font-semibold text-right'>Contact Us</p>
                <div className='md:flex md:flex-row md:gap-x-1'>
                  <a href='mailto:smak1.osis@bpkpenaburjakarta.or.id' className='mt-[0.1em]'><ImMail2 size={27}/></a>
                  <a href="https://www.instagram.com/smukiee/" target="blank"><FaInstagramSquare size={30}/></a>
                  <a href="https://www.tiktok.com/@smukierz" target="blank" className='mt-[0.1em]'><FaTiktok size={27}/></a>
                  <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="blank"><FaYoutubeSquare size={30}/></a>
                </div>
              </div>
            </div>

            <div className='text-center md:hidden'>
              <p className='pt-4 pb-2 text-lg font-semibold'>Contact Us</p>
              <div className='flex flex-row justify-center gap-x-1 pb-12'>
                <a href='mailto:smak1.osis@bpkpenaburjakarta.or.id' className='mt-[0.1em]'><ImMail2 size={27}/></a>
                <a href="https://www.instagram.com/smukiee/" target="blank"><FaInstagramSquare size={30}/></a>
                <a href="https://www.tiktok.com/@smukierz" target="blank" className='mt-[0.1em]'><FaTiktok size={27}/></a>
                <a href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ" target="blank"><FaYoutubeSquare size={30}/></a>
              </div>
            </div>
        </div>


          <div className='bg-gray-200 px-10'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 ">
                        <div className="flex justify-self-center lg:justify-self-start pt-6 pb-3">
                                <img src={LogoPenabur} className="object-scale-down h-20 mr-2" alt="BPK PENABUR Logo"/>
                                <img src={LogoOsis} className="object-scale-down h-20" alt="OSIS SMAK 1 Logo"/>
                        </div>
                        <div className="flex justify-self-center object-center my-auto">
                            <p className="text-center align-center font-bold text-gray-500 xl:text-lg">
                                Jalan Tanjung Duren Raya Nomor 4<br/>
                                Jakarta Barat, DKI Jakarta 11470<br/>
                                Tel: (+62)21 5666962
                            </p>
                        </div>
                        <div className="flex justify-self-center lg:justify-self-end py-5 my-auto">
                                <img src={Logo_CodeOne} className="object-scale-down h-12 mr-2" alt="Logo CodeOne"/>
                        </div>
                    </div>
                </div>
                </div>
            <div className="bg-gray-100 text-center py-1 text-xs">
                <p>
                    Copyright © 2022 SMAK ONE Student Council All Rights Reserved
                </p>
            </div>

        </div>
    </div>
    </footer>
  </div>
    
  )
}

export default Footer