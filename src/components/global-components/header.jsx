import React from "react";
import Logo from "../../assets/logo.svg";

const header = () => {
  return (
    <div>
      <div className=" h-[88px] ">
        <div className=" h-[88px] left-0 top-0 absolute bg-white" />
        <img
          className="w-[60px] h-[60px] left-[90px] top-[14px] absolute"
          src={Logo}
        />
        <div className="left-[161px] top-[27px] absolute text-center text-neutral-800 text-2xl font-semibold font-['Inter'] leading-snug">
          HMPSSI
        </div>
        <div className="h-[15px] left-[650px] top-[36px] absolute justify-start items-center gap-6 inline-flex">
          <div className="justify-start items-center ">
            <div className="text-center text-neutral-800 list-none text-xl font-semibold font-['Inter'] leading-snug">
              <li>
                <a href="#">Beranda</a>
              </li>
            </div>
          </div>
          <div className="justify-start items-center ">
            <div className="text-center text-neutral-800 list-none text-xl font-semibold font-['Inter'] leading-snug">
              <li>
                <a href="#">Tentang Kami</a>
              </li>
            </div>
          </div>
          <div className="justify-start items-center ">
            <div className="text-center text-neutral-800 list-none text-xl font-semibold font-['Inter'] leading-snug">
              <li>
                <a href="#">Acara</a>
              </li>
            </div>
          </div>
        </div>
        <div className=" h-[45px] pl-[225px] left-[1108px] top-[23px] absolute justify-end items-center inline-flex">
          <div className="px-[18px] py-[15px] bg-blue-700 rounded-md shadow justify-center items-center gap-[3px] inline-flex">
            <button className="w-[90px] text-center text-slate-100 text-xl font-semibold font-['Inter'] leading-tight">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
