// src/components/StickyNavExtras.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Next.js Link component
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
          <li className={isActive('/') ? styles.activeLink : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive('/Bio') ? styles.activeLink : ''}>
            <Link href="/Bio">Bio</Link>
          </li>
          <li className={isActive('/reviews') ? styles.activeLink : ''}>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li className={isActive('/honors-awards') ? styles.activeLink : ''}>
            <Link href="/honors-awards">Honors and Awards</Link>
          </li>
          <li className={isActive('/material') ? styles.activeLink : ''}>
            <Link href="/news">Materials</Link>
          </li>
          <li className={isActive('/news') ? styles.activeLink : ''}>
            <Link href="/contact">News</Link>
          </li>
        </ul>
        <button className={styles.contactButton}>Contact Me</button>
      </div>
    </div>
  );
};

export default StickyNavExtras;
