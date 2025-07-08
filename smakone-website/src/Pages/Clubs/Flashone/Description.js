import React from "react";

import Members1 from "../../../Image/Clubs/Flashone/1.png";
import Members3 from "../../../Image/Clubs/Flashone/3.jpeg";
import Members4 from "../../../Image/Clubs/Flashone/4.jpeg";
import Members6 from "../../../Image/Clubs/Flashone/6.jpeg";
import Members7 from "../../../Image/Clubs/Flashone/7.jpeg";
import Members8 from "../../../Image/Clubs/Flashone/8.jpeg";

export const TEXT1 = `
Flashone, pasukan pengibar bendera SMAK 1 PENABUR Jakarta, atau biasa dikenal dengan sebutan Paskibra. Kami bertugas dalam setiap upacara yang diadakan oleh SMAK 1 PENABUR Jakarta, baik upacara rutin setiap bulannya, maupun upacara khusus, seperti upacara peringatan hari kemerdekaan Indonesia setiap tanggal 17 Agustus.
`;
export const TEXT2 = `
Tugas kami adalah sebagai petugas upacara, mulai dari pemimpin upacara, ajudan upacara, pengibar bendera merah putih, pembaca teks Pembukaan Undang-Undang Dasar NRI 1945, pembaca teks janji siswa, pembaca visi dan misi BPK PENABUR, pembaca visi dan misi SMAK 1 PENABUR Jakarta, bahkan petugas yang memutar lagu saat upacara, seperti lagu kebangsaan Indonesia Raya, lagu mengheningkan cipta, lagu wajib nasional, lagu mars BPK PENABUR, dan lagu mars SMAK 1 PENABUR Jakarta.
`;
export const TEXT3 = `
Sebagai petugas upacara, tentunya kami bertanggung jawab untuk memastikan upacara dapat berjalan dengan baik dari awal hingga akhir. Untuk dapat melakukan tugas dan tanggung jawab tersebut, tentunya diperlukan disiplin dari setiap anggota Flashone.
`;
export const TEXT4 = `
Kami berlatih setiap hari Rabu sepulang sekolah. Dalam latihan yang kami lakukan, tentunya ada tantangan yang dihadapi, seperti cuaca yang panas, kelelahan, dan tantangan lainnya. Namun, kami tetap berlatih dengan semangat karena sebagai anggota Flashone, kami berkomitmen untuk menjaga disiplin kami agar nantinya dapat bertugas dengan baik dalam setiap upacara yang berlangsung. Selain disiplin, tentunya dibutuhkan juga kerja sama dan kekompakan dalam sebuah pasukan pengibar bendera.
`;
export const TEXT5 = `
Kami harus menyamakan langkah kaki kami ketika berjalan, bahkan menyamakan ayunan tangan kami. Semua itu memang tidak mudah, tetapi ketika kami berhasil menyelesaikan tugas kami dalam upacara dengan baik, ada rasa bangga dan bahagia dalam diri kami.
`;



const Description = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%]">
      <div class="px-6 md:px-12 lg:px-16 xl:px-20 pt-10 justify-center text-center">
        <h2 class="text-xl font-semibold">Clubs</h2>
        <h1 class="text-4xl xl:text-6xl font-black">Flashone</h1>
      </div>
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members1}
        alt="Flashone Members in SMUKIE Court"
      />
      <p className="mt-5 z-4 top-[85%] px-[1.2rem] py-[1.25rem] text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3">
        {TEXT1}
      </p>
      <h2 class='my-[1rem] xl:my-[3rem] text-center font-bold text-4xl'>Tugas Kami</h2>
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members3}
        alt="Flashone Flag Raiser Members"
      />
      <p className="mt-5 z-4 top-[85%] px-[1.2rem] py-[1.25rem] text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3">
        {TEXT2}
      </p>
      <img
        className="mt-[3rem] object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members4}
        alt="Flashone Flag Raiser Members"
      />
      <p className="mt-5 z-4 top-[85%] px-[1.2rem] py-[1.25rem] text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3">
        {TEXT3}
      </p>
      <h2 class='my-[1rem] xl:my-[3rem] text-center font-bold text-4xl'>Keseharian Kami</h2>
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members7}
        alt="Flashone Members in SMUKIE Court"
      />
      <p className="mt-5 z-4 top-[85%] px-[1.2rem] py-[1.25rem] text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3">
        {TEXT4}
      </p>
      <img
        className="mt-[3rem] object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members8}
        alt="Flashone Members in SMUKIE Hall"
      />
      <p className="mt-5 z-4 top-[85%] px-[1.2rem] py-[1.25rem] text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3">
        {TEXT5}
      </p>
      <img
        className="mt-5 object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members6}
        alt="Flashone Members in SMUKIE Court"
      />
    </section>
  );
};

export default Description;
