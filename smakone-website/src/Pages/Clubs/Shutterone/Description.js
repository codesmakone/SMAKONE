import React from "react";

import Members from "../../../Image/Clubs/Shutterone/Shutterone.jpg";
import Instagram from "../../../Image/Clubs/Cressendo/instagram.webp";
import Youtube from "../../../Image/Clubs/Shutterone/Youtube.png";

export const TEXT = `
Shutterone adalah organisasi kreatif di bawah naungan OSIS SMAK 1 PENABUR Jakarta yang menjadi wadah bagi siswa-siswi berbakat dalam video editing, medokumentasikan foto dan video dari acara-acara di SMAK1.
`;

const Description = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members}
        alt="Shutterone Members"
      />
      <p className="-mt-12 z-4 top-[85%] bg-white px-[1.2rem] py-[1.25rem] rounded-[2rem] shadow-2xl text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3">
        {TEXT}
        <div className="flex gap-3 items-center justify-end">
          <div className="flex items-center gap-1">
            <img
              className="w-[1rem] sm:w-[1.5rem] md:w-[1.75rem]"
              src={Instagram}
              alt="Instagram"
            />
            <a
              href="https://www.instagram.com/shutter.one?utm_source=ig_web_button_share_sheet&igsh=bTh5bXFtOG96bDYz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D732A8] hover:text-[#9A1A76] font-medium"
            >
              shutter.one
            </a>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-[1rem] sm:w-[1.5rem] md:w-[1.75rem]"
              src={Youtube}
              alt="Youtube"
            />
            <a
              href="http://www.youtube.com/@shutterone1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2B2B] hover:text-[#b30000] font-medium"
            >
              Shutterone
            </a>
          </div>

        </div>
      </p>
    </section>
  );
};

export default Description;
