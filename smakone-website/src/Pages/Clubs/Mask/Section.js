import React from "react";

import Team from "../../../Image/Clubs/Mask/mask1.webp";
import Instagram from "../../../Image/Clubs/Cressendo/instagram.webp";
import Spotify from "../../../Image/Clubs/Cressendo/spotify.webp";

export const TEXT = `
The World is Our Stage, We are MASK 🎭
MASK adalah klub seni teater SMAK 1 Penabur yang menjadi tempat bagi para pecinta seni
peran untuk menyalurkan kreativitas mereka. Klub ini tidak hanya berfokus pada
pengembangan keterampilan akting, tetapi juga mengajak anggotanya untuk lebih mendalami
dunia teater melalui berbagai pementasan dan kegiatan lainnya.
MASK adalah wadah bagi para penggemar seni peran untuk mengekspresikan diri, mengasah
kemampuan akting, dan menjelajahi dunia teater melalui berbagai pementasan dan pertunjukan
yang luar biasa.
MASK bukan sekadar klub teater biasa. Di sini, para anggota akan belajar berbagai teknik
akting, mulai dari dasar hingga tingkat lanjutan. Selain itu, mereka juga akan mendapatkan
pemahaman tentang elemen-elemen penting dalam seni pertunjukan, seperti ekspresi wajah,
gestur tubuh, intonasi suara, dan interaksi dengan lawan main.
MASK juga menampilkan pertunjukan teater setiap tahunnya pada acara Smukiez Art
Performance (SAP) yang merupakan acara seni terbesar di SMAK 1 Penabur Jakarta, hal ini
membuka peluang bagi para anggotanya untuk menunjukkan karya mereka kepada penonton
dan merayakan seni pertunjukan dalam berbagai bentuk.
MASK juga aktif mengikuti lomba teater seperti monolog dan pertunjukan kelompok,
mengadakan studi banding, tampil di berbagai tempat, dan mengikuti berbagai aktivitas menarik
lainnya.
Are you ready to explore yourself in the world of theater ⁉️

`;

const Section = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] md:h-[24rem]"
        src={Team}
        alt="Cressendo Team"
      />
      <p className="-mt-12 z-4 top-[85%] bg-white px-[1.2rem] py-[1.25rem] rounded-[2rem] shadow-2xl text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3">
        {TEXT}
        <div className="flex gap-3 items-center justify-end">
          <div className="flex items-center gap-1">
            <img
              className="w-[1rem] sm:w-[1.5rem] md:w-[1.75rem]"
              src={Instagram}
              alt="Instagram"
            />
            <a
              href="https://www.instagram.com/mask.smakone?igsh=MWY4YndzaHY3Zjc1cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D732A8] hover:text-[#9A1A76] font-medium"
            >
              mask.smakone
            </a>
          </div>
        </div>
      </p>
    </section>
  );
};

export default Section;
