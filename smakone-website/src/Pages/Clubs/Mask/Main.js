import React from "react";

import Team from "../../../Image/Clubs/Mask/mask1.webp";
import Logo from "../../../Image/Clubs/Mask/logo.png";
import Section from "./Section";

const Main = () => {
  return (
    <main className="relative mt-12 md:mt-16 lg:mt-20">
      <header className="relative">
        <div className="relative overflow-hidden inline-block w-full h-[21rem] md:h-[30rem]">
          <div className="w-full h-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[8rem] md:after:h-[10rem] after:pointer-events-none after:bg-gradient-to-t after:from-[rgba(255,255,255,1)] after:to-[rgba(255,255,255,0)]">
            <img
              src={Team}
              alt="Mask Team"
              className="relative -top-1 w-[calc(100%+20px)] h-[calc(100%+20px)] object-cover blur-[3px] brightness-50"
            />
          </div>
        </div>
        <img
          className="absolute top-[7rem] md:top-[10.5rem] xl:top-[5rem] left-1/2 -translate-x-1/2 z-2 w-[10rem] sm:w-[14rem] md:w-[18rem] xl:w-[20rem]"
          src={Logo}
          alt="Mask Logo"
        />
        <Section />
      </header>
    </main>
  );
};

export default Main;
