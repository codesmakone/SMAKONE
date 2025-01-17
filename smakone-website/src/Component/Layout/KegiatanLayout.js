import React from 'react'
import { useNavigate,Link } from 'react-router-dom'; 
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
                    {props.img && 
                        <img src={ props.img } className="object-cover h-auto w-full rounded-3xl mt-6" alt={props.alt}/>
                    }
                <div className='font-medium sm:px-2'>
                    <div className='text-lg mb-6 mt-9'>
                        { props.latterPar1 }
                    </div>
                    <div className='text-lg my-6'>
                        { props.latterPar2 }
                    </div>
                    <div className='text-lg my-6'>
                        { props.latterPar3 }
                    </div>
                    <div className='text-lg my-6'>
                        { props.latterPar4 }
                    </div>
                    <div className='text-lg my-6'>
                        { props.latterPar5 }
                    </div>
                    {props.name1 &&
                    <div className="pb-12">
                        <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                            {props.name1 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name1}</div>
                            }
                            {props.name2 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name2}</div>
                            }
                            {props.name3 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name3}</div>
                            }
                            {props.name4 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name4}</div>
                            }
                            {props.name5 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name5}</div>
                            }
                            {props.name6 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name6}</div>
                            }
                            {props.name7 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name7}</div>
                            }
                            {props.name8 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name8}</div>
                            }
                            {props.name9 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name9}</div>
                            }
                            {props.name10 && 
                            <div className="border-b-4 border-gray-600 ">{">>"} {props.name10}</div>
                            }
                        </div>
                    </div>
                    }
                </div>
                    <div className={`flex justify-between mt-10 sm:px-8 lg:px-0` }>
                    <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                        Kembali
                    </button>
                    {props.dir && 
                    <Link to={props.dir} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Artikel berikutnya
                    </Link>
                    }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Layout
