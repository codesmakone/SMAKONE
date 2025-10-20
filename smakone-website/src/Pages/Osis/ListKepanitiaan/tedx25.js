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
      { name: "Abigail Charisa Triswandi", kelas: "XII7" },
      { name: "Cheryl Jacqueline Lywenskie", kelas: "XII6" },
      { name: "Feronica Wijatmo", kelas: "XI6" },
      { name: "Laurensia Edeline Santosa", kelas: "XI2" },
      { name: "Valerie Rachel Gunadi", kelas: "X9" },
      { name: "Lionell Austin Hermando", kelas: "X6" },
      { name: "Jesslyn Kireina Ailen", kelas: "X4" },
      { name: "Evangeline Alexandra Nauli Parapat", kelas: "X4" },
      { name: "Richelle Liu", kelas: "X1" },
    ],
  },
  {
    bidang: "Event Manager",
    members: [
      { name: "Hosea Ignatio Lim", kelas: "XII3" },
      { name: "Benedict Erick Anthony", kelas: "XII4" },
      { name: "Willard Ricxie Phanagara", kelas: "XI1" },
      { name: "Putu Acyntia Kanaya Ardani", kelas: "XI1" },
      { name: "Jessica Faustine Karnali", kelas: "XI2" },
      { name: "Imanuel Yohanes Setiawan", kelas: "XI4" },
      { name: "Ferrel Gabriel", kelas: "XI5" },
      { name: "Maxwell Nolan Susatia", kelas: "XI7" },
      { name: "Reyna Chryslene Setyono", kelas: "XI8" },
      { name: "Metta Nimmala", kelas: "XI8" },
      { name: "Elena Leticia Hendrawan", kelas: "X1" },
      { name: "Florence Stephanie Janto", kelas: "X9" },
      { name: "Gad Cebrian Fabiano Teguh", kelas: "X10" },
    ],
  },
  {
    bidang: "Publication (Social Media)",
    members: [
      { name: "Jordana Utama", kelas: "XI8" },
      { name: "Gracia Audrey Budiono", kelas: "XI6" },
      { name: "Jocelyn Haosana", kelas: "XI8" },
      { name: "Jacqueline Audrey Wijaya", kelas: "X7" },
      { name: "Richellyn Chandra", kelas: "XI3" },
      { name: "Katy Zoey Tanuwijaya", kelas: "XI5" },
      { name: "Nadine Ng", kelas: "XI8" },
      { name: "Given Theofilis Wijaya", kelas: "XII4" },
      { name: "Shannon Demetria Suwa", kelas: "X6" },
    ],
  },
  {
    bidang: "Publication (Website)",
    members: [{ name: "Delicia Angela Gunario", kelas: "XI7" }],
  },
  {
    bidang: "Ticketing",
    members: [
      { name: "Felicia Yemima Tambunan", kelas: "X10" },
      { name: "Naomi", kelas: "X6" },
      { name: "Christa Jade Widjaya", kelas: "X3" },
      { name: "Visakha Panna Pindi Kisata", kelas: "X10" },
      { name: "Filbert Kuswara", kelas: "XI3" },
      { name: "Clarissa Federica Suherdi", kelas: "X10" },
      { name: "Chelline Velovita Karlowee ", kelas: "X4" },
      { name: "Cassandra Nauli Sinaga", kelas: "X5" },
      { name: "Fernysia Edbert Samsie", kelas: "X2" },
      { name: "Stevia Sufriady", kelas: "X6" },
      { name: "Aretha Olive Budiman", kelas: "X3" },
      { name: "Sharlene Grace Oenadi", kelas: "XI2" },
      { name: "Gabriel Ailenka Cayadi ", kelas: "X3" },
      { name: "rachel emily harnoto", kelas: "XI1" },
      { name: "Mariangelic Keshia Manujaya", kelas: "XI1" },
      { name: "Nicole Tokyo Liongdra", kelas: "X4" },
    ],
  },
  {
    bidang: "Master of Ceremony",
    members: [
      { name: "Stevianne Hanna Saerang", kelas: "X4" },
      { name: "Baby Aurellia Bagotz", kelas: "X6" },
      { name: "Valencia Marvelle", kelas: "X6" },
      { name: "Madison Suratman", kelas: "X7" },
      { name: "Shenny Pannya Lowis", kelas: "XI2" },
      { name: "Aurel Jolyn Japutra", kelas: "XI4" },
    ],
  },
  {
    bidang: "Equipment",
    members: [
      { name: "Rachel Wibisono", kelas: "X3" },
      { name: "Maxbillian Christiansen Sanjaya", kelas: "XII4" },
      { name: "Bill Moritz Su", kelas: "X1" },
      { name: "DIego Leander Wilbert", kelas: "X4" },
      { name: "Valerie Gaudeo Lie", kelas: "X4" },
      { name: "Jazzelyn Abigail Hanley ", kelas: "X2" },
    ],
  },
  {
    bidang: "Design",
    members: [
      { name: "Jennifer Olivia Chang", kelas: "X10" },
      { name: "Caitlyn Abigail", kelas: "X5" },
      { name: "Faith Emanuella Rusli", kelas: "X7" },
      { name: "Claire Santoso ", kelas: "X12" },
      { name: "Joel Lim", kelas: "X7" },
      { name: "Alicia", kelas: "XII4" },
      { name: "Faye Valerie Lesley", kelas: "XI2" },
      { name: "Vallerie Yuvelina Putri", kelas: "X8" },
      { name: "Graciella Fiorenza Thiesman", kelas: "X4" },
    ],
  },
];
const Tedx25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">Hasil Seleksi Tahap 1 Open Recruitment Panitia TEDx 2025</h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi selama 7 hari pada <b>Senin, 13 OKtober 2025 - Minggu, 19 Oktober 2025</b>, telah ditetapkan calon panitia yang lolos ke tahap wawancara sebagai berikut:
          </p>
        </div>

        <SOCGrid data={data} />
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
        {/* Date */}
        <p className="text-right">Jakarta, 20 Oktober 2025</p>

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
