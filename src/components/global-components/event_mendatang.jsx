import React from "react";
import Img1 from "../../assets/eventMendatang/img.svg";
import Img2 from "../../assets/eventMendatang/img2.svg";
import Img3 from "../../assets/eventMendatang/img3.svg";
import Img4 from "../../assets/eventMendatang/img4.svg";

function divisi() {
  return (
    <div className="pt-11">
      <div className="">
        <div className="w-[530px] h-[95px] flex-col justify-start items-center inline-flex">
          <div className="w-[470px] text-center text-blue-900 text-5xl font-extrabold font-['Inter'] leading-10">
            Event Mendatang
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap p-6 ">
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img1}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Jan 24, 2024
            </p>
            <p className="font-medium text-indigo-500 text-md"></p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              Latihan Dasar Kepemimpinan Mahasiswa 2023
            </p>
          </div>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img2}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Jan 20, 2024
            </p>
            <p className="font-medium text-indigo-500 text-md"></p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              Forum Diskusi: Bersama Kepala Prodi SI STTNF
            </p>
          </div>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img3}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Jan 20, 2024
            </p>
            <p className="font-medium text-indigo-500 text-md"></p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              Forum Diskusi: Tips dan trick bangun personal branding
            </p>
          </div>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <img
            alt="blog photo"
            src={Img4}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
              Jan 20, 2024
            </p>
            <p className="font-medium text-indigo-500 text-md"></p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              SIGMA (DISKUSI GABUNGAN MAHASISWA) 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default divisi;
