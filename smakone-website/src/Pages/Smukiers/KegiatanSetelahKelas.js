import React from 'react'
import { Link } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

import ContentHeaderImage from '../../Component/Content/ContentHeaderImage'
import ContentText from '../../Component/Content/ContentText'
import kegiatan from "../../Image/Home/Kehidupan/kegiatan.jpg"


const KegiatanSetelahKelas = () => {
    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center pb-5">
                <ContentHeaderImage
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
                    <div className='container mx-auto mt-10'>
                        <div className='flex justify-between ml-12 sm:ml-16 xl:ml-32 mt-2 pr-12 sm:pr-16 xl:pr-36'>
                            <Link to="/Kehidupan_smukiers/Tips" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                                Artikel Sebelumnya
                            </Link>  
                            <HashLink to="/#Kehidupan" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                                Kembali ke halaman utama
                            </HashLink>                                          
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default KegiatanSetelahKelas