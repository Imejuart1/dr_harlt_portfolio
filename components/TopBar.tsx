"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope, faBars, faTimes, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import StickyNavExtras from './StickyNavExtras'; // Import StickyNavExtras
import styles from './styles/TopBar.module.scss';
interface TopBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
const TopBar: React.FC<TopBarProps> = ({isMenuOpen , toggleMenu}) => {
  
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);


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
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSocialMenuOpen]);

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.hambug}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
          <div className={styles.hamburger} onClick={toggleSocialMenu}>
            <FontAwesomeIcon icon={isSocialMenuOpen ? faTimes : faShareSquare} />
          </div>
        </div>
        <div className={` ${isSocialMenuOpen ? styles.showSocialMenu : styles.showSocial}`}>
          <div className={`  ${isSocialMenuOpen ? styles.showSocialMenu1 : styles.contactInfo}`}>
            <div><FontAwesomeIcon icon={faClock} fixedWidth /> <span>Mon - Sun 0900 - 2100</span></div>
            <div><FontAwesomeIcon icon={faPhone} fixedWidth /><span> +1-2345-3455-33</span></div>
            <div> <FontAwesomeIcon icon={faEnvelope}  fixedWidth/><span> test@gmail.com</span></div>
          </div>
          <div className={`  ${isSocialMenuOpen ? styles.showSocialMenu2 : styles.socialMedia}`}>
            <div><a href="#"><FontAwesomeIcon icon={faFacebookF} fixedWidth/></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faLinkedinIn} fixedWidth/></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faPinterestP} fixedWidth/></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faTwitter} fixedWidth/></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faInstagram} fixedWidth/></a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
