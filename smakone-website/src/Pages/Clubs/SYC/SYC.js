import React from "react";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import Header from "../../Clubs/SYC/Header";
import Perjalanan from "../../Clubs/SYC/Perjalanan";
import Penampilan from "../../Clubs/SYC/Penampilan";

const SYC = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Penampilan />
      <Perjalanan />
      <Footer />
    </div>
  );
};

export default SYC;
