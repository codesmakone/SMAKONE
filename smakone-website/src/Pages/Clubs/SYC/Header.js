import React from 'react';

import Logo from "../../../Image/Clubs/SYC/Logo.png";

import HeadImg from "../../../Image/Clubs/SYC/Head.jpg";


const Header = () => {
  return (
    <div className="mt-10 md:mt-14 lg:mt-20 relative overflow-hidden w-full h-full">
        <div className="w-full h-full ">
            <img
                src={HeadImg}
                alt="SYC"
                className="object-cover h-auto w-full opacity-70"
            />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
            <img
                src={Logo}
                alt="Logo SYC"
                className="w-1/2" 
            />
          </div>
    </div>
  );
};
  

export default Header;
