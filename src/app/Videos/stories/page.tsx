'use client';
import React from 'react';
import styles from './research.module.scss';

const videoUrls = [
  'https://www.youtube.com/embed/kKOoUIsZVFg',
  'https://www.youtube.com/embed/ns5M41ePn14',
  'https://www.youtube.com/embed/ByqSJ8XleYc',
  'https://www.youtube.com/embed/LbQFK64lVYE',
  'https://www.youtube.com/embed/AQ3zAqrGYQw',
];

const PatientStoriesComponent = () => {
  return (
    <section className={styles.researchSection}>
      {/* Hero Section */}
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url('/img/Researchnew.jpeg')` }}
      >
        <div className={styles.content}>
          <h1>Patient Stories</h1>
          <p>Watch real experiences from patients across our care programs.</p>
        </div>
      </div>

      {/* Horizontal Flex Video Section */}
      <div className={styles.videoGrid}>
        {videoUrls.map((url, index) => (
          <div key={index} className={styles.videoWrapper}>
            <iframe
              src={`${url}?autoplay=0&mute=0&controls=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`Patient story ${index + 1}`}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientStoriesComponent;
