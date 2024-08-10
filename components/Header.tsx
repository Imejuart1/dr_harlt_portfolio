// src/components/Header.tsx
import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header>
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;
