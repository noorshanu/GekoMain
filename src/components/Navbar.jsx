import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return ( 
    <nav className=" p-4 absolute w-full top-0 z-[1000]  sm:border-none bg-[#000000a5]">
      <img src="images/nav-black.png" alt="" className=' absolute -top-[0%] w-[99%] overflow-hidden overflow-x-hidden hidden sm:hidden opacity-70' />
      <div className="container-wrapper mx-auto flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="text-white">
            <img src="images/logo.png" alt="" />
        
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white text-lg font-normal">WHITEPAPER</a>
          <a href="#roadmap" className="text-white text-lg">ROADMAP</a>
          <a href="#token" className="text-white text-lg">TOKENOMIC</a>
          <a href="#how" className="text-white text-lg">HOW TO USE</a>
        </div>
        <div>
            <a href="" className=' text-white hidden sm:block'><img src="images/join.png" alt="" /></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={isMobileMenuOpen ?  closeMobileMenu : toggleMobileMenu }
          >
            {isMobileMenuOpen ? <FaTimes/>:  <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[6%] right-0 w-2/3 h-full bg-[#1d093b] p-6 ">
            <div className="flex flex-col space-y-4 text-white mt-6">
              <a href="#" onClick={closeMobileMenu}>WHITEPAPER</a>
              <a href="#roadmap" onClick={closeMobileMenu}>ROADMAP</a>
              <a href="#token" onClick={closeMobileMenu}>TOKENOMIC</a>
              <a href="#how" onClick={closeMobileMenu}>HOW TO Use</a>
              <a href="https://t.me/geekocoin" className=' text-white '><img src="images/join.png" alt="" /></a>
            
   
       
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
