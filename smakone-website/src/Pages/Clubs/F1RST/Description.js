import React from "react";

import Members from "../../../Image/Clubs/F1RST/F1RST.JPG";
import Instagram from "../../../Image/Clubs/Cressendo/instagram.webp";

export const TEXT = `
F1RST merupakan sebuah club tari dengan genre modern dance di bawah naungan ekskul modern dance asal SMAK 1 Penabur Jakarta. Club yang di kenal dengan slogan “Fourth, Third, Second, F1RST!” ini kerap hadir untuk memeriahkan berbagai acara dengan pertunjukan tarian yang dilangsungkan di SMAK 1 seperti SmakOneCup, SAPxSNM, CNYxVals, Prom Night, BazOne, dan lain sebagainya. F1RST juga banyak menorehkan prestasi lewat perlombaan-perlombaan yang diikuti seperti Juara 1 UBS Gold Dance Competition DKI Jakarta Honda DBL 2019, Top 12 UBS Gold Dance Competition DKI Jakarta Honda DBL 2022, Juara 1 Lomba Modern Dance Santa Ursula Cup 2023, Juara 1 Lomba Modern Dance Tiara Kasih Cup 2023, dan lain sebagainya.
`;

const Section = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] sm:h-[20rem] md:h-[34rem]"
        src={Members}
        alt="F1RST Members"
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
              href="https://www.instagram.com/f1rstdancecrew/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D732A8] hover:text-[#9A1A76] font-medium"
            >
              firstdancecrew
            </a>
          </div>

        </div>
      </p>
    </section>
  );
};

export default Section;
