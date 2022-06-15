import React from 'react'

import LogoPenabur from "../../Image/Penabur_logo.png"
import LogoOsis from "../../Image/OSIS_Logo.png"


const Footer = () => {
  return (
  <div>
    <div className="py-32 px-24">
      <div className="bg-cover bg-footer-image rounded-xl py-28">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold leading-normal text-white text-center mb-10 break-all">
              Cari Tahu Informasi Terkini Mengenai SMAK 1
            </p>
            <div className="rounded-full bg-blue-500 py-4 px-16  flex justify-center">
              <a href="https://www.instagram.com/smukiee/" target="blank" className="text-xl text-white font-bold">
                @smukiee
              </a>
            </div>
          </div>
      </div>
    </div>
    
    <div>

    </div>
  </div>
    
  )
}

export default Footer