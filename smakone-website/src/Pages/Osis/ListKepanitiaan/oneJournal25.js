import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_erika from "../../../Image/Osis/ttd_erika.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const OneJournal25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Anggota One Journal 2025
        </h1>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi selama 5 hari pada <b>Senin, 5 Mei 2025 - Jumat 9 Mei 2025</b>, telah ditentukan anggota-anggota baru sebagai berikut:
        </p>
        </div>
       <SeleksiGrid
          title=""
          content={[
            [1, "Chantaleia Sachi Hendratno", "X8"],
            [2, "Elaine Felisha Leman", "XI2"],
            [3, "Aurel Jolyn Japutra", "X4"],
            [4, "Garrett Earl Hidayat", "X6"],
            [5, "Keiko Kanaya Manli", "X4"],
            [6, "Emily Adelia", "X6"],
            [7, "Michelle Tan", "X8"],
            [8, "Verena Sheridan", "X6"],
            [9, "Gracia Audrey Budiono", "X6"],
            [10, "Evita Ruth Hasianty", "XI8"],
          ]}
        ></SeleksiGrid>
      </div>
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
  );
};

export default OneJournal25;
