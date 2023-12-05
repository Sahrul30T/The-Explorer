import React from "react";
import Logo from "../../assets/logo.svg";
import BgLogin from "../../assets/bg_login.svg";

function login() {
  return (
    <div>
      <div className="relative bg-white ">
        <div className=" left-0 top-0 absolute">
          <div className=" left-0 top-0 absolute bg-black bg-opacity-20 shadow" />
          <div className="left-[705px] top-0 absolute bg-white rounded-[3px]" />
        </div>
        <img
          className="w-52 h-[247px] left-[967px] top-[129px] absolute"
          src={Logo}
        />
        <div className="w-[392px] h-[29px] left-[875px] top-[405px] absolute text-right text-black text-4xl font-bold leading-[73px]">
          Masuk Sebagai Admin
        </div>
        <div className="left-[816px] top-[539px] absolute text-justify text-black text-opacity-90 text-xl font-normal leading-7">
          Email/akun pengguna
        </div>
        <form action="#" method="POST">
          <div className="w-[900px] h-[590px] left-[815px] top-[556px] absolute">
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  className="w-[510px] h-[50px] text-black py-4 bg-none border-b border-black outline-none focus:outline-none "
                />
              </div>
            </div>
          </div>

          <div className="left-[816px] top-[670px] absolute text-justify text-black absolute">
            <div>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  className="w-[510px] h-[50px] text-black py-4 bg-none border-b border-black outline-none focus:outline-none "
                />
              </div>
            </div>
          </div>
        </form>

        <div className="left-[816px] top-[649px] absolute text-justify text-black text-opacity-90 text-xl font-normal leading-7">
          Kata sandi
        </div>
        {/* <div className="left-[816px] top-[590px] absolute text-justify text-gray-400 text-[15px] font-normal font-['Inter'] leading-7">Masukkan email/nama akun yang terdaftar</div> */}
        {/* <div className="left-[816px] top-[703px] absolute text-justify text-gray-400 text-[15px] font-normal font-['Inter'] leading-7">Masukkan kata sandi</div> */}
        {/* <div className="w-[509px] h-[0px] left-[816px] top-[620px] absolute border border-slate-200"></div> */}
        {/* <div className="w-[509px] h-[0px] left-[816px] top-[730px] absolute border border-slate-200"></div> */}

        {/* Hidden PW */}
        <img
          className="w-[19px] h-5 left-[1302px] top-[698px] absolute"
          src="https://via.placeholder.com/19x20"
        />

        <a
          href="#"
          className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
          <div className="w-[509px] h-[46px] left-[816px] top-[775px] absolute">
            <div className="w-[509px] h-[46px] left-0 top-0 absolute bg-blue-700 rounded-[5px] border-2 border-slate-200" />
            <div className="w-[58.15px] h-3.5 left-[225.43px] top-[10px] absolute text-center text-white text-lg font-semibold leading-7">
              Masuk
            </div>
          </div>
        </a>

        <img
          className="w-[705px] h-[1021px] left-0 top-[3px] absolute"
          src={BgLogin}
        />
      </div>
    </div>
  );
}

export default login;
