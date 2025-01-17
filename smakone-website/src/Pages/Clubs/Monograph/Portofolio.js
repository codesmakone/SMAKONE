import React from "react";

import SwiperComponent from "./SwiperComponent";

const Portofolio = () => {
  return (
    <div className="flex flex-col gap-[2rem] items-center mt-[4rem]">
      <h1 className="font-bold text-4xl md:text-5xl">Portofolio</h1>
      <SwiperComponent />
    </div>
  );
};

export default Portofolio;
