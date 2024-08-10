// src/components/Navbar.tsx
import React from 'react';
import styles from './styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Mediz Logo" />
        <div>
          <h1>Mediz</h1>
          <span>Medical Center</span>
        </div>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Our Doctor</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className={styles.navExtras}>
        <span>Trusted By 120,000+ People</span>
        <span>Best Hospital U.K. News</span>
        <span>Number #1 Clinic in London</span>
        <button>Contact Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
