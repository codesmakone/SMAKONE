import React from 'react'
import { useNavigate,Link } from 'react-router-dom'; 
    import Nav from '../Nav/Nav'
    import Footer from '../Footer/Footer'

const Layout = (props) => {
    const navigate = useNavigate()

  return (
        <div className='bg-gradient-to-b from-[#1a2632] to-black'>
            <Nav/>
            <div className='container mx-auto mt-28 text-white'>
                <div className='md:px-8 lg:px-10 xl:px-12 pt-10 justify-center text-center'>
                    <h2 className='text-xl font-medium'>{ props.cat }</h2>
                    <h1 className='text-7xl xl:text-10xl font-semibold underline [text-underline-offset:8px] [text-decoration-thickness:4px]'>
                        SAP<span className='font-normal text-8xl'>x</span>SNM</h1>
                    { props.quote && (
                        <h4 className='text-xl font-medium'>{ props.quote }</h4>
                    ) }
                    { props.desc && (
                        <h4 className='text-lg xl:text-xl font-semibold'>{ props.desc }</h4>
                    ) }
                </div>
                
                <div className='pt-12 md:px-8 lg:px-10 xl:px-12 pt-10 text-justify'>

                    {/* Row1 */}
                    <div className='pt-8 md:px-8 lg:px-10 xl:px-12 pt-10 text-justify'>
                    {   props.img1 && 
                            <img src={ props.img1 } className="object-cover min-h-[100px] h-auto w-[47%] rounded-3xl mb-2 mr-6 float-left" alt={props.alt}/>
                        }
                    </div>
                    <h1 className='text-4xl xl:text-6xl font-black leading-9 xl:leading-[3.5rem] pb-3'>{ props.title }</h1>
                    <div className='font-medium sm:px-2'>
                        <div className='text-lg mb-6 mt-2'>
                            { props.latterPar1 }
                        </div>

                        {/* Row2 */}
                        <div className='grid grid-cols-12'>
                            <div className='text-lg my-6 mr-3 col-span-4'>
                                <span className='font-black'>About SAP</span><br></br>
                                { props.AboutSAP }
                            </div>
                            <div className='text-lg my-6 mx-3 pl-[50px] col-span-3'>
                                <span className='font-black'>Performances</span>
                                <li>{props.performance1}</li>
                                <li>{props.performance2}</li>
                                <li>{props.performance3}</li>
                                <li>{props.performance4}</li>
                                <li>{props.performance5}</li>
                                <li>{props.performance6}</li>
                                <li>{props.performance7}</li>
                                
                            </div>
                            <div className='align-self col-span-5'>
                            {props.img2 && 
                                <img src={ props.img2 } className="object-cover h-auto w-[90%] rounded-3xl mt-6 mb-2 ml-10" alt={props.alt}/>
                            }
                            </div>
                        </div>

                        {/* Row3 */}
                        <div className='grid grid-cols-14'>
                            <div className='text-center col-span-7'>
                                {props.img3 && 
                                    <img src={ props.img3 } className="object-cover h-auto w-[95%] rounded-3xl mt-6 mb-2 mr-3" alt={props.alt}/>
                                }
                            </div>
                            <div className='text-lg my-6 ml-12 col-span-4'>
                                <span className='font-black'>About SNM</span><br></br>
                                { props.AboutSNM }
                            </div>
                            <div className='text-lg my-6 mx-3 pl-[30px] col-span-3'>
                                <span className='font-black'>UMKM</span>
                                <li>{props.umkm1}</li>
                                <li>{props.umkm2}</li>
                                <li>{props.umkm3}</li>
                                <li>{props.umkm4}</li>
                                <li>{props.umkm5}</li>
                                <li>{props.umkm6}</li>
                                <li>{props.umkm7}</li>
                                
                            </div>
                        </div>

                        <div className='text-lg my-6 mr-3'>
                            { props.latterPar3 }
                        </div>
                        <div className='text-lg my-6'>
                            { props.latterPar4 }
                        </div>
                        <div className='text-lg my-6'>
                            { props.latterPar5 }
                        </div>
                    </div>

                    {/* Merch */}
                    <div className='py-10'>
                        <h1 className='text-center text-4xl xl:text-6xl font-black leading-9 pb-5'>SAPxSNM Merchandise</h1>
                        <div className='grid grid-cols-3 gap-12'>
                            <div className='text-center'>
                                {props.imgMerch1 && 
                                    <img src={ props.imgMerch1 } className="object-cover h-auto rounded-3xl mt-6" alt={props.alt}/>
                                }
                            </div>
                            <div className='text-center'>
                                {props.imgMerch2 && 
                                    <img src={ props.imgMerch2 } className="object-cover h-auto rounded-3xl mt-6" alt={props.alt}/>
                                }
                            </div>
                            <div className='text-center'>
                                {props.imgMerch3 && 
                                    <img src={ props.imgMerch3 } className="object-cover h-auto rounded-3xl mt-6" alt={props.alt}/>
                                }
                            </div>
                            <div className='text-center col-span-3'>
                                {props.dir && 
                                <Link to={props.dir} className="text-black focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 bg-[#eaddd7] hover:bg-[#d2c6c1] dark:bg-[#eaddd7] dark:hover:bg-[#d2c6c1] ">
                                    Lo-o-rem
                                </Link>
                                }
                            </div>
                        </div> 
                    </div>

                    {/* stage view */}
                    <div className='py-10'>
                        <h1 className='text-center text-4xl xl:text-6xl font-black leading-9 pb-3'>Stage View</h1>
                        <div className='flex justify-center'>
                            {props.imgStage && 
                                <img src={ props.imgStage } className="object-cover h-auto w-[75%] rounded-3xl mt-6" alt={props.alt}/>
                            }
                        </div>
                    </div>

                    {/* Dont miss */}
                    <div className='text-center py-5'>
                        <h1 className='text-center text-4xl xl:text-6xl font-black leading-9 pb-8'>Don't Wanna Miss Out?</h1>
                        {props.dir && 
                        <Link to={props.dir} className="text-black focus:outline-none font-black rounded-full text-l sm:text-base md:text-xl lg:text-3xl px-7 py-2.5 text-center mb-2 bg-[#eaddd7] hover:bg-[#d2c6c1] dark:bg-[#eaddd7] dark:hover:bg-[#d2c6c1] ">
                            BOOK NOW
                        </Link>
                        }
                    </div>

                </div>
                <div className={`flex justify-between mt-10 sm:px-8 lg:px-0` }>
                        <button onClick={ () => navigate(-1) } className="text-white focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2">
                        ⟵ <u>Back</u>
                        </button>
                        {props.dir && 
                        <Link to={props.dir} className="text-black focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 bg-[#eaddd7] hover:bg-[#d2c6c1] dark:bg-[#eaddd7] dark:hover:bg-[#d2c6c1] ">
                            Artikel berikutnya
                        </Link>
                        }
                    </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Layout
