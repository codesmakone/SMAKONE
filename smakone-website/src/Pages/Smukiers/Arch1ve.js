// import React, { useState } from "react";

import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";

const Arch1ve = () => {
  return (
    <>
      <Nav />

      <div className="flex justify-center flex-col mx-auto w-full h-full pb-12 mt-[7rem] sm:mt-[8rem]">
        <p className="flex justify-center text-2xl sm:text-3xl">Smukie's</p>
        <p className="flex justify-center text-5xl sm:text-6xl font-bold mt-[-1rem]">
          Arch1ve
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Arch1ve;
