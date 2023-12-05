import React from "react";
import Adkesma from "../../assets/divisi/Adkesma.svg";
import Bendahara from "../../assets/divisi/bendahara.svg";
import Humas from "../../assets/divisi/humas.svg";
import Humas2 from "../../assets/divisi/humas2.svg";
import Media from "../../assets/divisi/media.svg";
import Psdm from "../../assets/divisi/psdm.svg";
import Sekretaris from "../../assets/divisi/sekretaris.svg";
import MinatBakat from "../../assets/divisi/minat_bakat.svg";

function divisi() {
  return (
    <div className="pt-5">
      <div className="flex justify-center items-center">
        <div className="w-[530px] h-[95px] flex-col justify-start items-center inline-flex">
          <div className="w-[470px] text-center text-blue-900 text-5xl font-extrabold font-['Inter'] leading-10">
            Divisi HMPS- SI
          </div>
          <div className="w-6 h-6 relative opacity-0">
            <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
            <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
              24
            </div>
          </div>
          <div className="w-[498px] text-center text-black text-base font-normal font-['Inter'] leading-normal">
            Berikut 8 divisi yang terdapat dalam organisasi himpunan mahasiswa
            sistem informasi, klik untuk info selengkapnya.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap p-6 ">
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <a href={Sekretaris} className="block w-full h-full">
            <img
              alt="blog photo"
              src={Sekretaris}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                SEKRETARIS
              </p>
            </div>
          </a>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <a href={Bendahara} className="block w-full h-full">
            <img
              alt="blog photo"
              src={Bendahara}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Bendahara
              </p>
            </div>
          </a>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <a href={Psdm} className="block w-full h-full">
            <img
              alt="blog photo"
              src={Psdm}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                PSDM
              </p>
            </div>
          </a>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <a href={Humas} className="block w-full h-full">
            <img
              alt="blog photo"
              src={Humas}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                HUMAS
              </p>
            </div>
          </a>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700 m-6">
          <a href={Adkesma} className="block w-full h-full">
            <img
              alt="blog photo"
              src={Adkesma}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                ADKESMA
              </p>
            </div>
          </a>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <a href={MinatBakat} className="block w-full h-full">
            <img
              alt="blog photo"
              src={MinatBakat}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Minat dan Bakat
              </p>
            </div>
          </a>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <a href={Media} className="block w-full h-full">
            <img
              alt="blog photo"
              src={Media}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                MEDIA
              </p>
            </div>
          </a>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border border-b-slate-700">
          <a href={Humas2} className="block w-full h-full">
            <img
              alt="blog photo"
              src={Humas2}
              className="object-cover w-full max-h-40"
            />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
              <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                Divisi
              </p>
              <p className="font-medium text-indigo-500 text-md"></p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                HUMAS
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default divisi;
