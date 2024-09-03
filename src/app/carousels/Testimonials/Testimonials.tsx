"use client";
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

const videoThumbnails = [
  'https://img.youtube.com/vi/kKOoUIsZVFg/0.jpg',
  'https://img.youtube.com/vi/ns5M41ePn14/0.jpg',
  'https://img.youtube.com/vi/ByqSJ8XleYc/0.jpg',
  'https://img.youtube.com/vi/F7Gl05S6SZk/0.jpg',
  'https://img.youtube.com/vi/LbQFK64lVYE/0.jpg',
  'https://img.youtube.com/vi/AQ3zAqrGYQw/0.jpg',
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
        {videoThumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className={`${styles.thumbnailWrapper} ${videoUrls[index] === selectedVideo ? styles.active : ''}`}
            onClick={() => setSelectedVideo(videoUrls[index])}
          >
            <img
              src={thumbnail}
              alt={`Thumbnail for video ${index + 1}`}
              className={styles.thumbnailImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
