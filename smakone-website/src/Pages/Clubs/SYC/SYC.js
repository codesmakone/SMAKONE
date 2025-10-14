import React from "react";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import Perjalanan from "../../Clubs/SYC/Perjalanan";
import Penampilan from "../../Clubs/SYC/Penampilan";
import Main from "../../Clubs/SYC/Main";

const SYC = () => {
  return (
    <div>
      <Nav />
      <Main/>
      <Penampilan />
      <Perjalanan />
      <Footer />
    </div>
  );
};

export default SYC;
