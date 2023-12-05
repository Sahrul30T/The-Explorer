import React from "react";

function tentang_kami() {
  return (
    <div>
      <div className="flex justify-center items-center pt-11">
        <div className="w-[467px] h-32 flex-col justify-start items-center inline-flex">
          <div className=" text-center text-blue-900 text-5xl font-extrabold font-['Inter']">
            Tentang Kami
          </div>
          <div className="w-6 h-6 relative opacity-0">
            <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
            <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
              24
            </div>
          </div>
          <div className="self-stretch text-center text-black text-lg font-normal font-['Inter'] leading-normal">
            Mari berkenalan dengan kami dan menjadi lebih dekat kedepannya.
          </div>
          <div className="w-8 h-8 relative opacity-0">
            <div className="w-8 h-8 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
            <div className="left-[8px] top-[11.50px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">
              32
            </div>
          </div>
        </div>
      </div>
      {/* card visi */}
      <div className="flex justify-center items-center space-x-11">
        <div className="w-[353px] bg-white rounded-[10px]">
          <div className="p-4 border rounded-md shadow-md mt-4">
            <h1 className="font-bold text-2xl text-center">Visi</h1>
            <h3 className="font-semibold text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi
            </h3>
            <p className="text-gray-700 mt-2">
              Dalam organisasi ini kami memiliki tujuan yang ingin kami capai.
            </p>
            <div className="pt-5">
              <button className="bg-blue-800 text-white p-3 p-x-2 rounded-lg">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>
        {/* card Misi */}
        <div className="w-[353px] bg-white rounded-[10px]">
          <div className="p-4 border rounded-md shadow-md mt-4">
            <h1 className="font-bold text-2xl text-center">Misi</h1>
            <h3 className="font-semibold text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi
            </h3>
            <p className="text-gray-700 mt-2">
              Dalam organisasi ini kami memiliki misi yang ingin kami capai.
            </p>
            <div className="pt-5">
              <button className="bg-blue-800 text-white p-3 p-x-2 rounded-lg">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>
        {/* card Divisi */}
        <div className="w-[353px] bg-white rounded-[10px]">
          <div className="p-4 border rounded-md shadow-md mt-4">
            <h1 className="font-bold text-2xl text-center">Divisi</h1>
            <h3 className="font-semibold text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi
            </h3>
            <p className="text-gray-700 mt-2">
              Dalam organisasi ini terdapat 8 divisi dengan berbagai bidang
              serta program kerjanya.
            </p>
            <div className="pt-5">
              <button className="bg-blue-800 text-white p-3 p-x-2 rounded-lg">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tentang_kami;
