"use client";
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Next.js Link component
import styles from './styles/StickyNavExtras.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope, faBars, faTimes, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import ContactFormPopup from '@/app/Contact/ContactFormPopup';

interface StickyNavExtrasProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isVisible: boolean; 
}

const StickyNavExtras: React.FC<StickyNavExtrasProps> = ({ isMenuOpen, toggleMenu, isVisible }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const menuRef = useRef<HTMLDivElement>(null);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
const [isMenuVisible, setIsMenuVisible] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      setIsBackgroundVisible(true); // Show background layer immediately
      setTimeout(() => {
        setIsMenuVisible(true); // Show menu 2 seconds later
      }, 300); // 2 seconds delay
    } else {
      setIsMenuVisible(false); // Hide menu immediately
      setTimeout(() => {
        setIsBackgroundVisible(false); // Hide background after the menu
      }, 500); // Delay slightly less than the menu transition
    }
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuVisible(false);
    setTimeout(() => {
      toggleMenu();
      setTimeout(() => setIsBackgroundVisible(false), 200); // Hide background after menu closes
    }, 500); // Match this time with your CSS transition duration
  };
    

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(); // Close the menu if the click is outside of it
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, toggleMenu]);

  return  (
    <>
    { isMenuOpen ? (<>
  <div className={`${styles.backgroundLayer} ${isBackgroundVisible ? styles.fisible : styles.hidden}`}></div>
  <div ref={menuRef} className={`${styles.stickyNavExtras_menu} ${isMenuVisible ? styles.fisible : styles.hidden}`}>
      <div className={`${styles.navExtras}`}>
      <div className={styles.hamburger} onClick={handleCloseMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
          <ul className={styles.navLinks}>
            <li className={isActive('/') ? styles.activeLink : ''}>
              <Link href="/" onClick={handleCloseMenu}>Home</Link>
            </li>
            <li className={isActive('/Bio') ? styles.activeLink : ''}>
              <Link href="/Bio" onClick={handleCloseMenu}>About Dr. Härtl</Link>
            </li>
            <li className={isActive('/Reviews') ? styles.activeLink : ''}>
              <Link href="/Reviews" onClick={handleCloseMenu}>Reviews</Link>
            </li>
          <li className={isActive('/Gratitude') ? styles.activeLink : ''}>
            <Link href="/Gratitude">Gratitude</Link>
          </li>
            <li className={isActive('/honors-awards') ? styles.activeLink : ''}>
              <Link href="/honors-awards" onClick={handleCloseMenu}>Honors/Awards</Link>
            </li>
            <li className={isActive('/News') ? styles.activeLink : ''}>
            <Link href="/News" onClick={handleCloseMenu}>Dr. Härtl in the News</Link>
          </li>
            <li className={isActive('/Materials') ? styles.activeLink : ''}>
              <Link href="/Materials" onClick={handleCloseMenu}>Patient Information</Link>
            </li>
            <li className={isActive('/Videos') ? styles.activeLink : ''}>
            <Link href="/Videos" onClick={handleCloseMenu}>Videos</Link>
          </li>
            <li className={isActive('/Project') ? styles.activeLink : ''}>
            <Link href="/Project" onClick={handleCloseMenu}>Projects</Link>
          </li>
          <li className={isActive('/Contact') ? styles.activeLink : ''}>
            <Link href="/Contact" onClick={handleCloseMenu}>Contact</Link>
          </li>
          </ul>
         {/* <button className={styles.contactButton} onClick={() => {handleCloseMenu(); handleOpenPopup(); }}>
  Email Me
</button>*/}
      </div>
     
    </div>
  
  </>) : (
    <div className={`${styles.stickyNavExtras} ${styles.navbar} ${isVisible ? styles.visible : ''}`}>
      <div className={`${styles.navExtras}`}>
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
          <li className={isActive('/Project') ? styles.activeLink : ''}>
            <Link href="/Project">Projects</Link>
          </li>
          <li className={isActive('/Videos') ? styles.activeLink : ''}>
            <Link href="/Videos" onClick={handleCloseMenu}>Videos</Link>
          </li>
          <li className={isActive('/Contact') ? styles.activeLink : ''}>
            <Link href="/Contact">Contact</Link>
          </li>
          <div>
      {/*} <button className={styles.contactButton} onClick={handleOpenPopup}>Email Me</button>*/}
       </div>
       </ul>
      </div>
      
    </div>
   )}
   {isPopupOpen && <ContactFormPopup onClose={handleClosePopup} />}
    </>
  );
};

export default StickyNavExtras;
