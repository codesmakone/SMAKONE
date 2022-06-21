import React from 'react'

import ContentHeaderImage from '../../Component/Content/ContentHeaderImage'
import ContentText from '../../Component/Content/ContentText'
import kehidupan from "../../Image/Home/Kehidupan/kehidupan.png"

const KehidupanSmukiers = () => {
    return(
        <div className="">
            <div className="container w-full h-full mx-auto justify-center pb-5">
                <ContentHeaderImage
                    category = 'Kehidupan Smukiers'
                    title = 'Kehidupan Selama Menjadi SMUKIERS'
                    quote = '"Hidup penuh keseimbangan"'
                    img = { kehidupan }
                    alt = 'kehidupan'
                />

                <ContentText
                    text = "SMAK 1 PENABUR Jakarta identik dengan siswa-siswi yang sibuk, tugas yang menumpuk dan ulangan-ulangan yang sulit. Tidak dipungkiri bahwa keseharian seorang siswa SMAK 1 dipenuhi dengan berbagai macam kegiatan dan aktivitas akademis maupun non-akademis. Meskipun demikian, kenangan dan momen tersebut sangatlah berkesan dan tak terlupakan. Lalu, bagaimana kehidupan sehari-hari siswa-siswi SMAK 1?"
                />

                <ContentText
                    title = "Akademis"
                    text = "Dalam satu hari, terdapat 9-10 jam pelajaran yang masing-masing berdurasi 45 menit. Mata pelajaran setiap harinya bervariasi dan dapat disesuaikan dengan minat kita, misalnya seni (tari, rupa, vokal, dan musik) dan lintas minat (Jerman, Jepang, Mandarin, Ekonomi, Inggris, dan Informatika). Selain itu, fasilitas-fasilitas di SMAK 1 seperti laboratorium hingga lapangan olahraga memungkinkan siswa-siswinya untuk dapat memahami topik pembelajaran dengan maksimal."
                />

                <ContentText
                    title = "Organisasi dan Kepanitiaan"
                    text = "Di SMAK 1, terdapat berbagai jenis organisasi dan kepanitiaan dengan tujuan soft skill yang berbeda. Melalui OSIS, Dewan Ambalan, Panitia Smakonecup, Peer Educator dan organisasi lainnya, kita dapat mengasah minat dan bakat di berbagai macam bidang. Dengan berperan aktif dalam organisasi sekolah, akan sangat membantu siswa-siswi untuk mengembangkan potensi diri dan memperluas relasi di lingkungan sekolah."
                />

                <ContentText
                    title = "Ekstrakurikuler"
                    text = "Ekstrakurikuler di SMAK 1 sangat bervariasi, mulai dari bahasa Korea, animasi, mini orkestra, manga, web design, business plan, beauty class, dan masih banyak lagi. Melalui ekstrakurikuler ini, siswa-siswi dapat mengembangkan minat dan bakat masing - masing sekaligus berfungsi sebagai sarana penyegaran setelah belajar."
                />

                <ContentText
                    title = "Waktu Istirahat"
                    text = "Setelah menjalani jam pelajaran yang panjang dan menguras tenaga, siswa-siswi dapat menghabiskan waktu istirahatnya di area kantin. Ada berbagai stall yang menjual makanan dan minuman yang bervariasi, mulai dari yang manis, pedas, hingga panas dan dingin. Berbagai tanaman yang menghiasi kantin, menciptakan suasana yang rindang dan asri."
                />
            </div>
        </div>
    )
}

export default KehidupanSmukiers