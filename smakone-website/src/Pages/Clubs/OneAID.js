import React from 'react'

import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/Footer/Footer'
import Anggota from '../../Image/Clubs/OneAID/Anggota.webp'
import Eskul from '../../Image/Clubs/OneAID/Eskul.webp'
import Upacara from '../../Image/Clubs/OneAID/Upacara.webp'
import Flora from '../../Image/Clubs/OneAID/FLORA.webp'
import Team from '../../Image/Clubs/Clubpage/bg_oneaid.jpeg'
import Logo from '../../Image/Clubs/OneAID/image.webp'

const OneAID = () => {
    return (
        <div>
            <Nav />
            <div className="relative mt-12 md:mt-16 lg:mt-20 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none">
                <header className="relative">
                    <div className="relative overflow-hidden inline-block w-screen h-[21rem] md:h-[30rem]">
                        <div className="w-full h-full pointer-events-none bg-gradient-to-t from-white via-white/0 to-white/0 absolute bottom-0 left-0" style={{ height: '8rem', zIndex: 1 }}/>
                        <img
                            src={Team}
                            alt="OneAID Team"
                            className="relative -top-1 w-full h-[calc(100%+20px)] object-cover brightness-50"
                        />
                    </div>
                    <div className="absolute top-[3.5rem] md:top-[8rem] left-[50%] -translate-x-[50%] z-2 flex flex-col items-center gap-[1rem] md:gap-[2.5rem]">
                        <img
                            className="w-[50rem] md:w-[50rem]"
                            src={Logo}
                            alt="OneAID Logo"
                        ></img>
                    </div>
                </header>
            </div>
            <div className="container mx-auto mt-0">
            
            <div className="px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center">
                <h3 className="text-4xl font-black ml-6 text-left">
                    1. Apa sih itu ONE-AID?
                </h3>
                <p className="text-2xl mb-6 mt-9 justify-center text-justify">
                    One-Aid adalah tim pengurus dari unit Palang Merah Remaja (PMR) SMAK 1 Penabur. Kepengurusan ini didirikan dengan tujuan untuk membantu melaksanakan kegiatan kepalangmerahan dalam lingkup sekolah. Hal tersebut dilandasi dengan 7 prinsip dasar Palang Merah yaitu 1) Kemanusiaan, 2) Kesamaan, 3) Kenetralan, 4) Kemandirian, 5) Kesukarelaan, 6) Kesatuan dan 7) Kesemestaan.
                </p>
                <img
                    src={Anggota}
                    className="object-cover h-auto w-[100vw] max-w-full rounded-3xl mt-5 mx-auto"
                    alt="Foto Anggota OneAID"
                />
            </div>

            <h3 className="px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-4xl font-black ml-6 text-left mt-10">
                2. Kegiatannya apa saja?
            </h3>
            <div className="flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-16 xl:px-20 mt-4 gap-8">
                <img
                    src={Upacara}
                    className="w-full md:w-1/4 h-auto rounded-3xl object-cover"
                    alt="Tugas Upacara OneAID"
                />
                <div className="md:w-3/4">
                    <p className="text-2xl text-justify">
                        One-Aid melaksanakan tribakti Palang Merah yaitu 1) Meningkatkan keterampilan hidup sehat dan bersih, 2) Berkarya dan berbakti dalam masyarakat dan 3) Mempererat Persahabatan Nasional dan Internasional. Hal tersebut dilaksanakan melalui peran One-Aid dalam menjaga kesediaan perlengkapan untuk ekskul dan pertolongan pertama, menjalin hubungan dengan unit PMR sekolah lain, dan berperan sebagai penolong pertama bagi siswa yang sakit maupun mengalami cedera.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center px-6 md:px-12 lg:px-16 xl:px-20 mt-16 gap-8">
                <img
                    src={Eskul}
                    className="w-full md:w-1/4 h-auto rounded-3xl object-cover"
                    alt="Kegiatan Eskul ONE-AID"
                />
                <p className="md:w-3/4 text-2xl text-justify">
                    Peran One-Aid dapat ditemui dalam upacara bendera bulanan dan <i>event-event</i> osis seperti <i>Smukiez Olympics</i> sebagai penolong utama untuk siswa-siswi. Para pengurus juga berperan dalam mendorong partisipasi siswa-siswi yang mengikuti ekskul PMR menjadi lebih aktif dan ceria dalam mempelajari 7 materi dasar PMR (7 Materi dasar mencakup Gerakan Kepalangmerahan, Kepemimpinan, Pertolongan Pertama, Sanitasi dan Kesehatan, Kesehatan Remaja, Kesiapsiagaan Bencana dan Donor Darah). Bukan hanya itu, One-Aid juga ikut serta membantu dalam donor darah yang dilaksanakan oleh sekolah.
                </p>
            </div>

            <h3 className="px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-4xl font-black ml-6 text-left mt-10">
                3. Lomba dan Prestasi
            </h3>
            <div className="flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-16 xl:px-20 mt-4 gap-8">
                <img
                    src={Flora}
                    className="w-full md:w-1/4 h-auto rounded-3xl object-cover"
                    alt="FLORA 2024"
                />
                <div className="md:w-3/4">
                    <p className="text-2xl text-justify">
                        One-Aid juga ikut serta dalam pengembangan bakat murid-murid SMAK 1 dengan mengikuti berbagai macam perlombaan yang tentunya berhubungan dengan kegiatan PMR. Bidang-bidang lomba yang sudah pernah diikuti oleh para pengurus PMR adalah Kepalangmerahan, Ayo Siaga Bencana (ASB), Pertolongan Pertama (PP), Desain Poster, Fotografi dan Video Pendek. Pada tahun 2024, One-Aid berhasil meraih prestasi sebagai Juara 1 Kepalangmerahan dan Juara Harapan 2 PP dalam lomba FLORA 2024. Selain itu, One-Aid pernah pula mengukir prestasi di bidang Kepalangmerahan dengan meraih Juara 2 pada ATRAKSI 2023. Melalui lomba-lomba tersebut, One-Aid telah meningkatkan kebersamaan antar pengurus dan menjalin relasi dengan sekolah-sekolah lain yang berpartisipasi dalam lomba.
                    </p>
                </div>
            </div>
            
        </div>
        <Footer />
        </div>
    );
};

export default OneAID;