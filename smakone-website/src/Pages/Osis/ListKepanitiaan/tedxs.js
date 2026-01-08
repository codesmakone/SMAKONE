import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_erika from "../../../Image/Osis/ttd_erika.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [ 
  {
    bidang: "Student Speaker",
    members: [
      { name: "Bethania Reika Kawanda", kelas: "XII6" },
      { name: "Joanne Gisella Yusmita", kelas: "XI4" },
      { name: "Nicole Eleanor Setiady", kelas: "X2" },
    ],
  },
  {
    bidang: "Master of Ceremony",
    members: [
      { name: "Valencia Marvelle", kelas: "X6" },
      { name: "Baby Aurellia Bagotz", kelas: "X6" },
    ],
  }
]

const Tedxs25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Student Speaker & Master of Ceremony TEDxYouth@SmakOne 2025
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi pada <b>Jumat, 24 Oktober 2025 (Master of Ceremony)</b> dan <b>Rabu, 29 Oktober 2025 - Kamis, 30 Oktober 2025 (Student Speaker)</b>, maka telah ditentukan Student Speaker dan Master of Ceremony sebagai berikut: 
          </p>
        </div>
        <SOCGrid data={data} />
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
        {/* Date */}
        <p className="text-right px-10">Jakarta, 10 November 2025</p>

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
