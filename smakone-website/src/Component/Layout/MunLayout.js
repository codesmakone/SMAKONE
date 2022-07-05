import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link' 
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

const Layout = (props) => {
    const navigate = useNavigate()

  return (
        <div>
            <Nav/>
            <div className='container mx-auto mt-28'>
                <div className='px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-center'>
                    <h2 className='text-xl font-semibold'>{ props.cat }</h2>
                    <h1 className='text-4xl xl:text-6xl font-black'>{ props.title }</h1>
                    { props.quote && (
                        <h4 className='text-xl font-medium'>{ props.quote }</h4>
                    ) }
                    { props.desc && (
                        <h4 className='text-lg xl:text-xl font-semibold'>{ props.desc }</h4>
                    ) }
                </div>
                <div className='pt-12 px-6 md:px-12 lg:px-16 xl:px-28 text-justify'>
                    <p className='text-lg font-semibold px-3'>
                        { props.formerPar } 
                    </p>
                    {props.img && 
                    <img src={ props.img } className="object-cover h-auto w-full rounded-3xl mt-6" alt={props.alt}/>}
                <div className='font-medium sm:px-2'>
                    <div className='text-lg mb-6 mt-9'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                        { props.title1 }
                        </div>
                        { props.latterPar1 }
                    </div>
                    <div className='text-lg my-6'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                        { props.title2 }
                        </div>
                        { props.latterPar2 }
                    </div>
                    <div className='text-lg my-6'>
                        <div className="text-xl font-black mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                        { props.title3 }
                        </div>
                        { props.latterPar3 }
                    </div>
                    <div className='text-lg my-6'>
                        <div className="text-xl font-black mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                        { props.title4 }
                        </div>
                        { props.latterPar4 }
                    </div>
                    <div className='text-lg my-6'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                        { props.title5 }
                        </div>
                        { props.latterPar5 }
                    </div>
                    <div className='text-lg my-6'>
                    Bagi siswa-siswi yang berminat dapat mengunjungi akun instagram <a href='https://www.instagram.com/one.mun/' target="blank" className='font-semibold text-blue-600'>@one.mun</a> untuk mendapatkan informasi lebih lanjut seputar lomba, webinar, dan prestasi lainnya.
                    </div>
                </div>

                    <div className='flex justify-between mt-10 sm:px-12 lg:px-0'>
                    <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-ml-8 lg:ml-0 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Kembali
                    </button>
                    <HashLink to="/#kegiatan" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Home
                    </HashLink>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Layout