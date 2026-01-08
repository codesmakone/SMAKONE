import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const TOS25 = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-20">
          Tutorial For Others by Smukiers (TOSxSAG)
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 ">
            Setelah pelaksanaan seleksi melalui wawancara dan microteaching pada
            tanggal <b> 3 & 5 Desember 2025 </b>, berikut telah ditentukan
            nama-nama yang akan menjadi anggota Tutorial For Others by Smukiers
            2026
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Celine Huang", "X2"],
            [2, "Fernysia Edbert Samsie", "X2"],
            [3, "Christa Jade Widjaya", "X3"],
            [4, "Gabriel Ailenka Cayadi", "X3"],
            [5, "Jesslyn Kireina Ailen", "X4"],
            [6, "Stevianne Hanna Saerang", "X4"],
            [7, "Valerie Gaudeo Lie", "X4"],
            [8, "Kirsty Aurelia Wisanto", "X5"],
            [9, "Mudita Nimmala", "X5"],
            [10, "Cassandra Nauli Sinaga", "X5"],
            [11, "Baby Aurellia Bagotz Purda", "X6"],
            [12, "Michelle Christina Nursiman", "X6"],
            [13, "Stevia Sufriady", "X6"],
            [14, "Arabelle Soetarso", "X6"],
            [15, "Gwynneth Christa Lie", "X7"],
            [16, "Adrienne Olivia Soeriohadi", "X7"],
            [17, "Jacqueline Audrey Wijaya", "X7"],
            [18, "Audrey Valencia Sutjipto", "X7"],
            [19, "Madeleine Chen", "X8"],
            [20, "Nadya Cherry Hendro", "X10"],
            [21, "Mariangelic Keshia Manujaya", "XI1"],
            [22, "Nadine Sachiko Darmutji", "XI1"],
            [23, "Sherine Erica Heryawan", "XI1"],
            [24, "Ivana Roxanne Subakti", "XI1"],
            [25, "Willard Ricxie Phanagara", "XI1"],
            [26, "Gabrio Aaron Wijaya", "XI1"],
            [27, "Diego Marvel Maxwell", "XI2"],
            [28, "Rachel Yap", "XI2"],
            [29, "Sharlene Grace Oenadi", "XI2"],
            [30, "Joanna Alexandra Liang", "XI2"],
            [31, "Jeanny Suryanto Yap", "XI2"],
            [32, "Imanuel Yohanes Setiawan", "XI4"],
            [33, "Putri Tufany Emanuella", "XI4"],
            [34, "Caroline Tanadi", "XI5"],
            [35, "Claudia Augustine Sitorus", "XI5"],
            [36, "Elvaretta Amabel Aurellia Simbolon", "XI5"],
            [37, "Maxwell Nolan Susatia", "XI7"],
            [38, "Sebastian Harlie", "XI7"],
            [39, "Metta Nimmala", "XI8"],
            [40, "Richelle Christabel Sendrik", "XI9"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
        {/* Date */}
        <p className="text-right px-10">Jakarta, 9 Januari 2026</p>

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

export default TOS25;
