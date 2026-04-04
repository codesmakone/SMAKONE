import React, { useState } from "react";

// Import Component
import AlasanCard from "../../Component/Home/AlasanCard";
import Checklist from "../../Component/Home/Checklist";
import Kegiatan from "../../Component/Home/Kegiatan";
import SelukBeluk from "../../Component/Home/SelukBeluk";
import FeatEmagz from "../../Component/Home/FeatEmagz";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";

// Import Image
import Edward from "../../Image/Home/Alasan/Edward1.webp";
import Emily from "../../Image/Home/Alasan/Emily1.webp";
import Rania from "../../Image/Home/Alasan/Rania1.webp";
import Jayden from "../../Image/Home/Alasan/Jayden1.webp";
import Lobby_SMAK1 from "../../Image/Home/gedung_sekolah.jpg";
import soc from "../../Image/Home/Kegiatan/soc.webp";
import soundscape from "../../Image/Home/Kegiatan/soundscape.webp";
import kriza from "../../Image/Home/Kegiatan/kriza.webp";
import kehidupan from "../../Image/Home/Kehidupan/kehidupan.webp";
import tips from "../../Image/Home/Kehidupan/tips.webp";
import kegiatan from "../../Image/Home/Kehidupan/kegiatan.webp";
import stn_splash from "../../Image/Home/STN_Splash.webp";
import stn_splash_mobile from "../../Image/Home/STN_Splash_Mobile.webp";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const [carouselCurrentSlide, setCarouselCurrentSlide] = useState();

  return (
    <div>
      <Nav carouselCurrentSlide={carouselCurrentSlide} />
      {/* <div className="flex flex-col justify-start col-span-6 pt-24 text-left bg-slate-400 "> */}
      <div className="flex flex-col justify-start col-span-6 text-left mt-28">
        <div className="px-5 pt-10 pb-12 md:px-10 lg:px-16 xl:px-20 lg:pt-20 md:pb-24 lg:pb-24 xl:pb-44">
          {/* uncomment the 2 carousel segments to enable */}
          {/* <Carousel
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          customButtonGroup={null}
          arrows={false}
          responsive={{
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 1,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          beforeChange={(nextSlide, { currentSlide, onMove }) => {
            setCarouselCurrentSlide(nextSlide);
          }}
        > */}

          {/* we are smak 1 osis new ver */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl xl:text-[5rem] font-black">
              We are SMAK 1's OSIS
            </h1>
            <h4 className="text-base font-bold xl:text-2xl lg:text-xl sm:text-xl">
              Sekolah terbaik dengan siswa-siswi yang berprestasi
            </h4>
          </div>

          {/* we are smak 1 osis old ver */}
          {/* <div className="px-5 pt-32 pb-12 md:px-10 lg:px-16 xl:px-20 lg:pt-44 md:pb-24 lg:pb-24 xl:pb-44">
            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl xl:text-[5rem] font-black">
              We are SMAK 1's OSIS
            </h1>
            <h4 className="text-base font-bold xl:text-2xl lg:text-xl sm:text-xl">
              Sekolah terbaik dengan siswa-siswi yang berprestasi
            </h4>
          </div> */}

          {/* <div className="px-5 pt-32 pb-12 md:px-10 lg:px-16 xl:px-20 lg:pt-44 md:pb-24 lg:pb-24 xl:pb-45">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[3.5rem] font-black leading-tight">ALL NEW 10<sup>th</sup> GRADERS</h1>
            <div className="mt-10">
              <Link to="/BukuAcara" target="blank" className="px-6 py-2 mb-2 mr-2 font-bold text-center text-white bg-black rounded-full hover:bg-gray-700 text-md sm:text-xl lg:text-2xl md:px-8 lg:px-10 xl:px-12 lg:py-3">
                CLICK HERE
              </Link>
            </div>
          </div  */}
          {/* <div className="flex flex-col gap-5 mt-2 md:mt-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[3.5rem] font-black leading-tight">
              ALL NEW 10<sup>th</sup> GRADERS
            </h1>
            <div className="sm:mt-5 md:mt-0 lg:mt-2">
              <Link
                to="/BukuAcara"
                target="blank"
                className="px-6 py-2 mb-2 mr-2 font-bold text-center text-white bg-black rounded-full hover:bg-gray-700 text-md sm:text-xl lg:text-2xl md:px-8 lg:px-10 xl:px-12 lg:py-3"
              >
                CLICK HERE
              </Link>
            </div>
          </div> */}
        </div>

        {/* HUT 75 SMAK 1 */}
        {/* <div
          style={{
            "--image-url": `url(${stn_splash})`,
            "--image-url-mobile": `url(${stn_splash_mobile})`,
          }}
          className="px-8 md:px-10 lg:px-16 xl:px-20 pt-32 lg:pt-44 pb-16 xl:pb-24 bg-[image:var(--image-url-mobile)] md:bg-[image:var(--image-url)] bg-cover bg-top"
        >
          <article className="text-left w-[300px] md:w-[300px] lg:w-[450px] xl:w-[600px]">
            <h1 className="text-3xl font-black text-white underline lg:text-5xl xl:text-6xl">
              HUT KE-75 SMAK 1
            </h1>
            <h5 className="text-lg font-normal leading-snug text-white lg:text-xl xl:text-2xl space">
              SMAK 1 merayakan 75 tahun iman, pembelajaran, dan warisan dalam
              reuni akbar yang menyatukan alumni dari generasi pertama hingga
              siswa masa kini. <br />
              <span className="hidden lg:block">
                <br />
                Perayaan ini dimeriahkan oleh teater, musik, tari, dan seni
                visual yang mencerminkan kreativitas serta semangat SMAK 1.
              </span>
            </h5>
          </article>
          <Link to="/Kegiatan/sapxsnm">
            <button className="bg-white mt-12 lg:mt-16 xl:mt-20 px-8 lg:px-10 xl:px-12 py-1 lg:py-1.5 xl:py-2 rounded-full font-bold text-2xl lg:text-3xl xl:text-4xl">
              Learn More
            </button>
          </Link>
          <button
            onClick={() => window.open("http://75smak1.hallayak.com", "_blank")}
            className="bg-white mt-12 lg:mt-16 xl:mt-20 px-8 lg:px-10 xl:px-12 py-1 lg:py-1.5 xl:py-2 rounded-full font-bold text-2xl lg:text-3xl xl:text-4xl"
          >
            Click Here
          </button>
        </div> */}
      </div>

      {/* <div className='w-full h-auto px-3 pt-12 text-black  xl:pb-10'>
        <div className='container mx-auto'>
            <div className='justify-center px-3 mb-12 font-bold text-center '>
              <div className='text-3xl sm:text-4xl md:text-5xl xl:text-[4.5rem] pb-10 '>
                  <div>30 September 2022</div>
                  <div className="text-xl font-bold sm:text-3xl xl:text-5xl">Smukiez Theatre Night</div>
              </div>
              <div className="container flex flex-col mx-auto lg:flex-row xl:mt-16 lg:mt-4">
                    <img src={ STN } className="md:mx-36 lg:mx-[0.1rem] object-cover w-full md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-full xl:h-[30rem] rounded-2xl"alt={ STN } />
                  <div className="mx-auto mt-4 ml-0 md:ml-8 lg:ml-12 md:mr-8 lg:mr-10 xl:mr-8 sm:mt-8 md:mt-10 lg:mt-4 xl:mt-2">
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
                      <div className="mt-8 text-lg lg:text-xl sm:mt-12 lg:mt-14 xl:mt-12">
                        <a href="https://tickets.smakone.org/" target="blank" className="px-12 py-4 text-xl text-center text-white rounded-full lg:py-3 xl:py-4 lg:px-10 xl:px-12 bg-dark-blue hover:bg-dark-blue-hover ">
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
                  <button className="px-12 py-4 text-xl text-center text-white rounded-full lg:py-5 lg:px-16 bg-dark-blue hover:bg-dark-blue-hover ">
                    <a href="https://tickets.smakone.org/" target="blank">Buy Tickets Here</a>
                  </button>
                </div>
            </div>
        </div>
      </div> */}

      <div
        className="w-full h-auto px-3 py-24 text-white bg-dark-blue"
        id="Alasan"
      >
        <div className="container mx-auto">
          <div className="justify-center px-3 mb-12 font-bold text-center text-white sm:px-12 md:px-24 lg:px-32 xl:px-40">
            <div className="content-center mb-5 text-lg text-white">
              Dengar dari SMUKIERS
            </div>
            <div className="text-2xl leading-normal text-white sm:text-3xl lg:text-4xl xl:text-5xl">
              <div>Dengar Alasan Mengapa</div>
              <div>Mereka Bersekolah di SMAK 1</div>
            </div>
          </div>
          <div className="grid grid-cols-none gap-3 mt-12 md:grid-cols-2 xl:grid-cols-4 lg:grid-rows-none justify-items-center">
            <AlasanCard
              img={Edward}
              alt="Edward Rusli"
              desc="Siswa kreatif yang aktif berorganisasi."
              dir="Alasan/Edward"
            />
            <AlasanCard
              img={Emily}
              alt="Emily Jane"
              desc="Pekerja Keras yang Aktif Bersukarela"
              dir="/Alasan/Emily"
            />
            <AlasanCard
              img={Rania}
              alt="Rania Kusumadinata"
              desc="Siswi Multi-Interest yang Berprestasi"
              dir="/Alasan/Rania"
            />
            <AlasanCard
              img={Jayden}
              alt="Jayden Jurianto"
              desc="Mengukir Prestasi dengan Dedikasi"
              dir="/Alasan/Jayden"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto px-3 py-16 mt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-none sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none">
            <div className="pl-12 pr-12 mx-auto rounded-lg lg:pl-20 mt-14">
              <img
                src={Lobby_SMAK1}
                alt="Lobby_SMAK1"
                className="justify-center w-full sm:h-auto rounded-3xl lg:justify-end"
              />
            </div>
            <div className="container mx-auto mt-10 sm:mt-0">
              <div className="text-4xl font-bold leading-normal md:text-5xl xl:text-6xl pl-14 sm:pl-20 sm:pt-12 lg:pt-8">
                <div>Kenapa SMAK 1?</div>
              </div>
              <div className="pt-2 mr-2 px-14 sm:pt-10">
                <Checklist txt="Sekolah swasta nomor 1 di Jakarta berdasarkan nilai UTBK 2021" />
                <Checklist txt="Alumni SMAK 1 tersebar di seluruh dunia" />
                <Checklist txt="Sudah dikenal sampai ke mancanegara" />
              </div>
              <div className="grid px-10 pt-10 lg:px-20 place-items-center">
                <a
                  href="https://psbjakarta.bpkpenabur.or.id"
                  className="px-3 py-2 text-base font-black text-white sm:text-lg md:text-xl"
                  target="blank"
                >
                  <button className="px-12 py-4 rounded-full lg:py-5 lg:px-16 bg-dark-blue hover:bg-dark-blue-hover">
                    Daftar Sekarang
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto px-3 py-24 mt-16 text-white bg-dark-blue">
        <FeatEmagz />
      </div>

      <div
        className="w-full h-auto px-6 py-20 text-black sm:px-16 sm:py-28 xl:py-32"
        id="kegiatan"
      >
        <div className="container mx-auto">
          <div className="justify-center px-3 font-bold text-center sm:px-12 md:px-24 lg:px-32 xl:px-40">
            <div className="content-center mb-5 text-lg">Kegiatan</div>
            <div className="text-2xl leading-normal sm:text-3xl lg:text-4xl xl:text-5xl">
              <div>Seputar Kegiatan di SMAK 1</div>
            </div>
          </div>
          <div className="gap-3 mt-8 justify-items-center">
            <Kegiatan
              img={soc}
              title="Smakonecup"
              desc="Acara tahunan yang penuh sinar matahari, keringat, dan kejutan"
              dir="/Kegiatan/SOC"
            />
            <Kegiatan
              img={soundscape}
              title="Soundscape"
              desc="Pertunjukan spektakuler di akhir Smakonecup"
              dir="/Kegiatan/Soundscape"
            />
            <Kegiatan
              img={kriza}
              title="KR1ZA"
              desc="Terus berlatih dan raih prestasi"
              dir="/Kegiatan/KR1ZA"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full h-auto px-6 py-20 text-white bg-dark-blue sm:px-16 sm:py-28 xl:py-32"
        id="Kehidupan"
      >
        <div className="container mx-auto">
          <div className="justify-center px-3 mb-3 font-bold text-center sm:mb-12 sm:px-12 md:px-24 lg:px-32 xl:px-40">
            <div className="content-center mb-5 text-lg">
              Kehidupan SMUKIERS
            </div>
            <div className="text-2xl leading-normal text-white sm:text-3xl lg:text-4xl xl:text-5xl">
              <div>Cari Tahu Seluk Beluk Kehidupan</div>
              <div>Murid-murid SMAK 1</div>
            </div>
          </div>
          <div>
            <SelukBeluk
              img={kehidupan}
              title="Kehidupan Selama Menjadi SMUKIERS"
              desc="Hidup penuh keseimbangan"
              dir="/Kehidupan_smukiers"
            />
            <SelukBeluk
              img={tips}
              title="Tips Belajar SMUKIERS"
              desc="Selalu berusaha meraih yang terbaik"
              dir="/Kehidupan_smukiers/Tips"
            />
            <SelukBeluk
              img={kegiatan}
              title="Kegiatan Setelah Kelas"
              desc="Produktivitas dan istirahat yang seimbang"
              dir="/Kehidupan_smukiers/Kegiatan"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
