import React from 'react'
import Nav from '../../Component/Nav/Nav'
import AlasanCard from '../../Component/Home/AlasanCard'

import Pianis from '../../Image/MichaelAbimanyu.jpeg'
import Matematikawan from '../../Image/GabrielaErin.jpeg'
import Pembulutangkis from '../../Image/DarrenJonathan.jpeg'


const Home = () => {
  return (
    <div className='font-sans'>

      
      <Nav/>
      {/* <div className='mt-32 col-span-6flex flex-col justify-start text-left '> */}
      <div className='col-span-6flex flex-col justify-start text-left '>
      <div className='px-20 py-24'>
        <h1 className='text-7xl py-12 font-black'>We Are SMAK 1</h1>
        <h4 className='text-xl font-black'>Sekolah terbaik dengan siswa-siswi yang berpresestasi</h4>
      </div>
      </div>


      <div className='bg-dark-blue w-full h-auto mt-16 text-white px-3 py-32'>
        <div className='container mx-auto'>
          <div className='justify-center text-white text-center font-bold mb-12 px-40'>
            <div className='text-white mb-5 content-center text-lg'>
              Dengar dari Smukiers
            </div>
            <div className='text-white text-5xl leading-normal'>
              <div>Dengar alasan mereka mengapa</div>
              <div>mereka bersekolah di SMAK 1</div>
            </div>
          </div>
          <div className='grid grid-cols-3 justify-items-center gap-3 mt-12 '>
              <div>
                <AlasanCard
                  img = {Pianis}
                  alt = "Pianis"
                  desc='Pianis sekaligus musisi andalan SMUKIERS'
                />
              </div>
              <div>
                <AlasanCard
                  img = {Matematikawan}
                  alt = "Matematikawan"
                  desc='Matematikawan dengan puluhan medali'
                />
              </div>
              <div>
                <AlasanCard
                  img = {Pembulutangkis}
                  alt = "Pembulutangkis"
                  desc='Pebulutangkis cerdas dengan smash yang mematikan'
                />
              </div>
            </div>
        </div>
      </div>


    </div>
  )
}

export default Home