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
          Hasil Seleksi Tahap 1 TOS 2025
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-left w-3/4 ">
            Setelah kami melakukan seleksi pada <b> 13 - 20 Oktober 2025 </b>,
            berikut telah ditentukan nama-nama yang akan lanjut ke seleksi tahap
            2 wawancara dan microteaching:
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Elbert Justin Lie", "X1"],
            [2, "Kenneth Nathaniel Tjan", "X1"],
            [3, "Bill Moritz Su", "X1"],
            [4, "Celine Huang", "X2"],
            [5, "Doreen Brigitta Saputra", "X2"],
            [6, "Fernysia Edbert Samsie", "X2"],
            [7, "Christa Jade Widjaya", "X3"],
            [8, "Gabriel Ailenka Cayadi", "X3"],
            [9, "Jesslyn Kireina Ailen", "X4"],
            [10, "Stevianne Hanna Saerang", "X4"],
            [11, "Nicole Tokyo Liongdra", "X4"],
            [12, "Valerie Gaudeo Lie", "X4"],
            [13, "Kirsty Aurelia Wisanto", "X5"],
            [14, "Mudita Nimmala", "X5"],
            [15, "Anita Putri Christopher", "X5"],
            [16, "Carmeline Japutra", "X5"],
            [17, "Cassandra Nauli Sinaga", "X5"],
            [18, "Josephine Grace Tanujaya", "X5"],
            [19, "Keilyn Zheng", "X6"],
            [20, "Baby Aurellia Bagotz Purda", "X6"],
            [21, "Valencia Marvelle", "X6"],
            [22, "Michelle Christina Nursiman", "X6"],
            [23, "Stevia Sufriady", "X6"],
            [24, "Felice Valerie Aurelia", "X6"],
            [25, "Cathleen Trisha Willona", "X6"],
            [26, "Arabelle Soetarso", "X6"],
            [27, "Gwynneth Christa Lie", "X7"],
            [28, "Adrienne Olivia Soeriohadi", "X7"],
            [29, "Jacqueline Audrey Wijaya", "X7"],
            [30, "Kheyrin Evangelina Chandra", "X7"],
            [31, "Audrey Valencia Sutjipto", "X7"],
            [32, "Madeleine Chen", "X8"],
            [33, "Gabriella Marjorie Christianty", "X8"],
            [34, "Beverly Tanzil", "X8"],
            [35, "Vallerie Yuvelina Putri", "X8"],
            [36, "Nadya Cherry Hendro", "X10"],
            [37, "Natasha Jocelyn Anton", "XI1"],
            [38, "Mariangelic Keshia Manujaya", "XI1"],
            [39, "Nadine Sachiko Darmutji", "XI1"],
            [40, "Sherine Erica Heryawan", "XI1"],
            [41, "Ivana Roxanne Subakti", "XI1"],
            [42, "Willard Ricxie Phanagara", "XI1"],
            [43, "Gabrio Aaron Wijaya", "XI1"],
            [44, "Diego Marvel Maxwell", "XI2"],
            [45, "Rachel Yap", "XI2"],
            [46, "Sharlene Grace Oenadi", "XI2"],
            [47, "Joanna Alexandra Liang", "XI2"],
            [48, "Jeanny Suryanto Yap", "XI2"],
            [49, "Imanuel Yohanes Setiawan", "XI4"],
            [50, "Putri Tufany Emanuella", "XI4"],
            [51, "Caroline Tanadi", "XI5"],
            [52, "Phoebe Lynelle Budiman", "XI5"],
            [53, "Claudia Augustine Sitorus", "XI5"],
            [54, "Elvaretta Amabel Aurellia Simbolon", "XI5"],
            [55, "Jennifer Elizabeth", "XI7"],
            [56, "Maxwell Nolan Susatia", "XI7"],
            [57, "Sebastian Harlie", "XI7"],
            [58, "Metta Nimmala", "XI8"],
            [59, "Janet Christie", "XI9"],
            [60, "Richelle Christabel Sendrik", "XI9"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl mx-auto py-10 font-serif leading-relaxed">
        {/* Date */}
        <p className="text-right px-10">Jakarta, 6 November 2025</p>

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
