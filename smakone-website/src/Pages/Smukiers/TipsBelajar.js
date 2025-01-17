import React from 'react'
import { Link } from 'react-router-dom';

import ContentHeader from '../../Component/Content/ContentHeader'
import ContentText from '../../Component/Content/ContentText'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

import tips from "../../Image/Home/Kehidupan/tips.webp"

const TipsBelajar = () => {
    return(
        <div>
            <Nav />
            <div className="container w-full h-full mx-auto justify-center pb-5 mt-28">
                <ContentHeader
                    category = 'Kehidupan Smukiers'
                    title = 'Tips Belajar SMUKIERS'
                    quote = '"Selalu berusaha meraih yang terbaik"'
                    img = { tips }
                    alt = 'tips'
                />

                <ContentText
                    text = "Dengan banyaknya kegiatan murid SMAK 1 baik akademis, maupun juga non-akademis. Diperlukan strategi untuk mencapai keseimbangan antara berkegiatan dan istirahat. Menjadi tantangan tersendiri bagi para siswa. Cara belajar yang efektif merupakan salah satu kunci dalam menjaga keseimbangan ini. Berikut merupakan beberapa tips yang dapat memudahkan kita dalam proses pembelajaran."
                />

                <ContentText
                    title = "Membuat to-do list"
                    text = "Banyaknya tugas dan ulangan terkadang membuat siswa-siswi kewalahan. Saat kewalahan, akan lebih sulit bagi kita untuk membagi waktu dengan baik. Alhasil, kita akan tidur lebih larut, belajar menggunakan Sistem Kebut Semalam (SKS), hingga telat mengumpulkan tugas. Maka dari itu, sangat penting bagi kita untuk menyusun keseharian dengan bantuan to-do list atau planner. To-do list dan planner dapat dapat membantu kita untuk membuat skala prioritas, serta dalam menetapkan target-target keseharian. Akan tetapi, harus diingat bahwa target yang telah ditetapkan juga harus diwujudkan."
                />

                <ContentText
                    title = "Menguji diri"
                    text = "Riset membuktikan bahwa otak kita perlu diuji dengan metode retrieval practice, dimana kita menguji ulang materi yang dipelajari agar dapat benar-benar dipahami di dalam otak. Kita dapat mengujinya dengan mengerjakan berbagai latihan soal. Banyaknya soal latihan yang diberikan guru sebaiknya tidak dijadikan beban, tetapi sebagai bagian dari pembelajaran.Sedangkan, untuk hafalan, kita dapat membuat pertanyaan-pertanyaan dengan media flashcards, baik menggunakan kertas maupun media digital."
                />

                <ContentText
                    title = "Membuat kelompok belajar"
                    text = "EKelompok belajar sangat membantu dalam kegiatan belajar. Mereka berfungsi sebagai support system untuk kita dan sebaliknya. Sesama anggota kelompok belajar bisa saling mengingatkan satu sama lain untuk belajar, melontarkan pertanyaan untuk menguji pemahaman, dan saling berbagi catatan kita agar materi pembelajaran menjadi lebih lengkap. Hal ini tentunya akan menguntungkan setiap orang dalam proses pembelajaran."
                />

                <ContentText
                    title = "Istirahat"
                    text = "Istirahat diperlukan untuk membantu meningkatkan kemampuan otak dan mempertajam ingatan . Proses belajar yang ideal adalah belajar sekitar 45 menit lalu diselingi istirahat beberapa menit. Akan lebih ideal, bila bahan tersebut dicicil dengan jeda waktu yang cukup terutama untuk materi hafalan. Dengan begitu, kita dapat beristirahat dengan waktu yang cukup. Jangan paksakan otak untuk belajar berjam-jam. Ingatlah bahwa selain belajar, kita harus tetap memperhatikan kesehatan fisik dan mental kita."
                />

                <ContentText
                    text = "Selain beberapa tips tersebut, hal yang dibutuhkan untuk mewujudkan proses pembelajaran yang efektif adalah Pola pikir growth mindset. Growth mindset merupakan sebuah pola pikir yang menekankan bahwa kecerdasan kita dapat terus menerus berkembang jika kita berusaha. Dengan memiliki pola pikir ini, siswa- siswi diharapkan untuk menjadi lebih pantang menyerah dan lebih berani dalam menghadapi tugas maupun penilaian yang menantang."
                />
                <div className='flex justify-between mt-10 px-5 sm:px-24 lg:px-14 xl:px-28'>
                        <Link to="/Kehidupan_smukiers" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-ml-8 lg:ml-0 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Artikel Sebelumnya
                        </Link>                        
                        <Link to="/Kehidupan_smukiers/kegiatan" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-5 py-2.5 text-center sm:-mr-8 lg:mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                            Artikel Berikutnya
                        </Link>                        
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TipsBelajar