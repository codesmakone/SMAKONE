import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_erika from "../../../Image/Osis/ttd_erika.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const ShutterOne25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Hasil Seleksi Tahap 2 ShutterOne 2025
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi selama 12 hari pada,{" "}
            <b> Selasa, 14 Oktober - Sabtu, 25 Oktober 2025</b>, telah
            ditentukan yang lolos tahap 2 sebagai berikut:
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Abbigayle Jaya Halim", "XI6"],
            [2, "Angelina Devina Teddy", "X3"],
            [3, "Celine Huang", "X2"],
            [4, "Celine Josetta Boentara ", "XI5"],
            [5, "Christopher Dale Limence", "XI4"],
            [6, "Elbert Justin Lie", "X1"],
            [7, "Gregory Dion Yusuf", "X8"],
            [8, "Jocelyn Callysta Mackenzie", "X6"],
            [9, "John Haren Tangputra", "X5"],
            [10, "Michael Keelen Bunjamin", "XI7"],
            [11, "Shenny Pannya Lowis", "XI2"],
            [12, "Victorianto Vincentcius Limodya", "X5"],
            [13, "Darlenne Steven", "XI4"],

            // [1, "Joyleen Callista Lau", "X9"],
            // [2, "Valerie Tigris", "X10"],
            // [3, "Gregory Dion Yusuf", "X8"],
            // [4, "Celine Huang", "X2"],
            // [5, "America Juliet Sujanto", "X9"],
            // [6, "Marvel Khioe", "XI9"],
            // [7, "Elbert Justin Lie", "X1"],
            // [8, "Celestine Victoria Wang", "X6"],
            // [9, "Darren Nathanael Bachtiar ", "XI9"],
            // [10, "Christopher Dale Limence", "XI4"],
            // [11, "Carlton Invanio ", "X1"],
            // [12, "Jocelyn Callysta Mackenzie", "X6"],
            // [13, "Darlenne Steven", "XI4"],
            // [14, "Abbigayle Jaya Halim", "XI6"],
            // [15, "Angelina Devina Teddy", "X3"],
            // [16, "Victorianto Vincentcius Limodya", "X5"],
            // [17, "Shenny Pannya Lowis", "XI2"],
            // [18, "Michael Keelen Bunjamin", "XI7"],
            // [19, "Celine Josetta Boentara ", "XI5"],
            // [20, "John Haren Tangputra", "X5"],
            // [21, "Kaitlyn Kallita Kusnandar", "X3"],
            // [22, "Mahesa Wisesa", "XI8"],
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

export default ShutterOne25;
