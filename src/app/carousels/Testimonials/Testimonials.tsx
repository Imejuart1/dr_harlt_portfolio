// src/app/reviews/components/Testimonials.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Testimonials.module.scss';

const videoUrls = [
  'https://www.youtube.com/embed/kKOoUIsZVFg',
  'https://www.youtube.com/embed/ns5M41ePn14',
  'https://www.youtube.com/embed/ByqSJ8XleYc',
  'https://www.youtube.com/embed/F7Gl05S6SZk',
  'https://www.youtube.com/embed/LbQFK64lVYE',
  'https://www.youtube.com/embed/AQ3zAqrGYQw',
];

const Testimonials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoUrls[0]);

  return (
    <div className={styles.testimonialsContainer}>
      <h2 className={styles.header}>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.icon} /> Patient Testimonials
      </h2>
      <p className={styles.description}>
        Watch personal stories and experiences shared by Dr. Hartl&apos;s patients.
      </p>

      <div className={styles.mainVideoContainer}>
        <iframe
          width="100%"
          height="500px"
          src={selectedVideo}
          title="Selected YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.mainVideo}
        ></iframe>
      </div>

      <div className={styles.thumbnailContainer}>
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className={`${styles.thumbnailWrapper} ${url === selectedVideo ? styles.active : ''}`}
            onClick={() => setSelectedVideo(url)}
          >
            <iframe
              width="100%"
              height="100px"
              src={url}
              title={`YouTube video player thumbnail ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.thumbnailVideo}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
