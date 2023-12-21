import React from "react";2
import Workshop from "../../assets/workshop.svg";
import Icon from "../../assets/icon_profile.svg";

function media_kampus() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col p-2">
        {/* Header */}
        <div className="w-[1455.398px] h-[62px] flex-col justify-start items-center inline-flex">
          <div className="w-[308px] h-[26px] text-center text-blue-900 text-4xl font-extrabold leading-10">
            Media Kampus
          </div>
          <div className="w-6 h-6 relative opacity-0">
            <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
            <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold uppercase leading-[18px] tracking-wide">
              24
            </div>
          </div>
          <div className="w-[418.70px] text-center text-black text-base font-normal leading-normal">
            Informasi acara/kegiatan di kampus STT NF
          </div>
        </div>
        <br />
        <br />
        {/* container */}
        <div className="inline-flex pt-6">
          <div className="w-[1106px] h-[413px] pr-12 bg-neutral-800 bg-opacity-80 rounded-lg shadow border border-slate-200 justify-between items-center inline-flex">
            <div className="w-[514.61px] h-[413px] bg-gray-100 rounded-tl-lg rounded-bl-lg justify-center items-center flex">
              <img className="w-[515px] h-[413px]" src={Workshop} />
            </div>
            <div className="flex-col justify-center items-start inline-flex">
              <div className="w-[488px] justify-start items-center gap-3.5 inline-flex">
                <div className="text-right text-white text-sm font-normal leading-tight">
                  Rabu 15, Nov 2023
                </div>
              </div>
              <div className="w-6 h-6 relative opacity-0">
                <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
                <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold uppercase leading-[18px] tracking-wide">
                  24
                </div>
              </div>
              <div className="w-[495px] text-white text-3xl font-extrabold uppercase leading-10">
                Jago Public Speaking : <br />
                Seni dalam berkomunikasi
              </div>
              <div className="w-6 h-6 relative opacity-0">
                <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
                <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold uppercase leading-[18px] tracking-wide">
                  24
                </div>
              </div>
              <div className="w-[488px] text-white text-base font-normal leading-normal">
                Pada tema kali ini kita akan mempelajari bagaimana cara untuk
                berkomunikasi dengan baik di depan umum, menunjukkan integritas
                dan meningkatkan citra pribadi. (Full materi & praktek)
              </div>
              <div className="w-8 h-8 relative opacity-0">
                <div className="w-8 h-8 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
                <div className="left-[8px] top-[11.50px] absolute text-center text-zinc-500 text-xs font-semibold uppercase leading-[18px] tracking-wide">
                  32
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-10 h-10 rounded-[25px] justify-center items-center flex">
                  <img src={Icon} className="rounded-full" />
                  <div className="w-10 h-10 px-[12.80px] py-[12.36px]justify-center items-center inline-flex">
                    {/* <div className="w-[14.41px] h-[15.28px] relative"></div> */}
                  </div>
                </div>
                <div className="text-right text-white text-sm font-semibold leading-tight">
                  Ninda Mashita S. IKOM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default media_kampus;
