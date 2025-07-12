import React from "react";

import Team from "../../../Image/Clubs/OneMUN/Team.webp";
import Instagram from "../../../Image/Clubs/Cressendo/instagram.webp";

export const TEXT = `
ONE MUN (Model United Nations)  is one of the extracurriculars held in SMAK 1 PENABUR Jakarta. In ONE MUN, students can learn the art of delegating for countries as well as mastering the skills needed for diplomacy, including negotiating, public speaking, and so much more. ONE MUN is also the perfect community to discuss & update  about ongoing global issues. Make sure you're not missing out! ONEMUN is held every Saturday for 3 hours of pure fun from 9 - 12 P.M. Don't miss out on the fun! Be the ONE with ONEMUN!
`;

const Section = () => {
  return (
    <section className="px-10 xl:px-0 mx-auto -mt-28 relative z-3 bottom-0 flex flex-col max-w-[75rem] w-[100%] md:-mt-20">
      <img
        className="object-cover w-full h-[14rem] rounded-[2rem] md:h-[24rem]"
        src={Team}
        alt="OneMUN Team"
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
              href="https://www.instagram.com/one.mun?igsh=dWhyMDQwbTJ6dHVw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D732A8] hover:text-[#9A1A76] font-medium"
            >
              one.mun
            </a>
          </div>
        </div>
      </p>

    </section>
  );
};

// const Section = () => {
//   return (
//     <div className="flex flex-col gap-7 px-[3rem] mt-[2rem] md:mt-[4rem] items-center justify-center w-[60rem] max-w-[100%] mx-auto">
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-xl font-semibold">Clubs</h2>
//         <h1 className="text-4xl xl:text-6xl font-black">OneMUN</h1>
//       </div>
//       <img
//         className="object-cover w-full rounded-[1rem]"
//         src={Team}
//         alt="oneMUN Team"
//       />
//       <p className="text-[1rem] md:text-[1.5rem] text-justify">
//         ONE MUN (Model United Nations) is one of the extracurriculars held in
//         SMAK 1 PENABUR Jakarta. In ONE MUN, students can learn the art of
//         delegating for countries as well as mastering the skills needed for
//         diplomacy, including negotiating, public speaking, and so much more. ONE
//         MUN is also the perfect community to discuss & update about ongoing
//         global issues. Make sure you're not missing out! ONEMUN is held every
//         Saturday for 3 hours of pure fun from 9 - 12 P.M. Don't miss out on the
//         fun! Be the ONE with ONEMUN!
//       </p>
//     </div>
//   );
// };

// const Section = () => {
//   return (
//     <div className="mt-[-5rem] ">
//       <Layout
//         cat="Clubs"
//         title="OneMUN"
//         latterPar1="ONE MUN (Model United Nations) is one of the extracurriculars held in
//         SMAK 1 PENABUR Jakarta. In ONE MUN, students can learn the art of
//         delegating for countries as well as mastering the skills needed for
//         diplomacy, including negotiating, public speaking, and so much more. ONE
//         MUN is also the perfect community to discuss & update about ongoing
//         global issues. Make sure you're not missing out! ONEMUN is held every
//         Saturday for 3 hours of pure fun from 9 - 12 P.M. Don't miss out on the
//         fun! Be the ONE with ONEMUN!"
//         img={Team}
//         alt="f1rst"
//         dir="/Clubs/CodeOne"
//       />
//     </div>
//   );
// };

export default Section;
