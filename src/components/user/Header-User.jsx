import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { getStorage, logout, removeStorage } from "../../utils";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const AmbilData = async() => {
      const response = await getStorage('profile')
      setProfile(response?.token);
    }
    AmbilData()
  },[])

  const handleLogout = async() => {
    try {
      const response = await logout();
      if(response){
        await removeStorage('profile');
        navigate('/User/login');
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div className="container bg-white items-center px-12 py-2 mx-auto flex">
      <img className="w-[75px]" src={Logo} />
      <div>
          <h1 className="text-2xl font-bold font-inter p-2">HMPSSI</h1>
        </div>
        
        <div className="mx-auto font-inter text-xl font-bold">
          <h2>
            <a href="#" className="px-8">Beranda</a>
            <a href="/user/about" className="px-6">Tentang Kami</a>
            <a href="/user/event"className="px-8">Acara</a>
            <a href="/user/layanan"className="px-8">Layanan</a>
            
          </h2>
          
        </div>

    {
      profile ? (
        <div className="flex">
          <div className="flex-1 bg-blue-900 w-28 h-12 rounded-lg">
            <h2 className="text-white font-bold text-2xl pl-4 pt-1.5">
              <button type="button" onClick={handleLogout}>Logout</button>
              </h2>
          </div>
        </div>
      ):(
        <div className="flex">
          <div className="flex-1 bg-blue-900 w-28 h-12 rounded-lg">
            <h2 className="text-white font-semibold text-2xl px-7 py-1.5">
              < a href="#">Login</a>
              </h2>
          </div>
        </div>
      )
    }
    </div>
  );
};

export default Header;
