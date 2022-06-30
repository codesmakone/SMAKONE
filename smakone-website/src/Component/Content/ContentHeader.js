import React from 'react'

const ContentHeader = (props) => {
    return(
        <div>
            <div className='container justify-center'>
                <div className='pt-10 justify-center text-center'>
                    <h2 className='text-base sm:text-lg md:text-xl font-semibold'>{ props.category }</h2>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black'>{ props.title }</h1>
                    <h2 className='text-base sm:text-lg md:text-xl font-medium'>{ props.quote }</h2>
                    <h4 className='text-xl font-semibold pt-3'>
                        <div className='text-left px-28'>
                        { props.desc }
                        </div>
                    </h4>
                    <div className='mt-5 px-12 sm:px-16 xl:px-28 text-center'>
                        <iframe className="object-cover w-full h-[300px] lg:h-[558px] sm:h-[350px]"  
                        src="https://www.youtube.com/embed/XifGVzIuT_I" 
                        title="Welcome to SMAK ONE." 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader