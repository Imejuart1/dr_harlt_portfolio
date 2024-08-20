"use client";
import React from 'react';
import styles from './styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <img src="img/Dr.Hartls.png" alt="Dr. Roger Härtl Logo" />
            <div className={styles.logoText}>
              <h1>Dr. Roger Härtl MD</h1>
              <span>Och Spine at NewYork-Presbyterian</span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <p><strong>Address:</strong> 525 East 68th Street, New York, NY 10065</p>
            <p><strong>Phone:</strong> +1-2345-3455-33</p>
            <p><strong>Email:</strong> test@gmail.com</p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.socialMedia}>
            <div><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></div>
            <div><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Dr. Roger Härtl MD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
