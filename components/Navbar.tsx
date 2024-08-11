"use client";

// src/components/Navbar.tsx

import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const navExtrasRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src="img/Dr.Hartls.png" alt="Mediz Logo" />
          <div className={styles.logoText}>
            <h1>Dr. Roger Härtl MD</h1>
            <span>Och Spine at NewYork-Presbyterian</span>
          </div>
        </div>
        <div className={styles.trustItems}>
          <div>
            <img src="img/WeilCornel.png" alt="WeilCornell" />
          </div>
          <div>
            <img src="img/newyorkp.png" alt="NewYorkP" />
          </div>
        </div>
      </div>
      <div ref={navExtrasRef} className={`${styles.navExtras} ${styles.originalNavExtras}`}>
        <ul className={styles.navLinks}>
          <li className={isActive('/') ? styles.activeLink : ''}><a href="/">Home</a></li>
          <li className={isActive('/about') ? styles.activeLink : ''}><a href="/about">Bio</a></li>
          <li className={isActive('/reviews') ? styles.activeLink : ''}><a href="/reviews">Reviews</a></li>
          <li className={isActive('/honors-awards') ? styles.activeLink : ''}><a href="/honors-awards">Honors and Awards</a></li>
          <li className={isActive('/materials') ? styles.activeLink : ''}><a href="/news">News</a></li>
          <li className={isActive('/news') ? styles.activeLink : ''}><a href="/contact">Contact</a></li>
        </ul>
        <button className={styles.contactButton}>Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
