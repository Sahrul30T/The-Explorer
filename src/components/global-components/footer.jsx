import React from "react";
import Logo from "../../assets/logo.svg";
import Logo2 from "../../assets/Footer/logo_kreasi 2.svg";
import YT from "../../assets/Footer/YouTube.svg";
import TT from "../../assets/Footer/TikTok.svg";
import IG from "../../assets/Footer/Instagram.svg";

const Footer = () => {
  return (
    <div className="container h-[213px] items-center mx-auto flex relative bg-neutral-800 bg-opacity-80 shadow">
      <div>
        <img
          src={Logo}
          className="w-[86px] h-[130px] left-[100px] top-[50px] absolute mix-blend-color-dodge rounded-[5px]"
        />
        <img
          className="w-[86px] h-[145px] left-[183px] top-[50px] absolute mix-blend-color-dodge rounded-[5px]"
          src={Logo2}
        />  
      </div>
      
      <div className="left-[294px] top-[76px] absolute text-justify">
        <div className="text-white pl-0.5 text-2xl font-semibold leading-snug">
          Alamat: <br />
        </div>
        
        <div className="text-white text-lg font-semibold leading-snug">
            Kampus B STT Terpadu Nurul Fikri
            <br />
            Jl. Srengseng sawah No.20 Depok
        </div>
      </div>
      
      <div className="px-16">
        <div className="">
          <div className="w-[136px] h-[17px] left-[1250px] top-[65px] absolute text-white text-[25px] font-medium leading-normal">
            Ikuti Kami :
            <div className="flex justify-center pl-4">
              <img src={YT} alt="" className="pr-2 w-14" />
              <img src={IG} alt="" className="w-14"/>
              <img src={TT} alt="" className="w-14"/>
            </div>
          </div>
        </div>

        <div className="left-[1250px] top-[163px] absolute text-white text-base font-normal text-sm">
            © 2023 The Explorer
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
