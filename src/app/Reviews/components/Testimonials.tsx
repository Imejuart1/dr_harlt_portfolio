// app/reviews/components/Testimonials.tsx
import React from 'react';
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
  return (
    <div className={styles.testimonialsContainer}>
      <h2>Patient Testimonials</h2>
      <p>Watch personal stories and experiences shared by Dr. Hartl's patients.</p>
      <div className={styles.videoGrid}>
        {videoUrls.map((url, index) => (
          <div className={styles.videoWrapper} key={index}>
            <iframe
              width="100%"
              height="250px"
              src={url}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
