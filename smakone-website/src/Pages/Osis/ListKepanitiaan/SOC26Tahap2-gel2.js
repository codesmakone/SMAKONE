import React from "react";
import { NavLink } from "react-router-dom";

import ttd_buOP from "../../../Image/Osis/ttd BuOP.png";
import ttd_steven from "../../../Image/Osis/ttd_Steven.png";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
  {
    bidang: "Acara",
    members: [
      { name: "Angelica Naomi Antony", kelas: "X9" },
      { name: "Jordan Yap", kelas: "X7" },
      { name: "Justin Lawrence The", kelas: "X7" },
      { name: "Natalie Tranquilina Santoso", kelas: "X5" },
    ],
  },
  {
    bidang: "Badminton",
    members: [
      { name: "Darren Carlisle Nathaniel", kelas: "XII-4" },
      { name: "Samuel Jethro Cahyadi", kelas: "XII-8" },
      { name: "Kenza Eddelies Wen", kelas: "X-8" },
      { name: "Sammy Michael Yang", kelas: "X-8" },
      { name: "Kenzo Aurellio Tandarahardjo", kelas: "X-9" },
    ],
  },
  {
    bidang: "Band",
    members: [
      { name: "Renata Jocelyn Liemel", kelas: "X-5" },
      { name: "Davon Abisha Cahyana", kelas: "XII-5" },
    ],
  },
  {
    bidang: "Basket",
    members: [
      { name: "Lance Wellington Lie", kelas: "XII-2" },
      { name: "Silver Sean Kuntoaji", kelas: "XII-4" },
      { name: "Lana Renatta Kosasih", kelas: "X-2" },
      { name: "Calista Maheswari Regina Purnama", kelas: "X-9" },
      { name: "Brayden Royce Hermanto", kelas: "X-7" },
      { name: "Timothy Rafael Teguh", kelas: "X-8" },
      { name: "Vincent Tanaya Lim", kelas: "X-3" },
    ],
  },
  {
    bidang: "Business Plan",
    members: [
      { name: "Carlton Invanio", kelas: "XI-3" },
      { name: "Gabriella Angeline Tanuwijaya", kelas: "X-8" },
      { name: "Alena Michaella Christabelle", kelas: "X-7" },
    ],
  },
  {
    bidang: "Dana",
    members: [
      { name: "Selly Florencia Mok", kelas: "XI-6" },
      { name: "Charice Suryajaya", kelas: "X-8" },
    ],
  },
  {
    bidang: "Dekor Lapangan",
    members: [
      { name: "Josephine Olivia Layadi", kelas: "X-6" },
      { name: "Gwen Alicia Dharmanto", kelas: "X-4" },
      { name: "Johanna Harijanto", kelas: "X-1" },
      { name: "Jeanice Wijaya", kelas: "X-2" },
      { name: "Stanley Elisiano Angelo", kelas: "XI-7" },
      { name: "Jason Raharjo", kelas: "XI-7" },
      { name: "Alfonsus Herobe Clementino", kelas: "X-6" },
      { name: "Garrett Hidayat", kelas: "XII-3" },
    ],
  },
  {
    bidang: "Design Division",
    members: [
      { name: "Beverlly Andromeda Perdana", kelas: "X5" },
      { name: "Haylee Josephine Kurniawan", kelas: "XI9" },
      { name: "Liony Thesalonika Santoso", kelas: "XI9" },
      { name: "Jeslyn Mayuri", kelas: "X3" },
    ],
  },
  {
    bidang: "EDS",
    members: [
      { name: "Evangeline Alexandra Nauli Parapat", kelas: "XI-7" },
      { name: "Keshya Cordelia", kelas: "X-3" },
      { name: "Megan Valencia Kho", kelas: "X-9" },
    ],
  },
  {
    bidang: "Esports",
    members: [
      { name: "Joshua Theodore Suryanto", kelas: "XI-4" },
      { name: "Reynaldo Frances Hendarto", kelas: "X-1" },
      { name: "Viera Kay Praiseley", kelas: "XI-4" },
      { name: "Lionel Nathan Solaiman", kelas: "X-4" },
      { name: "Gabrio Aaron Wijaya", kelas: "XII-4" },
    ],
  },
  {
    bidang: "Film & Documentation",
    members: [
      { name: "Carlson Sukiman", kelas: "X-3" },
      { name: "Gabrielle Angelina Sugandi", kelas: "X-2" },
      { name: "Stefanny Fransiska Oenardy", kelas: "X-6" },
      { name: "Alysha Callista Irwandi", kelas: "X-9" },
    ],
  },
  {
    bidang: "Fotografi",
    members: [
      { name: "Joshua Jose Kuntara", kelas: "XI-5" },
      { name: "Richelle Christabel Sendrik", kelas: "XII-1" },
      { name: "Hanna Joey Vania", kelas: "X-4" },
      { name: "Yesica Andriani Br Santuri", kelas: "XII-2" },
      { name: "Virenka Rheynna Tan", kelas: "XI-5" },
    ],
  },
  {
    bidang: "Futsal",
    members: [
      { name: "Ferrel Gabriel", kelas: "XII-7" },
      { name: "Wilson Patrick Setiawan", kelas: "XI-10" },
      { name: "Collin Luo", kelas: "X-1" },
      { name: "Daviano Licco Ongsono", kelas: "X-3" },
    ],
  },
  {
    bidang: "Humas",
    members: [
      { name: "Nathanael Melvin", kelas: "X-5" },
      { name: "Vanya Clarissa Maha", kelas: "X-4" },
    ],
  },
  {
    bidang: "JHS English",
    members: [
      { name: "Felice Surya Aliwarga", kelas: "X-7" },
      { name: "Jesslyn Richelle Khoe", kelas: "XI-9" },
    ],
  },
  {
    bidang: "JHS IPA",
    members: [
      { name: "Josephine Kayla Wisata", kelas: "X-5" },
      { name: "Michael Thio", kelas: "XI-4" },
      { name: "Davino Sugianto", kelas: "XII-2" },
      { name: "Andrew Abraham Erlangga Wijaya", kelas: "XII-3" },
    ],
  },
  {
    bidang: "JHS IPS",
    members: [
      { name: "Christa Jade Widjaya", kelas: "XI-5" },
      { name: "Vania Graciela Santoso", kelas: "XII-8" },
      { name: "Jocelyn Trisna Suwanda", kelas: "XII-3" },
      { name: "Michelle Tan", kelas: "XII-6" },
      { name: "Elise Tanaya Setiawan", kelas: "XII-8" },
    ],
  },
  {
    bidang: "JHS Matematika",
    members: [{ name: "Bradley Colin Rusli", kelas: "X4" }],
  },
  {
    bidang: "Keamanan",
    members: [
      { name: "Alexander Theodore Viawan", kelas: "XI-6" },
      { name: "Joshua Michael Hioe", kelas: "XI-2" },
      { name: "Ray Hayden Rahardja", kelas: "XI-6" },
      { name: "Dyandra Kayliela Putri", kelas: "XI-9" },
      { name: "Felix Susanto Herdi", kelas: "XI-1" },
      { name: "Freya Evelyn", kelas: "X-1" },
      { name: "Gracelyn Quinn Effendi", kelas: "X-9" },
      { name: "Jacob flint sumali", kelas: "XII-3" },
      { name: "Jasper Bernard Sanjaya", kelas: "XI-6" },
      { name: "Jayden Nicholas Faith", kelas: "X-9" },
      { name: "Joelyn zhang", kelas: "XI-10" },
      { name: "Kiera Iora Chandra", kelas: "X-9" },
      { name: "Mylo Timotheus Rura Hutahean", kelas: "X-8" },
      { name: "Nathanael Valencius", kelas: "X-7" },
      { name: "Violet Miracle Sugiharto", kelas: "XII-1" },
    ],
  },
  {
    bidang: "Konsumsi",
    members: [
      { name: "Joyce", kelas: "XI8" },
      { name: "Agnes Jesica", kelas: "X2" },
      { name: "Adeline Felicia", kelas: "X5" },
      { name: "Ryland Irvin", kelas: "X6" },
    ],
  },
  {
    bidang: "MUN",
    members: [
      { name: "Miley Caralyn Tan", kelas: "X-1" },
      { name: "Gabrielle Angeline Stephanson Li", kelas: "XI-5" },
    ],
  },
  {
    bidang: "Merchandise & Transport",
    members: [
      { name: "Alessandra Kelly Limanto", kelas: "X-9" },
      { name: "Brenda Victoria Michelle Abram", kelas: "X-6" },
    ],
  },
  {
    bidang: "Modern Dance",
    members: [
      { name: "Graciella Anastasya Sutanto", kelas: "XI8" },
      { name: "Viansy Vexia", kelas: "XI1" },
      { name: "Giselle Theofilus Wijaya", kelas: "X6" },
      { name: "Natalizia Rainy Sualdani", kelas: "X1" },
      { name: "Richelle Dewey Valerine", kelas: "X9" },
    ],
  },
  {
    bidang: "MonsoonSIM",
    members: [
      { name: "Mike Louis Susanto Bhudiawan", kelas: "XI-3" },
      { name: "Richelle Chloe Gunawan", kelas: "X-2" },
      { name: "Albert Tito Ebenhaezer Simanjutak", kelas: "X-5" },
    ],
  },
  {
    bidang: "Mural",
    members: [
      { name: "Fiona Valencia", kelas: "X-2" },
      { name: "Marleen Gloryanne Tjandra", kelas: "XI-10" },
    ],
  },
  {
    bidang: "P3K",
    members: [
      { name: "Alicia Calista", kelas: "XI-7" },
      { name: "Christabelle Andrea Putri Onsoe", kelas: "XI-5" },
      { name: "Howard Chung", kelas: "XI-7" },
      { name: "Lioren Wienny Huang", kelas: "XI-3" },
      { name: "Seraphine Cipto Liwan", kelas: "XI-5" },
      { name: "Vallerie Yuvelina Putri", kelas: "XI-8" },
    ],
  },
  {
    bidang: "Perlengkapan",
    members: [
      { name: "Davin Nathanael Arifin", kelas: "XII-1" },
      { name: "Edbert Matthew Linardi", kelas: "X-7" },
      { name: "Evann Xie", kelas: "XI-3" },
      { name: "Alicia Aurelia Lau", kelas: "X-8" },
    ],
  },
  {
    bidang: "Publikasi",
    members: [
      { name: "Yeremia Armando Damanik", kelas: "X-8" },
      { name: "Sharleen Gowarman", kelas: "X-3" },
      { name: "Jesslyn Vistalim", kelas: "X-8" },
    ],
  },
  {
    bidang: "Ticketing",
    members: [
      { name: "Cleon Wyn Setiawan", kelas: "XI-8" },
      { name: "Celine Sweetheart Liduwan", kelas: "X-3" },
      { name: "Annabelle Elaine Clarice Derasak", kelas: "X-3" },
      { name: "Frederick Fievel Fanza", kelas: "X-3" },
      { name: "Fiona Calista Setiawan", kelas: "XI-1" },
      { name: "Kireina Karmelia Siahaan", kelas: "X-8" },
    ],
  },
  {
    bidang: "Trophies",
    members: [
      { name: "Seraphim Theodora Pasaribu", kelas: "X-6" },
      { name: "Florence Stephanie Janto", kelas: "XI-7" },
    ],
  },
  {
    bidang: "Voli",
    members: [
      { name: "Colin Amadeo Tsai", kelas: "X-2" },
      { name: "David Joseph Mulyana", kelas: "XII-7" },
      { name: "Milliani Phiong", kelas: "X-8" },
      { name: "Zen Ermenegeldo Nicholas", kelas: "XI-3" },
    ],
  },
  {
    bidang: "Web Division",
    members: [{ name: "Valerie Faith Leo", kelas: "X-3" }],
  },
];

