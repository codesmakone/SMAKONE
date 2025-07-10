import React from "react";

import Members from "../../../Image/Clubs/Shutterone/Shutterone.jpg";
import Logo from "../../../Image/Clubs/Shutterone/ShutteroneLogo.png";
import Description from "./Description";

const Main = () => {
  return (
    <main className="relative mt-12 md:mt-16 lg:mt-20">
      <header className="relative">
        <div className="relative overflow-hidden inline-block w-full h-[21rem] md:h-[30rem]">
          <div className="w-full h-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[8rem] md:after:h-[10rem] after:pointer-events-none after:bg-gradient-to-t after:from-[rgba(255,255,255,1)] after:to-[rgba(255,255,255,0)]">
            <img
              src={Members}
              alt="Shutterone members"
              className="relative -top-10 w-[calc(100%+20px)] h-[calc(100%+50px)] md:h-[calc(150%)] object-cover blur-[3px] brightness-50"
            />
          </div>
        </div>
        <img
          className="absolute top-[3rem] sm:top-[3rem] md:top-[5rem] xl:top-[5rem] left-[50%] -translate-x-[50%] z-2 w-[23rem] sm:w-[30rem] md:w-[45rem] xl:w-[55rem]"
          src={Logo}
          alt="Logo Shutterone"
        />
        <Description />
      </header>
    </main>
  );
};

export default Main;
