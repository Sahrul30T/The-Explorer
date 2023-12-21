import React, {useState} from "react";
import Logo from "../../assets/logo.svg";
import Bendahara from "../../assets/dasboardAdmin/Bendahara.svg";
import Sekretaris from "../../assets/dasboardAdmin/Sekretaris.svg";
import Home from "../../assets/home.svg";
import Logout from "../../assets/logout icon.svg";
import Ombak from "../../assets/Ombak.svg";
import Tambah from "../../assets/dasboardAdmin/+.png";
import Register from "../../pages/admin/Registrasi.jsx";


function Dashboard() {
   // State untuk mengelola status dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fungsi untuk mengganti status dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="">
        <div className="">
          <div className="flex flex-col mr-4 sm:flex-row sm:justify-around">
          <div>
     
         </div>
            <div className="h-screen w-1/4 border-r-4 ml-4 border-black container mx-auto">
              <div className="flex items-center mx-6 mt-10">
                <img className="h-24" src={Logo} />
                <div className="text-black ml-4 text-4xl font-bold">
                  HMPSSI
                </div>
              </div>
              <nav className="mt-10 px-6 ">
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-400 rounded-lg dark:text-gray-100 rounded-lg dark:bg-gray-600 "
                  href="#">
                  <img src={Home} className="h-10" />
                  <div className="text-lg pl-2.5 font-bold text-gary-600">Home</div>
                  <div className="flex-grow text-right"></div>
                </a>
<div className="">
      {/* Tombol dengan dropdown */}
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-800 rounded-lg"
        >
          <img src={Sekretaris} className="h-10" />
          <div className="mx-4 text-lg font-bold text-gray-900">Sekretaris</div>
          <div className="flex-grow text-right">
            {/* Ikon dropdown (Anda dapat mengganti ini dengan ikon yang sesuai) */}
            <span className="ml-2">&#9662;</span>
          </div>
        </button>
        {/* Konten dropdown yang muncul ketika dropdownOpen bernilai true */}
        {dropdownOpen && (
          <div className="absolute mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl">
            {/* Isi dropdown di sini */}
            <a
              href="SuratSek"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
            >
              Template
            </a>
            <a
              href="SubmitSek"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
            >
             Submit Surat
            </a>
            {/* Tambahkan opsi dropdown sesuai kebutuhan */}
          </div>
        )}
      </div>
    </div>
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center pl-1.5 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  href="Bendahara">
                  <img src={Bendahara} className="h-10" />
                  <div className="mx-4 text-lg font-bold text-gray-900">Bendahara</div>
                  <div className="flex-grow text-right ">
                    <button
                      type="button"
                      className="w-6 h-6 text-xs  ">
                      
                    </button>
                  </div>
                </a>
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center pl-1.5 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  href="Register">
                  <img src={Tambah} className="h-10" />
                  <div className="mx-4 text-lg font-bold text-gray-900">Daftar Anggota</div>
                  <div className="flex-grow text-right ">
                    <button
                      type="button"
                      className="w-6 h-6 text-xs">
                    </button>
                  </div>
                </a>
                <a
                  className="mt-48 bg-red-700 flex items-center p-2 transition-colors rounded-lg "
                  href="#">
                  <img src={Logout} className=" h-10" />
                  <div className="mx-4 text-white text-xl ext-lg font-semibold">
                    Logout
                  </div>
                  <div className="">
                    <button type="button"></button>
                  </div>
                </a>
              </nav>
            </div>
           
            <div className="mx-auto pr-32">
        <div className="">
          <p className="text-center  text-2xl font-bold border-b-4 border-black border-opacity-5 my-12">
            Selamat Datang, Administrator
          </p>
        </div>
        <div className="flex justify-center pt-12">
          <div className="">
            <div className=" overflow-hidden rounded-lg mx-24 shadow-lg cursor-pointer h-90 w-60 md:w-80">
              <img
                src={Sekretaris}
                className="mx-auto pt-7 w-[94px] h-[94px]"
              />
              <div className="w-full p-4 bg-white ">
                <p className="font-medium text-md"></p>
                <p className="mb-2 text-center text-4xl font-bold text-gray-800 ">
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
              <div className="w-full p-4 bg-white ">
                <p className="font-medium text-indigo-500 text-md"></p>
                <p className="mb-2 text-center text-4xl font-bold text-gray-800 ">
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
