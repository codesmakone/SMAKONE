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
    bidang: "Decoration",
    members: [
      { name: "Laurensia Edeline Santosa", kelas: "XI2" },
      { name: "Abigail Charisa Triswandi", kelas: "XII7" },
      { name: "Valerie Rachel Gunadi", kelas: "X1" },
      { name: "Evangeline Alexandra", kelas: "X4" },
      { name: "Richelle Liu", kelas: "X9" },
      { name: "Putu Acyntia Kanaya Ardani", kelas: "XI1" },
      { name: "Metta Nimmala", kelas: "XI8" },
    ],
  },
  {
    bidang: "Event Manager",
    members: [
      { name: "Benedict Erick Anthony", kelas: "XII4" },
      { name: "Willard Ricxie Phanagara", kelas: "XI1" },
      { name: "Jessica Faustine Karnali", kelas: "XI2" },
      { name: "Imanuel Yohanes Setiawan", kelas: "XI4" },
      { name: "Reyna Chryslene Setyono", kelas: "XI8" },
    ],
  },
  {
    bidang: "Publication (Social Media)",
    members: [
      { name: "Jocelyn Haosana", kelas: "XI8" },
      { name: "Katy Zoey Tanuwijaya", kelas: "XI5" },
      { name: "Given Theofilis Wijaya", kelas: "XII4" },
    ],
  },
  {
    bidang: "Publication (Website)",
    members: [{ name: "Delicia Angela Gunario", kelas: "XI7" }],
  },
  {
    bidang: "Ticketing",
    members: [
      { name: "Fernysia Edbert Samsie", kelas: "X2" },
      { name: "Stevia Sufriady ", kelas: "X6" },
      { name: "Sharlene Grace Oenadi", kelas: "XI2" },
      { name: "Rachel Emily Hartono", kelas: "XI1" },
    ],
  },
  {
    bidang: "Equipment",
    members: [
      { name: "Rachel Wibisono", kelas: "X3" },
      { name: "Maxbillian Christiansen Sanjaya", kelas: "XII4" },
      { name: "Valerie Gaudeo Lie", kelas: "X4" },
    ],
  },
  {
    bidang: "Design",
    members: [
      { name: "Caitlyn Abigail", kelas: "X5" },
      { name: "Alicia", kelas: "XII4" },
      { name: "Faye Valerie Lesley", kelas: "XI2" },
      { name: "Joel Lim", kelas: "X7" },
      { name: "Graciella Fiorenza Thiesman", kelas: "X4" },
    ],
  },
];
const Tedx25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">Hasil Seleksi Panitia TEDx 2025</h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi selama 4 hari pada <b>Selasa, 21 Oktober 2025 - Jumat, 24 Oktober 2025</b>, telah ditetapkan panitia baru sebagai berikut:
          </p>
        </div>

        <SOCGrid data={data} />
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
        {/* Date */}
        <p className="text-right">Jakarta, 5 November 2025</p>

        {/* Menyetujui */}
        <p className="text-center mt-24">Mengetahui,</p>
        <div className="mt-20 flex flex-col items-center">
          <img src={ttdyy} alt="Signature of YENDRA YOHANNES, M. Li." className="h-24 mb-4" />
          <p className="border-b-2 border-black font-bold uppercase text-center px-2">YENDRA YOHANNES, S.S., M.Li.</p>
          <p className="text-center mt-1">Wakil Kesiswaan SMAK&nbsp;1&nbsp;PENABUR&nbsp;Jakarta</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tedx25;
