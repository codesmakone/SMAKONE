import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import AssistNav from '../../Component/Ass1st/Nav'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

// Image
import Kedokteran from '../../Image/Ass1st/Logo/kedokteran.webp'
import Farmasi from '../../Image/Ass1st/Logo/farmasi.webp'
import Keguruan from '../../Image/Ass1st/Logo/pendidikan.webp'
import Sosiologi from '../../Image/Ass1st/Logo/sosiologi.webp'
import Akutansi from '../../Image/Ass1st/Logo/akuntansi.webp'
import Hukum from '../../Image/Ass1st/Logo/hukum.webp'
import Psikologi from '../../Image/Ass1st/Logo/psikologi.webp'
import Teknik_sipil from '../../Image/Ass1st/Logo/teknik_sipil.webp'
import Pertambangan from '../../Image/Ass1st/Logo/teknik_pertambangan.webp'


const Ass1st = () => {
  return (
    <div>
      <Nav/>
        <div className='mx-auto container mt-28'>
            <div className='px-5 sm:px-10 md:px-20 pt-10 justify-center text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>ASS1ST</h1>
                <div className='text-sm sm:text-base md:text-lg font-medium'>
                    <h4 className='text-center lg:px-28 mt-10'>
                    Hello Smukierz, sebentar lagi kita akan segera menapaki perjalanan kita di tingkat perkuliahan. Tapi, masih banyak dari kita yang ragu akan memilih jurusan kuliah. Tapi jangan khawatir karena kami hadir dengan program ASS1ST. Apa itu ASS1ST? ASS1ST ini adalah program OSIS bidang 4 yang isinya merupakan penjelasan mengenai jurusan kuliah serta nama-nama universitas yang mengusai di jurusan tersebut. Jadi, harapannya dengan adanya ASS1ST ini maka akan mempermudah kalian dalam menentukan jurusan kuliah yang kalian inginkan.
                    </h4>
                </div>
                <div className='mt-12'>
                  <h1 className='text-2xl xl:text-4xl sm:text-3xl font-bold my-4'>
                    Testimoni Para Alumni
                  </h1>
                  <iframe className="object-cover w-full h-[300px] lg:h-[558px] sm:h-[350px]"  
                          src="https://drive.google.com/file/d/13AcgF746ax02aq9jRAsVisfcvhS3tr4Y/preview" 
                          title="Welcome to SMAK ONE." 
                          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
                </div>
            </div>
        </div>

        <div id='Assist' className='bg-dark-blue w-full h-auto text-white mt-16'>
        <div className='container mx-auto'>
          <div className='text-center px-10 sm:px-16 md:px-20 lg:px-32 xl:px-52 py-16'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold'>
              Jurusan
            </h1>
            {/* <div className='grid grid-cols-3 lg:grid-cols-5 gap-10 mt-10 place-items-center'> */}
            <div className='grid gap-4 grid-cols-2 lg:grid-cols-3 xl:gap-10 my-16'>
              <NavLink to="Kedokteran">
                <AssistNav
                  img={Kedokteran}
                  Title="Kedokteran"
                />
              </NavLink>
              <NavLink to="Farmasi">
                <AssistNav
                  img={Farmasi}
                  Title="Farmasi"
                  />
              </NavLink>
              <NavLink to="Keguruan">
                <AssistNav
                  img={Keguruan}
                  Title="Keguruan"
                  />
              </NavLink>
              <NavLink to="Sosiologi">
                <AssistNav
                  img={Sosiologi}
                  Title="Sosiologi"
                  />
              </NavLink>
              <NavLink to="Akutansi">
                <AssistNav
                  img={Akutansi}
                  Title="Akutansi"
                  />
              </NavLink>
              <NavLink to="Hukum">
                <AssistNav
                  img={Hukum}
                  Title="Hukum"
                  />
              </NavLink>
              <NavLink to="Psikologi">
                <AssistNav
                  img={Psikologi}
                  Title="Psikologi"
                  />
              </NavLink>
              <NavLink to="Teknik_sipil">
                <AssistNav
                  img={Teknik_sipil}
                  Title="Teknik Sipil"
                  />
              </NavLink>
              <NavLink to="Pertambangan">
                <AssistNav
                  img={Pertambangan}
                  Title="Pertambangan"
                  />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Ass1st