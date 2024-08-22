// app/reviews/components/Gratitude.tsx
import React from 'react';
import styles from './Gratitude.module.scss';

const Gratitude: React.FC = () => {
  return (
    <div className={styles.gratitudeSection}>
      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/kKOoUIsZVFg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.content}>
        <h2>Gratitude from Patients</h2>
        <p>Watch this heartfelt video showcasing the gratitude and appreciation from patients who have had life-changing experiences with Dr. Hartl.</p>
      </div>
    </div>
  );
};

export default Gratitude;
