import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import Nav from '../../Component/Ass1st/Nav'

// Image
import Kedokteran from '../../Image/Ass1st/Logo/kedokteran.png'
import Farmasi from '../../Image/Ass1st/Logo/farmasi.png'
import Keguruan from '../../Image/Ass1st/Logo/pendidikan.png'
import Sosiologi from '../../Image/Ass1st/Logo/sosiologi.png'
import Akutansi from '../../Image/Ass1st/Logo/akuntansi.png'
import Hukum from '../../Image/Ass1st/Logo/hukum.png'
import Psikologi from '../../Image/Ass1st/Logo/psikologi.png'
import Teknik_sipil from '../../Image/Ass1st/Logo/teknik_sipil.png'
import Pertambangan from '../../Image/Ass1st/Logo/teknik_pertambangan.png'


const Ass1st = () => {
  return (
    <div>
        <div className='mx-auto container'>
            <div className='px-5 sm:px-10 md:px-20 pt-10 justify-center text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black'>ASS1ST</h1>
                <div className='text-sm sm:text-base md:text-lg font-medium'>
                    <h4 className='text-center lg:px-28 mt-10'>
                    Hello Smukierz, sebentar lagi kita akan segera menapaki perjalanan kita di tingkat perkuliahan. Tapi, masih banyak dari kita yang ragu akan memilih jurusan kuliah. Tapi jangan khawatir karena kami hadir dengan program ASS1ST. Apa itu ASS1ST? ASS1ST ini adalah program OSIS bidang 4 yang isinya merupakan penjelasan mengenai jurusan kuliah serta nama-nama universitas yang mengusai di jurusan tersebut. Jadi, harapannya dengan adanya ASS1ST ini maka akan mempermudah kalian dalam menentukan jurusan kuliah yang kalian inginkan.
                    </h4>
                </div>
            </div>
        </div>

        <div id='Assist' className='bg-dark-blue w-full h-auto text-white mt-16'>
        <div className='container mx-auto'>
          <div className='text-center px-10 sm:px-24 md:px-32 lg:px-36 xl:px-52 py-16'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold'>
              Jurusan
            </h1>
            {/* <div className='grid grid-cols-3 lg:grid-cols-5 gap-10 mt-10 place-items-center'> */}
            <div className='grid grid-cols-3 gap-10 my-16'>
              <NavLink to="Kedokteran">
                <Nav
                  img={Kedokteran}
                  Title="Kedokteran"
                />
              </NavLink>
              <NavLink to="Farmasi">
                <Nav
                  img={Farmasi}
                  Title="Farmasi"
                  />
              </NavLink>
              <NavLink to="Keguruan">
                <Nav
                  img={Keguruan}
                  Title="Keguruan"
                  />
              </NavLink>
              <NavLink to="Sosiologi">
                <Nav
                  img={Sosiologi}
                  Title="Sosiologi"
                  />
              </NavLink>
              <NavLink to="Akutansi">
                <Nav
                  img={Akutansi}
                  Title="Akutansi"
                  />
              </NavLink>
              <NavLink to="Hukum">
                <Nav
                  img={Hukum}
                  Title="Hukum"
                  />
              </NavLink>
              <NavLink to="Psikologi">
                <Nav
                  img={Psikologi}
                  Title="Psikologi"
                  />
              </NavLink>
              <NavLink to="Teknik_sipil">
                <Nav
                  img={Teknik_sipil}
                  Title="Teknik Sipil"
                  />
              </NavLink>
              <NavLink to="Pertambangan">
                <Nav
                  img={Pertambangan}
                  Title="Pertambangan"
                  />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ass1st