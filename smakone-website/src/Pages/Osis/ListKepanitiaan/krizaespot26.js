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
            [1, "Marvell Josiah Kumala", "XI-3"],
            [2, "Reynard Paulson Juadi", "X-10"],
            [3, "Vincent Valentino", "XI-7"],
            [4, "Quenella Lachelle Madeline Kaloh", "XI-6"],
            [5, "Steven Wong", "X-10"],
            [6, "Jamie Constantine", "XI-8"],
            [7, "Jason Constantine", "XI-3"],
            [8, "Willard Ricxie Phanagara", "XI-1"],
            [9, "Daniel Sucipto", "XI-1"],
            [10, "Ethan Kenzo Bunowo", "X-9"],
            [11, "Michael Christian Halim", "XI-2"],
            [12, "Evander Josua Adhyastha Sadi", "X-9"],
            [13, "Kenneth William Sugianto", "X-9"],
            [14, "Matthew Benjamin Mandagi", "X-8"],
            [15, "Nicholas Hugo Iswandy", "X-1"],
            [16, "Evan Alexander Louis", "XI-4"],
            [17, "Brandon Colin", "XI-2"],
            [18, "Dylan Giovanni Hwang", "XI-4"],
            [19, "Joshua Yang", "XI-2"],
            [20, "Clement Harsoyo", "XI-7"],
            [21, "Bertrand Nathanael Prasetyo", "X-4"],
            [22, "Lionel Keane", "XI-2"],
            [23, "Michael Keelen Bunjamin", "XI-7"],
            [24, "Kyana Alicia", "X-7"],
            [25, "Felics Gunawan", "XI-4"],
            [26, "Robertus Wilson Santosa", "XI-7"],
            [27, "Gilbert Rustandy", "XI-3"],
            [28, "Christopher Edward Sutandar", "XI-9"],
            [29, "Jonathan Halim", "XI-3"],
            [30, "Jonathan Davin Sasmito", "X-6"],
            [31, "Purisa Asthine Dira", "XI-4"],
            [32, "James Arya Sugiharto", "X-10"],
            [33, "Diego Marvel Maxwell", "XI-2"],
            [34, "Lionel Vernell Taniata", "X-10"],
            [35, "Benedictus Kioe", "X-4"],
            [36, "Leander Jasthian Yusup", "X-6"],
            [37, "Maurizio Matthew Soeroso", "XI-1"],
            [38, "Matthew Monang Sitorus", "X-9"],
            [39, "Boga F Renzo", "XI-6"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl py-10 mx-auto font-serif leading-relaxed">
        {/* Date */}
        <p className="px-10 text-right">Jakarta, 11 April 2026</p>

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
