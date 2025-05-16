'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './surgical.module.scss';

const SurgicalVideosComponent: React.FC = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const elementId = window.location.hash.replace('#', '');
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth',
          });
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url('/img/newhartl3.jpg')` }}>
        <div className={styles.content}>
          <h1>Surgical Videos</h1>
          <p>Explore detailed surgical procedures and guides by Dr. Härtl, covering minimally invasive and advanced spine surgeries.</p>
        </div>
      </div>
      
      <div className={styles.materialLinks}>
        {/* Pre-Operative Information Section */}
        <div className={styles.materialGroup} id="pre-operative-information">
          <h2>Pre-Operative Information</h2>
          <ul>
            <li><Link href="/Materials/surgical-guide-minimally-invasive-tubular-surgery">Surgical Guide for Minimally Invasive Tubular Surgery</Link></li>
            <li><Link href="/Materials/surgical-guide-minimally-invasive-tlif">Surgical Guide for Minimally Invasive TLIF</Link></li>
            <li><Link href="/Materials/surgical-guide-elif-xlif-llif-dlif">Surgical Guide for ELIF, XLIF, LLIF, DLIF</Link></li>
            <li><Link href="https://drive.google.com/file/d/1JxGHNL9sgi19ncuJDXJkeAtblMfRLsCi/view" target='_blank'>Occipitocervical Fusion</Link></li>
          </ul>
        </div>
        
        {/* Post-Operative Information Section */}
        <div className={styles.materialGroup} id="post-operative-information">
          <h2>Post-Operative Information</h2>
          <ul>
            <li><Link href="/Materials/B.L.T">B.L.T. Video</Link></li>
          </ul>
        </div>

        {/* YouTube & Patient Education Materials Section */}
        <div className={styles.materialGroup} id="youtube-education">
          <h2>Dr. Härtl&apos;s YouTube Channel & Other Patient Education Materials</h2>
          <ul>
            <li><Link href="/Materials/surgical-videos">Surgical Videos</Link></li>
            <li><Link href="/Materials/spine-time">Spine Time-highlights from our patient education webinar</Link></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default SurgicalVideosComponent;
