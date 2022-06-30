import React from 'react'

const ContentHeaderImage = (props) => {
    return(
        <div>
            <div className='container mx-auto mb-6'>
                <div className=' md:px-20 pt-10 justify-center text-center'>
                    <h2 className='text-base sm:text-lg md:text-xl font-semibold'>{ props.category }</h2>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>{ props.title }</h1>
                    <h2 className='text-base sm:text-lg md:text-xl font-medium '>{ props.quote }</h2>
                    <h4 className='text-xl font-semibold pt-3'>
                        <div className='text-left px-28'>
                        { props.desc }
                        </div>
                    </h4>
                    { props.img && (
                        <div className='pt-8 md:px-16 xl:px-28'>
                            <img src={ props.img } alt={ props.alt } className='w-screen object-cover md:w-full md:rounded-3xl mt-6'/>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default ContentHeaderImage