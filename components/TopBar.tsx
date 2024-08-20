"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope, faBars, faTimes, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import StickyNavExtras from './StickyNavExtras'; // Import StickyNavExtras
import styles from './styles/TopBar.module.scss';

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSocialMenu = () => setIsSocialMenuOpen(!isSocialMenuOpen);

  useEffect(() => {
    const handleScrollLock = () => {
      if (isMenuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    handleScrollLock();

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen, isSocialMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769 && isSocialMenuOpen) {
        setIsSocialMenuOpen(false);
      }else if (window.innerWidth >= 769 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSocialMenuOpen, isMenuOpen]);

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.hambug}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
          <div className={styles.hamburger} onClick={toggleSocialMenu}>
            <FontAwesomeIcon icon={isSocialMenuOpen ? faTimes : faShareAlt} />
          </div>
        </div>
        <div className={` ${isSocialMenuOpen ? styles.showSocialMenu : styles.showSocial}`}>
          <div className={`  ${isSocialMenuOpen ? styles.showSocialMenu1 : styles.contactInfo}`}>
            <div><span><FontAwesomeIcon icon={faClock} /> Mon - Sun 0900 - 2100</span></div>
            <span><FontAwesomeIcon icon={faPhone} /> +1-2345-3455-33</span>
            <span><FontAwesomeIcon icon={faEnvelope} /> test@gmail.com</span>
          </div>
          <div className={`  ${isSocialMenuOpen ? styles.showSocialMenu2 : styles.socialMedia}`}>
            <div><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></div>
          </div>
        </div>
      </div>
      <StickyNavExtras isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> {/* Pass the isMenuOpen state */}
    </div>
  );
};

export default TopBar;
