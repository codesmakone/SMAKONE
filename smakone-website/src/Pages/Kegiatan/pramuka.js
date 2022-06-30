import React from 'react' 
import Layout from '../../Component/Layout/PramukaLayout'

import Pramuka_img from '../../Image/Home/Kegiatan/pramuka.jpg'


const Pramuka = () => {

    return(
            <Layout
            cat = "Kegiatan"
            title = "Pramuka"
            quote = '"Ambalan Soekarno-Fatmawati Siap!"'
            latterPar1 = "Pramuka merupakan organisasi non akademik yang juga berfungsi sebagai wadah pendidikan keterampilan dan karakter. Pramuka SMAK 1 PENABUR Jakarta sendiri dibimbing dengan 22 pembina (guru) dan 33 Dewan Ambalan (siswa) yang juga turut serta berpartisipasi dalam beberapa kegiatan sebagai berikut:" 
            imgHome = {Pramuka_img}
            alt = "Pramuka"
            title2 ="Kegiatan Rutin"
            latterPar2 = "Ekstrakurikuler Pramuka wajib diikuti siswa kelas 10 selama 90 menit setiap hari Rabu seusai sekolah. Materi yang diberikan pun beragam, mulai dari keterampilan dasar ke-Pramukaan seperti, menaksir jarak, tali temali, baris-berbaris, sandi pramuka, hingga keterampilan sehari-hari seperti, public speaking, menanam tanaman hidroponik, daur ulang, kewirausahaan, dan masih banyak lagi. Sedangkan siswa kelas 11 dan kelas 12 hanya diwajibkan untuk mengikuti apel mingguan di kelas masing-masing."
            title3="Baden Powell Challenge"
            latterPar3= "Baden Powell Challenge merupakan kegiatan yang diadakan untuk siswa kelas 10 dalam memperingati hari Baden Powell sebagai bapak pramuka. Kegiatan ini biasanya dilaksanakan selama 2 pertemuan pada bulan Februari dan diisi dengan banyak games seru seperti permainan post to post yang tentunya mengandung nilai kepramukaan seperti ketangkasan, keterampilan simpul, dan lain-lain."
            title4="Perjusa (Perkemahan Jumat Sabtu)"
            latterPar4="Seperti namanya, Perjusa merupakan kegiatan perkemahan yang biasanya diadakan pada hari Jumat dan Sabtu. Kegiatan ini diikuti oleh seluruh siswa SMAK 1 PENABUR dan dilaksanakan di sekolah. Berbeda dengan dua kegiatan sebelumnya, kegiatan ini dirancang untuk siswa kelas 10 dan 11 secara terpisah. Pada kegiatan PERJUSA materi kepramukaan yang telah diberikan selama setahun akan diulas kembali dalam bentuk games dan perlombaan."
            title5="Raimuna"
            latterPar5="Raimuna merupakan kegiatan perkemahan selama 2 hari yang diadakan seusai penilaian akhir tahun guna membentuk karakter dan memupuk kerja sama antar pelajar. Berbeda dengan kegiatan PERJUSA, raimuna dilaksanakan di luar sekolah dengan siswa dari seluruh PENABUR sebagai pesertanya. Kegiatan yang dilakukan saat berlangsungnya Raimuna, seperti kebersamaan siswa seperti, memasak bersama di tengah perkemahan, talent show, materi P3K, dan api unggun, akan mempererat hubungan antar siswa.

            "
            dir="/Kegiatan/onecast"
            />
    )
}

export default Pramuka