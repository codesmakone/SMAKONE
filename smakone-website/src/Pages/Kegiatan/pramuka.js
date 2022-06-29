import React from 'react'
import { useNavigate,Link } from 'react-router-dom'; 

import ContentHeaderImage from '../../Component/Content/ContentHeaderImage'
import ContentText from '../../Component/Content/ContentText'
import Pramukaks from "../../Image/Home/Kegiatan/pramuka.jpg"

const Pramuka = () => {
    const navigate = useNavigate()

    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center">
                <ContentHeaderImage
                    category = 'Kegiatan'
                    title = 'Pramuka'
                    quote = '"Ambalan Soekarno-Fatmawati Siap"'
                    img = { Pramukaks }
                    alt = 'pramuka'
                />

                <ContentText
                    text = "Pramuka merupakan organisasi non akademik yang juga berfungsi sebagai wadah pendidikan keterampilan dan karakter. Pramuka SMAK 1 PENABUR Jakarta sendiri dibimbing dengan 22 pembina (guru) dan 33 Dewan Ambalan (siswa) yang juga turut serta berpartisipasi dalam beberapa kegiatan sebagai berikut:                    "
                />

                <ContentText
                    title = "Kegiatan Rutin"
                    text = "Ekstrakurikuler Pramuka wajib diikuti siswa kelas 10 selama 90 menit setiap hari Rabu seusai sekolah. Materi yang diberikan pun beragam, mulai dari keterampilan dasar ke-Pramukaan seperti, menaksir jarak, tali temali, baris-berbaris, sandi pramuka, hingga keterampilan sehari-hari seperti, public speaking, menanam tanaman hidroponik, daur ulang, kewirausahaan, dan masih banyak lagi. Sedangkan siswa kelas 11 dan kelas 12 hanya diwajibkan untuk mengikuti apel mingguan di kelas masing-masing."
                />

                <ContentText
                    title = "Baden Powell Challenge"
                    text = "Baden Powell Challenge merupakan kegiatan yang diadakan untuk siswa kelas 10 dalam memperingati hari Baden Powell sebagai bapak pramuka. Kegiatan ini biasanya dilaksanakan selama 2 pertemuan pada bulan Februari dan diisi dengan banyak games seru seperti permainan post to post yang tentunya mengandung nilai kepramukaan seperti ketangkasan, keterampilan simpul, dan lain-lain.                    "
                />

                <ContentText
                    title = "Perjusa (Perkemahan Jumat Sabtu)  "
                    text = "Seperti namanya, Perjusa merupakan kegiatan perkemahan yang biasanya diadakan pada hari Jumat dan Sabtu. Kegiatan ini diikuti oleh seluruh siswa SMAK 1 PENABUR dan dilaksanakan di sekolah. Berbeda dengan dua kegiatan sebelumnya, kegiatan ini dirancang untuk siswa kelas 10 dan 11 secara terpisah. Pada kegiatan PERJUSA materi kepramukaan yang telah diberikan selama setahun akan diulas kembali dalam bentuk games dan perlombaan.                    "
                />

                <ContentText
                    title = "Level Semakin Menantang"
                    text = "DofE mengajak para pesertanya untuk mau mengembangkan diri masing-masing dengan komitmen. Oleh karena itu, semakin tinggi tingkat penghargaannya, kegiatannya akan memakan lebih banyak durasi dan keterampilan diri."
                />

                <ContentText
                    title = "Raimuna"
                    text = "Raimuna merupakan kegiatan perkemahan selama 2 hari yang diadakan seusai penilaian akhir tahun guna membentuk karakter dan memupuk kerja sama antar pelajar. Berbeda dengan kegiatan PERJUSA, raimuna dilaksanakan di luar sekolah dengan siswa dari seluruh PENABUR sebagai pesertanya. Kegiatan yang dilakukan saat berlangsungnya Raimuna, seperti kebersamaan siswa seperti, memasak bersama di tengah perkemahan, talent show, materi P3K, dan api unggun, akan mempererat hubungan antar siswa.                    "
                />

                <ContentText
                    text = "Untuk info lebih lanjut mengenai kegiatan pramuka dan dewan ambalan dapat mengunjungi instagram @dasmukie atau menghubungi dewan ambalan dan pembina."
                />
            </div>
            <div className='flex justify-between px-6 sm:px-14 xl:px-48 mt-10'>
            <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Kembali
            </button>
            <Link to="/Kegiatan/onecast" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Artikel berikutnya
            </Link>
            </div>
        </div>
    )
}

export default Pramuka