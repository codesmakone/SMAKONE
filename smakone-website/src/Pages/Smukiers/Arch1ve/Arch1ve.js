import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";

import ArchiveCard from "./archiveCard";
import archiveData from "./archiveData";

const Arch1ve = () => {
  return (
    <>
      <Nav />

      <section className="px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center flex justify-center flex-col mx-auto w-full h-full mt-[7rem] sm:mt-[8rem]">
          <p className="flex justify-center text-2xl sm:text-3xl">Smukie's</p>
          <p className="flex justify-center text-5xl sm:text-6xl font-bold mt-[-1rem] pb-2">
            Arch1ve
          </p>
          <p className="sm:text-lg md:text-xl">
            Jelajahi arsip dokumentasi berbagai kegiatan SMAK 1 PENABUR Jakarta
            dalam satu tempat.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mt-16">
          <div className="rounded-full bg-[#EEF2FF] px-6 py-3">
            <span className="font-semibold text-[#0A167F]">2025</span>
          </div>

          <p className="text-gray-500">
            • {archiveData.length} arsip ditemukan
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {archiveData.map((event) => (
            <ArchiveCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Arch1ve;
