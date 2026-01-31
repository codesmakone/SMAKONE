import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const handleJumpToCurrent = () => {
    const now = new Date();

    setCurrentYear(now.getFullYear());
    setCurrentMonthIndex(now.getMonth());
  };

  const getImage = () => {
    try {
      return require(
        `../../Image/Home/Kehidupan/Calendar/${currentYear}-${months[currentMonthIndex]}.svg`,
      );
    } catch {
      return undefined;
    }
  };
  const calendarImage = getImage();

  const handleNext = () => {
    if (currentMonthIndex === months.length - 1) {
      setCurrentMonthIndex(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonthIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(months.length - 1);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonthIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Nav />

      <div className="flex justify-center flex-col mx-auto w-full h-full pb-12 mt-[7rem] sm:mt-[8rem]">
        <p className="flex justify-center text-2xl sm:text-3xl">Smukie's</p>
        <p className="flex justify-center text-5xl sm:text-6xl font-bold mt-[-1rem]">
          Calendar
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl">{currentYear}</p>
          <div className="flex justify-between items-center gap-5 mb-5 w-[16rem] md:w-[21rem] ">
            {/* back */}

            <IoIosArrowBack
              className="cursor-pointer"
              size={30}
              onClick={
                currentYear === 2026 && currentMonthIndex === 0
                  ? null
                  : handleBack
              }
            />

            <p className="text-3xl md:text-5xl">{months[currentMonthIndex]}</p>

            {/* next */}
            <IoIosArrowForward
              className="cursor-pointer"
              size={30}
              onClick={handleNext}
            />
          </div>
        </div>

        {/* IMAGE CALENDAR */}

        {calendarImage ? (
          <img
            src={calendarImage}
            alt={`${months[currentMonthIndex]} ${currentYear}`}
            className="h-full w-full md:px-[5rem] md:w-[60rem] mx-auto"
          />
        ) : (
          <p className="mx-auto italic text-1xl md:text-2xl">
            Calendar for {months[currentMonthIndex]} {currentYear} is not
            available yet.
          </p>
        )}
      </div>

      <button
        onClick={handleJumpToCurrent}
        className="flex items-center h-12 px-8 py-2 mx-auto mt-12 text-white transition-all rounded-full md:px-10 text-1xl md:text-2xl md:h-16 bg-light-blue hover:bg-blue-700 active:opacity-80"
      >
        Jump to current month
      </button>

      <Footer />
    </div>
  );
};

export default Calendar;
