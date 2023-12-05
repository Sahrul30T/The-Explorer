import React from "react";
import Logo from "../../assets/logo.svg";
import Logo2 from "../../assets/Footer/logo_kreasi 2.svg";
import YT from "../../assets/Footer/YouTube.svg";
import TT from "../../assets/Footer/TikTok.svg";
import IG from "../../assets/Footer/Instagram.svg";

const Footer = () => {
  return (
    <div>
      <div className="h-[213px] relative bg-neutral-800 bg-opacity-80 shadow">
        <div className="left-[1149px] top-[163px] absolute text-white text-base font-normal font-['Inter'] leading-normal">
          © 2023 The Explore.
        </div>
        <div className="w-[136px] h-[17px] left-[1149px] top-[65px] absolute text-white text-[25px] font-medium font-['Poppins'] leading-normal">
          Ikuti kami :
          <div className="flex justify-center items-center">
            <img src={YT} alt="" className="pr-2" />
            <img src={IG} alt="" />
            <img src={TT} alt="" />
          </div>
        </div>
        <img
          src={Logo}
          className="w-[86px] h-[130px] left-[100px] top-[50px] absolute mix-blend-color-dodge rounded-[5px]"
        />
        <img
          className="w-[86px] h-[145px] left-[183px] top-[50px] absolute mix-blend-color-dodge rounded-[5px]"
          src={Logo2}
        />
        <div className="left-[294px] top-[76px] absolute text-justify">
          <div className="text-white text-2xl font-semibold font-['Inter'] leading-snug">
            Alamat: <br />
          </div>
          <div className="text-white text-lg font-semibold font-['Inter'] leading-snug">
            Kampus B STT Terpadu Nurul Fikri
            <br />
            Jl. Srengseng sawah No.20 Depok
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
