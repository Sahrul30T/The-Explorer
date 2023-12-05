import Img1 from "../../assets/dokumentasi/image 1.svg";
import Img2 from "../../assets/dokumentasi/image 2.svg";
import Img3 from "../../assets/dokumentasi/image 3.svg";
import Img4 from "../../assets/dokumentasi/image 4.svg";
import React from "react";

function dokumentasi() {
  return (
    <div>
      {/* dokumentasi */}
      <div className="pt-11 flex justify-center items-center flex-wrap">
        <div className="flex-col justify-start items-center inline-flex">
          <div className="self-stretch text-center text-blue-900 text-5xl font-extrabold font-['Inter'] leading-[48px]">
            Dokumentasi
          </div>
          <div className="w-6 h-6 relative opacity-0">
            <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
            <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
              24
            </div>
          </div>
          <div className="w-[500px] text-center text-black text-lg font-normal font-['Inter'] leading-normal">
            Berikut beberapa dokumentasi kegiatan yang telah kami laksanakan di
            HMPS-SI
          </div>
          <div className="w-8 h-8 relative opacity-0">
            <div className="w-8 h-8 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
            <div className="left-[8px] top-[11.50px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
              32
            </div>
          </div>
        </div>
      </div>
      {/* gambar */}
      <div className="flex justify-center items-center flex-wrap p-6 ">
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img1}
            className="object-cover w-full max-h-80"
          />
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img2}
            className="object-cover w-full max-h-80"
          />
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img3}
            className="object-cover w-full max-h-80"
          />
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img4}
            className="object-cover w-full max-h-80"
          />
        </div>
      </div>
    </div>
  );
}

export default dokumentasi;
