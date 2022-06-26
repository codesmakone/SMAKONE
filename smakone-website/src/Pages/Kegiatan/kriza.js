import React from 'react'

import Layout from '../../Component/Layout/KrizaLayout'
import kriza from '../../Image/Home/Kegiatan/kriza.jpg'

const Kriza = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "KR1ZA"
            quote = '"Terus Berlatih dan Raih Prestasi"'
            latterPar1 = "Terdapat berbagai ekskul dan klub olahraga yang bisa diikuti siswa-siswi SMAK 1. Mulai dari basket, voli, futsal, hingga catur, dan masih banyak lagi. Klub olahraga di SMAK 1 sendiri biasa dikenal dengan nama KR1ZA. Sudah banyak murid SMAK 1 yang berhasil meraih juara. Salah satu pencapaiannya adalah KR1ZA Basket Putri yang berhasil mendapatkan juara 1 di DBL Putri 2019."
            img = {kriza}
            alt = "kr1za"
            latterPar2 = "Untuk dapat menjadi anggota KR1ZA sendiri, terdapat seleksi yang harus diikuti. Sebaliknya, siapa pun bisa mengikuti ekskul untuk memperdalam dan melatih kemampuannya dalam olahraga pilihan."
            name1 = 'Basket'
            name2 = 'Bulutangkis'
            name3 = 'Catur'
            name4 = 'Futsal'
            name5 = 'Pencak Silat'
            name6 = 'Tenis Meja'
            name7 = 'Voli'
        />
        
    )
}

export default Kriza