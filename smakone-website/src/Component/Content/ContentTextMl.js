import React from 'react'

const ContentTextMl = (props) =>{
    return(
        <div className="container mx-auto mt-8 text-lg">
            <div className='px-6 md:px-16 xl:px-24'>
                {props.title &&
                <div className="xl:text-xl font-bold text-left">{ props.title }</div>
                }
                <div className='px-2'>
                { !props.list && 
                <div className="mt-2 text-justify font-medium text-gray-500">{ props.text }</div>
                }
                </div>
                { props.list && 
                <ul className='text-left font-medium text-gray-500 px-4'>
                    <li className='list-disc mt-2 '>
                    { props.point1 }
                    </li>
                    <li className='list-disc mt-2'>
                    { props.point2 }
                    </li>
                </ul>
                }
            </div>
        </div>
    )
} 

export default ContentTextMl