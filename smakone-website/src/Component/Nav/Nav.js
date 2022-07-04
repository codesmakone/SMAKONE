import React from 'react'
import Logo_SMAK1 from '../../Image/Logo_SMAK1.webp'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../Hooks';
//Import component
import Dropdown from './Dropdown'

const Nav = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const scrollPosition = useScrollPosition();

  return (
    <>
    <div className='Circle'></div> 
    <nav className=''>
      <div className={classNames(
        scrollPosition > 0 ? 'bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]' : 'lg:bg-inherit lg:drop-shadow-none bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]',
        'md:flex md:flex-rows lg:flex-wrap items-center pt-4 sm:pt-5 md:py-3 lg:px-18 md:px-10 px-4 lg:py-0 w-full fixed top-0 left-0 justify-between z-50 transition-all duration-200'
      )}>
        <div className='lg:grid-cols-none grid grid-cols-3 pb-3 sm:pb-0'>
            <Link to="/" className="rounded-lg cursor-pointer col-span-2">
              <div className=''>
                <img className='object-scale-down h-5 md:h-6 lg:h-7 ' alt='smakone' src={Logo_SMAK1}/>
              </div>
            </Link>
        </div>

          <div className='lg:items-center lg:w-auto w-full sm:pt-1 lg:py-5 leading-normal '>
            <div className='flex flex-rows place-items-center gap-4 sm:gap-8 md:gap-0 md:justify-end lg:justify-center'>
              <Dropdown
                title="Tentang SMAK 1"
                class="md:px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black cursor-pointer text-xs sm:text-base md:text-sm lg:text-lg xl:text-xl"
                dir1='/tentang_smak1'
                dir2='/tentang_smak1/Sejarah'
                dir3='/tentang_smak1/Fasilitas'
                dir4='/tentang_smak1/Logo'
                dir5='/tentang_smak1/Lagu' 
                menu1="Sekilas Pandang"
                menu2="Sejarah, Visi, dan Misi"
                menu3="Fasilitas"
                menu4="Logo"
                menu5="Lagu Tema"
                smak1={true}
              />
              <Dropdown
                title='OSIS'
                class="md:px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl" 
                dir1='/OSIS'
                dir2='/OSIS/Emagz'
                dir3='/OSIS/ASS1ST'
                menu1='Tentang Osis'
                menu2='E-Magazine'
                menu3='Ass1st'
                osis = {true}
              />
              <Dropdown
                title='Kehidupan SMUKIERS'
                class="md:px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl" 
                dir1='/Kehidupan_smukiers'
                dir2='/Kehidupan_smukiers/Tips'
                dir3='/Kehidupan_smukiers/Kegiatan'
                dir4='/Kehidupan_smukiers/Alumni'
                menu1='Kehidupan SMUKIERS'
                menu2='Tips Belajar'
                menu3='Kegiatan Setelah Kelas'
                menu4='Alumni'
                Kehidupan ={true}
              />
              <Dropdown
                title='Kegiatan'
                class="md:px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl" 
                dir1='/Kegiatan'
                dir2='/Kegiatan/soc'
                dir3='/Kegiatan/soundscape'
                dir4="/Kegiatan/stn"
                dir5='/Kegiatan/KR1ZA'
                dir6='/Kegiatan/Seni'
                dir7='/Kegiatan/scj'
                dir8='/Kegiatan/pramuka'
                dir9='/Kegiatan/onecast'
                dir10='/Kegiatan/DoFE'
                dir11='/Kegiatan/muneds'
                dir12='/Kegiatan/lainnya'
                menu1='Kegiatan'
                menu2='Smakonecup'
                menu3='Soundscape'
                menu4='Smukiez Theater Night'
                menu5='KR1ZA'
                menu6='Seni'
                menu7='Science Club'
                menu8='Pramuka'
                menu9='OneCast'
                menu10='The Duke of Edinburgh’s International Award'
                menu11='Model United Nation dan English Debate Society'
                kegiatan={true}              
                />
            </div>
          </div>
      </div>
    </nav>
    
    </>
  )
}

export default Nav