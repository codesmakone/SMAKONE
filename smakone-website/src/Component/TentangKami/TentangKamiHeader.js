import React from 'react'

const TentangKamiHeader = (props) => {
    return(
        <div>
            <div className='container justify-center'>
                <div className='pt-10 justify-center text-center'>
                    <h2 className='text-xl font-medium'>{ props.category }</h2>
                    <h1 className='text-6xl font-semibold'>{ props.title }</h1>
                    <h4 className='text-xl font-medium'>
                        <div className=' text-center px-20'>
                        { props.desc }
                        </div>
                    </h4>
                    <div className='pt-12 px-28 text-center'>
                        <iframe className="objext-cover w-full" width="997" height="558" src="https://www.youtube.com/embed/XifGVzIuT_I" title="Welcome to SMAK ONE." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TentangKamiHeader