import React from 'react'
import { useNavigate } from 'react-router-dom'; 

const OsisTeam = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="justify-center text-center">
        <div className='px-20 pt-20 pb-10'>
            <h2 className='text-xl font-semibold'>OSIS</h2>
            <h1 className='text-6xl font-bold'>{ props.bidang }</h1>
            <h4 className='text-xl font-semibold px-32'>{ props.desc }</h4>
        </div>
        <div className='px-28'>
          {props.person1}
          {props.person2}
          {props.person3}
          {props.person4}
          {props.person5}
        </div>
        <div className='py-10'>
          {props.Description && <h1 className='text-6xl font-bold'>Deskripsi</h1>}
          <p className='font-medium text-xl mt-6 px-40'>{props.DescBid}</p>
        </div>
        <div >
          {props.Program && <h1 className='text-6xl font-bold'>Program Kerja</h1>}          
          <ol className='px-56 text-justify font-medium text-xl list-decimal list-outside'>
          {props.Program && props.ProgramList.map((items,id)=>{
            return(
              <li key={id} className="mt-8">{items}</li>
            )
          })}
          </ol>
          <div className='flex justify-center mt-10 px-28'>
          <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
              Kembali
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OsisTeam