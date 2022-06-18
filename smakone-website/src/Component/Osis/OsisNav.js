import React from 'react'

const OsisNav = (props) => {
  return (
    <div className='mt-6'>
      <div className='flex flex-row'>
        <img src={props.img} alt={props.alt}/>
        <div>
          <div>
          <h1>{props.Title}</h1>
          <p>{props.des}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OsisNav