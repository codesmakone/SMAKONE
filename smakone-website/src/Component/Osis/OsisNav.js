import React from 'react'
// `url(${props.bg})`

const OsisNav = (props) => {
  // const classStr = classnames(
  //   {``}
  // );
  return (
    // <div className='mt-12 '>
    //   <div className='flex gap-10'>
    //     <img src={props.img} alt={props.alt} className='h-40 hover-zoom '/>
    //       {props.Title === "Badan Pengurus Harian" &&
    //       <div className='text-left my-auto'>
    //           <h1 className='font-bold text-3xl'>{props.Title}</h1>
    //       </div>
    //       }

    //       {props.Title !== "Badan Pengurus Harian" &&
    //       <div className='text-left'>
    //         <h1 className='font-bold text-3xl'>{props.Title}</h1>
    //         <p className='font-bold text-xl mt-4'>{props.desc}</p>
    //       </div>
    //       }
    //   </div>
    // </div>
    <div className="card" style={{backgroundImage: `url(${props.img})`}}>
        <div className="content ">
              <h2>{props.Title}</h2>
              <h3>{props.desc}</h3>  
        </div>
    </div>
  )
}

export default OsisNav