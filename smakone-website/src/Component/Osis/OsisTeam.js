import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer' 

const OsisTeam = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      <Nav/>
      <div className="justify-center text-center mt-28">
        <div className='px-20 pt-20 pb-10'>
            <h2 className='text-base sm:text-lg md:text-xl font-semibold'>OSIS</h2>
            <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold'>{ props.bidang }</h1>
            <h4 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold '>{ props.desc }</h4>
        </div>
        <div className='px-8 sm:px-12 lg:px-28'>
          {props.person1}
          {props.person2}
          {props.person3}
          {props.person4}
          {props.person5}
        </div>
        {props.Description && 
        <div className='py-14'>
          {props.Description && <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold'>Deskripsi</h1>}
          <p className='font-medium text-sm sm:text-base md:text-lg lg:text-xl mt-6 px-8 md:px-24 lg:px-40'>{props.DescBid}</p>
        </div>
        }
        <div>
          {props.Program && <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold'>Program Kerja</h1>}          
          <ol className='px-10 sm:px-14 md:px-22 lg:px-32 xl:px-56 text-justify font-medium text-sm sm:text-base md:text-lg lg:text-xl list-decimal list-outside'>
          {props.Program && props.ProgramList.map((items,id)=>{
            return(
              <li key={id} className="mt-8">{items}</li>
            )
          })}
          </ol>
        </div>
        <div className={props.dirBPH ? `flex justify-between mt-10 px-6 sm:px-20 lg:px-28 ` : `flex justify-between mt-10 px-6 sm:px-20 lg:px-28 `}>
          <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-ml-8 lg:ml-0 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
              Kembali
          </button>
          {(props.dir || props.dirBPH) && 
          <Link to={props.dir || props.dirBPH} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
              Artikel Berikutnya
          </Link>
          }
          {props.dirHome && 
          <HashLink to="/OSIS#bidang" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
              Home
          </HashLink>
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default OsisTeam