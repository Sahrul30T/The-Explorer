import Img from "../../assets/PressR.svg";
import React from "react";

function press_release() {
  return (
    <div>
      <div className="pt-11">
        <div className="self-stretch text-center text-blue-900 text-5xl font-extrabold font-['Inter'] leading-[48px]">
          Press Release
        </div>
        <div className="w-6 h-6 relative opacity-0">
          <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
          <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
            24
          </div>
        </div>
        <div className="self-stretch text-center text-black text-lg font-normal font-['Inter'] leading-normal">
          Berita acara terbaru HMPS-SI
        </div>
        <div className="h-8"></div>
      </div>
      <div className="justify-center items-center gap-9 inline-flex">
        <img className="" src={Img} />
        <div className=" relative flex-col justify-start items-start flex">
          <div className="w-[500px] text-black text-3xl font-medium font-['Poppins'] leading-7">
            FORUM DISKUSI BERSAMA KAPRODI SI
          </div>
          <div className="w-4 h-4 opacity-0 justify-center items-center inline-flex">
            <div className="w-4 h-4 bg-gray-100 border border-zinc-500" />
          </div>
          <div className="w-[500px] text-justify text-neutral-800 text-opacity-80 text-lg font-normal font-['Poppins'] leading-7">
            Pada hari Sabtu, 28 Oktober 2023 telah dilaksanakan forum diskusi
            antara mahasiswa bersama kaprodi SI. Kegiatan ini merupakan program
            kerja dari divisi adkesma HMPS-SI yang bertujuan untuk mengadakan
            forum diskusi yang bertujuan agar mahasiswa dan kaprodi SI dapat
            berdiskusi dan mendiskusikan masalah seputar perkuliahan.
            <br />
            <br />
            Semoga dengan adanya kegiatan ini dapat saling bertukar informasi
            dan menambah wawasan antara mahasiswa dan kaprodi SI
          </div>
          <div className="w-8 h-8 relative opacity-0">
            <div className="w-8 h-8 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
            <div className="left-[8px] top-[11.50px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
              32
            </div>
          </div>
          <div className="px-[18px] py-[11px] bg-blue-700 rounded-md shadow justify-center items-center gap-[3px] inline-flex">
            <div className="text-center text-white text-sm font-semibold font-['Poppins'] leading-tight">
              Lihat selengkapnya
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default press_release;
