import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1>Dr. Roger Härtl</h1>
        <h2>Neurosurgeon at Och Spine, NewYork-Presbyterian</h2>
        <p>Dedicated to advancing the treatment of spinal disorders and providing personalized care to each patient.</p>
        <button className={styles.contactButton}>Contact Now</button>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default HeroSection;
