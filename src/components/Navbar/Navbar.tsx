"use client"
import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import Items from './Items';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null); // Specify the type here

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setNav(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className={`dark:bg-slate-950 fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ${nav ? 'h-auto' : 'h-auto'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <Logo />
        <div className="hidden md:flex justify-between w-2/5 items-center">
          <Items />
        </div>
        {nav}
        <div className="md:hidden h-auto">
          <button onClick={handleNav} className="text-gray-600 focus:outline-none">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>
      <div className={`${nav ? 'block' : 'hidden'} md:hidden px-4 pb-4`}>
        <Items />
      </div>
    </div>
  );
}
