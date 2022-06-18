import React from 'react'

const TentangKamiHeader = (props) => {
    return(
        <div>
            <div className='container mx-auto'>
                <div className='px-20 pt-10 justify-center text-center'>
                    <h2 className='text-xl font-medium'>{ props.category }</h2>
                    <h1 className='text-6xl font-semibold'>{ props.title }</h1>
                    <h4 className='text-xl font-medium'>
                        <div className=' text-center'>
                        { props.desc }
                        </div>
                    </h4>
                </div>
                <div className='pt-12 px-28 justify-center ml-5'>
                    <iframe width="997" height="558" src="https://www.youtube.com/embed/XifGVzIuT_I" title="Welcome to SMAK ONE." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default TentangKamiHeader