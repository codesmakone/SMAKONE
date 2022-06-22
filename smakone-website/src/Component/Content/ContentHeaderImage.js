import React from 'react'

const ContentHeaderImage = (props) => {
    return(
        <div>
            <div className='container justify-center'>
                <div className='pt-10 justify-center text-center'>
                    <h2 className='text-xl font-semibold'>{ props.category }</h2>
                    <h1 className='text-6xl font-black'>{ props.title }</h1>
                    <h2 className='text-xl font-medium'>{ props.quote }</h2>
                    <h4 className='text-xl font-semibold pt-3'>
                        <div className='text-left px-28'>
                        { props.desc }
                        </div>
                    </h4>
                    { props.img && (
                        <div className='pt-12 px-28 text-center rounded-lg'>
                            <img src={ props.img } alt={ props.alt } className='h-auto w-full rounded-3xl justify-end'/>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default ContentHeaderImage