import { Button } from 'antd'
import React from 'react'

function TemplateSuratBendahara() {
  return (
    <div className="bg-gray-50 w-1/2 container mx-auto">
   
    <div>
      <div className="p-4">
        <div className="bg-white p-4 rounded-md">
          <div>
            <h2 className="mb-4 text-xl font-bold text-gray-700">Template Surat</h2>
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
                      <span>Proposal</span>
                    </div>
                    
                    <div className="px-2">
                      <Button className='bg-blue-900 text-white'>
                        
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                    <div className="px-2 text-xl font-bold">
                      <span>Peminjaman</span>
                    </div>
                    
                    <div className="px-2">
                      <Button className='bg-blue-900 text-white'>
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                    <div className="px-2 text-xl font-bold">
                      <span>Undangan</span>
                    </div>
                    
                    <div className="px-2">
                      <Button className='bg-blue-900 text-white'>
                        Edit
                      </Button>
                    </div>
                  </div>
                    <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                      <div className="px-2 text-xl font-bold">
                        <span>Laporan</span>
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
  )
}

export default TemplateSuratBendahara