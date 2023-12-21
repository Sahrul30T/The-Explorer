import React from 'react'
import Ihsan from '../../assets/Muhammad Ihsan.svg'
import Wildan from '../../assets/wakil_K.svg'

function ketuawakil() {
  return (
    <div className='mx-auto'>
        <div className='container bg-stone-200 p-8 rounded-lg mx-auto'>
        <div className='mx-auto'>
            <div className='text-center mx-auto'>
                    <div className='bg-white w-full p-10 shadow-lg rounded-lg'>
                    <div className="text-center text-blue-900 text-5xl mb-10 font-extrabold leading-[48px]"> Ketua dan Wakil Ketua </div>
                    <div className="self-stretch text-center text-black text-lg font-semibold leading-normal">Mari berkenalan dengan Ketua dan Wakil ketua kami!</div>
                <div className="w-6 h-6 relative opacity-0">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-zinc-500" />
                    <div className="left-[4px] top-[7px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter'] uppercase leading-[18px] tracking-wide">24</div>
            
                    
        </div>
        </div>
        </div>
        </div>

        
       
        <div className=" mx-auto grid max-w-screen-xl px-4 py-8 lg:gap-8 lg:py-16 lg:grid-cols-12">
            
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg my-22">
                        <img src={Ihsan} alt="mockup" className="rounded-lg"></img>
                    </div>
                
                <div className="mr-auto place-self-center lg:col-span-7 container p-20 rounded-lg bg-stone-800 px-8">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Muhammad Ihsan</h1>
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Nur Rohmat</h1>
                        <h1 className="max-w-2xl px-2 font-semibold font-light text-gray-500 md:text-lg lg:text-xl text-gray-200">Ketua HMPS-SI STT Terpadu Nurul Fikri</h1>
                        <h1 className="max-w-2xl px-2 font-semibold font-light text-gray-500 md:text-lg lg:text-xl text-gray-200">Sistem Informasi - 2021</h1>
                            
                    </div>          
                
                <div className="mr-auto place-self-center lg:col-span-7 container p-20 rounded-lg bg-stone-800 px-8">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Wildani Fadhillah</h1>
                    <h1 className="max-w-2xl px-2 font-semibold font-light text-gray-500 md:text-lg lg:text-xl text-gray-200">Wakil Ketua HMPS-SI STT Terpadu Nurul Fikri</h1>
                    <h1 className="max-w-2xl px-2 font-semibold font-light text-gray-500 md:text-lg lg:text-xl text-gray-200">Sistem Informasi - 2021</h1>
                        
                </div>
            
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg my-22">
                    <img src={Wildan} alt="mockup" className="rounded-lg"></img>
                </div>                
        
        </div>
            </div>  
        
        

    </div>
  )
}

export default ketuawakil