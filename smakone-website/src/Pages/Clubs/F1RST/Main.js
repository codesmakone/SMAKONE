import React from "react";

import Members from "../../../Image/Clubs/F1RST/F1RST.JPG";
import Logo from "../../../Image/Clubs/Clubpage/logo_f1rst.webp";
import Description from "./Description";

const Main = () => {
  return (
    <main className="relative mt-12 md:mt-16 lg:mt-20">
      <header className="relative">
        <div className="relative overflow-hidden inline-block w-full h-[21rem] md:h-[30rem]">
          <div className="w-full h-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[8rem] md:after:h-[10rem] after:pointer-events-none after:bg-gradient-to-t after:from-[rgba(255,255,255,1)] after:to-[rgba(255,255,255,0)]">
            <img
              src={Members}
              alt="F1RST members"
              className="relative -top-10 w-[calc(100%+20px)] h-[calc(100%+50px)] md:h-[calc(150%)] object-cover blur-[3px] brightness-50"
            />
          </div>
        </div>
        <img
          className="absolute top-[1rem] md:top-[1rem] xl:top-[1rem] left-[50%] -translate-x-[50%] z-2 w-[13rem] sm:w-[15rem] md:w-[23rem] xl:w-[25rem]"
          src={Logo}
          alt="Logo F1RST"
        />
        <Description />
      </header>
    </main>
  );
};

export default Main;
