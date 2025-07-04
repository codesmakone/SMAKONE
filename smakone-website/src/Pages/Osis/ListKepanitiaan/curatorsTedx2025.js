import React from "react";
import { NavLink } from "react-router-dom";

import ttdyy from "../../../Image/Osis/ttd yy.png";

// Component
import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import SeleksiGrid from "../../../Component/Osis/SeleksiGrid";

const CuratorsTedx = () => {
  return (
    <div>
      <Nav />
      <div className="mt-28 mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-5xl font-black">
          Hasil Seleksi Curators TEDxYouth@SmakOne 2025
        </h1>
        <SeleksiGrid
          title=""
          content={[
            [1, "Keysha Caroline Sinuraya", "XI1"],
            [2, "Jocelyn Emilia Layadi", "XI9"],
            [3, "Bryant Joshua Halim", "X1"],
            [4, "Darius Sudarmo", "X3"],
          ]}
        ></SeleksiGrid>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold mb-9">Mengetahui,</p>

        <div className="flex flex-col md:flex-row justify-between items-center p-6 space-y-14 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold mb-2 text-center">
              Wakasis SMAK 1 PENABUR Jakarta
            </div>
            <img src={ttdyy} className="w-auto h-20 my-2" />
            <div className="text-lg font-bold">Yendra Yohannes, S.S.,M.Li</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CuratorsTedx;
