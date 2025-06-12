import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_justin from "../../../Image/Osis/ttd_justin.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const KrizaEsports25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Anggota Kriza Esports 2025
        </h1>
        <div className="flex flex-col items-center">
            <p className="text-left w-3/4 ">
                Setelah kami melakukan seleksi selama 5 hari pada, <b> Rabu 16 April 2025 - Jumat 18 April 2025 & Selasa 6 Mei 2025, Kamis 8 Mei 2025 - </b>, telah ditentukan anggota-anggota baru sebagai berikut: 
            </p>
        </div>

        <SeleksiGrid
          title=""
          content={[
            [1, "Benedict Erick Anthony", "XI3"],
            [2, "Brandon Colin", "X1"],
            [3, "Christopher Pierre Nugroho", "X9"],
            [4, "Diego Marvel Maxwell", "X8"],
            [5, "Geronimo Kentzo Irawan", "XI1"],
            [6, "Jonathan Halim", "X2"],
            [7, "Keanu Naim", "XI6"],
            [8, "Natasha Audrey Glorybel", "XI2"],
            [9, "Richillie Budianto", "XI6"],
            [10, "Robertus Wilson Sanjaya", "X9"],
            [11, "Evan Alexander Louis", "X4"],
            [12, "Peter Purnama", "XI4"],
            [13, "Quenella Lachelle Madeline Kaloh", "X7"],
            [14, "Quirinus Lionnel Hanson Kangga", "X8"],
            [15, "Willard Ricxie Phanagara", "X1"],
            [16, "Erick Rey Chandra", "XI4"],
          ]}
        ></SeleksiGrid>
        <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
            {/* Date */}
            <p className="text-right">Jakarta, 23 Mei 2025</p>

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
    </div>
  );
};

export default KrizaEsports25;
