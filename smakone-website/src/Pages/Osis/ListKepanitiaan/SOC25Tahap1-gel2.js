import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_steven from "../../../Image/Osis/ttd_Steven.png";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SOCGrid from "../../../Component/Osis/SOCSeleksiGrid";

const data = [
    {
      bidang: "Badminton",
      members: [
        { name: "Stevia Sufriady", kelas: "X6" },
        { name: "Kyana Alicia Yolianto", kelas: "X7" },
        { name: "Arabelle Soetarso", kelas: "X6" },
        { name: "Darius Sudarmo", kelas: "XI1" },
        { name: "Ashley Samantha Zeng", kelas: "X2" },
        { name: "Giselle Christina Hartono", kelas: "X2" },
        { name: "Abbigayle Jaya Halim", kelas: "XI6" },
      ]
    },
    {
      bidang: "Band",
      members: [
        { name: "Putu Acyntia Kanaya Ardani", kelas: "XI1" },
        { name: "Nadya Cherry Hendro", kelas: "X10" },
      ]
    },
    {
      bidang: "Basket",
      members: [
        { name: "Jovita Mayleen", kelas: "XI8" },
        { name: "Evans Gideon Senduk", kelas: "XI4" },
        { name: "Clayton Invanio", kelas: "X2" },
        { name: "Karen Augustina Tantoso", kelas: "X3" },
        { name: "Charlene Angelina Tan", kelas: "X8" },
        { name: "Silver Sean Kuntoaji", kelas: "XI6" },
        { name: "Julian Elim Dharmanto", kelas: "XI8" },
        { name: "Jordana Utama", kelas: "XI8" },
        { name: "Matthew Segarra", kelas: "XII4" },
      ]
    },
    {
      bidang: "Business Plan",
      members: [
        { name: "Fellow Tedjomuljono ", kelas: "XI2" },
        { name: "Michelle Christina Nursiman", kelas: "X6" },
      ]
    },
    {
      bidang: "EDS",
      members: [
        { name: "Nicole Eleanor Setiady", kelas: "X2" },
        { name: "Madeline Setiawan", kelas: "X1" },
        { name: "Nathan Aurelion", kelas: "X10" },
      ]
    },
    {
      bidang: "Futsal",
      members: [
        { name: "Boga F Renzo", kelas: "XI6" },
        { name: "Clarence Feonard Sugiarto Lee", kelas: "X1" },
        { name: "Samuel Prabaswara", kelas: "X3" },
      ]
    },
    {
      bidang: "JHS Competition",
      members: [
        { name: "Michael Thio", kelas: "X2" },
        { name: "Oliver Roderick Adrian Talik", kelas: "X4" },
        { name: "Joshua Edrick Lim", kelas: "X8" },
        { name: "Michelle Hie", kelas: "X4" },
        { name: "Nicoleen Leonny", kelas: "XI1" },
        { name: "Dennis Mulyanata Mintarja", kelas: "XI8" },
        { name: "Henry Arelian", kelas: "XII2" },
        { name: "Devon Fillanov Julianysah", kelas: "XII8" },
        { name: "Luffy Lionheart Liduwan", kelas: "XI2" },
        { name: "Judson Carlton Lim", kelas: "X8" },
      ]
    },
    {
      bidang: "Modern Dance",
      members: [
        { name: "Clarissa Abigail Josephine", kelas: "XI7" },
        { name: "Cleocta egerei oscar simatupang", kelas: "X4" },
        { name: "Barbara Queen Adrienne", kelas: "X5" },
      ]
    },
    {
      bidang: "MUN",
      members: [
        { name: "Edbert Derris Leman", kelas: "X6" },
        { name: "Rafaelle Alvaro Darmawan", kelas: "X9" },
        { name: "Gabrio Aaron Wijaya", kelas: "XI1" },
        { name: "Naomi Angelica", kelas: "XI9" },
        { name: "Sarah Grace Huang", kelas: "XII3" },
      ]
    },
    {
      bidang: "Mural",
      members: [
        { name: "Kaelyn Sutanto", kelas: "XI7" },
        { name: "Faye Valerie Lesley", kelas: "X7" },
        { name: "Fayola Arista", kelas: "XI1" },
        { name: "Marietta Luvi Tjandra", kelas: "X1" },
        { name: "Emily Adelia", kelas: "XI8" },
      ]
    },
    {
      bidang: "Fotografi",
      members: [
        { name: "Angelina Devina Teddy", kelas: "X3" },
        { name: "Rafael Ephron Djimanton", kelas: "X9" },
        { name: "Rainer Arthur Setiawan", kelas: "X6" },
        { name: "Vanessa Leonard", kelas: "XII7" },
        { name: "Wilquintha Quiteria", kelas: "XI9" },
        { name: "Chelsea Setiawan", kelas: "XII1" },
      ]
    },
    {
      bidang: "Esports",
      members: [
        { name: "Jason samuel Rihi Manoe", kelas: "XI6" },
        { name: "Andreas Felix", kelas: "X4" },
        { name: "Edward Kenneth Salim", kelas: "X10" },
        { name: "Geronimo Kentzo Irawan", kelas: "XII4" },
      ]
    },
    {
      bidang: "Acara",
      members: [
        { name: "Stevianne Hanna Sadrang", kelas: "X4" },
        { name: "Jessie", kelas: "X9" },
        { name: "Quirinus Lionnel Hanson Kangga", kelas: "XI5" },
      ]
    },
    {
      bidang: "Dana",
      members: [
        { name: "Christopher Matthew", kelas: "XI1" },
        { name: "Selly Florencia Mok", kelas: "X10" },
        { name: "Darius Theodore Bong", kelas: "X2" },
      ]
    },
    {
      bidang: "Dekor Lapangan",
      members: [
        { name: "CAITLYN ABIGAIL", kelas: "X5" },
        { name: "Joanne Patricia Wirawan", kelas: "X8" },
      ]
    },
    {
      bidang: "Design Division",
      members: [
        { name: "Nomi Widjaja", kelas: "X5" },
        { name: "Ellanor Jovanka Huang", kelas: "X5" },
      ]
    },
    {
      bidang: "Doa",
      members: [
        { name: "Joey Yu", kelas: "XI3" },
        { name: "Lim Trinity Agenlina", kelas: "X1" },
      ] 
    },
    {
      bidang: "Film & Documentation",
      members: [
        { name: "John Haren Tangputra", kelas: "X5" },
        { name: "Theodore Kimi Tjen", kelas: "XII8" },
        { name: "Kaitlyn Kallita Kusnandar", kelas: "X3" },
        { name: "Victorianto Vincent", kelas: "X5" },
      ]
    },
    {
      bidang: "Humas",
      members: [
        { name: "Adrienne Olivia SoeriohadiI", kelas: "X7" },
        { name: "Mathieu Acquafresca Sudja", kelas: "XI7" },
        { name: "Frederick Suhardi", kelas: "XII1" },
      ]
    },
    {
      bidang: "Keamanan",
      members: [
        { name: "Vincencia Graciella Cong", kelas: "XI8" },
        { name: "Putri Tufany Emanuella Sitanggang", kelas: "XI4" },
        { name: "Marvel Khioe", kelas: "XI9" },
        { name: "Marcelino Verdanus Handoyo", kelas: "XI9" },
        { name: "Elena Letica Hendrawan", kelas: "X1" },
        { name: "Livia Reanata Lim", kelas: "XI3" },
        { name: "Pheodore Chiara Lavernia ", kelas: "X4" },
        { name: "Alexander Theodore Viawan", kelas: "X5" },
        { name: "Regina Gabriella Hioe", kelas: "XI6" },
        { name: "Nathan Aurelius Halim", kelas: "X7" },
        { name: "Ray Hayden Rahardja", kelas: "X1" },
        { name: "Mutiara Jelita Tangkilisan", kelas: "XI2" },
        { name: "Ashvagosha Kho", kelas: "XI6" },
        { name: "Joshua Michael Hioe", kelas: "X3" },
        { name: "Jayden Surlaya", kelas: "XII5" },
      ]
    },
    {
      bidang: "Konsumsi",
      members: [
        { name: "Celine Huang ", kelas: "X2" },
        { name: "Sean Gabriel Huang", kelas: "X3" },
        { name: "Aurel Intan Annelies Lamria Purba", kelas: "XI3" },
        { name: "Nathan Patar Abigail Sihite", kelas: "XI4" },
        { name: "Naya Patreginia Mesah", kelas: "XI4" },
      ]
    },
    {
      bidang: "Merchandise",
      members: [
        { name: "Caroline Tanto", kelas: "XII3" },
        { name: "Madeleine chen ", kelas: "X8" },
        { name: "Keelyn Ivy Lukito", kelas: "X10" },
      ]
    },
    {
      bidang: "Perlengkapan",
      members: [
        { name: "Tristan Axel Kosen", kelas: "XI5" },
        { name: "Tatiana Aurelia Fleming", kelas: "X10" },
        { name: "Oswald Soetarso", kelas: "XI3" },
        { name: "Valerie Gaudeo Lie", kelas: "X4" },
        { name: "Sebastian Kean Vifel", kelas: "XI3" },
      ]
    },
    {
      bidang: "Publikasi",
      members: [
        { name: "Madison Suratman", kelas: "X7" },
        { name: "Jovanka Gabriella", kelas: "X10" },
        { name: "Jacqueline Audrey Wijaya", kelas: "X7" },
      ]
    },
    {
      bidang: "Ticketing",
      members: [
        { name: "Naomi Abigail Edward ", kelas: "X6" },
        { name: "Rachel Emily Harnoto", kelas: "XI1" },
        { name: "Karenza Sheli Pasisir", kelas: "XI2" },
        { name: "Filbert Kuswara", kelas: "XI3" },
        { name: "Garrett Earl Hidayat ", kelas: "XI6" },
        { name: "Jessica Setiawan", kelas: "XI6" },
        { name: "Andhorea Chrestotesia Patriabara ", kelas: "XII4" },
      ]
    },
    {
      bidang: "Trophies",
      members: [
        { name: "Gwynneth Christa Lie", kelas: "X7" },
        { name: "Gabriella Hillary Nugroho", kelas: "XI1" },
      ]
    },
    {
      bidang: "P3K",
      members: [
        { name: "Mellisa Maya Nathania Mulyono", kelas: "XI9" },
        { name: "Alicia Calista", kelas: "X8" },
        { name: "Felicia Jocelyn", kelas: "XI8" },
        { name: "Audrey Gemma", kelas: "XI4" },
        { name: "made sasikirana satriakusuma ", kelas: "XI8" },
      ]
    },
    {
      bidang: "Web Division",
      members: [
        { name: "Owen Peter Chow", kelas: "XII3" },
        { name: "Nicolle Lin", kelas: "X9" },
      ]
    }
  ];

const SOC1_2025_gel2 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto mb-10">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black ">
          Hasil Seleksi Tahap Wawancara Open Recruitment SOC Gelombang 2
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 mb-7">
            Setelah kami melakukan seleksi selama 7 hari pada <b>Rabu, 30 Juli 2025 - Kamis, 7 Agustus 2025</b>, telah ditentukan anggota-anggota baru sebagai berikut:
        </p>
        </div>
      <SOCGrid data={data}/>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold mt-5">Jakarta, 11 Agustus 2025</p>
        <p>⠀</p>
        <p className="text-lg font-bold">Mengetahui,</p>
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

      </div>
      <Footer />
    </div>
  );
};

export default SOC1_2025_gel2;
