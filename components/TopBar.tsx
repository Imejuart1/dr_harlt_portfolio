// src/components/TopBar.tsx
import React from 'react';
import styles from './styles/TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.contactInfo}>
        <span><i className="far fa-clock"></i> Mon - Sun 0900 - 2100</span>
        <span><i className="fas fa-phone"></i> +1-2345-3455-33</span>
        <span><i className="far fa-envelope"></i> test@gmail.com</span>
      </div>
      <div className={styles.socialMedia}>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-pinterest-p"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default TopBar;
