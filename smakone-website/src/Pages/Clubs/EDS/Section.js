import React from "react";

import Team from "../../../Image/Clubs/EDS/EDS.webp";
import Instagram from "../../../Image/Clubs/Cressendo/instagram.webp";
export const TEXT = `
English Debate Society at SmakOne [“EDS”] exists as the school’s official community for bright young students with passion in debate. We introduce a spectrum of perspectives—enhancing rigor analysis to real world problems, as well as critical thinking skills. Our weekly Monday meeting prioritizes in growth, engagement, and simulations. Our featured annual program ‘House Cup,’ focuses on sparring on motions that articulate common misconceptions in real life issues.
`;

const Section = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] md:h-[24rem]"
        src={Team}
        alt="EDS Team"
      />
      <p className="-mt-12 z-4 top-[85%] bg-white px-[1.2rem] py-[1.25rem] rounded-[2rem] shadow-2xl text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3 text-justify">
        {TEXT}
        <div className="flex gap-3 items-center justify-end">
          <div className="flex items-center gap-1">
            <img className="w-[1rem] sm:w-[1.5rem] md:w-[1.75rem]"
              src={Instagram}
              alt="Instagram"
            />
            <a
              href="https://www.instagram.com/edssmakone?igsh=OWxqdGpmZzBsbm1y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D732A8] hover:text-[#9A1A76] font-medium"
            >
              edssmakone
            </a>
          </div>
        </div>
      </p>
    </section>
  );
};



export default Section;
