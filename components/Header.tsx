// src/components/Header.tsx
import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import StickyNavExtras from './StickyNavExtras';

const Header: React.FC = () => {
  return (
    <header>
      <TopBar />
      <Navbar />
      <StickyNavExtras />
    </header>
  );
};

export default Header;
