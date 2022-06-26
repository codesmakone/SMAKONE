import React from 'react'

import Layout from '../../Component/Layout/KegiatanLayout'
import soc from '../../Image/Home/Kegiatan/soc.jpg'

const SOC = () => {
    return(
        <Layout
            cat = "Kegiatan"
            title = "Smakonecup"
            quote = '"Acara Tahunan yang Penuh Sinar Matahari, Keringat, dan Kejutan"'
            latterPar1 = "Smakonecup atau yang biasa disingkat SOC adalah sebuah acara tahunan yang berisikan lomba-lomba akademik dan non-akademik antar sekolah yang diselenggarakan oleh SMAK 1 PENABUR Jakarta. Acara ini biasanya diadakan di bulan Oktober dan berlangsung selama 10 hari. Smakonecup pertama kali diadakan pada tahun 1995, jadi acara ini sudah dilakukan oleh 26 generasi murid SMAK 1. Dalam acara ini, terdapat lomba akademis seperti lomba Matematika, IPA, dan Bahasa Inggris untuk SMP dan debat bagi SMA. Sedangkan lomba non-akademis berupa lomba olahraga, musik, seni, dan PASKIBRA untuk tingkat SMA." 
            img = {soc}
            alt = "smakonecup"
            latterPar2 = "SOC diselenggarakan dengan tujuan sebagai wadah bagi peserta didik SMAK 1 dan juga sekolah-sekolah lainnya untuk menyalurkan kemampuan mereka di bidang akademik dan non akademik, serta sebagai upaya mempererat hubungan SMAK 1 dengan sekolah lain. Selain itu, SOC juga dapat menjadi tempat generasi muda mengembangkan potensi diri mereka secara luas dan mendalam."
            latterPar3= "Acara ini diorganisir oleh panitia siswa yang telah dibentuk 9 bulan sebelum SOC berlangsung. Panitia lomba yang berjumlah sekitar 150 orang ini, bertugas untuk menangani semua persiapan lomba, mulai dari mengumpulkan peserta lomba, merinci kegiatan lomba, hingga mencari dana. Peserta didik yang berminat untuk menjadi bagian dari kepanitiaan SOC harus mendaftarkan diri terlebih dahulu di bidang yang diminati, dan selanjutnya akan menjalani proses seleksi panitia, sebelum akhirnya dapat bekerja di bidangnya masing-masing. Tentunya setiap panitia akan diberikan sertifikat resmi dari sekolah ketika acara sudah selesai. Bukan hanya itu, kenangan yang melekat selamanya juga akan dirasakan oleh semua orang yang berpartisipasi dalam Smakonecup ini."
        />
    )
}

export default SOC