const SOC2_2026_gel2 = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto mb-10 mt-28">
        <h1 className="text-2xl font-black text-center sm:text-4xl md:text-5xl xl:text-6xl ">
          Hasil Seleksi Tahap Wawancara Open Recruitment SOC Gelombang 2
        </h1>
        <h1 className="text-2xl font-black text-center sm:text-4xl md:text-5xl xl:text-6xl">
          SMAK 1 PENABUR JAKARTA
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="w-3/4 text-left mb-7">
          Setelah dilaksanakannya seleksi wawancara, maka telah ditentukan
          anggota-anggota baru sebagai berikut:
        </p>
      </div>
      <SOCGrid data={data} />
      <div className="flex flex-col items-center">
        <p className="mt-5 text-lg font-bold">Jakarta, 21 Agustus 2026</p>
        <p>⠀</p>
        <p className="text-lg font-bold">Mengetahui,</p>
        <div className="flex flex-col items-center mt-20">
          <img
            src={ttd_buOP}
            alt="Signature of Olivia Melissa Puspitarini, S. Pd"
            className="h-24 mb-1"
          />
          <p className="px-2 font-bold text-center border-b-2 border-black">
            Olivia Melissa Puspitarini, S.Pd.
          </p>
          <p className="mt-1 text-center">
            Wakil Kesiswaan SMAK&nbsp;1&nbsp;PENABUR&nbsp;Jakarta
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SOC2_2026_gel2;
