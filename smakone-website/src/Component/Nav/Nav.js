import React, { useState } from 'react'
import HeadlessSlideOver from './HeadlessSlideOver';
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../Hooks';
import { useLocation } from 'react-router-dom';

//Import component
import Dropdown from './Dropdown'

//Import Image
import Logo_SMAK1 from '../../Image/Logo_SMAK1.webp'
import SOC from '../../Image/Nav/SMAKONECUP.jpeg'


//Import icons
import {IoEyeSharp} from 'react-icons/io5'
import {AiFillFlag} from 'react-icons/ai'
import {FaBuilding} from 'react-icons/fa'
import {RiShieldCrossFill} from 'react-icons/ri'
import {IoMdMusicalNotes} from 'react-icons/io'
import {BsFillPeopleFill} from 'react-icons/bs'
import {BsBookFill} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'
import {IoIosPaperPlane} from 'react-icons/io'
import {GiLightBulb} from 'react-icons/gi'
import {GiThrowingBall} from 'react-icons/gi'
import {IoSchool} from 'react-icons/io5'
import {FaRunning} from 'react-icons/fa'
import {FaTrophy} from 'react-icons/fa'
import {SiGooglepodcasts} from 'react-icons/si'
import {MdTheaters} from 'react-icons/md'
import {IoIosBasketball} from 'react-icons/io'
import {BsFillBrushFill} from 'react-icons/bs'
import {IoFlaskSharp} from 'react-icons/io5'
import {GiPublicSpeaker} from 'react-icons/gi'
import {BsFillMicFill} from 'react-icons/bs'
import {GiCampfire} from 'react-icons/gi'
import {GiTiedScroll} from 'react-icons/gi'

