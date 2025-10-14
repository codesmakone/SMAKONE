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
          Hasil Seleksi Anggota Servant of God(SOG) 2025
        </h1>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi pada <b>Senin, 11 Agustus 2025</b>, telah ditentukan anggota-anggota baru sebagai berikut:
        </p>
        </div>
       <SeleksiGrid
          title=""
          content={[
            [1,  "Joel Brandon Gunawan", "X1"],
            [2,  "Davendra Winston Kasmah", "X3"],
            [3,  "Mike Louis Susanto Bhudiawan", "X3"],
            [4,  "Cleon Wyn Setiawan", "X10"],
            [5, "Eugene Izuka Candra", "XI1"],
            [6, "Kezia Adelynn Phondiadi", "XI1"],
            [7, "Rachel Emily Harnoto", "XI1"],
            [8, "Karenza Sheli Pasisir", "XI2"],
            [9, "Christine Alicia Anabel", "XI3"],
            [10, "Aeka Lakeesha Tanudjaja", "XI4"],
            [11, "Catherine Juanita Koeswono", "XI4"],
            [12, "Silver Sean Kuntoaji", "XI6"],
            [13, "Alessandro Michael Yustiano Messi Bija", "XI7"],
            [14, "Clarissa Abigail Josephine", "XI7"],
            [15, "Giselle Christabel Sendrik", "XI7"],
            [16, "Valentio Jeremy Putra Wanadri", "XI7"],
            [17, "Jordana Utama", "XI8"],
            [18, "Mahesa Wisesa", "XI8"],
            [19, "Emily Chairmanly Afla", "XI9"],
            [20, "Vianna Gerent Brightly Tiwa", "XI9"],
            [21, "Wilquintha Quiteria", "XI9"],
            [22, "Jeremy Theodore", "XII6"],
            [23, "Aurora Enjela Tjhung", "XII8"],
          ]}
        ></SeleksiGrid>
      </div>
        <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
      {/* Date */}
      <p className="text-right">Jakarta, 15 Agustus 2025</p>

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
