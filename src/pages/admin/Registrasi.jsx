import React, { useEffect, useState } from 'react'
import { getStorage } from '../../utils'

const HomeAdmin = () => {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        const AmbilData = async() => {
            const response = await getStorage('profile');
            setProfile(response?.Data);
        }
        AmbilData()
    },[])
  return (
    <div className="container items-center bg-gray-300 rounded-lg mt-20 mx-auto w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">PENDAFTARAN</h1>
                    <p>MASUKAN DATA DIRI!!!</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1.5">Nama Lengkap</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"></input>
                            </div>
                        </div>
                    
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1.5">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label htmlFor="" className="text-xs font-semibold px-1.5">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button className="block w-full max-w-xs mx-auto bg-blue-900 hover:bg-indigo-900 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">DAFTAR</button>
                        </div>
                    </div>
                </div>
     </div>
  )
}

export default HomeAdmin