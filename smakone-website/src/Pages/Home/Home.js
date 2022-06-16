import React from 'react'
import Nav from '../../Component/Nav/Nav'
import AlasanCard from '../../Component/Home/AlasanCard'
import Checklist from '../../Component/Home/Checklist'
import Kegiatan from '../../Component/Home/Kegiatan'


import Pianis from '../../Image/MichaelAbimanyu.jpeg'
import Matematikawan from '../../Image/GabrielaErin.jpeg'
import Pembulutangkis from '../../Image/DarrenJonathan.jpeg'
import Lobby_SMAK1 from "../../Image/Lobby_SMAK1.jpeg"
import soc from "../../Image/soc.jpg"
import soundscape from "../../Image/soundscape.jpg"
import theater from "../../Image/theater.jpg"
import kriza from "../../Image/kriza.jpg"

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

      <div className='w-full h-auto mt-8 px-3 py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2'>
            <div className='pl-20 pr-12 rounded-lg'>
                <img src={Lobby_SMAK1} alt="" className='h-auto w-full rounded-3xl justify-end'/>
            </div>
            <div className='container mx-auto'>
              <div className='text-6xl leading-normal font-black pl-20 pt-8'>
                <div>Kenapa SMAK 1?</div>
              </div>
              <div className='pl-14 pr-14 mr-2 pt-10'>
                <Checklist txt='Sekolah swasta nomor 1 di Jakarta berdasarkan rerata TPS UTBK 2020' />
                <Checklist txt='Alumni SMAK 1 tersebar di seluruh dunia' />
                <Checklist txt='Sudah dikenal sampai ke mancanegara' />
              </div>
              <div className='pl-20 pr-20 pt-10'>
              <button
                class="py-5 px-16 bg-dark-blue text-white border active:bg-gray-200 rounded-full">
                <a href='https://psbjakarta.bpkpenabur.or.id'className="text-white text-xl font-black px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900" >
                  <u>Daftar Sekarang</u>
                </a>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full h-auto text-black px-16 py-32'>
        <div className='container mx-auto'>
          <div className='justify-center text-center font-bold mb-12 px-40'>
            <div className= 'mb-5 content-center text-lg'>
              Kegiatan
            </div>
            <div className='text-5xl leading-normal'>
              <div>Seputar Kegiatan di SMAK 1</div>
            </div>
          </div>
          <Kegiatan
            img = {soc}
            title = "Smakonecup"
            desc = "Acara tahunan yang penuh sinar matahari, keringat, dan kejutan"
          />
          <Kegiatan
            img = {soundscape}
            title = "Soundscape"
            desc = "Pertunjukan spektakuler di akhir Smakonecup"
          />
          <Kegiatan
            img = {theater}
            title = "SMUKIEZ Theater Night"
            desc = "Saat berbagai seni dipadukan dan menghasilkan sebuah karya yang memukau"
          />
          <Kegiatan
            img = {kriza}
            title = "KR1ZA"
            desc = "Terus berlatih dan raih prestasi"
          />
        </div>
      </div>


    </div>
  )
}

export default Home