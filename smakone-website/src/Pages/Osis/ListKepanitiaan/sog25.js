import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_erika from "../../../Image/Osis/ttd_erika.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const Sog25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Tahap Pertama Anggota Servant of God(SOG) 2025
        </h1>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi selama 5 hari pada <b>Senin, 28 Juli 2025 - Jumat, 1 Agustus 2025</b>, telah ditentukan anggota-anggota baru sebagai berikut:
        </p>
        </div>
       <SeleksiGrid
          title=""
          content={[
            [1,  "Joel Brandon Gunawan", "X1"],
            [2,  "Joy Angeline", "X1"],
            [3,  "Kenneth Nathaniel Tjan", "X1"],
            [4,  "Davendra Winston Kasmah", "X3"],
            [5,  "Mike Louis Susanto Bhudiawan", "X3"],
            [6,  "Shannon Demetria Suwanto", "X6"],
            [7,  "Nathanael Armantyo Hutabalian", "X8"],
            [8,  "Evander Josua Adhyastha Sadi", "X9"],
            [9,  "Cleon Wyn Setiawan", "X10"],
            [10, "Eugene Izuka Candra", "XI1"],
            [11, "Kezia Adelynn Phondiadi", "XI1"],
            [12, "Rachel Emily Harnoto", "XI1"],
            [13, "Karenza Sheli Pasisir", "XI2"],
            [14, "Christine Alicia Anabel", "XI3"],
            [15, "William Andrew Huang", "XI3"],
            [16, "Aeka Lakeesha Tanudjaja", "XI4"],
            [17, "Catherine Juanita Koeswono", "XI4"],
            [18, "Christine Angel Yodien Wen", "XI4"],
            [19, "Elise Tanaya Setiawan", "XI4"],
            [20, "Silver Sean Kuntoaji", "XI6"],
            [21, "Alessandro Michael Yustiano Messi Bija", "XI7"],
            [22, "Clarissa Abigail Josephine", "XI7"],
            [23, "Giselle Christabel Sendrik", "XI7"],
            [24, "Jessica Naomi", "XI7"],
            [25, "Valentio Jeremy Putra Wanadri", "XI7"],
            [26, "Jordana Utama", "XI8"],
            [27, "Mahesa Wisesa", "XI8"],
            [28, "Emily Chairmanly Afla", "XI9"],
            [29, "Vianna Gerent Brightly Tiwa", "XI9"],
            [30, "Wilquintha Quiteria", "XI9"],
            [31, "Jeremy Theodore", "XII6"],
            [32, "Aurora Enjela Tjhung", "XII8"],
          ]}
        ></SeleksiGrid>
      </div>
        <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
      {/* Date */}
      <p className="text-right">Jakarta, 7 Agustus 2025</p>

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

export default Sog25;
