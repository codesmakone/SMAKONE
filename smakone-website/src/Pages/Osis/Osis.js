import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import OsisLayout from '../../Component/Osis/OsisLayout'
import OsisNav from '../../Component/Osis/OsisNav'

// Image
import Osis_Image from '../../Image/Osis/OSIS_Pelantikan.jpeg'
import bph from '../../Image/Osis/BPH/bph.png'
import bid_1 from '../../Image/Osis/Bidang_1/bidang_1.png'
import bid_2 from '../../Image/Osis/Bidang_2/bidang_2.png'
import bid_3 from '../../Image/Osis/Bidang_3/bidang_3.png'
import bid_4 from '../../Image/Osis/Bidang_4/bidang_4.png'
import bid_5 from '../../Image/Osis/Bidang_5/bidang_5.png'
import bid_6 from '../../Image/Osis/Bidang_6/bidang_6.png'
import bid_7 from '../../Image/Osis/Bidang_7/bidang_7.png'
import bid_8 from '../../Image/Osis/Bidang_8/bidang_8.png'
import bid_9 from '../../Image/Osis/Bidang_9/bidang_9.png'
import bid_10 from '../../Image/Osis/Bidang_10/bidang_10.png'


const Osis = () => {
  return (
    <div>
      <div id='osis' className='mx-auto container'>
      <OsisLayout 
      title="Tentang OSIS"
      desc="OSIS SMAK 1 merupakan satu-satunya organisasi resmi di SMAK 1 PENABUR Jakarta. Sejak awal dibentuk, kami selalu dituntut untuk membuat salah satu sekolah terbaik di Indonesia menjadi lebih baik lagi. Dengan satu tim, satu visi, dan satu misi, OSIS SMAK 1 mengarah ke arah yang benar dengan segudang prestasi termasuk menyelenggarakan ajang SMAK ONE CUP setiap tahunnya. Jalan yang akan dilewati bebas dari hambatan untuk OSIS SMAK 1 terus melebarkan sayapnya."
      img={Osis_Image}
      visi1 ="Menjadikan SMAK 1 PENABUR Jakarta sebagai wadah bagi siswa-siswi untuk mengembangkan potensi dan prestasi, baik secara akademik maupun non-akademik yang berlandaskan pada iman, ilmu, pelayanan dan menjadikan OSIS sebagai sarana untuk menampung inspirasi, aspirasi, serta kreasi siswa."
      visi2 ="Meningkatkan partisipasi siswa-siswi SMAK 1 PENABUR Jakarta dalam berbagai program yang edukatif, kreatif dan inovatif, serta dapat menjalar masyarakat luar, sehingga siswa-siswi SMAK 1 dapat menjadi berkat, baik bagi internal maupun eksternal."
      misi1 ="Memberikan kesempatan seluas-luasnya bagi seluruh peserta didik untuk melakukan pengembangan bakat dan minat melalui program-program yang diadakan OSIS."
      misi2 ="Membuka ruang terbuka bagi peserta didik SMAK 1 untuk bergerak dan berkontribusi secara konkret dalam pelestarian lingkungan hidup."
      misi3 ="Membangun kesadaran peserta didik SMAK 1 untuk berpartisipasi dalam kegiatan-kegiatan yang berorientasi kepada masyarakat, sehingga dapat memberikan dampak yang lebih luas."
      misi4 ="Mengoptimalisasikan kualitas SDM SMAK 1 melalui restorasi organisasi yang disruptif serta pengembangan program yang sudah ada dengan evaluasi secara berkala."
      />
      </div>

      <div id='bidang' className='bg-dark-blue w-full h-auto text-white py-14 mt-16'>
        <div className='container mx-auto'>
          <div className='text-center px-6 sm:px-24  md:px-32 lg:px-36 xl:px-52'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold'>
              Bidang - Bidang
            </h1>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-10 mt-10 place-items-center'>

              <div className="col-span-3 lg:col-span-5">
              <NavLink to="bph" >
                <OsisNav
                  img={bph}
                  Title="Badan Pengurus Harian"
                />
              </NavLink>
              </div>

              <div className="">
              <NavLink to="bidang1">
                <OsisNav
                  img={bid_1}
                  Title="Bidang 1"
                  // desc ="Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa"
                  />
              </NavLink>
              </div>
              <div className="">
              <NavLink to="bidang2">
                <OsisNav
                  img={bid_2}
                  Title="Bidang 2"
                  // desc ="Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia"
                  />
              </NavLink>
              </div>
              <div className="">
              <NavLink to="bidang3">
                <OsisNav
                  img={bid_3}
                  Title="Bidang 3"
                  // desc ="Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara"
                  />
              </NavLink>
              </div>
              <div className="">
              <NavLink to="bidang4">
                <OsisNav
                  img={bid_4}
                  Title="Bidang 4"
                  // desc ="Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)"
                  />
              </NavLink>
              </div>
              <div className="">
              <NavLink to="bidang5">
                <OsisNav
                  img={bid_5}
                  Title="Bidang 5"
                  // desc ="Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural"
                  />
              </NavLink>
              </div>
              <div className="">
              <NavLink to="bidang6">
                <OsisNav
                  img={bid_6}
                  Title="Bidang 6"
                  // desc ="Bidang Kreativitas, Keterampilan, dan Kewirausahaan"
                  />
              </NavLink>
              </div>
              <div className="">
              <NavLink to="bidang7">
                <OsisNav
                  img={bid_7}
                  Title="Bidang 7"
                  // desc ="Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi"
                  />
              </NavLink>
              </div>
              <div className="justify-items-end">
              <NavLink to="bidang8">
                <OsisNav
                  img={bid_8}
                  Title="Bidang 8"
                  // desc ="Bidang Pembinaan Sastra dan Budaya"
                  />
              </NavLink>
              </div>
              <div className="">
              <NavLink to="bidang9">
                <OsisNav
                  img={bid_9}
                  Title="Bidang 9"
                  // desc ="Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)"
                  />
              </NavLink>
              </div>
              <div className="col-span-3 lg:col-auto">
              <NavLink to="bidang10">
                <OsisNav
                  img={bid_10}
                  Title="Bidang 10"
                  // desc ="Bidang Pembinaan Komunikasi dalam Bahasa Inggris"
                  />
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Osis