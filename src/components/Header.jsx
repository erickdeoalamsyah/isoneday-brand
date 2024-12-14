import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { ImSearch } from "react-icons/im";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowHeader(true);
    } else if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } bg-black text-white border-b-2 border-gray-500`}
    >
      <div className="hidden lg:flex px-8 py-4 justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        <nav className="flex space-x-10 text-sm">
          <Link to="/" className="hover:text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">HOME</Link>
          <Link to="/shop" className="hover:text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">SHOP</Link>
          <Link to="/about" className="hover:text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">ABOUT</Link>
          <Link to="/contact" className="hover:text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">CONTACT</Link>
        </nav>

        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-white text-2xl focus:outline-none">
          <ImSearch />
        </button>
      </div>

      <div className="md:hidden container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className=" text-2xl text-white">
          <ImSearch />
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-black text-sm text-gray-400 w-full absolute top-0 left-0 py-5 px-6 mt-16 pb-10 ">
          <nav className="space-y-6">
            <div className="flex items-center border border-gray-300 p-2 py-4 mb-4 rounded-xl hover:border-2 hover:border-white">
              <input type="text" placeholder="Search products..." className="flex-grow text-sm bg-black focus:outline-none text-gray-500" />
              <button className="text-xl text-white">
                <ImSearch />
              </button>
            </div>
            <Link to="/" className="block hover:underline hover:text-white hover:font-bold" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/shop" className="block hover:underline hover:text-white hover:font-bold" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
            <Link to="/about" className="block hover:underline hover:text-white hover:font-bold" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <Link to="/contact" className="block hover:underline hover:text-white hover:font-bold" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </nav>
        </div>
      )}

      {isSearchOpen && (
        <div className="bg-black text-gray-300 w-full shadow-lg px-4 py-6 absolute top-0 left-0 mt-16 border-b border-gray-300 lg:px-10">
          <h2 className="text-sm font-bold text-gray-300 mb-4">WHAT ARE YOU LOOKING FOR?</h2>
          <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
            <input type="text" placeholder="Search products..." className="flex-grow bg-black focus:outline-none text-gray-500" />
            <button>
              <ImSearch />
            </button>
          </div>
          <h3 className="text-sm font-bold text-gray-300 mb-4">QUICKLINKS</h3>
          <nav className="space-y-3">
            <a href="shop" className="block text-gray-500 hover:underline hover:text-white hover:font-semibold">New Arrivals</a>
            <a href="/" className="block text-gray-500 hover:underline hover:text-white hover:font-semibold">Sticker</a>
            <a href="/" className="block text-gray-500 hover:underline hover:text-white hover:font-semibold">Accessories</a>
            <a href="shop" className="block text-gray-500 hover:underline hover:text-white hover:font-semibold">T-shirt</a>
            <a href="shop" className="block text-gray-500 hover:underline hover:text-white hover:font-semibold">Featured Product</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
