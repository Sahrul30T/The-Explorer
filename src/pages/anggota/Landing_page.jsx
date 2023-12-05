import React from "react";
import Header from "../../components/user/header_User";
import Baground from "../../components/global-components/baground";
import Tentang_kami from "../../components/global-components/tentang_kami";
import Press_release from "../../components/global-components/press_release";
import Dokumentasi from "../../components/global-components/dokumentasi";
import Footer from "../../components/global-components/footer";

const Landing_page = () => {
  return (
    <div>
      <Header />
      <Baground />
      <Tentang_kami />
      <Press_release />
      <Dokumentasi />
      <Footer />
    </div>
  );
};

export default Landing_page;
