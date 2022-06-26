import React from 'react'
import { Link } from 'react-router-dom'

import ContentHeader from '../../Component/Content/ContentHeaderDoFE'
import ContentText from '../../Component/Content/ContentText'

const DoFEIA = () => {
    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center">
                <ContentHeader
                    category = 'Kegiatan'
                    title = 'The Duke of Edinburgh’s International Award'
                    quote = '"Penghargaan bagi kamu yang suka berpetualang sambil mengembangkan kemampuan"'
                />
                <ContentText
                    text = "Penghargaan Internasional Duke of Edinburgh (The Duke of Edinburgh’s International Award) merupakan kerangka pendidikan dan pembelajaran non-formal yang beroperasi di lebih dari 130 wilayah dan negara. Program yang lebih dikenal dengan nama DofE ini dipelopori oleh Pangeran Philip, Kurt Hahn, dan Lord Hunt pada tahun 1956 di Inggris. Program ini bertujuan untuk membimbing para remaja dalam melalui masa transisi mereka menuju kedewasaan.                    "
                />

                <ContentText 
                    text = "Program DofE sudah dirancang dengan baik sehingga kaum muda akan merasa tertantang untuk mengisi masa remaja mereka dengan melakukan aktivitas-aktivitas yang produktif. Berikut merupakan beberapa fitur program DofE:                    "
                />

                <ContentText
                    title = "Akses Universal"
                    text = "Organisasi kepemudaan, sekolah, dan lembaga-lembaga lain dapat menjadi pusat penghargaan resmi yang berhak untuk menjalankan program DoFe.                    "
                />

                <ContentText
                    title = "Non-Kompetitif"
                    text = "Dalam menjalankan DofE, tidak mengenal istilah “gagal” atau “kalah”. Menunjukkan usaha yang maksimal dan memenuhi persyaratan utama seperti durasi dan merekam aktivitas akan membuat seorang peserta dapat meraih penghargaan mereka.                    "
                />

                <ContentText
                    title = "Program Yang Seimbang"
                    text = "Dalam DofE, terdapat tiga tingkat penghargaan , yakni Perunggu (Bronze), Perak (Silver) dan Emas (Gold). Untuk peserta Bronze dan Silver, terbagi menjadi empat sektor kegiatan. Yakni meliputi Pelayanan Masyarakat, Rekreasi Fisik, Skills dan Ekspedisi. Untuk peserta tingkat Gold, wajib melakukan Gold Residential Project untuk melengkapi program tersebut. Setiap peserta dapat memilih sendiri aktivitas yang dilakukan dalam setiap sektor, sesuai dengan minat dan passion-nya.                    "
                />

                <ContentText
                    title = "Level Semakin Menantang"
                    text = "DofE mengajak para pesertanya untuk mau mengembangkan diri masing-masing dengan komitmen. Oleh karena itu, semakin tinggi tingkat penghargaannya, kegiatannya akan memakan lebih banyak durasi dan keterampilan diri.                    "
                />

                <ContentText
                    title = "Partisipasi Sukarela"
                    text = "Sebagian besar waktu yang diperlukan untuk melakukan kegiatan harus dilakukan dalam waktu bebas peserta sendiri, sehingga ada kebebasan yang lebih luas untuk mengatur penyelesaian programnya. Tidak ada paksaan sama sekali dalam menjalani kegiatan ini.                    "
                />

                <ContentText
                    title = "Pengakuan Prestasi"
                    text = "Adanya komunikasi dan pengakuan langsung dari Pemimpin Penghargaan dan Penilai Aktivitas kepada para peserta dapat menjadi motivasi dalam proses pengembangan diri. Melalui program DofE, diharapkan dapat membuka banyak potensi, bakat, dan kegigihan yang dimiliki oleh para remaja di seluruh dunia.                    "
                />

                <ContentText
                    text = 
                    {
                        <p>
                            Untuk informasi lebih lanjut, dapat mengunjungi website di <a href="https://intaward.org/" className="font-semibold text-blue-600">https://intaward.org/</a> atau menghubungi wali kelas masing-masing. 
                        </p>
                    }
                />
            </div>
            <div className='flex justify-center mt-10'>
                    <Link to="/">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                        Home
                    </button>
                    </Link>
            </div>
        </div>
    )
}

export default DoFEIA