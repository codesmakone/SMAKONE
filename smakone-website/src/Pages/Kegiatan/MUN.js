import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link' 

import ContentHeaderImage from '../../Component/Content/ContentHeaderImage'
import ContentText from '../../Component/Content/ContentText'
import Mun from "../../Image/Home/Kegiatan/MUN.jpg"

const MUN = () => {
    const navigate = useNavigate()

    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center pb-5">
                <ContentHeaderImage
                    category = 'Kegiatan'
                    title = 'Model United Nation dan English Debate Society'
                    quote = '"Perdebatan dan persahabatan yang membangun"'
                    img = { Mun }
                    alt = 'MUN'
                />

                <ContentText
                    text = "SMAK 1 memiliki ekstrakulikuler MUN dan English Debate Society (EDS) yang keduanya merupakan ekskul berbasis bahasa inggris. Kegiatan ini sangat cocok untuk siswa-siswi yang ingin melatih ataupun menyalurkan kemampuan berbahasa inggris mereka. Tujuan utama dari kedua kegiatan ini adalah untuk melatih kerjasama, berpikir kritis, negosiasi, dan public speaking. Mereka banyak membahas mengenai isu-isu politik, hukum, lingkungan, dan juga topik-topik yang lebih ringan seperti percintaan, film, dan dunia fantasi. Selain itu, kedua ekskul ini juga memiliki klub masing-masing yang dikhususkan untuk melatih siswa-siswi SMAK 1 Penabur Jakarta yang akan mengikuti berbagai lomba di tingkat SMA, Kabupaten/Provinsi, Nasional, dan bahkan Internasional.                   "
                />

                <ContentText
                    title = "English Debate Society"/>

                <ContentText
                    text = "English Debate Society (EDS) merupakan ekskul debat bahasa inggris yang diadakan setiap hari Senin setelah pulang sekolah sampai Pukul 14.30 . Ekskul ini didampingi oleh guru bahasa inggris SMAK 1 Jakarta bersama dengan salah satu pelatih dari Tim World School Debating Championship (WSDC) Indonesia, Novelisa Wirid. Dalam ekskul EDS, siswa dan siswi akan dibentuk kedalam beberapa tim dan berdebat dengan tim lawan yang sudah diatur oleh BPH EDS. BPH EDS sendiri merupakan perwakilan siswa dan siswi yang dipilih oleh seluruh anggota ekskul dengan suara terbanyak untuk mengatur jalannya ekskul EDS.                    "
                />

                <ContentText
                    text = "Setiap tahun, klub EDS mengadakan seleksi bagi siswa dan siswi yang ingin berpartisipasi. Siswa dan siswi yang terpilih dari seleksi akan mengikuti latihan tambahan dan dilatih selama beberapa bulan sebagai persiapan dalam mengikuti berbagai lomba.                    "
                />

                <ContentText
                    text = "Dari tahun-tahun sebelumnya, SMAK 1 Jakarta sendiri sudah dikenal dengan prestasinya dalam English Debate. Sebagai bukti, selama 5 tahun berturut-turut, siswa dan siswi dari EDS selalu berhasil memenangkan lomba tingkat nasional yaitu National School Debating Championship (NSDC) mewakili Jakarta sekaligus membawa nama SMAK 1. Selain lomba-lomba tingkat nasional, pada tahun 2017 siswi SMAK 1 yaitu Kelly Laurencia berhasil lanjut ke ajang internasional dalam perlombaan Croatia WSDC.                    "
                />

                <ContentText
                    title = "Model United Nation  "
                />

                <ContentText
                    text = "Model United Nations (MUN) merupakan ekskul simulasi sidang PBB. Para peserta merupakan perwakilan delegasi dari negara yang berbeda-beda. Ekskul ini didampingi oleh guru bahasa inggris SMAK 1 Jakarta bersama dengan Leonardi Andika sebagai pelatih. MUN dilaksanakan setiap hari Sabtu dari pukul 08.00-11.00. Dalam ekskul ini, peserta akan mempelajari hubungan internasional, diplomasi, United Nations (UN), dan juga berbagai keterampilan seperti bernegosiasi, menulis, dan public speaking. Sama seperti EDS, MUN juga mempunyai seleksi klub dan BPH sebagai pengurus kegiatan ekskul MUN.                    "
                />

                <ContentText
                    text = "Bagi siswa-siswi yang berminat dapat mengunjungi akun instagram @one.mun untuk mendapatkan informasi lebih lanjut seputar lomba, webinar, dan prestasi lainnya.                    "
                />
            </div>
            <div className='flex justify-between px-7 sm:px-14 xl:px-48  mt-10'>
                    <button onClick={ () => navigate(-1) } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Kembali
                    </button>
                    <HashLink to="/#kegiatan" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Home
                    </HashLink>
            </div>
        </div>
    )
}

export default MUN