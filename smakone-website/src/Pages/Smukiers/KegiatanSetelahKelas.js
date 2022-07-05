import React from 'react'
import { Link } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

import ContentHeader from '../../Component/Content/ContentHeader'
import ContentText from '../../Component/Content/ContentText'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

import kegiatan from "../../Image/Home/Kehidupan/kegiatan.webp"


const KegiatanSetelahKelas = () => {
    return(
        <div>
            <Nav/>
            <div className="container w-full h-full mx-auto justify-center pb-5 mt-28">
                <ContentHeader
                    category = 'Kehidupan Smukiers'
                    title = 'Kegiatan Setelah Kelas'
                    quote = '"Produktivitas dan istirahat yang seimbang"'
                    img = { kegiatan }
                    alt = 'kegiatan'
                />

                <ContentText
                    text = "Bel pulang sekolah berbunyi, menandakan selesainya segala kegiatan belajar mengajar di sekolah. Bagi beberapa siswa-siswi, istirahat usai sekolah merupakan suatu hal yang dapat menyegarkan pikiran dan waktu untuk melakukan kegiatan yang diinginkan. Tetapi, apakah yang biasanya smukiers lakukan?"
                />

                <ContentText
                    title = "Berorganisasi di sekolah"
                    text = "Pembelajaran dalam organisasi mengambil peran yang sangat penting dalam kehidupan peserta didik. Apalagi, peserta didik juga dapat melatih kerja sama, toleransi, mengembangkan sikap kepemimpinan dan manajemen waktu melalui organisasi. SMAK 1 PENABUR menyediakan wadah-wadah organisasi, seperti OSIS, Dewan Ambalan (pramuka), Shutterone (tim dokumentasi), Monograph (tim desain grafis), dan masih banyak lagi. Ketersediaannya variasi pilihan organisasi sekolah memberikan kebebasan bagi peserta didik untuk memilih organisasi sesuai minat dan kemampuan diri. Selain itu, siswa juga akan mendapatkan pengalaman-pengalaman exquisite, seperti SMAK 1 Cup, Smukiez Theatre Night, dan event-event lain yang tidak dapat terlupakan."
                />

                <ContentText
                    title = "Mengembangkan Minat dan Bakat"
                    text = "Kesibukan akademis memanglah keseharian dari seorang peserta didik. Namun, setelah semua kesibukan selesai, mengembangan minat dan bakat juga penting sebagai suatu upaya untuk memperkuat potensi diri. Di SMAK 1 PENABUR, siswa dapat menyalurkan hobi, minat dan bakatnya melalui ekstrakurikuler dan club di sekolah. Dengan bimbingan dan arahan yang tepat, siswa dapat mengembangkan potensi diri di bawah sebuah komunitas sebagai inspirasi untuk meningkatkan kapasitas dan mengasah kreativitas mereka."
                />

                <ContentText
                    title = "Beristirahat di Rumah"
                    text = "Usai melalui hari yang panjang, beristirahat merupakan pilihan yang bijak untuk menjaga kesehatan. Sebagai peserta didik SMAK 1, belajar memanglah yang utama. Tetapi, terkadang berhenti sejenak untuk menyegarkan diri dari kesibukan akan memberikan hasil yang lebih memuaskan."
                />

                <ContentText
                    title = "Mencari Hiburan dan Bersantai Sejenak"
                    text = "Lokasi yang strategis membuat SMAK 1 PENABUR dekat dengan tempat berkumpul. Tempat terdekat seperti Family Mart, Richeese, Fore, serta Starbucks kerap dipenuhi peserta didik SMAK 1 usai sekolah. Baik untuk sekedar makan ataupun belajar bersama teman. Selain itu, tidak jarang juga peserta didik mengunjungi mall terdekat seperti, Central Park dan Taman Anggrek untuk mencari hiburan bersama teman dan mengisi ulang energi seusai sekolah."
                />

                <ContentText
                    text = "Melalui setiap kegiatan yang kerap dilakukan peserta didik SMAK 1, kegiatan-kegiatan yang dilakukan sebuah ekspresi yang digunakan siswa-siswi untuk melepas diri dari kesibukan diri. Baik beristirahat, berorganisasi, maupun berkumpul bersama teman, sangat disarankan bagi siswa-siswi untuk memilih kegiatan yang tepat untuk menyegarkan diri setelah menjalani hari yang melelahkan."
                />
                    <div className='flex justify-between mt-10 px-10 sm:px-24 lg:px-14 xl:px-32'>
                        <Link to="/Kehidupan_smukiers" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-ml-8 lg:ml-0 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Artikel Sebelumnya
                        </Link> 
                        <HashLink to="/#Kehidupan" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Home
                        </HashLink>                                        
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default KegiatanSetelahKelas