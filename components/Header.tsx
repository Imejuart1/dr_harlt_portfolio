// src/components/Header.tsx
"use client";
import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import StickyNavExtras from './StickyNavExtras';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
  const handleResize = () => {
  if (window.innerWidth >= 769 && isMenuOpen) {
    setIsMenuOpen(false);
  }
}
window.addEventListener('resize', handleResize);
handleResize();
return () => {
  window.removeEventListener('resize', handleResize);
};
},[isMenuOpen]);
  
  return (
    <header>
      <TopBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar />
      <StickyNavExtras isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
