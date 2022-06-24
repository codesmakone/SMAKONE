import React from 'react'

const OsisNav = (props) => {
  return (
    <div className="Assist h-20 w-20" style={{backgroundImage: `url(${props.img})`}}>
        <div className="content ">
              <h2>{props.Title}</h2>
              <h3>{props.desc}</h3>  
        </div>
    </div>
  )
}

export default OsisNav