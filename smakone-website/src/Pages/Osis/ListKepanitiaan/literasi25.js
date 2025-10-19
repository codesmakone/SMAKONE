import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_erika from "../../../Image/Osis/ttd_erika.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const Literasi25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Anggota Literacy Club 2025
        </h1>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi selama 8 hari pada <b>Senin, 6 Oktober 2025 - Senin, 13 Oktober 2025</b>, telah ditentukan anggota-anggota baru sebagai berikut:
        </p>
        </div>
       <SeleksiGrid
          title=""
          content={[
            [1, "Natasha Jocelyn Anton ", "XI1"],
            [2, "Cherie Arlene", "XI4"],
            [3, "Natalie Angela", "XI2"],
            [4, "Selina Prajitno", "X8"],
            [5, "Eugenia Celine Chandra", "X8"],
            [6, "Natasha Zheng", "X4"],
            [7, "Jesslyn Kireina Ailen", "X4"],
            [8, "Evangeline Alexandra Nauli Parapat", "X4"],
            [9, "Gabriella Clementine Situmorang ", "XI5"],
            [10, "Jazzelyn Martin", "XI2"],
            [11, "Jason Constantine ", "XI3"],
            [12, "Jamie Constantine", "XI8"],
            [13, "Beverly Tanzil", "X8"],
            [14, "Yefta Lambok Hutajulu", "XI9"],
            [15, "Venartha Valentio", "XI2"],
            [16, "Chantaleia Sachi Hendratno", "XI9"],
            [17, "Jennifer Olivia Chang", "X1"],
            [18, "Sebastian Harlie", "XI7"],
            [19, "Casey Edelyne Saputra ", "XI1"],
            [20, "Joanna Alexandra Liang", "XI2"],
            [21, "Nicole Christine Hiu", "XI8"],
            [22, "Shenny Pannya Lowis", "XI2"],
            [23, "Viny Graciella Tan", "XI5"],
            [24, "Jennifer Anastasia", "XI5"],
            [25, "Naomi Angelica", "XI9"],
            [26, "Regina Gabriella Hioe", "XI6"],
            [27, "Letizia Nathania Wong", "XI6"],
            [28, "Selina Kandarto", "X3"],


          ]}
        ></SeleksiGrid>
      </div>
        <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
      {/* Date */}
      <p className="text-right">Jakarta, 20 Oktober 2025</p>

      {/* Menyetujui */}
      <p className="text-center mt-24">Mengetahui,</p>
      <div className="mt-20 flex flex-col items-center">
        <img
          src={ttdyy}
          alt="Signature of YENDRA YOHANNES, M. Li."
          className="h-24 mb-4"
        />
        <p className="border-b-2 border-black font-bold uppercase text-center px-2">
          YENDRA YOHANNES, S.S., M.Li.
        </p>
        <p className="text-center mt-1">
          Wakil Kesiswaan SMAK&nbsp;1&nbsp;PENABUR&nbsp;Jakarta
        </p>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default Literasi25;
