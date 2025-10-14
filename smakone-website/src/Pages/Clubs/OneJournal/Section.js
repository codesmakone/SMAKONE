import React from "react";

import Team from "../../../Image/Clubs/OneJournal/Team.webp";

export const TEXT = `
Have you ever felt curious about the events happening in the school? Looking for a page that can help you learn more about the issues happening in the world? Introducing OneJournal! OneJournal is a journalistic club at SMAK 1 Penabur Jakarta that covers multiple topics limited only by our member’s creativity. Here, we make sure that the articles you’re reading are made with high standards. From school events and real world issues, our range of discussions is boundless! Don't forget to keep yourself updated with OneJournal!
`;

const Section = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] md:h-[24rem]"
        src={Team}
        alt="OneJournal Team"
      />
      <p className="-mt-12 z-4 top-[85%] bg-white px-[1.2rem] py-[1.25rem] rounded-[2rem] shadow-2xl text-[0.75rem] sm:text-[1rem] leading-[17px] sm:leading-[20px] md:leading-8 md:text-[1.5rem] md:px-[2rem] md:py-[1.5rem] flex flex-col gap-3 text-justify">
        {TEXT}
      </p>
    </section>
  );
};


export default Section;
