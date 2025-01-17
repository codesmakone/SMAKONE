import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

const Jurusan = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <Nav />
            <div className="container mx-auto mb-6 mt-28">
                <div className="px-20 pt-10 justify-center text-center">
                    <h2 className='text-base sm:text-lg md:text-xl font-semibold'>{ props.cat }</h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black">{ props.title }</h1>
                    <h4 className="text-xl font-semibold pt-3">{ props.subtitle }</h4>
                </div>
                <div className='pt-12 px-6 md:px-14 lg:px-28  xl:px-24 2xl:px-28'>
                    <img src={ props.img } className="object-cover w-screen h-auto rounded-xl md:w-full md:rounded-3xl mt-6" alt={props.alt}/>
                </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg mt-2 px-4 sm:px-8 lg:px-16 xl:px-48 text-justify font-medium text-gray-500">
                { props.desc }
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-10 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 md grid-cols-1 gap-9 mt-4 place-items-center px-6 lg:mx-28 xl:mx-20">
                <div>
                    <img src={ props.world1img } className='md:w-screen lg:w-auto' alt={ props.world1name } />
                    <p className="justify-center text-center p-2">{ props.world1name }</p>
                </div>
                <div>
                    <img src={ props.world2img } className='md:w-screen lg:w-auto' alt={ props.world2name }/>
                    <p className="justify-center text-center p-2">{ props.world2name }</p>
                </div>
                <div>
                    <img src={ props.world3img } className='md:w-screen lg:w-auto' alt={ props.world3name }/>
                    <p className="justify-center text-center p-2">{ props.world3name }</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 md grid-cols-1 gap-9 mt-4 place-items-center px-6 lg:mx-28 xl:mx-20">
                <div>   
                    <img src={ props.asia1img } className='md:w-screen lg:w-auto' alt={ props.asia1name } />
                    <p className="justify-center text-center p-2">{ props.asia1name }</p>
                </div>
                <div>
                    <img src={ props.asia2img } className='md:w-screen lg:w-auto' alt={ props.asia2name } />
                    <p className="justify-center text-center p-2">{ props.asia2name }</p>
                </div>
                <div>
                    <img src={ props.asia3img } className='md:w-screen lg:w-auto' alt={ props.asia3name } />
                    <p className="justify-center text-center p-2">{ props.asia3name }</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 md grid-cols-1 gap-9 mt-4 place-items-center px-6 lg:mx-28 xl:mx-20">
                <div>
                    <img src={ props.indo1img } className='md:w-screen lg:w-auto' alt={ props.indo1name } />
                    <p className="justify-center text-center p-2">{ props.indo1name }</p>
                </div>
                <div>
                    <img src={ props.indo2img } className='md:w-screen lg:w-auto' alt={ props.indo2name } />
                    <p className="justify-center text-center p-2">{ props.indo2name }</p>
                </div>
                <div>
                    <img src={ props.indo3img } className='md:w-screen lg:w-auto' alt={ props.indo3name } />
                    <p className="justify-center text-center p-2">{ props.indo3name }</p>
                </div>
            </div>
            <div className='flex justify-between mt-10 px-6 sm:px-16 lg:px-32 xl:px-24'>
                <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-ml-16 sm:-ml-8 lg:ml-0 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                    Kembali
                </button>
                { props.dir && 
                <Link to={props.dir || props.dirBPH} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                    Artikel Berikutnya
                </Link>
                }
                {props.dirHome && 
                <HashLink to="/OSIS/ASS1ST#Assist" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                    Home
                </HashLink>
                }
            </div>
            <Footer/>
        </div>
            
        
    )
}

export default Jurusan