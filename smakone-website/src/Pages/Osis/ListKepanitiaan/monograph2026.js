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
          Hasil Seleksi Tahap 1 Monograph 2026
        </h1>
        <div className="flex flex-col items-center">
          <p className="w-3/4 text-left ">
            Setelah kami melakukan seleksi pada tanggal{" "}
            <b> 24 Januari - 9 Februari 2026</b>, telah ditentukan yang lolos
            tahap 1 sebagai berikut:
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Jocelyn Felicia Lisyanto", "X1"],
            [2, "Haylee Josephine Kurniawan", "X1"],

            [3, "Chelline Velovita Karlowee", "X4"],
            [4, "Evangeline Alexandra Nauli Parapat", "X4"],

            [5, "Evan Radithya Nio", "X5"],

            [6, "Zoey Chen", "X3"],
            [7, "Aura Crystal Santos", "X3"],
            [8, "Leonard Kean Wijaya", "X3"],

            [9, "Graciella Fiorenza Thiesman", "X4"],

            [10, "Nomi Widjaja", "X5"],
            [11, "Dasha Riani Pasaribu", "X5"],
            [12, "Caitlyn Abigail", "X5"],
            [13, "Ellanor Jovanka Huang", "X5"],

            [14, "Ceravine Schneider So", "X6"],

            [15, "Joel Lim", "X7"],

            [16, "Gregory Dion Yusuf", "X8"],

            [17, "Patricia Apriliani Supriyanto", "X9"],
            [18, "America Juliet Sujanto", "X9"],
            [19, "Andy Tedjosukmono", "X9"],

            [20, "Fayola Arista", "XI1"],

            [21, "Claire Santoso", "XI2"],

            [22, "Stella Tristiana Widjaja", "XI3"],

            [23, "Alika Dylan Budima", "XI4"],
            [24, "Richelle Florence Papilaya", "XI4"],
            [25, "Elise Tanaya Setiawan", "XI4"],

            [26, "Eunike Alexandra", "XI5"],
            [27, "Freja Almeira Masykuri", "XI5"],

            [28, "Verena Sheridan", "XI7"],

            [29, "Jessica Aurellia Parman", "XI8"],
            [30, "Rachael Astechriste Verena Wibawa", "XI8"],

            [31, "Keiko Kanaya Manli", "XI9"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl py-10 mx-auto font-serif leading-relaxed">
        {/* Date */}
        <p className="px-10 text-right">Jakarta, 9 Februari 2026</p>

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
