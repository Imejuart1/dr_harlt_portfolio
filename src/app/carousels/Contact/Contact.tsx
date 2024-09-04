"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactImage}
        style={{ backgroundImage: `url(/img/Aboutme.jpg)`}}></div> {/* Background image section */}
      <div className={styles.contactContent}>
        <Link href='/Contact'>
        <h2 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Reach Out to Dr. Roger Härtl
        </h2>
        </Link>
        <p className={styles.sectionIntro}>
          We’re here to help you on your journey to spinal health. Contact us today to schedule an appointment or ask any questions you may have.
        </p>
        <Link href="/Contact">
          <button className={styles.ctaButton}>Get in Touch</button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
