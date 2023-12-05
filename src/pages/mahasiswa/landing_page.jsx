import Header from "../../components/global-components/header";
import Press_release from "../../components/global-components/press_release";
import Dokumentasi from "../../components/global-components/dokumentasi";
import Footer from "../../components/global-components/footer";
import TentangKami from "../../components/global-components/tentang_kami";
import Baground from "../../components/global-components/baground.jsx";
import React from "react";

const Dasaboard_N_L = () => {
  return (
    <div>
      <Header />
      <Baground />
      <TentangKami />
      <Press_release />
      <Dokumentasi />
      <Footer />
    </div>
  );
};

export default Dasaboard_N_L;
