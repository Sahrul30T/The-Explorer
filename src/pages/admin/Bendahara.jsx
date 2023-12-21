import React from "react";
import Logo from "../../assets/logo.svg";
import Bendahara from "../../assets/dasboardAdmin/Bendahara.svg";
import Sekretaris from "../../assets/dasboardAdmin/Sekretaris.svg";
import Home from "../../assets/home.svg";
import Logout from "../../assets/logout icon.svg";
import Ombak from "../../assets/Ombak.svg";
import Tambah from "../../assets/dasboardAdmin/+.png";
import Register from "../../pages/admin/Registrasi.jsx";
import { Button } from "antd";


function Dashboard() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="flex flex-col sm:flex-row sm:justify-around">
          <div>
     
         </div>
            <div className="h-screen w-1/4 ml-4 border-r-4 border-black container mx-auto">
              <div className="flex items-center mx-6 mt-10">
                <img className="h-24" src={Logo} />
                <div className="text-black ml-4 text-4xl font-bold">
                  HMPSSI
                </div>
              </div>
              <nav className="mt-10 px-6 ">
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 rounded-lg text-gray-800 "
                  href="#">
                  <img src={Home} className="h-10" />
                  <div className="text-lg font-bold text-gary-600 pl-3">Home</div>
                  <div className="flex-grow text-right"></div>
                </a>
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800  "
                  href="SuratSek">
                  <img src={Sekretaris} className="h-10" />
                  <div className="mx-4 text-lg font-bold text-gray-900">Sekretaris</div>
                  <div className="flex-grow text-right"></div>
                </a>
                <a
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center pl-1.5 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 dark:text-gray-400 rounded-lg dark:text-gray-100 rounded-lg dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-lg "
                  href="#">
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




            <div className="bg-white w-3/4 ml-2 container mx-auto ">

           
       <div className="pt-10  ">
         <div className="bg-white p-4 rounded-md">
           <div>
             <h2 className="mb-4 text-xl font-bold text-gray-700 border-b-4 rounded border-black" >Template Surat</h2>
             <div>
               <div>
                 <div className="flex justify-between bg-red-500 rounded-md py-2 px-4 text-white font-bold text-md">
                   <div>
                     <span>Template</span>
                   </div>
                    
                   <div>
                     <span>Aksi</span>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                     <div className="px-2 text-xl font-bold">
                       <span>RAB</span>
                     </div>
                    
                     <div className="px-2">
                       <Button className='bg-blue-900 text-white'>
                         Edit
                       </Button>
                     </div>
                   </div>
                   <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                     <div className="px-2 text-xl font-bold">
                       <span>Sponsorship</span>
                     </div>
                    
                     <div className="px-2">
                       <Button className='bg-blue-900 text-white'>
                         Edit
                       </Button>
                     </div>
                   </div>
                   <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                     <div className="px-2 text-xl font-bold">
                       <span>Donatur</span>
                     </div>
                    
                     <div className="px-2">
                       <Button className='bg-blue-900 text-white'>
                         Edit
                       </Button>
                     </div>
                   </div>
                     <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                       <div className="px-2 text-xl font-bold">
                         <span>Yayasan</span>
                       </div>
                      
                       <div className="px-2">
                         <Button className='bg-blue-900 text-white'>
                           Edit
                         </Button>
                       </div>
                     </div>
                  
                 </div>
               </div>
             </div>
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
