import { Button } from 'antd'
import React from 'react'
import Header from '../user/Header-User'
import Footer from "../global-components/footer";

function InfoKas() {
  return (
    <div>
        <Header/>
        <div className="bg-white w-3/4container mx-auto     ">

           
<div className="">
  <div className="bg-white p-4 rounded-md">
    <div>
      <h1 className="mb-4 text-4xl font-bold text-gray-700 border-b-4 rounded  text-center border-black pb-10" >Pengajuan Dana</h1>
      <div>
        <div className='0 border-blue-900'>
      <a className='border-b-cyan-90' href="PengajuanDana">Pengajuan Dana</a>
        </div>
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
                  Download
                </Button>
              </div>
            </div>
            <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
              <div className="px-2 text-xl font-bold">
                <span>Sponsorship</span>
              </div>
             
              <div className="px-2">
                <Button className='bg-blue-900 text-white'>
                  Download
                </Button>
              </div>
            </div>
            <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
              <div className="px-2 text-xl font-bold">
                <span>Donatur</span>
              </div>
             
              <div className="px-2">
                <Button className='bg-blue-900 text-white'>
                  Download
                </Button>
              </div>
            </div>
              <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                <div className="px-2 text-xl font-bold">
                  <span>Yayasan</span>
                </div>
               
                <div className="px-2">
                  <Button className='bg-blue-900 text-white'>
                    Download
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
   <div className='mt-16'>

   <Footer/>
   </div>
    </div>
  )
}

export default InfoKas