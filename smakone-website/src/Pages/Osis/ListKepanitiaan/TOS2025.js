import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_BuRachel from "../../../Image/Osis/ttd BuRachel.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const PesertaTOS = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-5xl font-black">
          Hasil Seleksi Peserta Tutors for Others(TOS)
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-5xl font-black">
          SMAK 1 PENABUR JAKARTA
        </h1>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-5xl font-black mb-4">
          Tahun 2025
        </h1>
        <SeleksiGrid
          title=""
          content={[
            [1, "Vivian Aurellia Augusta", "XI3"],
            [2, "Bethania Reika Kawanda", "XI6"],
            [3, "Kayla Maxine Kaliman Susatia", "XI1"],
            [4, "Callista Lokeshvara Andrian", "XI3"],
            [5, "Angelina", "XI2"],
            [6, "Marvel Sebastian", "XI2"],
            [7, "Elliana Gracia Davina Harwinanto", "XI8"],
            [8, "Dimitry Marvello", "XI6"],
            [9, "Jocelyn Emilia Layadi", "XI9"],
            [10, "Davalinda Cherie Ongsono", "XI9"],
            [11, "Caroline Tanto", "XI7"],
            [12, "Metta Nimmala", "X6"],
            [13, "Gracia Emmanuella Candra", "XI5"],
            [14, "Daniel Timothy Taruna", "XI5"],
            [15, "Lacreashia Jacintha Howidjaja", "XI1"],
            [16, "Maxbillian Christiansen Sanjaya", "XI4"],
            [17, "Cheryl Viby Tumbelaka", "XI4"],
            [18, "Daniel Surya Chandra", "XI1"],
            [19, "Darlene Bianca Tanuwijaya", "XI2"],
            [20, "Rainer Sebastian Wijaya", "XI7"],
            [21, "Jesslyn Clarissa Tamin", "XI1"],
            [22, "Kenneth Kairos", "XI8"],
            [23, "Benedict Erick Anthony", "XI5"],
            [24, "Yovela Dania Hewis", "XI6"],
            [25, "Bianca Margareth Soetopo", "X9"],
            [26, "Reyna Chryslene Setyono", "X8"],
            [27, "Jonathan Saputra Lim", "XI9"],
            [28, "Michelle Surjani", "XI1"],
            [29, "Angelica Shelyn N", "XI3"],
            [30, "Putri Tufany Emanuella", "X8"],
            [31, "Vanessa Chloe Korompis", "XI9"],
            [32, "Rebecca Adeline Mutiha Sitompul", "XI7"],
            [33, "Samantha Wijaya", "XI6"],
            [34, "Rachel Cathlene Christianty", "XI9"],
            [35, "Valeska Graciella", "XI6"],
            [36, "Chieryl Imanuella Sandy", "XI3"],
            [37, "Garrie Halim", "XI5"],
            [38, "Shriya Lakshmi", "XI3"],
          ]}
        ></SeleksiGrid>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-left w-3/4 mb-20">
          *) Seleksi anggota TOS SMAK 1 PENABUR Jakarta Tahun 2025 didasarkan
          pada seleksi administrasi yang diadakan pada tanggal 16 -23 Agustus
          2024 dan tes wawancara serta praktek mengajar (microteaching), yang
          diadakan pada tanggal 19 November - 4 Desember 2024.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center p-6 space-y-14 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold mb-2 text-center">
              Wakasis SMAK 1 PENABUR Jakarta
            </div>
            <img src={ttdyy} className="w-auto h-20 my-2" />
            <div className="text-lg font-bold">Yendra Yohannes, S.S.,M.Li</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-lg font-bold mb-2">PIC Kegiatan TOS</div>
            <img src={ttd_BuRachel} className="w-auto h-20 my-2" />
            <div className="text-lg font-bold">Rachel Ayu Nayunda P, S.Pd</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PesertaTOS;
