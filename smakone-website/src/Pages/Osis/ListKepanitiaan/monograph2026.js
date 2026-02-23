import React from "react";

import ttdyy from "../../../Image/Osis/ttd yy.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const Mono2026 = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto mt-28">
        <h1 className="mb-20 text-4xl font-black text-center sm:text-4xl md:text-5xl xl:text-5xl">
          Hasil Seleksi Tahap 2 Monograph 2026
        </h1>
        <div className="flex flex-col items-center">
          <p className="w-3/4 text-left ">
            Setelah kami melakukan seleksi pada tanggal{" "}
            <b> 11 - 18 Februari 2026</b>, telah ditentukan yang lolos tahap 2
            sebagai berikut:
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Jocelyn Felicia Lisyanto", "X1"],

            [2, "Aura Crystal Santos", "X3"],

            [3, "Graciella Fiorenza Thiesman", "X4"],

            [4, "Caitlyn Abigail", "X5"],
            [5, "Dasha Riani Pasaribu", "X5"],
            [6, "Nomi Widjaja", "X5"],
            [7, "Ellanor Jovanka Huang", "X5"],

            [8, "Ceravine Schneider So", "X6"],

            [9, "Stella Tristiana Widjaja", "XI3"],

            [10, "Alika Dylan Budiman", "XI4"],

            [11, "Eunike Alexandra", "XI5"],

            [12, "Jessica Aurellia Parman", "XI8"],

            [13, "Keiko Kanaya Manli", "XI9"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl py-10 mx-auto font-serif leading-relaxed">
        {/* Date */}
        <p className="px-10 text-right">Jakarta, 23 Februari 2026</p>

        {/* Menyetujui */}
        <p className="mt-24 text-center">Mengetahui,</p>
        <div className="flex flex-col items-center mt-20">
          <img
            src={ttdyy}
            alt="Signature of YENDRA YOHANNES, M. Li."
            className="h-24 mb-4"
          />
          <p className="px-2 font-bold text-center uppercase border-b-2 border-black">
            YENDRA YOHANNES, S.S., M.Li.
          </p>
          <p className="mt-1 text-center">
            Wakil Kesiswaan SMAK&nbsp;1&nbsp;PENABUR&nbsp;Jakarta
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mono2026;
