import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_BuRachel from "../../../Image/Osis/ttd BuRachel.png";
import ttd_buOP from "../../../Image/Osis/ttd BuOP.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const PesertaTOS = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto mt-28">
        <h1 className="m-3 text-3xl font-black text-center sm:text-4xl md:text-5xl xl:text-5xl">
          Hasil Seleksi Peserta Tutors for Others (TOS) 2026
        </h1>

        <div className="flex flex-col items-center mt-3 text-sm sm:text-lg">
          <p className="w-3/5 text-center">
            Setelah kami membuka form pendaftaran pada tanggal 11-18 Oktober
            2026, berikut telah ditentukan nama-nama yang akan lanjut ke seleksi
            tahap 2 wawancara dan microteaching.
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Abigail Gunawan", "X1"],
            [2, "Nigel Einslee", "X1"],
            [3, "Elisa Jean Walangitang", "X2"],
            [4, "Jemima Lemuela Liong", "X2"],
            [5, "Joanna Phang", "X2"],
            [6, "Michelle Angelina", "X2"],
            [7, "Raphael Arlest Krisna", "X2"],
            [8, "Christabella Milena Tjandra", "X3"],
            [9, "Fionna Estelyccia Purwanto", "X3"],
            [10, "Michella Valerie Gan", "X3"],
            [11, "Nathanael Surayadarma", "X3"],
            [12, "Sharleen Gowarman", "X3"],
            [13, "Stacey Graciella K", "X3"],
            [14, "Arciella Tandiono", "X4"],
            [15, "Caitlyn Annabelle Tambunan", "X4"],
            [16, "Emeline Rosary Siaw", "X4"],
            [17, "Josephine Novena Elizabeth", "X4"],
            [18, "Naoko Pema", "X4"],
            [19, "Odeleya Sincere Kurniawan", "X4"],
            [20, "Albert Tito Ebenhaezer Simanjuntak", "X5"],
            [21, "Angella Danielle Wu", "X5"],
            [22, "Maria Joanna Husin", "X5"],
            [23, "Nathanael Melvin", "X5"],
            [24, "Jones Oswald Marcellious", "X6"],
            [25, "Raphael Kenzhou Pranoto", "X6"],
            [26, "Alicia Kwan", "X7"],
            [27, "Brayden Royce Hermanto", "X7"],
            [28, "Grand Shallomita Harefa", "X7"],
            [29, "Jordan Yap", "X7"],
            [30, "Justin Lawrence The", "X7"],
            [31, "Madeline Liu", "X7"],
            [32, "Alysha Callista Irwandi", "X9"],
            [33, "Angelica Naomi Antony", "X9"],
            [34, "Beatrice Hannah Salim", "X9"],
            [35, "Gracelyn Quinn Effendi", "X9"],
            [36, "Charlene Angelina Tan", "XI1"],
            [37, "Doreen Brigitta Saputra", "XI1"],
            [38, "Felix Susanto Herdi", "XI1"],
            [39, "Naomi Abigail Edward", "XI1"],
            [40, "Valerie Rachel Gunadi", "XI1"],
            [41, "Audrey Valencia Sutjipto", "XI2"],
            [42, "Stevia Sufriady", "XI2"],
            [43, "Anita Putri Christopher", "XI4"],
            [44, "Jennifer Olivia Chang", "XI4"],
            [45, "Lie Sharonia Belle", "XI4"],
            [46, "Lionell Austin Hermando", "XI4"],
            [47, "Zoey Chen", "XI4"],
            [48, "Barbara Queen Adrienne", "XI5"],
            [49, "Christa Jade Widjaya", "XI5"],
            [50, "Edbert Derris Leman", "XI6"],
            [51, "Celine Huang", "XI7"],
            [52, "Beatricia Allegra Pratomo", "XI8"],
            [53, "Gracia Tiffany Wirawan", "XI8"],
            [54, "Michelle Christina Nursiman", "XI8"],
            [55, "Shannon Demetria Suwanto", "XI8"],
            [56, "Christophe Andrew Tjioe", "XI9"],
            [57, "Fernysia Edbert Samsie", "XI9"],
            [58, "Madeleine Chen", "XI9"],
            [59, "Gad Cebrian Fabiano Teguh", "XI10"],
            [60, "Mudita Nimmala", "XI10"],
          ]}
        ></SeleksiGrid>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">Jakarta, 24 Oktober 2026</p>
        <p>⠀</p>
        <p className="text-lg font-bold mb-9">Mengetahui,</p>

        <div className="flex flex-col items-center justify-between p-6 md:flex-row space-y-14 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center">
            <div className="mb-2 text-lg font-bold text-center">
              Wakil Kesiswaan SMAK 1 PENABUR Jakarta
            </div>
            <img
              src={ttd_buOP}
              alt="Signature of Olivia Melissa Puspitarini, S. Pd"
              className="w-auto h-20 my-2"
            />

            <div className="text-lg font-bold">
              Olivia Melissa Puspitarini, S.Pd.
            </div>
          </div>

          {/* <div className="flex flex-col items-center">
            <div className="mb-2 text-lg font-bold">PIC Kegiatan TOS</div>
            <img src={ttd_BuRachel} className="w-auto h-20 my-2" />
            <div className="text-lg font-bold">Rachel Ayu Nayunda P, S.Pd</div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PesertaTOS;
