"use client";

import React, { useEffect } from 'react';
import styles from './styles/Popup.module.scss'; // Add custom styles for Popup

interface PopupProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    // Automatically close the popup after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, [onClose]);

  return (
    <div className={`${styles.popup} ${type === 'success' ? styles.success : styles.error}`}>
      <div className={styles.content}>
        <p>{message}</p>
        {/*<button className={styles.closeButton} onClick={onClose}>X</button>*/}
      </div>
    </div>
  );
};

export default Popup;
