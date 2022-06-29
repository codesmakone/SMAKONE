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
                </div>
                <div className='pt-12 px-6 md:px-12 lg:px-16 xl:px-28 text-justify'>
                    <p className='text-lg font-semibold px-3'>
                        { props.formerPar } 
                    </p>
                    {props.img && 
                    <img src={ props.img } className="object-cover h-auto w-full rounded-3xl mt-6" alt={props.alt}/>}
                    {props.imgHome && 
                    <img src={ props.imgHome } className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[32rem] max-w-auto mx-auto rounded-3xl mt-6" alt={props.altAlasan}/>}
                    {props.imgAlasan && 
                    <img src={ props.imgAlasan } className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[32rem] max-w-auto mx-auto rounded-3xl mt-6" alt={props.altAlasan}/>}
                    <div className='font-medium'>
                    <div className='text-lg mb-6 mt-9 px-3'>
                        { props.latterPar1 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        { props.latterPar2 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        { props.latterPar3 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        { props.latterPar4 }
                    </div>
                    <div className='text-lg my-6 px-3'>
                        { props.latterPar5 }
                    </div>
                    </div>
                    {props.quoteAlumni &&
                    <div className='text-center text-xl font-semibold pt-5 text-gray-600 px-6 md:px-12 lg:px-16 xl:px-20'>
                        {props.quoteAlumni}
                        <div>-{props.quote_name}</div>
                    </div>
                    }
                    <div className={`flex justify-between mt-10` }>
                    <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Kembali
                    </button>
                    {props.dir && 
                    <Link to={props.dir} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
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
