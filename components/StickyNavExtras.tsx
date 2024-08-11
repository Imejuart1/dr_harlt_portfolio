// src/components/StickyNavExtras.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './styles/StickyNavExtras.module.scss';

const StickyNavExtras: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const isActive = (path: string) => pathname === path;


  useEffect(() => {
    const handleScroll = () => {
      const navExtras = document.querySelector(`.${styles.originalNavExtras}`);
      if (navExtras) {
        const rect = navExtras.getBoundingClientRect();
        setIsVisible(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.stickyNavExtras} ${styles.navbar} ${isVisible ? styles.visible : ''}`}>
       <div className={`${styles.navExtras}`}>
       <ul className={styles.navLinks}>
          <li className={isActive('/') ? styles.activeLink : ''}><a href="/">Home</a></li>
          <li className={isActive('/about') ? styles.activeLink : ''}><a href="/about">Bio</a></li>
          <li className={isActive('/reviews') ? styles.activeLink : ''}><a href="/reviews">Reviews</a></li>
          <li className={isActive('/honors-awards') ? styles.activeLink : ''}><a href="/honors-awards">Honors and Awards</a></li>
          <li className={isActive('/material') ? styles.activeLink : ''}><a href="/news">Materials</a></li>
          <li className={isActive('/news') ? styles.activeLink : ''}><a href="/contact">News</a></li>
        </ul>
      <button className={styles.contactButton}>Contact Me</button>
      </div>
    </div>
  );
};

export default StickyNavExtras;
