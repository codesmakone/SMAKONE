import React from "react";
import { NavLink } from "react-router-dom";
import { HomeMagazine } from "../Data/HomeMagazine";

const Emagz = () => {
  return (
    <div className="container mx-auto">
      <div className="justify-center px-2 font-bold text-center text-white md:px-10 lg:px-20">
        <div className="content-center mb-5 text-sm text-white sm:text-base lg:text-lg">
          E-Magazine
        </div>
        <div className="text-3xl leading-normal text-white lg:text-4xl xl:text-5xl">
          <div>Keluaran E-Magazine Terbaru</div>
        </div>
        <div className="px-4 py-12">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-10 md:gap-16">
            {HomeMagazine.slice(0)
              .reverse()
              .map((magazine, i) => (
                <div key={i}>
                  <a href={magazine.link} target="blank">
                    <img
                      src={magazine.img}
                      alt={magazine.title}
                      className="justify-center w-full h-auto"
                    />
                  </a>
                  <h4 className="py-4 font-medium text-center">
                    {magazine.title}
                  </h4>
                </div>
              ))}
          </div>
        </div>
        <NavLink
          to="/OSIS/Emagz"
          className="px-3 py-2 text-base font-black sm:text-lg md:text-xl"
        >
          <button className="px-16 py-5 text-base font-black text-black bg-white rounded-full hover:bg-gray-200 sm:text-lg md:text-xl">
            Edisi Sebelumnya
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Emagz;
