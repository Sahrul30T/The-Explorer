import React from "react";
import Background from "../../assets/background.svg";
import Email from "../../assets/email.svg";
import IG from "../../assets/IG_H.svg";

function baground() {
  return (
    <div className="container items-center mx-auto bg-cover border-blue-900">
      
      <div className="relative bg-blue-900">
        <div className="pl-3 pr-10">
          <img src={Background} alt="bg-himpunan"></img>
        </div>

        <div className="h-[189px] left-[167px] top-[396px] absolute flex-col items-start inline-flex">
        <div className="text-white text-[45px] font-bold leading-[48px]">
          HMPS - SI
          <br />
          STT Terpadu Nurul Fikri
        </div>
        <div className=" h-6 relative opacity-0">
          <div className=" h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
          <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold uppercase leading-[18px] tracking-wide"></div>
        </div>
        
        <div className="gap-5 inline-flex">
          <div className=" px-5 py-3.5 bg-slate-50 rounded-lg flex-col justify-center items-center inline-flex">
            <div className="gap-2 inline-flex">
              <img src={IG} alt="" />
              <button className="text-neutral-800 text-sm font-semibold leading-tight">
                Instagram
              </button>
            </div>
          </div>
          <div className="  px-5 py-3.5 bg-neutral-800 rounded-lg flex-col justify-center items-center inline-flex">
            <div className="pl-[19px] pr-7 gap-[17px] inline-flex">
              <img src={Email} alt="" />
              <button className="text-white text-sm font-semibold">
                Email
              </button>
            </div>
          </div>
        </div>
      
      </div>
      </div>

      
      
      
    </div>
    
  );
}

export default baground;
