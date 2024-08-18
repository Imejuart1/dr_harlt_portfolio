// src/components/TopBar.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './styles/TopBar.module.scss';

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);

  };

  const cancelMenu = () =>{
    setIsSocialMenuOpen(!isSocialMenuOpen);
  }

  useEffect(() => {
    const handleScrollLock = () => {
      if (isMenuOpen || isSocialMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScrollLock(); // Run the function initially when the component is mounted

    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isMenuOpen, isSocialMenuOpen]);
  
  return (
    <div>
    <div className={styles.topBar}>
      <div className={styles.hambug}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
      <div className={styles.hamburger} onClick={toggleSocialMenu}>
        <FontAwesomeIcon icon={isSocialMenuOpen ? faTimes : faBars} />
      </div>
      </div>

      <div className={` ${isSocialMenuOpen ? styles.showSocialMenu : styles.showSocialMenu1}`}>
      <div className={`  ${isSocialMenuOpen ? styles.showSocialMenu1 : styles.contactInfo}`}>
        <span><FontAwesomeIcon icon={faClock} /> Mon - Sun 0900 - 2100</span>
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
    </div>
  );
};

export default TopBar;
