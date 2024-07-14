import React from 'react'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

import ContentHeader from '../../Component/Content/ContentHeader'
import ContentText from '../../Component/Content/ContentText'

const FAQ = () => {
    return(
        <div>
            <Nav/>
            <div className="container w-full h-full mx-auto justify-center mt-28">
                

                <div className="font-black text-left mx-6 sm:ml-16 xl:ml-28 text-4xl xl:text-6xl mt-12">FAQs</div>

                <ContentText
                    title = "Apakah pelajaran di SMAK 1 sulit?"
                    text = "Setiap murid SMAK 1 sudah melewati tes seleksi dengan standar yang tidak rendah sehingga kecerdasan akademik muridnya tidak perlu diragukan lagi. Ritme belajar di SMAK 1 tentu lebih cepat dibandingkan sekolah lainnya karena materi yang dipelajari lebih dalam dan bervariasi, sehingga susah atau tidaknya itu relatif dan tergantung dengan kecepatan belajar siswa dalam mengikuti ritme belajar SMAK1."
                />

                <ContentText
                    title = "Apakah keseharian murid SMAK 1 hanya belajar?"
                    text = "Tentu yang wajib adalah giat belajar, bukan belajar terus-menerus. Menjadi murid SMAK 1 tentunya juga masih bermain dan bersenang-senang. Namun, pembagian waktu yang baik merupakan kunci sukses di SMAK 1."
                />

                <ContentText
                    title = "Apakah perlu mengikuti les/bimbel tambahan di luar sekolah?"
                    text = "Tidak! Kalian masih bisa mengikuti pelajaran dengan baik tanpa les. Kurikulum di SMAK 1 sudah dirancang untuk mudah dimengerti. Selama siswa/i fokus mendengarkan penjelasan guru dan belajar giat secara mandiri, pasti bisa memperoleh hasil yang memuaskan."
                />

                <ContentText
                    title = "Seperti apa guru-guru di SMAK 1?"
                    text = "Guru-guru di SMAK 1 telah melalui proses seleksi yang panjang. Sehingga, bisa dipastikan semuanya berkompeten di bidangnya masing-masing. Benar, Setiap guru mempunyai cara dan karakter masing-masing dalam mengajar. Tetapi, semua guru di SMAK 1 pasti bersedia untuk menjawab pertanyaan setiap siswa yang belum memahami materi pembelajaran. Bahkan, beberapa guru juga tidak merasa keberatan bila dihubungi diluar jam pelajaran."
                />

                <ContentText
                    title = "Berapa lama kegiatan belajar dan mengajar dalam satu hari?"
                    text = "Setiap hari, ada 9-10 jam pelajaran, dengan 1 jam pelajaran berdurasi 45 menit."
                />

                <ContentText
                    title = "Pelajaran lintas minat apa saja yang bisa dipilih?"
                    text = "SMAK 1 menyediakan pelajaran lintas minat yang terdiri dari Bahasa Inggris, Mandarin, Jerman, Jepang, dan TIK, yang bebas kalian pilih. Khusus untuk jurusan MIPA, kalian juga dapat memilih lintas minat ekonomi."
                />

                <ContentText
                    title = "Apa terdapat tes IGCSE, O level, SAT, dan sebagainya sehingga bisa memudahkan untuk mendaftar di perguruan tinggi luar negeri?"
                    text = "Untuk saat ini, kurikulum SMAK 1 adalah kurikulum nasional sehingga tidak menyediakan tes tersebut. Namun, terdapat bimbingan IELTS dan simulasi tesnya untuk mempersiapkan siswa/i SMAK 1 dalam mengahadapi tes sesungguhnya yang biasanya menjadi salah satu syarat untuk mendaftar ke universitas."
                />

                <ContentText
                    title = "Apa saja kegiatan yang ada di SMAK 1?"
                    text = "Ada banyak sekali kegiatan yang bisa kalian ikuti di SMAK 1. Mulai dari ekstrakurikuler, kegiatan-kegiatan yang diselenggarakan OSIS maupun sekolah, hingga klub sains dan klub non-akademis, seperti F1RST, Smukiez Choir, KR1ZA, dan masih banyak lagi. Ada juga organisasi- organisasi yang bisa kalian ikut seperti OSIS, MPK, dan Pramuka, serta panitia Smakonecup."
                />

                <ContentText
                    title = "Sekarang saya mau mendaftarkan diri menjadi siswa/i SMAK 1. Bagaimana caranya?"
                    text = 
                    {
                    <p>
                    Untuk cara pendaftaran, kalian bisa memantau sosial media dan juga website resmi <a href="https://psbjakarta.bpkpenabur.or.id/" className="font-semibold text-blue-600">BPK PENABUR</a> atau instagram <a href="https://www.instagram.com/smak1penabur/" className="font-semibold text-blue-600">@smak1penabur</a>
                    </p>
                    }
                />
            </div>
            <Footer/>
        </div>
    )
}

export default FAQ