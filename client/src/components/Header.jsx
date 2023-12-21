import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="bg-purple-600 p-4 text-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-2xl italic">
            InfoConnect
          </Link>
        </div>
        <div className="hidden md:flex md:flex-grow md:items-center md:justify-end text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/process"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Process
          </NavLink>
          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Documents
          </NavLink>
          <NavLink
            to="/fees"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Fees
          </NavLink>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] outline-none px-4 text-purple-600 rounded-2xl py-1 ml-2 focus:ring-purple-700 focus:ring-4"
            />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Insert your menu icon here */}
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-3`}>
        {/* Mobile Menu */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/process"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Process
        </NavLink>
        <NavLink
          to="/documents"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Documents
        </NavLink>
        <NavLink
          to="/fees"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Fees
        </NavLink>
        <div className="block px-2 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] outline-none px-4 text-purple-600 rounded-2xl py-1 focus:ring-purple-700 focus:ring-4"
          />
        </div>
      </div>
      <style>
        {`
        /* Styles for responsive behavior */
        @media screen and (max-width: 950px) {
          .md\\:hidden {
            display: block !important;
          }
          
          .md\\:block {
            display: none !important;
          }
        
          .hidden {
            display: none !important;
          }
        
          .block {
            display: block !important;
          }
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;
