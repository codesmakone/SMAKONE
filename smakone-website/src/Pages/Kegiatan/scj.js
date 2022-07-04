import React from 'react'

import Layout from '../../Component/Layout/SCLayout'
import SC from '../../Image/Home/Kegiatan/osn.webp'

const SClub = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "Science Club"
            quote = '"Teruslah belajar dan raih prestasi"'
            latterPar1 = "Sebuah komunitas yang memberikan tempat bagi murid SMAK 1 untuk bisa memperdalam ilmu di berbagai bidang sains. Klub ini diharapkan memberikan kesempatan bagi semua murid yang ingin bertanding di ajang Olimpiade Sains tingkat Kabupaten/Kota (OSK) atau yang sekarang lebih dikenal dengan Kompetisi Sains Nasional tingkat Kabupaten/Kota (KSN-K).            "
            img = {SC}
            alt = "Science Club"
            latterPar2 = "Terdapat 9 bidang yang bisa dipilih, yakni Astronomi, Biologi, Ekonomi, Fisika, Geografi, Informatika, Kebumian, Kimia, dan Matematika. Bidang dan materi dalam science club ini tentunya disesuaikan dengan yang dilombakan pada Kompetisi Sains Nasional tingkat Kabupaten/Kota (KSN-K) hingga kompetisi sains di tingkat yang lebih tinggi. Untuk menjadi bagian dari Science Club, siswa-siswi SMAK 1 dapat mendaftarkan diri untuk mengikuti seleksi. Science club diadakan setiap hari Sabtu pada jam 08.00-11.00 WIB."
            latterPar3 = "Setelah menjalani science club selama beberapa bulan, siswa-siswi anggota science club akan diseleksi kembali untuk mengikuti Science Club Jenjang (SCJ). SCJ diikuti oleh siswa-siswi pilihan dari berbagai sekolah PENABUR se-Jabodetabek dengan pengajar baru dan jam pembelajaran yang lebih lama. SCJ diadakan selama beberapa bulan dan selesai pada bulan Maret.           "
            latterPar4 = 'Hingga saat ini, sudah banyak siswa-siswi SMAK 1 PENABUR berhasil meraih berbagai prestasi di kancah nasional dan internasional. Beberapa siswa yang tersebut ialah Jonwin Fidelis Fam, peraih medali emas di Olimpiade Sains Nasional (OSN) 2019 dan medali perunggu di Global e-Competition on Astronomy and Astrophysics (GeCAA) 2020. Sedangkan Edward Humianto dan Joseph Oliver Lim sama-sama meraih medali emas di Kompetisi Sains Nasional (KSN) 2020 dan medali perak di Asian Physics Olympiad (APhO) 2021.           '
            name1 = 'Astronomi'
            name2 = 'Biologi'
            name3 = 'Ekonomi'
            name4 = 'Fisika'
            name5 = 'Geografi'
            name6 = 'Kebumian'
            name7 = 'Kimia'
            name8 = 'Komputer'
            name9 = 'Matematika'
            dir="/Kegiatan/pramuka"
        />
        
    )
}

export default SClub