import React from "react";
import Baground from "../../assets/baground.svg";
import Email from "../../assets/email.svg";
import IG from "../../assets/IG_H.svg";

function baground() {
  return (
    <div>
      <div className="" />
      <img src={Baground} />
      <div className="h-[189px] left-[167px] top-[396px] absolute flex-col justify-start items-start inline-flex">
        <div className="self-stretch text-white text-[45px] font-extrabold font-['Inter'] leading-[48px]">
          HMPS - SI
          <br />
          STT Terpadu Nurul Fikri
        </div>
        <div className=" h-6 relative opacity-0">
          <div className=" h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
          <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide"></div>
        </div>
        {/*  */}
        <div className="justify-center  gap-5 inline-flex">
          <div className=" px-5 py-3.5 bg-slate-50 rounded-lg flex-col justify-center items-center inline-flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <img src={IG} alt="" />
              <button className="text-neutral-800 text-sm font-semibold font-['Inter'] leading-tight">
                Instagram
              </button>
            </div>
          </div>
          <div className="  px-5 py-3.5 bg-neutral-800 rounded-lg flex-col justify-center items-center inline-flex">
            <div className="pl-[19px] pr-7 justify-center items-center gap-[17px] inline-flex">
              <img src={Email} alt="" />
              <button className="text-white text-sm font-semibold font-['Inter'] leading-tight">
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default baground;
