import React from "react"

// Import Component
import AlasanCard from "../../Component/Home/AlasanCard"
import Checklist from "../../Component/Home/Checklist"
import Kegiatan from "../../Component/Home/Kegiatan"
import SelukBeluk from "../../Component/Home/SelukBeluk"
import FeatEmagz from "../../Component/Home/FeatEmagz"


// Import Image
import Pianis from "../../Image/Home/Alasan/MichaelAbimanyu.jpeg"
import Matematikawan from "../../Image/Home/Alasan/GabrielaErin.jpeg"
import Pembulutangkis from "../../Image/Home/Alasan/DarrenJonathan.jpeg"
import Lobby_SMAK1 from "../../Image/Home/Lobby_SMAK1.jpeg"
import soc from "../../Image/Home/Kegiatan/soc.jpg"
import soundscape from "../../Image/Home/Kegiatan/soundscape.jpg"
import theater from "../../Image/Home/Kegiatan/theater.jpg"
import kriza from "../../Image/Home/Kegiatan/kriza.jpg"
import kehidupan from "../../Image/Home/Kehidupan/kehidupan.png"
import tips from "../../Image/Home/Kehidupan/tips.jpg"
import kegiatan from "../../Image/Home/Kehidupan/kegiatan.jpg"

const Home = () => {
  return (
    <div className='overflow-hidden'>

      {/* <div className='mt-32 col-span-6 flex flex-col justify-start text-left '> */}
      <div className='col-span-6 flex flex-col justify-start text-left '>
        <div className='px-20 pt-20 pb-32'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] font-black'>We Are SMAK 1</h1>
          {/* <h4 className='text-2xl font-bold'>Sekolah terbaik dengan siswa-siswi yang berpresestasi</h4> */}
          <div className="flex flex-col md:flex-row gap-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[3.5rem] font-black leading-tight">ALL NEW 10<sup>th</sup> GRADERS</h1>
          <div className="mt-10">
            <a href="drive.com" target="blank" className="text-white bg-black hover:bg-white hover:text-black ease-in duration-200 font-bold rounded-full text-xl lg:text-2xl px-6 md:px-8 lg:px-10 xl:px-12 py-2 lg:py-3 text-center mr-2 mb-2">
              CLICK HERE
            </a>
          </div>
          </div>
          {/* <h4 className='text-[1.3rem] text-gray-400 mt-10'>Sekolah terbaik dengan siswa-siswi yang berpresestasi</h4> */}
          {/* <div className="mt-12">
          <h1 className='text-[4rem] font-black leading-tight'>ALL NEW <br/>10<sup>th</sup> GRADERS </h1>
          <div className="mt-5">
          <a href="drive.com" target="blank" className="text-white bg-black font-bold rounded-full text-2xl px-12 py-3 text-center mr-2 mb-2">
            CLICK HERE
          </a>
          </div>
          </div> */}
        </div>
      </div>

      <div className='bg-dark-blue w-full h-auto mt-16 text-white px-3 py-24'>
        <div className='container mx-auto'>
          <div className='justify-center text-white text-center font-bold mb-12 px-12 md:px-24 lg:px-32 xl:px-40'>
            <div className='text-white mb-5 content-center text-lg'>
              Dengar dari SMUKIERS
            </div>
            <div className='text-white text-3xl lg:text-4xl xl:text-5xl leading-normal'>
              <div>Dengar Alasan Mengapa</div>
              <div>Mereka Bersekolah di SMAK 1</div>
            </div>
          </div>
          <div className='grid grid-rows-3 grid-cols-none lg:grid-cols-3 lg:grid-rows-none justify-items-center gap-3 mt-12'>
              <div>
                <AlasanCard
                  img = {Pianis}
                  alt = "MichaelAbimanyu"
                  desc='Pianis sekaligus musisi andalan SMUKIERS'
                  dir="Alasan/MichaelAbimanyu"
                />
              </div>
              <div>
                <AlasanCard
                  img = {Matematikawan}
                  alt = "GabrielaErin"
                  desc='Matematikawan dengan puluhan medali'
                  dir="/Alasan/GabrielaErin"
                />
              </div>
              <div>
                <AlasanCard
                  img = {Pembulutangkis}
                  alt = "DarrenJonathan"
                  desc='Pebulutangkis cerdas dengan smash yang mematikan'
                  dir="/Alasan/DarrenJonathan"
                />
              </div>
            </div>
        </div>
      </div>

      <div className='w-full h-auto mt-8 px-3 py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-rows-2 grid-cols-none lg:grid-cols-2 lg:grid-rows-none'>
            <div className='pl-12 lg:pl-20 pr-12 mx-auto rounded-lg'>
                <img src={Lobby_SMAK1} alt="Lobby_SMAK1" className='h-auto w-full rounded-3xl justify-center lg:justify-end'/>
            </div>
            <div className='container mx-auto'>
              <div className='text-4xl md:text-5xl xl:text-6xl leading-normal font-bold pl-20 pt-12 lg:pt-8'>
                <div>Kenapa SMAK 1?</div>
              </div>
              <div className='pl-14 pr-14 mr-2 pt-10'>
                <Checklist txt='Sekolah swasta nomor 1 di Jakarta berdasarkan rerata TPS UTBK 2020' />
                <Checklist txt='Alumni SMAK 1 tersebar di seluruh dunia' />
                <Checklist txt='Sudah dikenal sampai ke mancanegara' />
              </div>
              <div className='pl-20 pr-20 pt-10'>
              <button className="py-4 lg:py-5 px-12 lg:px-16 bg-dark-blue rounded-full">
                <a href='https://psbjakarta.bpkpenabur.or.id' className="link-underline link-underline-white px-3 py-2 text-white text-xl font-black" target="blank">
                  Daftar Sekarang
                </a>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-dark-blue w-full h-auto mt-16 text-white px-3 py-24'>
        <FeatEmagz />
      </div>


      <div className='w-full h-auto text-black px-16 py-32'>
        <div className='container mx-auto'>
          <div className='justify-center text-center font-bold  px-12 md:px-24 lg:px-32 xl:px-40'>
            <div className= 'mb-5 content-center text-lg'>
              Kegiatan
            </div>
            <div className='text-3xl lg:text-4xl xl:text-5xl leading-normal'>
              <div>Seputar Kegiatan di SMAK 1</div>
            </div>
          </div>
          <div className="px-8">
          <Kegiatan
            img = {soc}
            title = "Smakonecup"
            desc = "Acara tahunan yang penuh sinar matahari, keringat, dan kejutan"
            dir = "/Kegiatan/SOC"
          />
          <Kegiatan
            img = {soundscape}
            title = "Soundscape"
            desc = "Pertunjukan spektakuler di akhir Smakonecup"
            dir = "/Kegiatan/Soundscape"
          />
          <Kegiatan
            img = {theater}
            title = "SMUKIEZ Theater Night"
            desc = "Saat berbagai seni dipadukan dan menghasilkan sebuah karya yang memukau"
            dir = "/Kegiatan/STN"
          />
          <Kegiatan
            img = {kriza}
            title = "KR1ZA"
            desc = "Terus berlatih dan raih prestasi"
            dir = "/Kegiatan/KR1ZA"
          />
          </div>
        </div>
      </div>


      <div className="w-full h-auto text-white bg-dark-blue px-16 py-32">
        <div className="container mx-auto">
          <div className='justify-center text-center font-bold mb-12  px-12 md:px-24 lg:px-32 xl:px-40'>
            <div className= 'mb-5 content-center text-lg'>
              Kehidupan SMUKIERS
            </div>
            <div className='text-white text-3xl lg:text-4xl xl:text-5xl leading-normal'>
              <div>Cari Tahu Seluk Beluk Kehidupan</div>
              <div>Murid-murid SMAK 1</div>
            </div>
          </div>
          <div>
          <SelukBeluk
            img = {kehidupan}
            title = "Kehidupan Selama Menjadi SMUKIERS"
            desc = "Hidup penuh keseimbangan"
            dir = "/Kehidupan_smukiers"
          />
          <SelukBeluk
            img = {tips}
            title = "Tips Belajar SMUKIERS"
            desc = "Selalu berusaha meraih yang terbaik"
            dir = "/Kehidupan_smukiers/Tips"
          />
          <SelukBeluk
            img = {kegiatan}
            title = "Kegiatan Setelah Kelas"
            desc = "Produktivitas dan istirahat yang seimbang"
            dir = "/Kehidupan_smukiers/Kegiatan"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home