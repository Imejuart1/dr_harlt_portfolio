"use client";
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Next.js Link component
import styles from './styles/Navbar.module.scss';
import ContactFormPopup from '@/app/Contact/ContactFormPopup';
import { FaVideo } from 'react-icons/fa';
import { FiVideo } from 'react-icons/fi';

interface NavbarProps {
  setStickyNavVisible: (visible: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setStickyNavVisible }) => {
  const pathname = usePathname();
  const navExtrasRef = useRef<HTMLDivElement>(null);
  const enlargedQRCodeRef = useRef<HTMLDivElement>(null);
  const [isEnlarged, setIsEnlarged] = useState(false); // State to track QR enlargement
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const isActive = (path: string) => pathname === path;

  const handleClosePopup = () => {
    setIsPopupOpen(false);
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
          <img src="/img/Dr.Hartls.png" alt="harlt Logo" />
          <div className={styles.logoText}>
            <h1>Dr. Roger Härtl</h1>
            <span><b>One of the top spine surgeons in the United States </b></span>
          </div>
        </div>
        {/*<Link href='/Videos'>
        <div className={styles.centerIcon}>
  <FiVideo size={120}/>
  <span><b>Dr. Hartl's Videos</b></span>
</div> </div>
        <div className={styles.rightText}>
</Link>*/}
        <div className={styles.QRcode} onClick={handleEnlarge}>
          <img src="/img/QR CODE.jpg" alt="QR Code" />
          <span><b>Patient Information</b></span>
        </div> 
</div>

        {isEnlarged && (
          <div className={styles.enlargedOverlay}>
            <div ref={enlargedQRCodeRef} className={styles.enlargedQRCode}>
              <img src="/img/QR CODE.jpg" alt="QR Code Enlarged" />
              <button className={styles.closeButton} onClick={handleCloseEnlarged}>X</button>
            </div>
          </div>
        )}

      <div ref={navExtrasRef} className={`${styles.navExtras} ${styles.originalNavExtras}`}
      style={{marginTop:'2rem'}}>
        <ul className={styles.navLinks}>
          <li className={isActive('/') ? styles.activeLink : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive('/Bio') ? styles.activeLink : ''}>
            <Link href="/Bio">About Dr. Härtl</Link>
          </li>
          <li className={isActive('/Reviews') ? styles.activeLink : ''}>
            <Link href="/Reviews">Reviews</Link>
          </li>
          
          <li className={isActive('/Gratitude') ? styles.activeLink : ''}>
            <Link href="/Gratitude">Gratitude</Link>
          </li>
          <li className={isActive('/honors-awards') ? styles.activeLink : ''}>
            <Link href="/honors-awards">Honors/Awards</Link>
          </li>
          <li className={isActive('/News') ? styles.activeLink : ''}>
            <Link href="/News">Dr. Härtl in the News</Link>
          </li>
          <li className={isActive('/Materials') ? styles.activeLink : ''}>
            <Link href="/Materials">Patient Information</Link>
          </li>
          <li className={isActive('/Videos') ? styles.activeLink : ''}>
            <Link href="/Videos">Videos</Link>
          </li>
          <li className={isActive('/Project') ? styles.activeLink : ''}>
            <Link href="/Project">Projects</Link>
          </li>
          <li className={isActive('/Contact') ? styles.activeLink : ''}>
            <Link href="/Contact">Contact</Link>
          </li>
          <div>
       {/*<button className={styles.contactButton} onClick={handleOpenPopup}>Email Me</button>*/}
       </div>
        </ul>
        
      </div>
      {isPopupOpen && <ContactFormPopup onClose={handleClosePopup} />}
    </nav>
  );
};

export default Navbar;
