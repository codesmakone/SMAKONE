import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import OsisNav from '../../Component/Osis/OsisNav'

// Image
import Osis1 from '../../Image/Osis/Osis1.png'
import Osis2 from '../../Image/Osis/Osis2.png'
import Osis3 from '../../Image/Osis/Osis3.png'


const Ass1st = () => {
  return (
    <div>
        <div id='osis' className='mx-auto container'>
            <div className='px-20 pt-10 justify-center text-center'>
                <h2 className='text-xl font-semibold'>OSIS</h2>
                <h1 className='text-6xl font-semibold'>ASS1ST</h1>
                <h4 className='text-xl font-semibold'>
                    <h4 className=' text-center px-28'>
                    Hello Smukierz , sebentar lagi kita akan segera menapaki perjalanan kita di tingkat perkuliahan. Tapi , masih banyak dari kita yang ragu akan memilih jurusan kuliah. Tapi jangan khawatir karena kami hadir dengan program ASS1ST. Apa itu ASS1ST? ASS1ST ini adalah program OSIS bidang 4 yang isinya merupakan penjelasan mengenai jurusan kuliah serta nama - nama universitas yang mengusai di jurusan tersebut . Jadi , harapannya dengan adanya ASS1ST ini maka akan mempermudah kalian dalam menentukan jurusan kuliah yang kalian inginkan.
                    </h4>
                </h4>
            </div>
        </div>

        <div id='bidang' className='bg-dark-blue w-full h-auto text-white py-14 mt-16'>
        <div className='container mx-auto'>
          <div className='text-center px-60'>
            <h1 className='text-5xl font-semibold'>
              Jurusan
            </h1>
            <div>
              <NavLink to="Kedokteran">
                <OsisNav
                  img={Osis1}
                  Title="Kedokteran"
                />
              </NavLink>
              <NavLink to="Farmasi">
                <OsisNav
                  img={Osis2}
                  Title="Farmasi"
                  />
              </NavLink>
              <NavLink to="Keguruan">
                <OsisNav
                  img={Osis3}
                  Title="Keguruan dan Pendidikan"
                  />
              </NavLink>
              <NavLink to="Sosiologi">
                <OsisNav
                  img={Osis3}
                  Title="Sosiologi"
                  />
              </NavLink>
              <NavLink to="Akutansi">
                <OsisNav
                  img={Osis3}
                  Title="Akutansi"
                  />
              </NavLink>
              <NavLink to="Hukum">
                <OsisNav
                  img={Osis3}
                  Title="Hukum"
                  />
              </NavLink>
              <NavLink to="Psikologi">
                <OsisNav
                  img={Osis3}
                  Title="Psikologi"
                  />
              </NavLink>
              <NavLink to="Teknik_sipil">
                <OsisNav
                  img={Osis3}
                  Title="Teknik Sipil"
                  />
              </NavLink>
              <NavLink to="Pertambangan">
                <OsisNav
                  img={Osis3}
                  Title="Teknik Pertambangan"
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