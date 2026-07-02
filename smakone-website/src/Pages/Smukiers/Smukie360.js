// import React, { useState } from "react";

import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";

const Smukie360 = () => {
  return (
    <>
      <Nav />

      <div className="flex justify-center flex-col mx-auto w-full h-full pb-12 mt-[7rem] sm:mt-[8rem]">
        <p className="flex justify-center text-2xl sm:text-3xl">Virtual Tour</p>
        <p className="flex justify-center text-5xl sm:text-6xl font-bold mt-[-1rem]">
          Smukie 360
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Smukie360;
