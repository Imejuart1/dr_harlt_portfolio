import React from 'react';
import styles from './MaterialComponent.module.scss';

const MaterialComponent: React.FC = () => {
  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url('img/material-bg.jpg')` }}>
        <div className={styles.content}>
          <h1>Materials & Resources</h1>
          <p>Explore our comprehensive resources for pre-operative and post-operative care.</p>
        </div>
      </div>
      
      <div className={styles.materialLinks}>
        <div className={styles.materialGroup}>
          <h2>Pre-Operative Information</h2>
          <ul>
            <li><a href="#">Surgical Guide for Minimally Invasive Tubular Surgery</a></li>
            <li><a href="#">Surgical Guide for Minimally Invasive TLIF</a></li>
            <li><a href="#">Surgical Guide for ELIF, XLIF, LLIF, DLIF</a></li>
            <li><a href="#">Surgical Guide for Laminoplasty</a></li>
            <li><a href="#">Cervical Disc Arthroplasty</a></li>
          </ul>
        </div>
        
        <div className={styles.materialGroup}>
          <h2>Post-Operative Information</h2>
          <ul>
            <li><a href="#">Post-Op Instructions</a></li>
            <li><a href="#">Post-Op Posture</a></li>
            <li><a href="#">Hans-Kraus Post-Op Exercises</a></li>
            <li><a href="#">Post-Op Activity Timeline</a></li>
            <li><a href="#">Dr. Ricky Singh's Exercises &gt 6 Weeks After Surgery</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MaterialComponent;
