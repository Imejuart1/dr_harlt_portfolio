"use client";
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Next.js Link component
import styles from './styles/Navbar.module.scss';
import StickyNavExtras from './StickyNavExtras';
import ContactFormPopup from '@/app/Contact/ContactFormPopup';

interface NavbarProps {
  setStickyNavVisible: (visible: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setStickyNavVisible }) => {
  const pathname = usePathname();
  const navExtrasRef = useRef<HTMLDivElement>(null);
  const enlargedQRCodeRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false); // State to track QR enlargement
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const isActive = (path: string) => pathname === path;

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu's visibility
  };

  const handleEnlarge = () => {
    setIsEnlarged(true);
  };

  const handleCloseEnlarged = () => {
    setIsEnlarged(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setStickyNavVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (navExtrasRef.current) {
      observer.observe(navExtrasRef.current);
    }

    return () => {
      if (navExtrasRef.current) {
        observer.unobserve(navExtrasRef.current);
      }
    };
  }, [setStickyNavVisible]);

  // Add event listener to close the enlarged QR code when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (enlargedQRCodeRef.current && !enlargedQRCodeRef.current.contains(event.target as Node)) {
        setIsEnlarged(false);
      }
    };

    if (isEnlarged) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEnlarged]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src="/img/Dr.Hartls.png" alt="Mediz Logo" />
          <div className={styles.logoText}>
            <h1>Dr. Roger Härtl MD</h1>
            <span>Och Spine at NewYork-Presbyterian</span>
          </div>
        </div>
        

        <div className={styles.QRcode} onClick={handleEnlarge}>
          <img src="/img/QR CODE.png" alt="QR Code" />
          <span><b>Click to Enlarge</b></span>
        </div>

        {isEnlarged && (
          <div className={styles.enlargedOverlay}>
            <div ref={enlargedQRCodeRef} className={styles.enlargedQRCode}>
              <img src="/img/QR CODE.png" alt="QR Code Enlarged" />
              <button className={styles.closeButton} onClick={handleCloseEnlarged}>X</button>
            </div>
          </div>
        )}

        <div className={styles.trustItems}>
          <div>
            <img src="/img/WeilCornel.png" alt="WeilCornell" />
          </div>
          <div>
            <img src="/img/newyorkp.png" alt="NewYorkP" />
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
          <li className={isActive('/Reviews') ? styles.activeLink : ''}>
            <Link href="/Reviews">Reviews</Link>
          </li>
          <li className={isActive('/honors-awards') ? styles.activeLink : ''}>
            <Link href="/honors-awards">Honors and News</Link>
          </li>
          <li className={isActive('/Materials') ? styles.activeLink : ''}>
            <Link href="/Materials">Materials</Link>
          </li>
          <li className={isActive('/Project') ? styles.activeLink : ''}>
            <Link href="/Project">Projects</Link>
          </li>
          <li className={isActive('/Contact') ? styles.activeLink : ''}>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <button className={styles.contactButton} onClick={handleOpenPopup}>Email Me</button>
      </div>
      {isPopupOpen && <ContactFormPopup onClose={handleClosePopup} />}
    </nav>
  );
};

export default Navbar;
