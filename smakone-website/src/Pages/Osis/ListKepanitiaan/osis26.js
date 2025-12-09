import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
  {
    bidang: "BPH OSIS 2026",
    members: [
      { name: "Jordana Utama (Ketua OSIS)", kelas: "XI8" },
      { name: "Stevianne Hanna Saerang (Wakil Ketua OSIS)", kelas: "X4" },
      { name: "Emily Charimanly Afla (Sekretaris 1)", kelas: "XI9" },
      { name: "Mudita Nimmala (Sekretaris 2)", kelas: "X5" },
      { name: "Catherine Hannalie (Bendahara)", kelas: "XI7" },
    ],
  },
  {
    bidang: "Bidang 1",
    members: [
      { name: "Gabriella Clementine Situmorang", kelas: "XI5" },
      { name: "Lionel Keane", kelas: "XI2" },
      { name: "Beverly Tanzil", kelas: "X8" },
      { name: "Abednego Putra Pratama", kelas: "X9" },
      { name: "Fabiola Jane Susanto", kelas: "X1" },
    ],
  },
  {
    bidang: "Bidang 2",
    members: [
      { name: "Putu Acyntia Kanaya Ardani", kelas: "XI1" },
      { name: "Jessica Faustine Karnali", kelas: "XI2" },
      { name: "Valencia Marvelle", kelas: "X6" },
      { name: "Carmeline Japutra", kelas: "X5" },
      { name: "Elena Leticia Hendrawan", kelas: "X1" },
    ],
  },
  {
    bidang: "Bidang 3",
    members: [
      { name: "Bianca Margareth Soetopo", kelas: "XI6" },
      { name: "Vincent Valentino", kelas: "XI7" },
      { name: "Carlton Invanio", kelas: "X1" },
      { name: "Arabelle Soetarso", kelas: "X6" },
    ],
  },
  {
    bidang: "Bidang 4",
    members: [
      { name: "Emily Charmainly Afla", kelas: "XI9" },
      { name: "Quirinus Lionnel Hanson Kangga", kelas: "XI5" },
      { name: "Nadine Ng", kelas: "XI8" },
      { name: "Stevianne Hanna Saerang", kelas: "X4" },
      { name: "Jacqueline Audrey Wijaya", kelas: "X7" },
      { name: "Faith Emanuella Rusli", kelas: "X7" },
    ],
  },
  {
    bidang: "Bidang 5",
    members: [
      { name: "Metta Nimmala", kelas: "XI8" },
      { name: "Felisitas Fiona Fanza", kelas: "X7" },
      { name: "Valerie Rachel Gunadi", kelas: "X9" },
    ],
  },
  {
    bidang: "Bidang 6",
    members: [
      { name: "Tristan Axel Kosen", kelas: "XI5" },
      { name: "Catherine Hannalie", kelas: "XI7" },
      { name: "Jocelyn Felicia Lisyanto", kelas: "X1" },
      { name: "Ellanor Jovanka Huang", kelas: "X5" },
      { name: "Doreen Brigitta Saputra", kelas: "X2" },
      { name: "Nicole Tokyo Liongdra", kelas: "X4" },
    ],
  },
  {
    bidang: "Bidang 7",
    members: [
      { name: "Valerie Gaudeo Lie", kelas: "X4" },
      { name: "Adrienne Olivia Soeriohadi", kelas: "X4" },
      { name: "Nicole Angeline Lunagara", kelas: "X4" },
      { name: "Valentio Jeremy Putra Wanadri", kelas: "XI7" },
      { name: "Joyce Avrill Miracle", kelas: "XI5" },
      { name: "Willard Ricxie Phanagara", kelas: "XI1" },
    ],
  },
  {
    bidang: "Bidang 8",
    members: [
      { name: "Nadya Cherry Hendro", kelas: "X10" },
      { name: "Cleon Wyn Setiawan", kelas: "X10" },
      { name: "Jocelyn Haosana", kelas: "XI8" },
      { name: "Gabriel Ailenka Cayadi", kelas: "X3" },
      { name: "Laurensia Edeline Santosa", kelas: "XI1" },
      { name: "Mudita Nimmala", kelas: "X5" },
    ],
  },
  {
    bidang: "Bidang 9",
    members: [
      { name: "Joanne Gisella Yusmita", kelas: "XI4" },
      { name: "Shenny Pannya Lowis", kelas: "XI2" },
      { name: "Diego Leander Wilbert", kelas: "X4" },
      { name: "Richelle Liu", kelas: "X1" },
      { name: "Fernysia Edbert Samsie", kelas: "X2" },
    ],
  },
  {
    bidang: "Bidang 10",
    members: [
      { name: "Ivanna Roxanne Subakti", kelas: "XI1" },
      { name: "Jaclyn Aditya The", kelas: "XI3" },
      { name: "Mariangelic Keshia", kelas: "XI1" },
      { name: "Michelle Christina N.", kelas: "X6" },
      { name: "Gabrielle Angeline", kelas: "X4" },
    ],
  },
];
const Osis26 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-black mb-20 px-5 sm:px-8 md:px-12">
          Hasil Seleksi Tahap FGD & SJT Calon Pengurus OSIS 2026 SMAK 1 PENABUR
          Jakarta
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 mb-6">
            Setelah dilaksanakannya seleksi tahap FGD & SJT pada{" "}
            <b>Rabu, 26 November 2025 sampai Senin, 8 Desember 2025</b>, telah
            maka telah ditentukan siswa/siswi yang dipilih menjadi Pengurus OSIS
            SMAK 1 Penabur Jakarta Periode 2026 sebagai berikut:
          </p>
        </div>

        <SOCGrid data={data} />
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
        {/* Date */}
        <p className="text-right">Jakarta, 9 November 2025</p>

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

export default Osis26;
