import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";
import ttd_erika from "../../../Image/Osis/ttd_erika.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const Mask2026 = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto mt-28">
        <h1 className="mb-20 text-4xl font-black text-center sm:text-4xl md:text-5xl xl:text-5xl">
          Hasil Seleksi Mask 2026
        </h1>
        <div className="flex flex-col items-center">
          <p className="w-3/4 text-left ">
            Setelah kami melakukan proses audisi tahap 2 pada tanggal{" "}
            <b> 1 Februari - 1 Maret 2026</b>, telah ditentukan anggota-anggota
            baru sebagai berikut:
          </p>
        </div>
        <SeleksiGrid
          title=""
          content={[
            [1, "Christabelle Andrea Putri Onsoe", "X-10"],
            [2, "Nathan Aurelion", "X-10"],
            [3, "Fernysia Edbert Samsie", "X-2"],
            [4, "Karen Aurelia", "X-4"],
            [5, "Gabrielle Angeline Stephanson Li", "X-4"],
            [6, "Celestine Victoria Wang", "X-6"],
            [7, "Leander Jasthian Yusup", "X-6"],
            [8, "Nathan Aurelius Halim", "X-7"],
            [9, "Jessie", "X-9"],
            [10, "Rafael Ephron Djimantoro", "X-9"],
            [11, "Clarisa Aquila Benaiah", "X-9"],
            [12, "Kenjiyory Gyan Bhimasena Idrian", "X-9"],
            [13, "Florence Stephanie Janto", "X-9"],
            [14, "Fellow Tedjomuljono", "XI-2"],
            [15, "Vania Graciela Santoso", "XI-2"],
            [16, "Kania Paramita Purnomo", "XI-2"],
            [17, "Natalie Angela", "XI-2"],
            [18, "Evans Gideon Senduk", "XI-4"],
            [19, "Elise Tanaya Setiawan", "XI-4"],
            [20, "Violet Sugiharto", "XI-9"],
            [21, "Wilquintha Quiteria", "XI-9"],
            [22, "Yefta Lambok Hutajulu", "XI-9"],
            [23, "Janice Leticia", "XI-9"],
            [24, "Felix Susanto Herdi", "X-2"],
            [25, "Jason Raharjo", "X-9"],
            [26, "Stanley Elisiano Angelo", "X-9"],
            [27, "Evander Josua Adhyastha Sadi", "X-9"],

            [28, "Jesslyn Kireina Ailen", "X-4"],
            [29, "Evangeline Alexandra Nauli Parapat", "X-4"],
            [30, "Graciella Fiorenza Thiesman", "X-4"],
            [31, "Patricia Apriliani Supriyanto", "X-9"],
            [32, "Natalie Angela", "XI-2"],
            [33, "Catherine Hannalie", "XI-7"],
          ]}
        ></SeleksiGrid>
      </div>
      <section className="max-w-3xl py-10 mx-auto font-serif leading-relaxed">
        {/* Date */}
        <p className="px-10 text-right">Jakarta, 3 Maret 2026</p>

        {/* Menyetujui */}
        <p className="mt-24 text-center">Mengetahui,</p>
        <div className="flex flex-col items-center mt-20">
          <img
            src={ttdyy}
            alt="Signature of YENDRA YOHANNES, M. Li."
            className="h-24 mb-4"
          />
          <p className="px-2 font-bold text-center uppercase border-b-2 border-black">
            YENDRA YOHANNES, S.S., M.Li.
          </p>
          <p className="mt-1 text-center">
            Wakil Kesiswaan SMAK&nbsp;1&nbsp;PENABUR&nbsp;Jakarta
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mask2026;
