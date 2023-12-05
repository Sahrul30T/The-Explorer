import React from "react";
import Header from "../../components/global-components/header";
import Baground from "../../components/global-components/bacgrond2";
import Visimisi from "../../components/global-components/vismis";
// import KetuaW from "../../components/global-components/ketua_wakil";
import Divisi from "../../components/global-components/divisi";
import Footer from "../../components/global-components/footer";

const page_about = () => {
  return (
    <div>
      <Header />
      <Baground />
      <Visimisi />
      {/* <KetuaW /> */}
      <Divisi />
      <Footer />
    </div>
  );
};

export default page_about;
