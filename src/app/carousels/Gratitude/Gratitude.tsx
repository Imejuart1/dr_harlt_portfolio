"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHandsHelping, faBrain, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Gratitude.module.scss';

const carouselItems = [
  {
    icon: faHeart,
    title: "Gratitude from Dr. Roger Härtl",
    description: "Dr. Härtl expresses deep gratitude for the trust placed in his care. Learn how you can share your experience.",
    imageUrl: 'img/reviewmain1.jpeg',
    link: "/Reviews",
  },
  {
    icon: faHandsHelping,
    title: "Humanitarian Work",
    description: "Support our ongoing humanitarian efforts in Tanzania and make a difference in neurosurgical care.",
    imageUrl: 'img/humaritian.png',
    link: "/Reviews",
  },
  {
    icon: faBrain,
    title: "Spine Research",
    description: "Join us in advancing spine care through groundbreaking research and innovation.",
    imageUrl: 'img/ROGERSPINER.png',
    link: "/Reviews",
  },
];

const GratitudeImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Auto-slide effect with a timer
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        setTransitioning(false);
      }, 500); // Match the timeout duration with the transition duration
    }
  };

  const handlePrev = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
        setTransitioning(false);
      }, 500); // Match the timeout duration with the transition duration
    }
  };

  return (
    <div className={styles.gratitudeContainer}>
      <div 
        className={`${styles.gratitudeItem} ${transitioning ? styles.sliding : ''}`} 
        style={{ backgroundImage: `url(${carouselItems[currentIndex].imageUrl})` }}
      >
        <div className={styles.overlay}>
          <div className={styles.textWrapper}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={carouselItems[currentIndex].icon} className={styles.icons} />
            </div>
            <h3 className={styles.title}>{carouselItems[currentIndex].title}</h3>
            <p className={styles.description}>{carouselItems[currentIndex].description}</p>
            <a href={carouselItems[currentIndex].link} className={styles.link}>Learn More</a>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.prevButton}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon}/>
        </button>
        <button onClick={handleNext} className={styles.nextButton}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
        </button>
      </div>
    </div>
  );
};

export default GratitudeImageCarousel;
