import React from "react";

import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";

import flashone1 from "../../Image/Clubs/Flashone/1.png";
import flashone3 from "../../Image/Clubs/Flashone/3.jpeg";
import flashone4 from "../../Image/Clubs/Flashone/4.jpeg";
import flashone6 from "../../Image/Clubs/Flashone/6.jpeg";
import flashone7 from "../../Image/Clubs/Flashone/7.jpeg";
import flashone8 from "../../Image/Clubs/Flashone/8.jpeg";

const Flashone = () => {
  return (
    <div>
      <div className="container mx-auto mt-2 md:mt-6 px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center">
        <Nav />
        <div className="px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-center">
          <h2 className="text-xl font-semibold">Clubs</h2>
          <h1 className="text-4xl xl:text-6xl font-black">Flashone</h1>
        </div>

        <div className="lg:px-16 xl:px-28 text-xl align-center mb-6 mt-9 justify-center">
          <img
            src={flashone1}
            className="object-cover h-auto w-full rounded-3xl mt-5 mx-auto"
            alt="Flashone"
          />
          <p className="text-lg mt-3 text-justify xl:px-10">
            Flashone, pasukan pengibar bendera SMAK 1 PENABUR Jakarta, atau
            biasa dikenal dengan sebutan Paskibra. Kami bertugas dalam setiap
            upacara yang diadakan oleh SMAK 1 PENABUR Jakarta, baik upacara
            rutin setiap bulannya, maupun upacara khusus, seperti upacara
            peringatan hari kemerdekaan Indonesia setiap tanggal 17 Agustus.
          </p>
        </div>
        <div className="lg:px-16 xl:px-28 text-xl align-center mt-9 justify-center">
          <h2 className="font-bold text-2xl text-center md:text-5xl">
            Tugas Flashone
          </h2>
          <div className="flex justify-between min-w-2xl">
            <img
              src={flashone3}
              className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[34rem] max-w-auto mx-auto rounded-3xl my-2"
              alt="Flashone"
            />
          </div>
          <p className="text-lg mt-3 text-justify xl:px-10">
            Tugas kami adalah sebagai petugas upacara, mulai dari pemimpin
            upacara, ajudan upacara, pengibar bendera merah putih, pembaca teks
            Pembukaan Undang-Undang Dasar NRI 1945, pembaca teks janji siswa,
            pembaca visi dan misi BPK PENABUR, pembaca visi dan misi SMAK 1
            PENABUR Jakarta, bahkan petugas yang memutar lagu saat upacara,
            seperti lagu kebangsaan Indonesia Raya, lagu mengheningkan cipta,
            lagu wajib nasional, lagu mars BPK PENABUR, dan lagu mars SMAK 1
            PENABUR Jakarta.
          </p>
        </div>

        <div className="lg:px-16 xl:px-28 text-xl align-center mb-6 justify-center">
          <div className="flex justify-between min-w-2xl">
            <img
              src={flashone4}
              className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[34rem] max-w-auto mx-auto rounded-3xl my-2"
              alt="Flashone"
            />
          </div>
          <p className="text-lg mt-3 text-justify xl:px-10">
            Sebagai petugas upacara, tentunya kami bertanggung jawab untuk
            memastikan upacara dapat berjalan dengan baik dari awal hingga
            akhir. Untuk dapat melakukan tugas dan tanggung jawab tersebut,
            tentunya diperlukan disiplin dari setiap anggota Flashone.
          </p>
        </div>
        <div className="lg:px-16 xl:px-28 text-xl mt-9 justify-center">
          <h2 className="font-bold text-2xl text-center md:text-5xl">
            Keseharian Kami
          </h2>
          <img
            src={flashone7}
            className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[34rem] max-w-auto mx-auto rounded-3xl my-6"
            alt="Flashone"
          />
          <p className="text-lg mt-3 text-justify xl:px-10">
            {" "}
            Kami berlatih setiap hari Rabu sepulang sekolah. Dalam latihan yang
            kami lakukan, tentunya ada tantangan yang dihadapi, seperti cuaca
            yang panas, kelelahan, dan tantangan lainnya. Namun, kami tetap
            berlatih dengan semangat karena sebagai anggota Flashone, kami
            berkomitmen untuk menjaga disiplin kami agar nantinya dapat bertugas
            dengan baik dalam setiap upacara yang berlangsung. Selain disiplin,
            tentunya dibutuhkan juga kerja sama dan kekompakan dalam sebuah
            pasukan pengibar bendera.
          </p>
        </div>
        <div className="lg:px-16 xl:px-28 text-xl justify-center">
          <img
            src={flashone8}
            className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[34rem] max-w-auto mx-auto rounded-3xl my-2"
            alt="Flashone"
          />
          <p className="text-lg mt-3 text-justify xl:px-10">
            Kami harus menyamakan langkah kaki kami ketika berjalan, bahkan
            menyamakan ayunan tangan kami. Semua itu memang tidak mudah, tetapi
            ketika kami berhasil menyelesaikan tugas kami dalam upacara dengan
            baik, ada rasa bangga dan bahagia dalam diri kami.
          </p>
        </div>
        <div className="lg:px-16 xl:px-28 text-xl mb-6 justify-center">
          <img
            src={flashone6}
            className="object-cover h-auto md:h-[26rem] lg:h-[30rem] xl:h-[34rem] max-w-auto mx-auto rounded-3xl my-2"
            alt="Flashone"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flashone;
