"use client"
import React, { useState } from 'react';
import Logo from './Logo';
import Items from './Items';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Mode from './Mode';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={`dark:bg-slate-950 fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ${nav ? 'h-screen' : 'h-auto'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <Logo />
        <div className="hidden md:flex justify-between w-2/5 items-center">
          <Items />
          <Mode />
        </div>
        {nav && <Mode />}
        <div className="md:hidden">
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
