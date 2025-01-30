"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp , faFileVideo} from '@fortawesome/free-regular-svg-icons';
import styles from './Testimonials.module.scss';
import Link from 'next/link';

const videoUrls = [
  'https://www.youtube.com/embed/ByqSJ8XleYc',
    'https://www.youtube.com/embed/_eojuoLUn8I',
  'https://www.youtube.com/embed/kKOoUIsZVFg',
  'https://www.youtube.com/embed/ns5M41ePn14',
  'https://www.youtube.com/embed/LbQFK64lVYE',
  'https://www.youtube.com/embed/AQ3zAqrGYQw',
];

const videoThumbnails = [
  'https://img.youtube.com/vi/ByqSJ8XleYc/0.jpg',
    'https://img.youtube.com/vi/_eojuoLUn8I/0.jpg',
  'https://img.youtube.com/vi/kKOoUIsZVFg/0.jpg',
  'https://img.youtube.com/vi/ns5M41ePn14/0.jpg',
  'https://img.youtube.com/vi/LbQFK64lVYE/0.jpg',
  'https://img.youtube.com/vi/AQ3zAqrGYQw/0.jpg',
];

const Testimonials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoUrls[0]);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentThumbnailIndex < videoUrls.length - (isMobile ? 2 : 5)) {
      setCurrentThumbnailIndex((prev) => prev + (isMobile ? 2 : 5));
    }
  };

  const handlePrevious = () => {
    if (currentThumbnailIndex > 0) {
      setCurrentThumbnailIndex((prev) => prev - (isMobile ? 2 : 5));
    }
  };

  return (
    <div className={styles.testimonialsContainer}>
      <Link href='/Reviews'>
        <h2 className={styles.header}>
          {/*<FontAwesomeIcon icon={faFileVideo} className={styles.icon}/>*/} Watch Patient Testimonials
        </h2>
      </Link>
      <p className={styles.description}>
        Watch personal stories and experiences shared by Dr. Härtl&apos;s patients.
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

      <div className={styles.thumbnailNavigation}>
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevious} className={styles.icon} />
        <div className={styles.thumbnailContainer}>
          {videoThumbnails
            .slice(currentThumbnailIndex, currentThumbnailIndex + (isMobile ? 2 : 5)) // 2 on mobile, 5 on desktop
            .map((thumbnail, index) => (
              <div
                key={index}
                className={`${styles.thumbnailWrapper} ${
                  videoUrls[currentThumbnailIndex + index] === selectedVideo ? styles.active : ''
                }`}
                onClick={() => setSelectedVideo(videoUrls[currentThumbnailIndex + index])}
              >
                <img
                  src={thumbnail}
                  alt={`Thumbnail for video ${currentThumbnailIndex + index + 1}`}
                  className={styles.thumbnailImage}
                />
              </div>
            ))}
        </div>
        <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} className={styles.icon} />
      </div>
    </div>
  );
};

export default Testimonials;
