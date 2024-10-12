import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="md:bg-orange-500 lg:bg-green-400 xl:bg-red-400 bg-purple-400 text-white font-bold font-mono text-2xl h-[7vh] flex justify-between items-center p-4">
      
      {/* Logo */}
      <Link href="/">
        <img src="/logo.webp" alt="Logo" className="h-10 w-auto" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleNav}>
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-[60%] h-full bg-purple-600 text-white z-50 p-8 transition-transform ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <Link href="/">
          <img src="/logo.webp" alt="Logo" className="h-10 w-auto mb-8" />
        </Link>
        <ul className="flex flex-col gap-8 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
