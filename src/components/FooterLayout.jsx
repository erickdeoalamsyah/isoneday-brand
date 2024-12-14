import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logoFooter from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="text-white text-sm py-6 border-t border-gray-700">
      <div className="px-6 lg:px-16">
        <div className="grid grid-cols-3 justify-between space-x-5 lg:grid-cols-3 lg:gap-10">
          <div>
            <img src={logoFooter} alt="Logo" className="h-10 mb-4" />
            <p className="text-gray-400">
              Bandung City, East Java, Indonesia
            </p>
            <p className="text-gray-400 mt-2">@isoneday.studio</p>
            <p className="text-gray-400 mt-2">+62 812 345 6789</p>
            <div className="flex space-x-4 mt-4">
              <FaTwitter className="text-white hover:text-gray-400 cursor-pointer" />
              <FaInstagram className="text-white hover:text-gray-400 cursor-pointer" />
              <FaYoutube className="text-white hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-sm mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#collaboration" className="hover:text-white hover:underline">
                  Collaboration
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4">EVENT</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#event1" className="hover:text-white hover:underline">
                  Evartra 2024
                </a>
              </li>
              <li>
                <a href="#event2" className="hover:text-white hover:underline">
                  Tea House 2024
                </a>
              </li>
              <li>
                <a href="#event3" className="hover:text-white hover:underline">
                  Pasar Kreatif VOC 2024
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="px-16 border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 IsOneDay.Studio</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
