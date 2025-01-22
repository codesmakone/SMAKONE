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
          Hasil Seleksi Pengurus OSIS
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-4">
          Tahun 2025
        </h1>
        <SeleksiGrid
          title=""
          content={[
            [1, "Angelica Shelyn", "XI3"],
            [2, "Annette Chloe Hidayat", "XI5"],
            [3, "Benedict Erick ", "XI3"],
            [4, "Bethania Reika Kawanda", "XI6"],
            [5, "Bianca Margareth Soetopo", "X9"],
            [6, "Catherine Nicole Yuen", "XI9"],
            [7, "Cecylia Kyrie", "XI7"],
            [8, "Clairence Ilona Tanu", "X2"],
            [9, "Dimitry Marvello", "XI6"],
            [10, "Elaene Lee ", "XI7"],
            [11, "Emily Chairmanly Afla", "X9"],
            [12, "Gabriella Clementine Situmorang", "X8"],
            [13, "Glenardy Joseph ", "XI8"],
            [14, "Grace Anindya Septiawan", "XI5"],
            [15, "Grant Favor", "XI5"],
            [16, "Ivana Roxanne Subakti", "X1"],
            [17, "Jaclyn Aditya The", "X9"],
            [18, "Jessica Faustine Karnali", "X3"],
            [19, "Jesslyn Clarissa Tamin", "XI1"],
            [20, "Jesslyn Milkha ", "XI5"],
            [21, "Joanne Gisella Yusmita", "X4"],
            [22, "Jordana Utama", "X4"],
            [23, "Joshua Nathanael Yang", "XI6"],
            [24, "Joyce Avrill Miracle", "X5"],
            [25, "Justin Revaldo", "XI4"],
            [26, "Laurensia Edeline Santosa", "X1"],
            [27, "Lionel Keane", "X3"],
            [28, "Metta Nimmala", "X6"],
            [29, "Michelle Huang", "XI5"],
            [30, "Obediah Honest Kurniawan", "XI8"],
            [31, "Putu Acyntia Kanaya Ardani", "X1"],
            [32, "Quirinus Lionnel Hanson Kangga", "X8"],
            [33, "Rachelle Larissa Rahardja", "XI6"],
            [34, "Rayna Miyesha Gunawan", "XI9"],
            [35, "Regina Lucky Surjadi", "XI8"],
            [36, "Reyna Chryslene", "X8"],
            [37, "Shenny Pannya Lowis", "X8"],
            [38, "Steven Andrew Wijaya", "XI1"],
            [39, "Tristan Axel Kosen", "X5"],
            [40, "Valentio Jeremy Putra Wanadri", "X4"],
            [41, "Willard Ricxie Phanagara", "X1"],
            [42, "Yovela Dania Hewis", "XI6"],
          ]}
        ></SeleksiGrid>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">1 Desember 2024</p>
        <p>⠀</p>
        <p className="text-lg font-bold">Mengetahui,</p>
        <img className="w-1/2 lg:w-1/6" src={ttdyy}></img>
        <p className="text-lg font-bold">Yendra Yohannes</p>
        <p className="text-lg font-bold">Wakil Kesiswaan</p>
      </div>
      <Footer />
    </div>
  );
};

export default SeleksiOsis;
