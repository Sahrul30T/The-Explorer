import React from "react";
import Header from "../../components/user/Header-User";
import Background from "../../components/global-components/Background-Main";
import Visimisi from "../../components/global-components/vismis";
import KetuaW from "../../components/global-components/ketua_wakil";
import Divisi from "../../components/global-components/divisi";
import Footer from "../../components/global-components/footer";

const page_about = () => {
  return (
    <div>
      <Header />
      <Background />
      <Visimisi />
      <KetuaW />
      <Divisi />
      <Footer />
    </div>
  );
};

export default page_about;
