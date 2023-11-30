import React from "react";

function tentang_kami() {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-2xl text-blue-800">Tentang Kami</h1>
        <p className="text-gray-700">
          Mari berkenalan dengan kami dan menjadi lebih dekat kedepannya.
        </p>
      </div>
      {/* card visi */}
      <div className="mt-4 flex flex-row justify-around">
        <div className="w-[353px] bg-white rounded-[10px]">
          <div className="p-4 border rounded-md shadow-md mt-4">
            <h1 className="font-bold text-2xl text-center">Visi</h1>
            <h3 className="font-semibold text-lg mt-2">
              Himpunan Mahasiswa Sistem Informasi
            </h3>
            <p className="text-gray-700 mt-2">
              Dalam organisasi ini kami memiliki tujuan yang ingin kami capai.
            </p>
            <button className="bg-blue-800 text-white p-1 p-x-2 rounded-lg">
              Lihat Selengkapnya
            </button>
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
            <button className="bg-blue-800 text-white p-1 p-x-2 rounded-lg">
              Lihat Selengkapnya
            </button>
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
            <button className="bg-blue-800 text-white p-1 p-x-2 rounded-lg">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tentang_kami;
