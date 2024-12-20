import React from "react";

import Team from "../../../Image/Clubs/Monograph/team-mono.webp";
import LogoMono from "../../../Image/Clubs/Monograph/mono.webp";
import MonoText from "../../../Image/Clubs/Monograph/text-mono.webp";
import Section from "./Section";

const Header = () => {
  return (
    <header className="relative">
      <div className="relative overflow-hidden inline-block w-full h-[21rem] md:h-[30rem]">
        <div className="w-full h-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[8rem] md:after:h-[10rem] after:pointer-events-none after:bg-gradient-to-t after:from-[rgba(255,255,255,1)] after:to-[rgba(255,255,255,0)]">
          <img
            src={Team}
            alt="Monograph Team"
            className="relative -top-1 w-[calc(100%+20px)] h-[calc(100%+20px)] object-cover blur-[3px] brightness-50"
          />
        </div>
      </div>
      <div className="absolute top-[3.5rem] md:top-[8rem] left-[50%] -translate-x-[50%] z-2 flex flex-col items-center gap-[1rem] md:gap-[2.5rem]">
        <img
          className="w-[6rem] md:w-[10rem]"
          src={LogoMono}
          alt="Monograph Logo"
        ></img>
        <img
          className="w-[11rem] md:w-[16rem]"
          src={MonoText}
          alt="Monograph Logo"
        ></img>
      </div>
      <Section />
    </header>
  );
};

export default Header;
