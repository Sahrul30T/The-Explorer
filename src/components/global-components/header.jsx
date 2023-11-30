import React from "react";
import Logo from "../../assets/logo.svg";

const header = () => {
  return (
    <div className="container">
      <div className="~">
        <img className="w-[60px] h-[60px]" src={Logo} />
        <div className="text-center text-neutral-800 text-2xl font-semibold font-['Inter'] leading-snug">
          HMPSSI
        </div>
        {/* navigation */}
        <div className="w-[319px] h-[15px] justify-start items-center gap-6 inline-flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-center text-neutral-800 text-xl font-semibold font-['Inter'] leading-snug">
              Beranda
            </div>
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-center text-neutral-800 text-xl font-semibold font-['Inter'] leading-snug">
              Tentang Kami
            </div>
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <div className="text-center text-neutral-800 text-xl font-semibold font-['Inter'] leading-snug">
              Acara
            </div>
          </div>
        </div>
        {/* button */}
        <div className="w-[126px] h-[45px] px-[18px] py-[15px] bg-blue-700 rounded-md shadow justify-center items-center gap-[3px] inline-flex">
          <button className="w-[90px] text-center text-slate-100 text-xl font-semibold font-['Inter'] leading-tight">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
