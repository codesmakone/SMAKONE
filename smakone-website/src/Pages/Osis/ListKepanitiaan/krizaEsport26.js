import React from "react";

import ttdyy from "../../../Image/Osis/ttd yy.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const KrizaEsport = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto mt-28">
        <h1 className="mb-20 text-4xl font-black text-center sm:text-4xl md:text-5xl xl:text-5xl">
          KRIZA E-SPORTS
        </h1>
        <div className="flex flex-col items-center">
          <p className="w-3/4 text-left ">
            Setelah kami melakukan seleksi pada <b>Senin, 30 Maret - Jumat, 24 April 2026,</b> berikut telah ditentukan anggota baru KRIZA ESPORTS 2026.
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Quenella Lachelle Madeline Kaloh", "XI-6"],
            [2, "Willard Ricxie Phanagara", "XI-1"],
            [3, "Evan Alexander Louis", "XI-4"],
            [4, "Daniel Sucipto", "XI-1"],
            [5, "Michael Keelen Bunjamin", "XI-7"],
            [6, "Kyana Alicia", "X-7"],
            [7, "Felics Gunawan", "XI-4"],
            [8, "Purisa Asthine Dira", "XI-4"],
            [9, "James Arya Sugiharto", "X-10"],
            [10, "Lionel Vernell Taniata", "X-10"],
            [11, "Leander Jasthian Yusup", "X-6"],
            [12, "Lionel Keane", "XI-2"],
            [13, "Christopher Edward Sutandar", "XI-9"],
            [14, "Diego Marvel Maxwell", "XI-2"],
            [15, "Boga F Renzo", "XI-6"],
            [16, "Ethan Kenzo Bunowo", "X-9"],
            [17, "Steven Wong", "X-10"],
            [18, "Bertrand Nathanael Prasetyo", "X-4"],
            [19, "Benedictus Kioe", "X-4"],
            [20, "Kenneth William Sugianto", "X-9"],
            [21, "Joshua Yang", "XI-2"],
            [22, "Jonathan Halim", "XI-3"],
            [23, "Robertus Wilson Santosa", "XI-7"],
            [24, "Brandon Colin", "XI-2"],
            [25, "Gilbert Rustandy", "XI-3"],
            [26, "Michael Christian Halim", "XI-2"],
            [27, "Quirinus Lionnel Hanson Kangga", "XI-5"],
            [28, "Diego Leander Wilbert", "X-4"]
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl py-10 mx-auto font-serif leading-relaxed">
        {/* Date */}
        <p className="px-10 text-right">Jakarta, 26 April 2026</p>

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

export default KrizaEsport;
