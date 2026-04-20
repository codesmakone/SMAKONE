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
          Hasil Seleksi Tahap 1 Kriza E-Sports 2026
        </h1>
        <div className="flex flex-col items-center">
          <p className="w-3/4 text-left ">
            Setelah kami melakukan seleksi (Google Forms) tahap 1 pada{" "}
            <b> Senin, 30 Maret - Rabu, 3 April 2026</b>, berikut telah
            ditentukan calon anggota yang lolos ke tahap berikutnya:
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
            [11, "LEANDER JASTHIAN YUSUP", "X-6"],
            [12, "Lionel Keane", "XI-2"],
            [13, "Christopher Edward Sutandar", "XI-9"],
            [14, "Diego Marvel Maxwell", "XI-2"],
            [15, "Boga F Renzo", "XI-6"],
            [16, "Vincent Valentino", "XI-7"],
            [17, "Nicholas Hugo Iswandy", "X-1"],
            [18, "Ethan Kenzo Bunowo", "X-9"],
            [19, "Steven Wong", "X-10"],
            [20, "Bertrand Nathanael Prasetyo", "X-4"],
            [21, "Benedictus Kioe", "X-4"],
            [22, "Kenneth William Sugianto", "X-9"],
            [23, "Joshua Yang", "XI-2"],
            [24, "Jonathan Halim", "XI-3"],
            [25, "Robertus Wilson Santosa", "XI-7"],
            [26, "Brandon Colin", "XI-2"],
            [27, "Gilbert Rustandy", "XI-3"],
            [28, "Michael Christian Halim", "XI-2"]
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl py-10 mx-auto font-serif leading-relaxed">
        {/* Date */}
        <p className="px-10 text-right">Jakarta, 3 April 2026</p>

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
