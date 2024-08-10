// src/components/TopBar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './styles/TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.contactInfo}>
        <span><FontAwesomeIcon icon={faClock} /> Mon - Sun 0900 - 2100</span>
        <span><FontAwesomeIcon icon={faPhone} /> +1-2345-3455-33</span>
        <span><FontAwesomeIcon icon={faEnvelope} /> test@gmail.com</span>
      </div>
      <div className={styles.socialMedia}>
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  );
};

export default TopBar;
