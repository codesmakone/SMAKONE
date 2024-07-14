import React from "react"

// Import Component
import AlasanCard from "../../Component/Home/AlasanCard"
import Checklist from "../../Component/Home/Checklist"
import Kegiatan from "../../Component/Home/Kegiatan"
import SelukBeluk from "../../Component/Home/SelukBeluk"
import FeatEmagz from "../../Component/Home/FeatEmagz"
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

import ContentHeader from '../../Component/Content/ContentHeader'
import ContentText from '../../Component/Content/ContentText'


// Import Image
import EnrichieGracia from '../../Image/Home/Alasan/Enrichie1.webp'
import GillianSeason from '../../Image/Home/Alasan/Gilian1.webp'
import Berwyn from '../../Image/Home/Alasan/Berwyn.webp'
import MattheusBryanDjahtranto from '../../Image/Home/Alasan/Mattheus1.webp'
import Lobby_SMAK1 from "../../Image/Home/Lobby_SMAK1.webp"
import soc from "../../Image/Home/Kegiatan/soc.webp"
import soundscape from "../../Image/Home/Kegiatan/soundscape.webp"
import theater from "../../Image/Home/Kegiatan/theater.webp"
import kriza from "../../Image/Home/Kegiatan/kriza.webp"
import kehidupan from "../../Image/Home/Kehidupan/kehidupan.webp"
import tips from "../../Image/Home/Kehidupan/tips.webp"
import kegiatan from "../../Image/Home/Kehidupan/kegiatan.webp"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Nav/>
      <div className='col-span-6 flex flex-col justify-start text-left mt-28 '>
        <div className='px-5 md:px-10 lg:px-16 xl:px-20 pt-10 lg:pt-20 pb-12  md:pb-24 lg:pb-24 xl:pb-44'>
        {/* <h1 className='text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl xl:text-[5rem] font-black'>We are SMAK 1's OSIS</h1>
          <h4 className='text-base xl:text-2xl lg:text-xl sm:text-xl font-bold'>Sekolah terbaik dengan siswa-siswi yang berprestasi</h4> */}
          {/* ini yang bener V */}
          <div className="mt-2 md:mt-3 flex flex-col gap-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[3.5rem] font-black leading-tight">ALL NEW 10<sup>th</sup> GRADERS</h1>
          <div className="sm:mt-5 md:mt-0 lg:mt-2">
            <Link to="/BukuAcara" target="blank" className="hover:bg-gray-700 text-white bg-black font-bold rounded-full text-md sm:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 xl:px-12 py-2 lg:py-3 text-center mr-2 mb-2">
              CLICK HERE
            </Link>
          </div>
          </div>
          
        </div>
      </div>

      {/* <div className=' text-black w-full h-auto px-3 pt-12 xl:pb-10'>
        <div className='container mx-auto'>
            <div className='justify-center  text-center font-bold mb-12 px-3 '>
              <div className='text-3xl sm:text-4xl md:text-5xl xl:text-[4.5rem] pb-10 '>
                  <div>30 September 2022</div>
                  <div className="text-xl sm:text-3xl xl:text-5xl font-bold">Smukiez Theatre Night</div>
              </div>
              <div className="container mx-auto flex flex-col lg:flex-row xl:mt-16 lg:mt-4">
                    <img src={ STN } className="md:mx-36 lg:mx-[0.1rem] object-cover w-full md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-full xl:h-[30rem] rounded-2xl"alt={ STN } />
                  <div className="ml-0 md:ml-8 lg:ml-12 md:mr-8 lg:mr-10 xl:mr-8 mt-4 sm:mt-8 md:mt-10 lg:mt-4 xl:mt-2 mx-auto">
                      <div className="text-xl md:text-[1.4rem] lg:text-lg xl:text-2xl font-medium text-justify flex flex-col gap-4 xl:mt-6">
                        <div>
                        Di sebuah desa, ada seorang pemuda yang tangguh dan dapat selalu diandalkan penduduk desanya. Pada suatu saat, Ia bertemu bidadari dan kemudian mengambil selendang miliknya untuk disimpan. Sebuah babak baru dari kehidupan sang pemuda akan segera di mulai!
                        </div>
                        <div>
                            SMUKIEZ THEATRE NIGHT 2022 mempersembahkan "Janji" yang mengangkatcerita adaptasi dari 'Jaka Tarub dan 7 Bidadari'
                        </div>
                        <div>
                          Bersiap dan nantikanlah penjualan tiket untuk menyaksikan penampilan STN pada tanggal 30 September 2022!!
                        </div>
                      </div>
                      <div className="text-lg lg:text-xl mt-8 sm:mt-12 lg:mt-14 xl:mt-12">
                        <a href="https://tickets.smakone.org/" target="blank" className="text-center py-4 lg:py-3 xl:py-4 px-12 lg:px-10 xl:px-12 bg-dark-blue hover:bg-dark-blue-hover rounded-full text-white text-xl ">
                          <button >Beli tiket di sini</button>
                        </a>
                      </div>
                  </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mx-96">
                <div>
                  <img src={STN} alt="STN" className="rounded-xl"/>
                </div>
                <div className="mt-10 ">
                  <button className="text-center py-4 lg:py-5 px-12 lg:px-16 bg-dark-blue hover:bg-dark-blue-hover rounded-full text-white text-xl ">
                    <a href="https://tickets.smakone.org/" target="blank">Buy Tickets Here</a>
                  </button>
                </div>
            </div>
        </div>
      </div> */}

      <div className='w-full h-auto mt-8 px-3 py-16'>
        <div className='container mx-auto'>
            <div className="container w-full h-full mx-auto justify-center mt-28">
                <ContentHeader
                    title = 'Sekilas Tentang SMAK 1'
                    iframe={true}
                />
                {/* v Context Text modified to center & smaller on mobile v */}
                <div className="container mx-auto mt-8 text-center">
                  <div className='px-6 sm:px-16 xl:px-28'>
                    <div className="text-l xl:text-xl font-bold mt-10">SMAK 1 PENABUR merupakan sekolah Kristen bergengsi di wilayah Tanjung Duren, Jakarta. Dengan visi untuk mewujudnyatakan sekolah unggul yang bermotivasi dalam iman, ilmu dan pelayanan, SMAK 1 bertujuan untuk mengembangkan potensi para peserta didik secara optimal berdasarkan teladan nilai Kristiani. Program pembelajaran SMAK 1 memberi pemahaman bagi siswa-siswi melalui penggunaan kurikulum nasional. Selain itu, siswa-siswi juga dibekali dengan pembelajaran non-akademik, misalnya melalui kegiatan ekstrakurikuler dan acara-acara sekolah. Proses pembelajaran didukung dan ditunjang oleh guru-guru yang kompeten, bimbingan konseling dan fasilitas yang lengkap. SMAK 1 pun dikenal dengan prestasi-prestasi yang cemerlang baik di bidang akademis maupun non-akademis, internasional maupun nasional.</div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
      <div className='bg-dark-blue w-full h-auto mt-16 text-white px-3 py-24' id="Alasan">
        <div className='container mx-auto'>
          <div className='justify-center text-white text-center font-bold mb-12 px-3 sm:px-12 md:px-24 lg:px-32 xl:px-40'>
            <div className='text-white mb-5 content-center text-lg'>
              Dengar dari SMUKIERS
            </div>
            <div className='text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-normal'>
              <div>Dengar Alasan Mengapa</div>
              <div>Mereka Bersekolah di SMAK 1</div>
            </div>
          </div>
          <div className='grid grid-cols-none md:grid-cols-2 xl:grid-cols-4 lg:grid-rows-none justify-items-center gap-3 mt-12'>
                <AlasanCard
                  img = {EnrichieGracia}
                  alt = "Enrichie Gracia"
                  desc='Siswa kreatif yang aktif berorganisasi.'
                  dir="Alasan/EnrichieGracia"
                />
                <AlasanCard
                  img = {GillianSeason}
                  alt = "Gillian Season"
                  desc='Seorang aktivis lingkungan dengan kesadaran tentang isu-isu global.'
                  dir="/Alasan/GillianSeason"
                />
                <AlasanCard
                  img = {Berwyn}
                  alt = "Berwyn"
                  desc='Fisikawan yang mewakili Indonesia di panggung internasional.'
                  dir="/Alasan/Berwyn"
                />
                <AlasanCard
                  img = {MattheusBryanDjahtranto}
                  alt = "Mattheus Bryan Djahtranto"
                  desc='A prestigious debater with tens of awards.'
                  dir="/Alasan/MattheusBryanDjahtranto"
                />
            </div>
        </div>
      </div>

      <div className='w-full h-auto mt-8 px-3 py-16'>
        <div className='container mx-auto'>
          <div className='grid sm:grid-rows-2 grid-cols-none lg:grid-cols-2 lg:grid-rows-none'>
            <div className='pl-12 lg:pl-20 pr-12 mx-auto rounded-lg'>
                <img src={Lobby_SMAK1} alt="Lobby_SMAK1" className='sm:h-auto w-full rounded-3xl justify-center lg:justify-end'/>
            </div>
            <div className='container mx-auto mt-10 sm:mt-0'>
              <div className='text-4xl md:text-5xl xl:text-6xl leading-normal font-bold pl-14 sm:pl-20 sm:pt-12 lg:pt-8'>
                <div>Kenapa SMAK 1?</div>
              </div>
              <div className='px-14 mr-2 pt-2 sm:pt-10'>
                <Checklist txt='Sekolah swasta nomor 1 di Jakarta berdasarkan nilai UTBK 2021' />
                <Checklist txt='Alumni SMAK 1 tersebar di seluruh dunia' />
                <Checklist txt='Sudah dikenal sampai ke mancanegara' />
              </div>
              <div className='grid px-10 lg:px-20 pt-10 place-items-center'>
              
                <a href='https://psbjakarta.bpkpenabur.or.id' className="px-3 py-2 text-white text-base sm:text-lg md:text-xl font-black" target="blank">
                  <button className="py-4 lg:py-5 px-12 lg:px-16 bg-dark-blue hover:bg-dark-blue-hover rounded-full">
                  Daftar Sekarang
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-dark-blue w-full h-auto mt-16 text-white px-3 py-24'>
        <FeatEmagz />
      </div>


      <div className='w-full h-auto text-black px-6 sm:px-16 py-20 sm:py-28 xl:py-32' id="kegiatan">
        <div className='container mx-auto'>
          <div className='justify-center text-center font-bold px-3 sm:px-12 md:px-24 lg:px-32 xl:px-40'>
            <div className='mb-5 content-center text-lg'>
              Kegiatan
            </div>
            <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-normal'>
              <div>Seputar Kegiatan di SMAK 1</div>
            </div>
          </div>
          <div className="justify-items-center gap-3 mt-8">
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


      <div className="w-full h-auto text-white bg-dark-blue px-6 sm:px-16 py-20 sm:py-28 xl:py-32" id="Kehidupan">
        <div className="container mx-auto">
          <div className='justify-center text-center font-bold mb-3 sm:mb-12 px-3 sm:px-12 md:px-24 lg:px-32 xl:px-40'>
            <div className= 'mb-5 content-center text-lg'>
              Kehidupan SMUKIERS
            </div>
            <div className='text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  leading-normal'>
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
      <Footer/>
    </div>
  )
}

export default Home