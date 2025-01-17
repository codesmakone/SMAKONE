import React from 'react'

const ContentHeader = (props) => {
    return(
        <div>
            <div className='container justify-center'>
                <div className='pt-10 justify-center text-center'>
                    <div className='px-5 sm:px-0'>
                        <h2 className='text-base sm:text-lg md:text-xl font-semibold'>{ props.category }</h2>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>{ props.title }</h1>
                        <h2 className='text-base sm:text-lg md:text-xl font-medium'>{ props.quote }</h2>
                        <h4 className='text-xl font-semibold pt-3'>
                            <div className='text-left px-28'>
                            { props.desc }
                            </div>
                        </h4>
                    </div>
                    {props.iframe && 
                    <div className='mt-5 px-6 sm:px-16 xl:px-28 text-center'>
                        <iframe className="object-cover w-full h-[300px] lg:h-[558px] sm:h-[350px]"  
                        src="https://www.youtube.com/embed/XifGVzIuT_I" 
                        title="Welcome to SMAK ONE." 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                    }
                    { props.img && (
                    <div className='md:px-10 lg:px-20'>
                        <div className='text-center sm:pt-12 px-6 sm:px-14 lg:px-28 xl:px-24 2xl:px-32'>
                            <img src={ props.img } alt={ props.alt } className='object-cover h-auto w-full rounded-xl md:rounded-3xl mt-6'/>
                        </div>
                    </div>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default ContentHeader