const Nav = (props) => {
    const location = useLocation();
    const mainPath = (location.pathname);
    const lowerPath = mainPath.toLowerCase();
    function removeTrailingSlash(str) {
        return str.endsWith('/') ? str.slice(0, -1) : str;
      }
    const path = removeTrailingSlash(lowerPath)


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const scrollPosition = useScrollPosition();

    const pathSMAK1 = 
    path===''
    || path==="/tentang_smak1" 
    || path==="/tentang_smak1/sejarah"
    || path==="/tentang_smak1/fasilitas"
    || path==="/tentang_smak1/logo" 
    || path==="/tentang_smak1/lagu"

    const pathOSIS = 
    path==='/osis' 
    || path==='/osis/bph' 
    || path==='/osis/bidang1' 
    || path==='/osis/bidang2'
    || path==='/osis/bidang3'
    || path==='/osis/bidang4'
    || path==='/osis/bidang5' 
    || path==='/osis/bidang6'
    || path==='/osis/bidang7' 
    || path==='/osis/bidang8' 
    || path==='/osis/bidang9' 
    || path==='/osis/bidang10'
    || path==='/osis/emagz'
    || path==='/osis/ass1st' 
    || path==='/osis/ass1st/kedokteran' 
    || path==='/osis/ass1st/farmasi' 
    || path==='/osis/ass1st/keguruan' 
    || path==='/osis/ass1st/sosiologi'
    || path==='/osis/ass1st/akutansi' 
    || path==='/osis/ass1st/hukum'
    || path==='/osis/ass1st/psikologi' 
    || path==='/osis/ass1st/teknik_sipil' 
    || path==='/osis/ass1st/pertambangan'
    
    const pathKehidupan = 
    path==='/kehidupan_smukiers' 
    || path==='/kehidupan_smukiers'
    || path==='/kehidupan_smukiers/tips'
    || path==='/kehidupan_smukiers/kegiatan'
    || path==='/kehidupan_smukiers/alumni'
    || path==='/kehidupan_smukiers/alumni/billystevanus'
    || path==='/kehidupan_smukiers/alumni/scottmoses'
    || path==='/kehidupan_smukiers/alumni/nicolecharlene'
    
    const pathKegiatan = 
    path==='/kegiatan' 
    || path==='/kegiatan/soc' 
    || path==='/kegiatan/soundscape'
    || path==="/kegiatan/stn"
    || path==='/kegiatan/kr1za'
    || path==='/kegiatan/seni'
    || path==='/kegiatan/scj'
    || path==='/kegiatan/pramuka'
    || path==='/kegiatan/onecast'
    || path==='/kegiatan/dofe'
    || path==='/kegiatan/muneds'
    || path==='/kegiatan/lainnya'
     
    let menuArray = [pathSMAK1, pathOSIS, pathKehidupan, pathKegiatan];
        const [menu, setMenu] = useState(menuArray);
        const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
        const setMenuValue = (props) => {
            let newArr = [...menu];
            newArr[props] = !newArr[props];
            setMenu(newArr);
        }

    function openHandler() {
        setIsHeadlessOpen(true);
    }

    function closeHandler() {
        setIsHeadlessOpen(false);
    }

    return (
        <>
        <div className='Circle'></div> 
        <nav className=''>
        <div className={classNames(
            scrollPosition > 0 ? 'bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]' : 'lg:bg-inherit lg:drop-shadow-none bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]',
            'lg:flex lg:flex-rows lg:flex-wrap items-center pt-4 sm:pt-5 sm:pb-4 md:py-5 lg:px-18 md:px-10 px-4 lg:py-0 w-full fixed top-0 left-0 justify-between z-50 transition-all duration-200'
        )}>
            <div className='lg:grid-cols-none grid grid-cols-3 pb-3 sm:pb-0'>
                <Link to="/" className="rounded-lg cursor-pointer col-span-2">
                <div className=''>
                    <img className='object-scale-down h-5 md:h-6 lg:h-7 ' alt='smakone' src={Logo_SMAK1}/>
                </div>
                </Link>
                <div aria-label="toggler" className="flex justify-end items-center pr-2 lg:hidden">
                <button aria-label="open" id="open" onClick={() => openHandler()} className={`${isHeadlessOpen ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 18H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button aria-label="close" id="close" onClick={() => closeHandler()} className={`${isHeadlessOpen? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                </div>
            </div>
            <HeadlessSlideOver
                    open={isHeadlessOpen}
                    setOpen={setIsHeadlessOpen}
                    title="Item Details"
            >
            <div id="Main" className={`transform ease-in-out transition duration-500 flex justify-start items-start h-full  w-full bg-white flex-col`}>
            {/* <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
                <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-black rounded ">
                    <svg>
                    </svg>
                    <p className="text-base leading-4 ">Placeholder</p>
                </button> */}
            <div className="flex flex-col justify-start items-center md:items-start px-6 border-b border-gray-600 w-full">
                <button onClick={()=>setMenuValue(0)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                    <p className="text-sm leading-5 uppercase">Tentang SMAK 1</p>
                    <svg id="icon1" className={`${menu[0] ? '' : 'rotate-180'} transform duration-200`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div id="menu1" className={`${menu[0] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/tentang_smak1' ? "font-bold" : "text-gray-500"}`}>
                        <IoEyeSharp size={24} />
                        <p className="text-base leading-4  "><Link to='/tentang_smak1'>Sekilas Pandang</Link></p>
                    </button>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/tentang_smak1/sejarah' ? "font-bold" : "text-gray-500"}`}>
                        <AiFillFlag size={24} />
                        <p className="text-base leading-4  "><Link to='/tentang_smak1/Sejarah'>Sejarah, Visi, dan Misi</Link></p>
                    </button>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/tentang_smak1/fasilitas' ? "font-bold" : "text-gray-500"}`}>  
                        <FaBuilding size={24} />
                        <p className="text-base leading-4"><Link to="/tentang_smak1/Fasilitas">Fasilitas</Link></p>
                    </button>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/tentang_smak1/logo' ? "font-bold" : "text-gray-500"}`}>
                        <RiShieldCrossFill size={24} />
                        <p className="text-base leading-4  "><Link to='/tentang_smak1/Logo'>Logo</Link></p>
                    </button>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/tentang_smak1/lagu' ? "font-bold" : "text-gray-500"}`}>
                        <IoMdMusicalNotes size={24} />
                        <p className="text-base leading-4  "><Link to='/tentang_smak1/Lagu'>Lagu</Link></p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start px-6 border-b border-gray-600 w-full">
                <button onClick={()=>setMenuValue(1)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                    <p className="text-sm leading-5 uppercase">OSIS</p>
                    <svg id="icon2" className={`${menu[1] ? '' : 'rotate-180'} transform duration-200`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className={`${menu[1] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${                    
                    path==='/osis' 
                    || path==='/osis/bph' 
                    || path==='/osis/bidang1' 
                    || path==='/osis/bidang2'
                    || path==='/osis/bidang3'
                    || path==='/osis/bidang4'
                    || path==='/osis/bidang5' 
                    || path==='/osis/bidang6'
                    || path==='/osis/bidang7' 
                    || path==='/osis/bidang8' 
                    || path==='/osis/bidang9' 
                    || path==='/osis/bidang10' ? "font-bold" : "text-gray-500"}`}>
                        <BsFillPeopleFill size={24} />
                        <p className="text-base leading-4  "><Link to='/OSIS'>Tentang OSIS</Link></p>
                    </button>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/osis/emagz' ? "font-bold" : "text-gray-500"}`}>
                        <BsBookFill size={24} />
                        <p className="text-base leading-4  "><Link to='/OSIS/Emagz'>E-Magazine</Link></p>
                    </button>
                    <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${                   
                    path==='/osis/ass1st' 
                    || path==='/osis/ass1st/kedokteran' 
                    || path==='/osis/ass1st/farmasi' 
                    || path==='/osis/ass1st/keguruan' 
                    || path==='/osis/ass1st/sosiologi'
                    || path==='/osis/ass1st/akutansi' 
                    || path==='/osis/ass1st/hukum'
                    || path==='/osis/ass1st/psikologi' 
                    || path==='/osis/ass1st/teknik_sipil' 
                    || path==='/osis/ass1st/pertambangan'  ? "font-bold" : "text-gray-500"}`}>
                        <FaUniversity size={24} />
                        <p className="text-base leading-4  "><Link to='/OSIS/ASS1ST'>Ass1st</Link></p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start px-6 border-b border-gray-600 w-full">
            <button onClick={()=>setMenuValue(2)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                <p className="text-sm leading-5  uppercase">Kehidupan SMUKIERS</p>
                <svg id="icon3" className={`${menu[2] ? '' : 'rotate-180 '} transform duration-200`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className={`${menu[2] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kehidupan_smukiers' ? "font-bold" : "text-gray-500"}`}>
                    <IoIosPaperPlane size={24} />
                    <p className="text-base leading-4  "><Link to='/Kehidupan_smukiers'>Kehidupan SMUKIERS</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kehidupan_smukiers/tips' ? "font-bold" : "text-gray-500"}`}>
                    <GiLightBulb size={24} />   
                    <p className="text-base leading-4  "><Link to='/Kehidupan_smukiers/Tips'>Tips Belajar</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kehidupan_smukiers/kegiatan' ? "font-bold" : "text-gray-500"}`}>
                    <GiThrowingBall size={24} />
                    <p className="text-base leading-4  "><Link to='/Kehidupan_smukiers/Kegiatan'>Kegiatan Setelah Kelas</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kehidupan_smukiers/alumni'
                || path==='/kehidupan_smukiers/alumni/billystevanus'
                || path==='/kehidupan_smukiers/alumni/scottmoses'
                || path==='/kehidupan_smukiers/alumni/nicolecharlene'  ? "font-bold" : "text-gray-500"}`}>
                    <IoSchool size={24} />
                    <p className="text-base leading-4  "><Link to='/Kehidupan_smukiers/Alumni'>Alumni</Link></p>
                </button>
            </div>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start px-6 w-full">
            <button onClick={()=>setMenuValue(3)} className="focus:outline-none focus:text-indigo-400  text-black flex justify-between items-center w-full py-5 space-x-14  ">
                <p className="text-sm leading-5  uppercase">Kegiatan</p>
                <svg id="icon3" className={`${menu[3] ? '' : 'rotate-180 '} transform duration-200`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className={`${menu[3] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-5 `}>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan' ? "font-bold" : "text-gray-500"}`}>
                    <FaRunning size={24} /> 
                    <p className="text-base leading-4  "><Link to='/Kegiatan'>Kegiatan</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/soc' ? "font-bold" : "text-gray-500"}`}>
                    <img src={SOC} alt="SOC" className='grayscale h-6 w-6'/>
                    <p className="text-base leading-4  "><Link to='/Kegiatan/SOC'>Smakonecup</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/soundscape' ? "font-bold" : "text-gray-500"}`}>
                    <SiGooglepodcasts size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/Soundscape'>Soundscape</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/stn' ? "font-bold" : "text-gray-500"}`}>
                    <MdTheaters size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/STN'>Smukiez Theater Night</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/kr1za' ? "font-bold" : "text-gray-500"}`}>
                    <IoIosBasketball size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/KR1ZA'>KR1ZA</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/seni' ? "font-bold" : "text-gray-500"}`}>
                    <BsFillBrushFill size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/Seni'>Seni</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/scj' ? "font-bold" : "text-gray-500"}`}>
                    <IoFlaskSharp size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/SCJ'>Science Club</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/pramuka' ? "font-bold" : "text-gray-500"}`}>
                    <GiCampfire size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/Pramuka'>Pramuka</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/onecast' ? "font-bold" : "text-gray-500"}`}>
                    <BsFillMicFill size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/OneCast'>OneCast</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/dofe' ? "font-bold" : "text-gray-500"}`}>
                    <GiTiedScroll size ={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/DofE'>DofE</Link></p>
                </button>
                <button className={`flex justify-start items-center space-x-6 rounded px-3 py-2  w-full ${path==='/kegiatan/muneds' ? "font-bold" : "text-gray-500"}`}>
                    <GiPublicSpeaker size={24} />
                    <p className="text-base leading-4  "><Link to='/Kegiatan/MUNEDS'>MUNEDS</Link></p>
                </button>
            </div>
            </div>
        </div>
        </HeadlessSlideOver>
            <div className='lg:items-center lg:w-auto w-full sm:pt-1 lg:py-5 leading-normal hidden lg:block '>
                <div className='flex flex-rows place-items-center gap-4 sm:gap-8 md:gap-3 md:justify-end lg:justify-center'>
                <Dropdown
                    title="Tentang SMAK 1"
                    class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                    path==="/tentang_smak1" 
                    || path==="/tentang_smak1/sejarah"
                    || path==="/tentang_smak1/fasilitas"
                    || path==="/tentang_smak1/logo" 
                    || path==="/tentang_smak1/lagu"
                    ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]" : "link-underline"
                }`} 
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
                    class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                    path==='/osis' 
                    || path==='/osis/bph' 
                    || path==='/osis/bidang1' 
                    || path==='/osis/bidang2'
                    || path==='/osis/bidang3'
                    || path==='/osis/bidang4'
                    || path==='/osis/bidang5' 
                    || path==='/osis/bidang6'
                    || path==='/osis/bidang7' 
                    || path==='/osis/bidang8' 
                    || path==='/osis/bidang9' 
                    || path==='/osis/bidang10'
                    || path==='/osis/emagz'
                    || path==='/osis/ass1st' 
                    || path==='/osis/ass1st/kedokteran' 
                    || path==='/osis/ass1st/farmasi' 
                    || path==='/osis/ass1st/keguruan' 
                    || path==='/osis/ass1st/sosiologi'
                    || path==='/osis/ass1st/akutansi' 
                    || path==='/osis/ass1st/hukum'
                    || path==='/osis/ass1st/psikologi' 
                    || path==='/osis/ass1st/teknik_sipil' 
                    || path==='/osis/ass1st/pertambangan' 
                    ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]" : "link-underline"
                }`} 
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
                    class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                    path==='/kehidupan_smukiers' 
                    || path==='/kehidupan_smukiers'
                    || path==='/kehidupan_smukiers/tips'
                    || path==='/kehidupan_smukiers/kegiatan'
                    || path==='/kehidupan_smukiers/alumni'
                    || path==='/kehidupan_smukiers/alumni/billystevanus'
                    || path==='/kehidupan_smukiers/alumni/scottmoses'
                    || path==='/kehidupan_smukiers/alumni/nicolecharlene' 
                    ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]" : "link-underline"
                    }`}
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
                    class={`md:px-3 py-2 transition duration-200 border-b-2 border-transparent  link-underline-black cursor-pointer text-xs sm:text-base lg:text-lg xl:text-xl 
                    ${
                    path==='/kegiatan' 
                    || path==='/kegiatan/soc' 
                    || path==='/kegiatan/soundscape'
                    || path==="/kegiatan/stn"
                    || path==='/kegiatan/kr1za'
                    || path==='/kegiatan/seni'
                    || path==='/kegiatan/scj'
                    || path==='/kegiatan/pramuka'
                    || path==='/kegiatan/onecast'
                    || path==='/kegiatan/dofe'
                    || path==='/kegiatan/muneds'
                    || path==='/kegiatan/lainnya' 
                    ? "link-underline-static drop-shadow-[0_15px_12px_rgba(0,0,0,0.5)]" : "link-underline"
                    }`}
                    dir1='/Kegiatan'
                    dir2='/Kegiatan/SOC'
                    dir3='/Kegiatan/Soundscape'
                    dir4="/Kegiatan/STN"
                    dir5='/Kegiatan/KR1ZA'
                    dir6='/Kegiatan/Seni'
                    dir7='/Kegiatan/SCJ'
                    dir8='/Kegiatan/Pramuka'
                    dir9='/Kegiatan/OneCast'
                    dir10='/Kegiatan/DofE'
                    dir11='/Kegiatan/MUNEDS'
                    dir12='/Kegiatan/Lainnya'
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