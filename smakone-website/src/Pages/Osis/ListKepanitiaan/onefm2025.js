import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_onefm from "../../../Image/Osis/ttd_onefm.jpeg";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const OneFM = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Anggota OneFM 2025 
        </h1>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4">
          Setelah kami melakukan wawancara selama 1 hari pada tanggal 27 Mei 2025, telah ditentukan peserta yang lolos tahap wawancara sebagai berikut: 
        </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Gabrio Aaron Wijaya ", "X1"],
            [2, "Manuella Gabriele Hanato", "X6"],
            [3, "Abigail Chrisvidri Tarigan", "XI4"],
            [4, "Mariangelic Keshia Manujaya", "X1"],
            [5, "Shenny Pannya Lowis", "X8"],
            [6, "Elaine Felisha Leman", "XI2"],
            [7, "Violet Miracle Sugiharto", "X1"],
            [8, "Gabriella Clementine Situmorang", "X8"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
            {/* Date */}
            <p className="text-right">Jakarta, 27 Mei 2025</p>

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

export default OneFM;
