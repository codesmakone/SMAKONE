import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const SeleksiOsis = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          Hasil Seleksi Tahap FGD & SJT Calon Pengurus OSIS 2026
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 ">
          Setelah dilaksanakannya seleksi berkas pada <b>Kamis, 13 November 2025 dan Jumat, 14 November 2025</b>, maka telah ditentukan siswa/siswi yang lanjut pada seleksi tahap Wawancara sebagai berikut:
        </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Callysta Elia Eliora", "X7"],
            [2, "Elena Natania Arifin", "X2"],
            [3, "Cheryl Olivia", "X9"],
            [4, "Beverly Tanzil", "X8"],
            [5, "Nadine Ng", "XI8"],
            [6, "Abednego Putra Pratama", "X9"],

            [7, "Aretha Olive Budiman ", "X3"],
            [8, "⁠⁠Elena Leticia Hendrawan", "X1"],
            [9, "Valencia Marvelle ", "X6"],
            [10, "Carmeline Japutra ", "X5"],
            [11, "⁠⁠Myra Theresia Penanian Hutahaean ", "X10"],
            [12, "Jonathan Felix Candra", "X3"],

            [13, "Vincent Valentino", "XI7"],

            [14, "Stevianne Hanna Saerang", "X4"],
            [15, "Jacqueline Audrey Wijaya", "X7"],
            [16, "Aurel Jolyn Saputra", "XI4"],
            [17, "Evander Josua Adhyastha Sadi ", "X9"],
            [18, "Shannon Demetria Suwanto ", "X6"],

            [19, "Felisitas Fiona Fanza ", "X7"],
            [20, "Valerie Rachel Gunadi", "X9"],
            [21, "Evangeline Alexandra Nauli Parapat", "X4"],

            [22, "Catherine Hannalie", "XI7"],
            [23, "Nicole Tokyo Liongdra", "X4"],
            [24, "Jocelyn Felicia Lisyanto", "X1"],
            [25, "Arabelle Soetarso ", "X6"],
            [26, "Ellanor Jovanka Huang", "X5"],
            [27, "Kenneth Christensen Juliansya", "X10"],
            [28, "Doreen Brigitta Saputra", "X2"],

            [29, "Joshua Theodore Suryanto", "X4"],
            [30, "Carlton Invanio", "X1"],
            [31, "Adrienne Olivia Soeriohadi", "X7"],
            [32, "⁠Valerie Gaudeo Lie", "X4"],
            [33, "Nicole Angeline Lunagora", "X10"],

            [34, "Nadya Cherry Hendro", "X10"],
            [35, "Cleon Wyn Setiawan ", "X10"],
            [36, "Jocelyn Haosana", "XI8"],
            [37, "Graciella Anastasya Sutanto", "X6"],
            [38, "Barbara Queen Adrienne", "X5"],
            [39, "Fabiola Jane Susanto", "X1"],
            [40, "Mudita Nimala", "X5"],
            [41, "Gabriel Ailenka Cayadi", "X3"],
            [42, "Gwyneth Christa Lie", "X7"],
            [43, "Faith Emanuella Rusli ", "X7"],

            [44, "Richelle Liu", "X1"],
            [45, "Fernysia Edbert Samsie ", "X2"],
            [46, "Jefferson Matthew Adidjojo", "X3"],
            [44, "Diego Leander Wilbert ", "X4"],
            [45, "Jason Constantine", "XI3"],
            [46, "Darlenne Steven", "XI4"],

            [47, "Mariangelic Keshia Manujaya", "XI1"],
            [48, "Gabrielle Angeline Stephanson Li", "X4"],
            [49, "Michelle Christina N", "X6"],
            [50, "Madeline Setiawan", "X1"],
            [51, "Josephine Grace", "X5"],
          ]}
        ></SeleksiGrid>
      </div>
        <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
      {/* Date */}
      <p className="text-right">Jakarta, 26 November 2025</p>

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

export default SeleksiOsis;
