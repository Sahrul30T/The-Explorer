import React from "react";
import Ihsan from "../../assets/Muhammad Ihsan.svg";
import Pensil from "../../assets/pencil icon.svg";
import Edit from "../../assets/edit icon.svg";
import Hidden from "../../assets/hiden.svg";
import Lock from "../../assets/lock icon.svg";
import Logout from "../../assets/logout icon.svg";

function profile() {
  return (
    <div>
      {/* <div className="w-[1440px] h-[1024px] relative bg-white"> */}
      <div className="w-[1268px] h-[674px] left-[86px] top-[193px] absolute bg-white rounded-[15px] shadow border border-black border-opacity-30" />
      {/* <div className="w-[652px] h-[65px] left-[616px] top-[266px] absolute rounded-lg shadow border border-blue-900 border-opacity-20" /> */}
      {/* <div className="w-[652px] h-[65px] left-[616px] top-[373px] absolute rounded-lg shadow border border-blue-900 border-opacity-20" /> */}
      {/* <div className="w-[652px] h-[70px] left-[616px] top-[585px] absolute rounded-lg shadow border border-blue-900 border-opacity-20" /> */}
      {/* <div className="w-[309px] h-[65px] left-[616px] top-[480px] absolute rounded-lg shadow border border-blue-900 border-opacity-20" /> */}
      {/* <div className="w-[309px] h-[65px] left-[959px] top-[476px] absolute rounded-lg shadow border border-blue-900 border-opacity-20" /> */}

      {/* Kata Sandi */}
      <div className="left-[615px] top-[238px] absolute text-center text-black text-opacity-80 text-xl font-normal font-['Poppins']">
        Nama Lengkap
      </div>

      <form action="#" method="POST">
        <div className="w-[652px] h-[65px] left-[616px] top-[266px] absolute rounded-lg">
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="given-name"
                className="w-[652px] h-[65px] left-[616px] top-[266px] block w-full rounded-md 
                        border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="w-[652px] h-[65px] left-[616px] top-[373px] absolute rounded-lg">
          <div>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="w-[652px] h-[65px] left-[616px] top-[266px] block w-full rounded-md 
                        border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="w-[309px] h-[65px] left-[616px] top-[480px] absolute rounded-lg">
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="given-name"
                className="w-[652px] h-[65px] left-[616px] top-[266px] block w-full rounded-md 
                        border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="w-[309px] h-[65px] left-[959px] top-[480px] absolute rounded-lg ">
          <div>
            <div className="mt-2.5">
              <img
                className="w-[16.47px] h-5 left-[1231px] top-[504px] absolute"
                src={Hidden}
              />
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                required
                className="w-[652px] h-[65px] left-[616px] top-[266px] block w-full rounded-md 
                        border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="w-[652px] h-[70px] left-[616px] top-[585px] absolute rounded-lg">
          <div>
            <div className="mt-2.5">
              <input
                type="address"
                name="address"
                id="address"
                autoComplete="address"
                className="w-[652px] h-[65px] left-[616px] top-[266px] block w-full rounded-md 
                        border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </form>

      {/* <div className="left-[645px] top-[290px] absolute text-center text-black text-opacity-80 text-2xl font-normal font-['Poppins']">Muhammad Ihsan Nur Rohmat</div> */}
      {/* <div className="left-[645px] top-[397px] absolute text-center text-black text-opacity-80 text-2xl font-normal font-['Poppins']">ihsan12@gmail.com</div> */}
      {/* <div className="left-[645px] top-[504px] absolute text-black text-opacity-80 text-2xl font-normal font-['Poppins']">Ihsannur01</div> */}
      {/* <div className="left-[645px] top-[612px] absolute text-center text-black text-opacity-80 text-2xl font-normal font-['Poppins']">Depok, Indonesia.</div> */}
      {/* <div className="left-[978px] top-[511px] absolute text-center text-black text-opacity-80 text-2xl font-normal font-['Poppins']">********</div> */}

      <div className="left-[615px] top-[349px] absolute text-center text-black text-opacity-80 text-xl font-normal font-['Poppins']">
        Email
      </div>
      <div className="left-[615px] top-[563px] absolute text-center text-black text-opacity-80 text-xl font-normal font-['Poppins']">
        Alamat
      </div>
      <div className="left-[616px] top-[459px] absolute text-center text-black text-opacity-80 text-xl font-normal font-['Poppins']">
        Nama akun
      </div>
      <div className="left-[959px] top-[459px] absolute text-center text-black text-opacity-80 text-xl font-normal font-['Poppins']">
        Kata sandi
      </div>
      <div className="left-[220px] top-[225px] absolute text-center text-blue-900 text-[45px] font-extrabold">
        Data Profil
      </div>
      <div className="w-[353px] h-[336px] left-[173px] top-[314px] absolute">
        <div className="w-[353px] h-[336px] left-0 top-0 absolute">
          <img
            className="w-[350px] h-[336px] left-[-15px] top-[-15px] absolute bg-zinc-300 rounded-full "
            src={Ihsan}
          />
        </div>
      </div>
      <div />

      <button className="w-[65px] h-[67px] left-[406px] top-[570px] absolute bg-blue-700 rounded-full shadow">
        {" "}
      </button>
      <img
        className="w-[60px] h-[30px] left-[411px] top-[590px] absolute rounded-full"
        src={Pensil}
      />

      <div className="w-[133px] h-[55px] left-[1135px] top-[711px] absolute">
        <button className="w-[133px] h-[55px] left-0 top-0 absolute bg-sky-700 rounded-[10px]" />
        <div className="w-12 h-[15px] left-[42px] top-[12px] absolute text-center text-white text-xl font-bold tracking-tight">
          Edit
        </div>
      </div>

      <div className="w-[132px] h-[55px] left-[86px] top-[918px] absolute">
        <button className="w-[132px] h-[55px] left-0 top-0 absolute bg-red-600 rounded-[10px]" />
        <div className="left-[35px] top-[12px] absolute text-center text-white text-xl font-bold tracking-tight">
          Logout
        </div>
      </div>

      <div className="w-56 h-[55px] left-[885px] top-[711px] absolute">
        <button className="w-56 h-[55px] left-0 top-0 absolute bg-red-400 rounded-[10px]" />
        <div className="w-[171px] h-[15px] left-[30px] top-[12px] absolute text-center text-white text-xl font-bold  tracking-tight">
          Ganti Password
        </div>
      </div>
    </div>
    // </div>
  );
}

export default profile;
