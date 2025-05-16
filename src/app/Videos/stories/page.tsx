'use client';
import React from 'react';
import styles from './research.module.scss';

const videoData = [
  {
    title: "The Most Interesting Man in the World",
    src: "https://www.youtube.com/embed/GftHDs8fjps",
  },
  {
    title: "Patient Story 1",
    src: "https://www.youtube.com/embed/kKOoUIsZVFg",
  },
  {
    title: "Patient Story 2",
    src: "https://www.youtube.com/embed/ns5M41ePn14",
  },
  {
    title: "Patient Story 3",
    src: "https://www.youtube.com/embed/ByqSJ8XleYc",
  },
  {
    title: "Patient Story 4",
    src: "https://www.youtube.com/embed/LbQFK64lVYE",
  },
  {
    title: "Patient Story 5",
    src: "https://www.youtube.com/embed/AQ3zAqrGYQw",
  },
  {
    title: "Patient Story 5",
    src: "https://www.youtube.com/embed/_eojuoLUn8I",
  },
];

const PatientStoriesComponent = () => {
  return (
    <section className={styles.researchSection}>
      {/* Hero Section */}
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url('/img/newhartl1.jpg')` }}
      >
        <div className={styles.content}>
          <h1>Patient Stories</h1>
          <p>Watch real experiences from patients across our care programs.</p>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className={styles.videoGrid}>
        {videoData.map((video, index) => (
          <div key={index} className={styles.videoWrapper}>
            <iframe
              src={video.src.includes('youtube') ? `${video.src}?autoplay=0&mute=0&controls=1` : video.src}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={video.title}
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientStoriesComponent;
