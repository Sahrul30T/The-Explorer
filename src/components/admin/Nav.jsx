import React from "react";
import Logo from "../../assets/logo.svg";
import Bendahara from "../../assets/nav/bendahara.svg";
import Sekretaris from "../../assets/nav/Sekretaris.svg";
import Home from "../../assets/nav/home.svg";
import Logout from "../../assets/nav/logout.svg";
import Tes from "./Tes1.jsx";

function Navigation() {
  return (
    <div className="">
      <div className="">
        <Tes />
        <div className="flex justify-start p-6 bg-white dark:bg-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="h-screen w-72">
              <div className="flex items-center justify-start mx-6 mt-10">
                <img className="h-24" src={Logo} />
                <div className="text-black dark:text-gray-300 ml-4 text-4xl font-bold">
                  HMPSSI
                </div>
              </div>
              <nav className="mt-10 px-6 ">
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  href="#">
                  <img src={Home} className="h-10" />
                  <div className="mx-4 text-lg font-normal">Home</div>
                  <div className="flex-grow text-right"></div>
                </a>
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg dark:bg-gray-600"
                  href="#">
                  <img src={Sekretaris} className="h-10" />
                  <div className="mx-4 text-lg font-normal">Sekertaris</div>
                  <div className="flex-grow text-right"></div>
                </a>
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  href="#">
                  <img src={Bendahara} className="h-10" />
                  <div className="mx-4 text-lg font-normal">Bendahara</div>
                  <div className="flex-grow text-right">
                    <button
                      type="button"
                      className="w-6 h-6 text-xs  rounded-full text-white bg-red-500">
                      <div className="p-1">7</div>
                    </button>
                  </div>
                </a>
                <a
                  className="mt-48 bg-red-700 flex items-center p-2 transition-colors rounded-lg "
                  href="#">
                  <img src={Logout} className="h-10" />
                  <div className="mx-4 text-white text-lg font-normal">
                    Logout
                  </div>
                  <div className="">
                    <button type="button"></button>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
