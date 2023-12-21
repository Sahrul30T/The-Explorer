import React, {useEffect, useState} from "react";
import Logo from "../../assets/logo.svg";
import BgLogin from "../../assets/bg_login.svg";
import { login, setStorage } from "../../utils";
import { useNavigate } from "react-router-dom";


const Login = () =>  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      const response = await login({username: username, password: password});
      if(response.data.Data.role_id === 1){
        await setStorage('profile', response?.data)
         navigate('/user/Landing_Page')
        }else{
        await setStorage('profile', response?.data)
         navigate('/Admin/Home')
      }
    } catch (error) {
      if(error.response && error.response.status === 400) {
        console.log(error.response.data.message)
      }
    }
  }

  useEffect(() => {
    
  },[])
  return (
    <div className="container items-center mx-auto bg-white">     
        {/* <!-- component --> */}
<div className="bg-white flex justify-center items-center h-screen">
    {/* <!-- Left: Image --> */}
<div className="w-full h-screen hidden lg:block">
  <img src={BgLogin} alt="Placeholder Image" className="object-cover w-full h-full"></img>
</div>
{/* <!-- Masuk & Verifikasi --> */}
<div className="lg:p-20 md:p-52 sm:20 w-full lg:w-2/3">
  
<img src={Logo} alt="logo" className="w-2/3 relative items-center mx-auto pr-28 mb-8" />
  <h1 className="text-2xl container absoulte items-center mx-auto font-semibold mb-4">Masuk Sebagai Admin</h1>
  <form action="#" method="POST">
    {/* <!-- Username Input --> */}
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Username</label>
      <input type="text" id="username" value={username} onInput={text => setUsername(text.target.value)} className="w-full border-b-2 border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"></input>
    </div>
    {/* <!-- Password Input --> */}
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input type="password" id="password" value={password} onChange={text => setPassword(text.target.value)} className="w-full border-b-2 border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"></input>
    </div>
    {/* <!-- Login Button --> */}
    
    
    {/* <button type="submit" className="bg-blue-900 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 w-full">Masuk</button> */}
    <button type="button" onClick={handleLogin} className="px-60 bg-blue-900 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 w-full">Masuk</button>

    

    
  </form>

</div>

</div>
      </div>
  );
}

export default Login;
