import React from "react";
import Logo from "../../assets/logo.svg";

const header = () => {
  return (
    <div className="container bg-white items-center px-12 py-2 mx-auto flex">
      <img className="w-[75px]" src={Logo} />
      <div>
          <h1 className="text-2xl font-bold font-inter p-2">HMPSSI</h1>
        </div>
        
        <div className="items-center mx-auto font-inter text-xl font-bold">
          <h2>
            <a href="umum" className="px-8">Beranda</a>
            <a href="umum/about" className="px-6">Tentang Kami</a>
            <a href="umum/event"className="px-8">Acara</a>
          </h2>
        </div>

        <div className="flex">
          <div className="flex-1 bg-blue-900 w-28 h-12 rounded-lg">
            <h2 className="text-white font-semibold text-2xl px-7 py-1.5">
              < a href="user/login">Login</a>
              </h2>
          </div>
        </div>
    </div>
  );
};

export default header;
