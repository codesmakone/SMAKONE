import React, { useState } from 'react'
import Logo_SMAK1 from '../../Image/Logo_SMAK1.png'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../Hooks';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiArrowDownSFill } from 'react-icons/ri'

//Import component
import Dropdown from './Dropdown'


const Nav = () => {
  const [pressedMenu, setPressedMenu] = useState(false)
  

  const sideBarClickHandler = () => {
      setPressedMenu(!pressedMenu)
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const scrollPosition = useScrollPosition();

  // function SideNavLink({first = false, data, index}) {
  //   return (
  //     <div>
  //       <div className={`lg:hidden transition-all duration-200 block py-4 text-lg border-b-2 font-semibold text-gray-700 ${first?"mt-4":""}`}>
  //         {/* <Link to={data.link} activeClassName="text-blue-400">{data.title}</Link> */}
  //         <button className="flex flex-wrap" onClick={null}>
  //           <div>{data.title}</div>
  //           <div className='px-2'><RiArrowDownSFill size={22}/></div>
            
  //                 { sidebarMenus.menus.map((menu,index)=>{
  //                   return (
  //                     <div>
  //                       <div className={`lg:hidden transition-all duration-200 block py-4 text-lg border-b-2 font-semibold text-gray-700`}>
  //                       <Link to={menu.link} activeClassName="text-blue-400">{menu.title}</Link>
  //                       </div>
  //                     </div>
  //                     )
  //                   }) 
  //                 }
                
            
  //         </button>
  //       </div>
  //     </div>
  //   )
  // }

  // const sidebarMenus= [
  //   {
  //       id:1,
  //       title: "Tentang SMAK 1",
  //       link:'1'

  //   },
  //   {
  //       id:2,
  //       title: "OSIS",
  //       link: "/"
  //   },
  //   {
  //       id:3,
  //       title: "Kehidupan SMUKIERS",
  //       link: "/"
  //   },
  // ]
  
  return (
    <>
    <div className='Circle'></div> 
    <nav className=''>
      <div className={classNames(
        scrollPosition > 0 ? 'bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]' : 'lg:bg-inherit lg:drop-shadow-none bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]',
        'lg:flex lg:flex-wrap items-center pt-3 lg:px-18 px-10 lg:py-0 pt-8 w-full fixed top-0 left-0 justify-between z-50 transition-all duration-200'
      )}>
        <div className='lg:grid-cols-none grid grid-cols-3'>
            <Link to="/" className="rounded-lg cursor-pointer col-span-2">
              <div className=''>
                <img className='object-scale-down h-7' alt='smakone' src={Logo_SMAK1}/>
              </div>
            </Link>
            <button className='lg:hidden justify-self-end' onClick={sideBarClickHandler}>
              <AiOutlineMenu size={32} />
            </button>
        </div>
        {/* { pressedMenu && (
          <div className="mr-8">
            {
                sidebarMenus.map((menu,index)=>{
                    return (<SideNavLink data={menu} key={index} first={!!(index===0)} index={index}/>)
                })
            }
          </div>
        )} */}
        
        <div className='flex justify-center lg:items-center lg:w-auto w-full lg:py-5 leading-normal'>
          <div className='font-medium'>
            {/* nanya enrichie ini maunya gmn fixed atau apa */}
            <Dropdown
            title="Tentang SMAK 1"
            class="px-3 py-2 hidden lg:block transition duration-200 border-b-2 border-transparent hover:border-black cursor-pointer md:text-base lg:text-lg xl:text-xl"
            dir1='/tentang_smak1'
            dir2='/tentang_smak1/Sejarah'
            dir3='/tentang_smak1/Fasilitas'
            dir4='/tentang_smak1/Logo'
            dir5='/tentang_smak1/Lagu' 
            menu1="Sekilas Tentang Kami"
            menu2="Sejarah, Visi, dan Misi"
            menu3="Fasilitas"
            menu4="Logo"
            menu5="Lagu Tema"
            />
            <Dropdown
              title='OSIS'
              class="px-3 py-2 hidden lg:block transition duration-200 border-b-2 border-transparent hover:border-black cursor-pointer md:text-base lg:text-lg xl:text-xl" 
              dir1='/OSIS'
              dir2='/OSIS/Emagz'
              dir3='/OSIS/ASS1ST'
              menu1='Tentang Osis'
              menu2='E-Magazine'
              menu3='Ass1st' 
            />
            <Dropdown
              title='Kehidupan SMUKIERS'
              class="px-3 py-2 hidden lg:block transition duration-200 border-b-2 border-transparent hover:border-black cursor-pointer md:text-base lg:text-lg xl:text-xl" 
              dir1='/Kehidupan_smukiers'
              dir2='/Kehidupan_smukiers/Tips'
              dir3='/Kehidupan_smukiers/Kegiatan'
              dir4='/Kehidupan_smukiers/Alumni'
              menu1='Kehidupan SMUKIERS'
              menu2='Tips Belajar'
              menu3='Kegiatan Setelah Kelas'
              menu4='Alumni'
            />
            <Dropdown
              title='Kegiatan'
              class="px-3 py-2 transition duration-200 border-b-2 border-transparent hover:border-black" 
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
              menu12='Ekstrakulikuler Lainnya'
            />
          </div>
        </div>
      </div> 
    </nav>
    
    </>
  )
}

export default Nav