"use client";
import React from 'react';
import styles from './styles/Footer.module.scss';

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
            <a href="#"><img src="img/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="img/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="img/pinterest.png" alt="Pinterest" /></a>
            <a href="#"><img src="img/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="img/instagram.png" alt="Instagram" /></a>
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
