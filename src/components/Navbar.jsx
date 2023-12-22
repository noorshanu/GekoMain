import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className=" p-4 absolute w-full top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <span>Logo</span>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
        </div>
        <div>
            <a href="">noor</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="flex flex-col space-y-4 text-white">
              <a href="#" onClick={closeMobileMenu}>Home</a>
              <a href="#" onClick={closeMobileMenu}>About</a>
              <a href="#" onClick={closeMobileMenu}>Services</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
