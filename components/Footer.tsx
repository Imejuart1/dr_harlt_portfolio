"use client";
import React, { useState } from 'react';
import styles from './styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const [isEnlarged, setIsEnlarged] = useState(false); // State for QR enlargement

  const handleEnlarge = () => {
    setIsEnlarged(true);
  };

  const handleCloseEnlarged = () => {
    setIsEnlarged(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
        <div className={styles.trustcode} >
          <div>
          <div className={styles.logo}>
            <img src="/img/Dr.Hartls.png" alt="Dr. Roger Härtl Logo" />
            <div className={styles.logoText}>
              <h1>Dr. Roger Härtl MD</h1>
              <span>Och Spine at NewYork-Presbyterian</span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <p><strong>Address:</strong> 525 East 68th Street, New York, NY 10065</p>
            <p><strong>Phone:</strong> (212) 746-2152</p>
            <p><strong>Email:</strong> hartlspine@med.cornell.edu</p>
          </div>
          </div>
             {/* Trust Items Section */}
             <div className={styles.trustItems}>
            <div>
              <img src="/img/WeilCornel.png" alt="WeilCornell" />
            </div>
            <div>
              <img src="/img/newyorkp.png" alt="NewYorkP" />
            </div>
          </div>
          </div>
          </div>
          <div className={styles.trustcode2}>
          {/* QR Code Section */}
          <div className={styles.QRcode} onClick={handleEnlarge}>
            <img src="/img/QR CODE.png" alt="QR Code" />
            <span><b>Click to Enlarge</b></span>
          </div>

          {isEnlarged && (
            <div className={styles.enlargedOverlay}>
              <div className={styles.enlargedQRCode}>
                <img src="/img/QR CODE.png" alt="QR Code Enlarged" />
                <button className={styles.closeButton} onClick={handleCloseEnlarged}>X</button>
              </div>
            </div>
          )}

<div className={styles.rightSection}>
          {/* Social Media Section */}
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
          </div>
     
    </footer>
  );
};

export default Footer;
