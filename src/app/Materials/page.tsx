import React from 'react';
import Link from 'next/link';
import styles from './MaterialComponent.module.scss';

const MaterialComponent: React.FC = () => {
  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url('img/research.jpeg')` }}>
        <div className={styles.content}>
          <h1>Materials & Resources</h1>
          <p>Explore our comprehensive resources for pre-operative and post-operative care.</p>
        </div>
      </div>
      
      <div className={styles.materialLinks}>
        <div className={styles.materialGroup}>
          <h2>Pre-Operative Information</h2>
          <ul>
            <li><Link href="/Materials/surgical-guide-minimally-invasive-tubular-surgery">Surgical Guide for Minimally Invasive Tubular Surgery</Link></li>
            <li><Link href="/materials/surgical-guide-minimally-invasive-tlif">Surgical Guide for Minimally Invasive TLIF</Link></li>
            <li><Link href="/materials/surgical-guide-elif-xlif-llif-dlif">Surgical Guide for ELIF, XLIF, LLIF, DLIF</Link></li>
            <li><Link href="/materials/surgical-guide-laminoplasty">Surgical Guide for Laminoplasty</Link></li>
            <li><Link href="/materials/surgical-guide-cervical-disc-arthroplasty">Cervical Disc Arthroplasty</Link></li>
          </ul>
        </div>
        
        <div className={styles.materialGroup}>
          <h2>Post-Operative Information</h2>
          <ul>
            <li><Link href="/materials/post-op-instructions">Post-Op Instructions</Link></li>
            <li><Link href="/materials/post-op-posture">Post-Op Posture</Link></li>
            <li><Link href="/materials/hans-kraus-post-op-exercises">Hans-Kraus Post-Op Exercises</Link></li>
            <li><Link href="/materials/post-op-activity-timeline">Post-Op Activity Timeline</Link></li>
            <li><Link href="/materials/dr-ricky-singh-exercises">Dr. Ricky Singh&apos;s Exercises &gt; 6 Weeks After Surgery</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MaterialComponent;
