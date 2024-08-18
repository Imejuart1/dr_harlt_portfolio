"use client";
import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Next.js Link component
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
          <li className={isActive('/Materials') ? styles.activeLink : ''}>
            <Link href="/Materials">Materials</Link>
          </li>
          <li className={isActive('/Contact') ? styles.activeLink : ''}>
            <Link href="/Contact">Contact</Link>
          </li>
          <li className={isActive('/News') ? styles.activeLink : ''}>
            <Link href="/News">News</Link>
          </li>
        </ul>
        <button className={styles.contactButton}>Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
