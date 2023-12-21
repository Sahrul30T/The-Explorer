import React, { useEffect } from "react";
import Header from "../../components/user/Header-User";
import Background from "../../components/global-components/Background-Main";
import Tentang_kami from "../../components/global-components/tentang_kami";
import Press_release from "../../components/global-components/press_release";
import Dokumentasi from "../../components/global-components/dokumentasi";
import Footer from "../../components/global-components/footer";

import { getStorage } from "../../utils";

const Landing_page = () => {
  return (
    <div>
      <Header />
      <Background />
      <Tentang_kami />
      <Press_release />
      <Dokumentasi />
      <Footer />
    </div>
  );
};

export default Landing_page;
