import React from 'react'

const Layout = (props) => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='px-20 pt-10 justify-center text-center'>
                <h2 className='text-xl font-semibold'>{ props.cat }</h2>
                <h1 className='text-6xl font-black'>{ props.title }</h1>
                <h4 className='text-xl font-semibold'>{ props.desc }</h4>
            </div>
            <div className='pt-12 px-28 text-left'>
                <p className='text-lg font-semibold px-3'>
                    { props.formerPar } 
                </p>
                <img src={ props.img } className="object-cover h-auto w-full rounded-3xl mt-6" alt={props.alt}/>
                <p className='text-lg font-semibold mt-6 px-3'>
                    { props.latterPar1 }
                </p>
                <p className='text-lg font-semibold mt-6 px-3'>
                    { props.latterPar2 }
                </p>
                <p className='text-lg font-semibold mt-6 px-3'>
                    { props.latterPar3 }
                </p>
                <p className='text-lg font-semibold mt-6 px-3'>
                    { props.latterPar4 }
                </p>
                <p className='text-lg font-semibold mt-6 px-3'>
                    { props.latterPar5 }
                </p>
            </div>
        </div>
    </div>
  )
}

export default Layout

