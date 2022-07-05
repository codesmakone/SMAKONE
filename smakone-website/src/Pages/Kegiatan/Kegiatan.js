import React from 'react'

import ContentHeader from '../../Component/Content/ContentHeader'
import ContentText from '../../Component/Content/ContentText'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'

const Kegiatan = () => {
    return(
        <div>
            <Nav/>
            <div className="container w-full h-full mx-auto justify-center mt-28">
                <ContentHeader
                    title = 'Ada Apa Aja Sih di SMAK 1?'
                    iframe={true}
                />
                <ContentText
                    text = "Banyak orang mengira di SMAK 1 itu hanya belajar, belajar, dan belajar. Memang benar sih kami banyak belajar, tetapi belajarnya bukan hanya dalam bidang akademis. Dalam bidang non-akademis kami juga banyak belajar, loh. SMAK 1 menyediakan berbagai club, ekstrakulikuler, banyak acara menarik seperti SMAK ONE CUP, dan sebagainya."
                />

                <ContentText
                    text = "Pertama, mengenai club di SMAK 1 PENABUR. Club di SMUKI itu sangat beragam dimulai dari club graphic design Monograph, jurnalistik PENS1L, mini orchestra Smukiez Youth Chamber, band Cressendo, Smukiez Wind Ensemble, SMUKIEZ Choir, English Debate Society, ONE Model United Nations, contemporary dance SEREN1TY, modern Dance F1RST, pramuka (siswa juga bisa berpartisipasi menjadi dewan ambalan dan mengurus acara seperti PERJUSA, Raimuna, dan sebagainya), PMR, PASKIBRAKA Flash One, club fotografi, Shutter One, radio club ONE FM yang mengisi jam istirahat warga sekolah dengan lagu-lagu seru dan berita-berita terbaru dunia setiap dua minggu sekali, teater MASK yang tampil ketika Smukiez Theather Night dan acara SMAK 1 lainnya, serta club olahraga KR1ZA yang terdiri dari bulutangkis, futsal, basket, voli, tenis meja, dan banyak olahraga lainnya. Dengan banyaknya club yang disediakan, siswa-siswi dapat menikmati hobi bersama kawan-kawan yang memiliki interest dalam bidang yang sama."
                />

                <ContentText
                    text = "Kedua, SMUKI juga menyediakan banyak ekstrakurikuler menarik seperti bahasa korea, manga, animation, web design, multimedia, master of ceremony, business plan, kolintang, pencak silat, dan lain sebagainya. Adapun pilihan ekskur dapat berganti dari tahun ke tahun menyesuaikan dengan pihak sekolah."
                />

                <ContentText
                    text = "Ketiga, pihak sekolah dan pengurus OSIS juga mengurus banyak sekali acara, seperti Imlek, Valentine’s day, Paskah, Natal, Live-in, workshop yang mengundang beberapa narasumber menarik, MPLS2B, hari kemerdekaan, Smukiez Theater Night, Smukiez art week, RESIGHT, Tutorial for Others by Smukiers dimana siswa-siswi bisa mendaftar untuk mengajar anak-anak yang kurang mendapatkan akses pendidikan, Tutor Teman Sebaya (kegiatan dimana siswa-siswi dapat mengajar teman-teman lain di sekolah), donor darah, Smukiez Olympics, Entrepreneurs day, SMAK ONE CUP (siswa-siswi dapat mendaftar menjadi panitia di berbagai bidang), Family Run, dan yang sebentar lagi akan release yaitu TEDXSMAKONE!! Selain semua program acara dan kegiatan yang telah ditulis, masih banyak lagi kegiatan yang OSIS kerjakan dimana siswa-siswi dapat berpartisipasi dalam kemampuan dan bidang yang ingin mereka tekuni. Setiap acara tersebut memiliki warna mereka masing-masing yang membuat masa SMA smukiers menjadi sangat berkesan."
                />

                <ContentText
                    text = "Kegiatan lain yang SMAK 1 adakan merupakan i-Project dimana siswa-siswi akan menyusun karya ilmiah mereka sendiri dalam bidang yang mereka minati. Selain itu, SMAK 1 juga mengadakan EduFair agar siswa-siswi memiliki gambaran mengenai tempat perkuliahan yang tepat untuk mereka. Dalam kegitan EduFair, SMAK 1 juga kerap kali mendatangkan alumni-alumni yang sudah bekerja di profesi mereka untuk membagikan pengalaman mereka."
                />

                <ContentText
                    text = "Selanjutnya untuk siswa-siswi yang memiliki minat di fisika, biologi, matematika, geografi, ekonomi, akuntansi, dan beberapa pelajaran lainnya dan berminat untuk mengikuti OSK ataupun OSN, SMAK 1 juga menyediakan pelatihan Science Club Jenjang setiap minggunya dan sangat mendukung siswa-siswi untuk mengikuti lomba-lomba baik akademik maupun non-akademik. Oleh karena itu, selain siswa-siswi yang memiliki minat di lomba akademik, siswa-siswi yang memiliki minat di lomba non-akademik juga dapat mengikuti lomba-lomba seperti O2SN, DBL, lomba mural, dance, atau bidang lain di cup sekolah lain, serta masih banyak lomba lainnya juga yang bisa saja mencapai taraf internasional."
                />

                <ContentText
                    text = "Selain kegiatan-kegiatan, club, dan ekstrakulikuler yang seru, tentunya warga sekolah SMAK 1 dan gedung SMAK 1 sendiri sangatlah berkesan. Kantin SMAK 1 menyediakan banyak sekali ragam makanan dengan jenis yang beragam dari makanan western, korean, sampai indonesian. Tidak lupa, ada kantin SMAK 1 yang sudah cashless, loh. Jadi hanya menggunakan student card sudah bisa membeli makanan yang diinginkan. Fasilitas yang menjadi khas SMUKI adalah adanya balkon di aula atau kami sebutnya lantai delapan setengah. Dengan adanya balkon tersebut, kegiatan Smukiez Theater Night semakin terasa seperti di teater beneran!"
                />

                <ContentText
                    text = "Setelah menyebutkan semua itu, sepertinya masih tidak cukup untuk mendeskripsikan apa saja yang terdapat di SMAK 1 karena masih terdapat banyak sekali hal yang belum dituliskan. Namun satu hal yang pasti, sekolah di SMAK 1 untuk penulis sendiri merupakan pengalaman yang tak terlupakan karena kami banyak berkolaborasi bersama siswa lain, belajar mengemban tanggung jawab akademik dan non-akademik, serta bersama-sama berjuang meraih mimpi dengan mengembangkan bakat kami di berbagai fasilitas yang telah disediakan SMAK 1 dengan cara yang seru dan interaktif. Penulis rasa, teman-teman harus mencoba sendiri berbagai hal yang disediakan SMAK 1 untuk merasakan keseruannya."
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Kegiatan