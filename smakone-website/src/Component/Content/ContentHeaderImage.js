import React from 'react'

const ContentHeaderImage = (props) => {
    return(
        <div>
            <div className='container justify-center'>
                <div className='pt-10 justify-center text-center'>
                    <h2 className='text-xl font-semibold'>{ props.category }</h2>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>{ props.title }</h1>
                    <h2 className='text-xl font-medium'>{ props.quote }</h2>
                    <h4 className='text-xl font-semibold pt-3'>
                        <div className='text-left px-28'>
                        { props.desc }
                        </div>
                    </h4>
                    { props.img && (
                        <div className='pt-12 px-10 md:px-16 xl:px-28 rounded-lg'>
                            <img src={ props.img } alt={ props.alt } className=' w-full rounded-3xl justify-end'/>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default ContentHeaderImage