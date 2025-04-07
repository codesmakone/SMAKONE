import React from "react";

import Team from "../../../Image/Clubs/Cressendo/cressendo2.webp";
import Instagram from "../../../Image/Clubs/Cressendo/instagram.webp";
import Spotify from "../../../Image/Clubs/Cressendo/spotify.webp";

export const TEXT = `
Menjadi band generasional andalan Smukie yang telah berkarya selama 21 tahun dan bersisilah sejak 2004. 

Cressendo mengeksplorasi ragam khas musikalitas, dengan mengelompokkan dua kelompok genre yang berbeda; Pop Jazz dan Rock. 

Cressendo setiap tahunnya sigap menemani Smukierz pada beragam acara ikonik Smukie; SOC, SAP, Bazone, CnyxVals, Tedx, dll. 

Saksikan karya-karya warisan Cressendo yang spektakuler melalui streaming spotify! ACE (Addictive, Catchy, Easy-listening) musical experience Guaranteed.

Exclusive musical updates ONLY AT @cressendoband instagram page. 

Getting louder, because We Are Cressendo 🎧!
`;

const Section = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] md:h-[24rem]"
        src={Team}
        alt="Cressendo Team"
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
              href="https://www.instagram.com/cressendoband?igsh=ejdremE2dDk5NTY="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D732A8] hover:text-[#9A1A76] font-medium"
            >
              cressendoband
            </a>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-[1rem] sm:w-[1.5rem] md:w-[1.75rem]"
              src={Spotify}
              alt="Spotify"
            />
            <a
              href="https://open.spotify.com/artist/6YchivWJx6N7JL2yfrBYct?si=n1JurYW3S0SGkwXDM711Kw&nd=1&dlsi=f3eaa45895d54c88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25A914] hover:text-[#126407] font-medium"
            >
              cressendo
            </a>
          </div>
        </div>
      </p>
    </section>
  );
};

export default Section;
