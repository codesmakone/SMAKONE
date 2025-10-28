import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_erika from "../../../Image/Osis/ttd_erika.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const Tedxs25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Tahap 1 TEDx Student Speaker 2025
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi selama 11 hari pada 
            <b> Senin, 13 Oktober 2025 - Rabu, 22 Oktober 2025</b>, telah ditentukan
            calon Student Speaker yang lolos ke tahap wawancara sebagai berikut:
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Jasmine Arthalia Tan", "X2"],
            [2, "Carlton Invanio ", "X1"],
            [3, "Kezia Jocelyn Tasmaan", "X2"],
            [4, "Felisitas Fiona Fanza", "X7"],
            [5, "Joanne Gisella Yusmita", "XI4"],
            [6, "Bernard Thimotius Turnip", "XI1"],
            [7, "Ivana Roxanne Subakti", "XI1"],
            [8, "Keiko Kanaya Manli ", "XI9"],
            [9, "Charissa Clara Chen", "X9"],
            [10, "Jesslyn Richelle Khoe", "X6"],
            [11, "Nicole Eleanor Setiady", "X2"],
            [12, "Chantaleia Sachi Hendratno", "XI9"],
            [13, "Robert Nathaniel Wijaya", "XII3"],
            [14, "Bethania Reika Kawanda", "XII6"],
            [15, "Marvel Sebastian Gunawan", "XII8"],
            [16, "Theodore Kimi Tjen", "XII8"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
        {/* Date */}
        <p className="text-right px-10">Jakarta, 27 Oktober 2025</p>

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

export default Tedxs25;
