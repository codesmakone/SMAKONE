import React from "react";

import Team from "../../../Image/Clubs/Monograph/team-mono.webp";

export const TEXT = `
Monograph adalah club Desain Grafis di SMAK1 yang berada di bawah
        naungan OSIS bidang 9. Monograph bertugas membuat design-design yang
        dibutuhkan dalam suatu acara, seperti MPLS, Farewell Night, 17 Agustus,
        Hari guru, TedxYouth@Smakone, dan program osis lain nya. Design dari
        Monograph dibuat untuk keperluan media publikasi yang dapat dilihat di
        instagram @smukiee, @farewellsmukie, dan @tedxyouthsmakone, serta media
        fisik seperti merchandise baju, sticker, lanyard, dan spanduk.
`;

const Section = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative mb-[3rem] z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[21rem] rounded-[2rem] md:h-[30rem]"
        src={Team}
        alt="Monograph Team"
      />
      <p className="-mt-12 z-4 top-[85%] bg-white px-[1.2rem] py-[1rem] rounded-[2rem] shadow-2xl text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem]">
        {TEXT}
      </p>
    </section>
  );
};

export default Section;
