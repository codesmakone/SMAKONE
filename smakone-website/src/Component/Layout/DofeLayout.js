import React from 'react'
import { useNavigate,Link } from 'react-router-dom'; 

const Layout = (props) => {
    const navigate = useNavigate()

  return (
        <div>
            <div className='container mx-auto'>
                <div className='px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-center'>
                    <h2 className='text-xl font-semibold'>{ props.cat }</h2>
                    <h1 className='text-4xl xl:text-6xl font-black'>{ props.title }</h1>
                    { props.quote && (
                        <h4 className='text-xl font-medium'>{ props.quote }</h4>
                    ) }
                    { props.desc && (
                        <h4 className='text-lg xl:text-xl font-semibold'>{ props.desc }</h4>
                    ) }
                    <div className='mt-5 px-12 sm:px-16 xl:px-28 text-center'>
                        <iframe className="object-cover w-full h-[300px] lg:h-[558px] sm:h-[350px]"  
                        src="https://www.youtube.com/embed/EJWgbe1eWKA"
                        title="The Duke of Edinburgh’s International Award" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className='pt-12 px-6 md:px-12 lg:px-16 xl:px-28 text-justify'>
                    <div className='font-medium'>
                    <div className='text-lg mb-6 mt-9 px-3'>
                        <div className="text-xl font-black mt-12 mb-4 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title1 }
                        </div>
                        { props.latterPar1 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        <div className="text-xl font-black mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title2 }
                        </div>
                        { props.latterPar2 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title3 }
                        </div>
                        { props.latterPar3 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title4 }
                        </div>
                        { props.latterPar4 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title5 }
                        </div>
                        { props.latterPar5 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title6 }
                        </div>
                        { props.latterPar6 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title7 }
                        </div>
                        { props.latterPar7 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        <div className="text-xl font-black mt-12 mb-2 text-left pr-12 sm:pr-16 xl:pr-36">
                          { props.title8 }
                        </div>
                        { props.latterPar8 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                    Untuk informasi lebih lanjut, dapat mengunjungi website di <a href='https://intaward.org/' target="blank" className='font-semibold text-blue-600'>Website Kami</a> atau menghubungi wali kelas masing-masing.
                    </div>
                    </div>
                    <div className='flex justify-between mt-10 sm:px-12 lg:px-0'>
                    <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-ml-8 lg:ml-0 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Kembali
                    </button>
                    {props.dir && 
                    <Link to={props.dir} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                        Artikel berikutnya
                    </Link>
                    }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Layout