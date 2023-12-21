import React from "react";
import Sekretaris from "../../assets/divisi/Sekretaris.svg";
import Bendahara from "../../assets/divisi/bendahara.svg";
import Ombak from "../../assets/Ombak.svg";

const Tes = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <p className="text-center  text-2xl font-bold border-b-4 border-black border-opacity-5 my-12">
            Selamat Datang, Administrator
          </p>
        </div>
        <div className="flex justify-center pt-12">
          <div className="">
            <div className=" overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <img
                src={Sekretaris}
                className="mx-auto pt-7 w-[94px] h-[94px]"
              />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="font-medium text-indigo-500 text-md"></p>
                <p className="mb-2 text-center text-4xl font-medium text-gray-800 dark:text-white">
                  Sekretaris
                </p>
              </div>
              <img
                src={Ombak}
                className="pt-7 font-light text-gray-400 dark:text-gray-300 text-md"></img>
            </div>
          </div>
          <div className="">
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <img src={Bendahara} className="mx-auto pt-7 w-[94px] h-[94px]" />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="font-medium text-indigo-500 text-md"></p>
                <p className="mb-2 text-center text-4xl font-medium text-gray-800 dark:text-white">
                  Bendahara
                </p>
              </div>
              <img
                src={Ombak}
                className="pt-7 font-light text-gray-400 dark:text-gray-300 text-md"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tes;