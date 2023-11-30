import React from "react";

function ketua_wakil() {
  return (
    <div>
      {/* headnya */}
      <div className="w-[526px] h-[104px] flex-col justify-start items-center inline-flex">
        <div className="text-center text-blue-900 text-5xl font-extrabold font-['Inter'] leading-[48px]">
          Ketua dan Wakil Ketua
        </div>
        <div className="w-6 h-6 relative opacity-0">
          <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
          <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
            24
          </div>
        </div>
        <div className="self-stretch text-center text-black text-lg font-normal font-['Inter'] leading-normal">
          Mari berkenalan dengan Ketua dan Wakil ketua kami!
        </div>
        <div className="w-8 h-8 relative opacity-0">
          <div className="w-8 h-8 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
          <div className="left-[8px] top-[11.50px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
            32
          </div>
        </div>
      </div>
      {/* ketua */}
      <div className="w-[1440px] h-[326px] pl-[172px] pr-48 rounded-lg justify-start items-center inline-flex">
        <div className="w-[1076px] h-[326px] relative bg-neutral-800 bg-opacity-80 rounded-lg flex-col justify-start items-start flex">
          <div className="w-[530px] h-[326px] bg-white justify-center items-center inline-flex">
            <img
              className="w-[530px] h-[326px]"
              src="https://via.placeholder.com/530x326"
            />
          </div>
          <div className="py-[100px] flex-col justify-center items-start inline-flex">
            <div className="w-[432px] text-white text-3xl font-extrabold font-['Inter'] leading-9">
              Muhammad Ihsan
              <br />
              Nur Rohmat
            </div>
            <div className="w-6 h-6 relative opacity-0">
              <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
              <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] leading-[18px]">
                24
              </div>
            </div>
            <div className="self-stretch text-white text-base font-normal font-['Inter'] leading-normal">
              Ketua HMPS-SI STT Terpadu Nurul Fikri
            </div>
            <div className="w-8 h-8 relative opacity-0">
              <div className="w-8 h-8 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
              <div className="left-[8px] top-[11.50px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] leading-[18px]">
                32
              </div>
            </div>
          </div>
          <div className="w-[509px] h-3 text-white text-base font-normal font-['Inter'] leading-normal">
            Sistem Informasi - 2021
          </div>
        </div>
      </div>
      {/* wakil */}
      <div className="w-[1440px] h-[290px] pl-[167px] pr-48 rounded-lg justify-start items-center inline-flex">
        <div className="w-[1081px] h-[290px] relative bg-neutral-800 bg-opacity-80 rounded-lg flex-col justify-start items-start flex">
          <div className="h-[290px] py-[100px] flex-col justify-center items-start inline-flex">
            <div className="w-[432px] text-white text-3xl font-extrabold font-['Inter'] leading-9">
              Wildani Fadhillah
            </div>
            <div className="w-6 h-6 relative opacity-0">
              <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
              <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] leading-[18px]">
                24
              </div>
            </div>
            <div className="self-stretch text-white text-base font-normal font-['Inter'] leading-normal">
              Wakil Ketua HMPS-SI STT Terpadu Nurul Fikri
            </div>
            <div className="w-8 h-8 relative opacity-0">
              <div className="w-8 h-8 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
              <div className="left-[8px] top-[11.50px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] leading-[18px]">
                32
              </div>
            </div>
          </div>
          <div className="w-[530px] h-[290px] bg-white shadow justify-center items-center inline-flex">
            <img
              className="w-[530px] h-[290px]"
              src="https://via.placeholder.com/530x290"
            />
          </div>
          <div className="w-[509px] h-3 text-white text-base font-normal font-['Inter'] leading-normal">
            Sistem Informasi - 2021
          </div>
        </div>
      </div>
    </div>
  );
}

export default ketua_wakil;
