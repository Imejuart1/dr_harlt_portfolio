"use client";
import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  const slides = [
    {
      image: 'img/Aboutme2.jpg',
      title: 'I am Dr. Roger Härtl',
      subtitle: 'Neurosurgeon at Och Spine, NewYork-Presbyterian',
      buttonText: 'Get to Know Me'
    },
    {
      image: 'img/review5.jpeg',
      title: 'Expert in Spine Surgery',
      subtitle: 'Specializing in minimally invasive spinal surgery',
      buttonText: 'Learn More'
    },
    {
      image: 'img/materials.jpg',
      title: 'Innovative Treatments',
      subtitle: 'Pioneering new techniques in spinal care',
      buttonText: 'Explore'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const { image, title, subtitle, buttonText } = slides[currentSlide];

  return (
    <section
      className={`${styles.heroSection} ${currentSlide === 2 ? styles.splitLayout : ''}`}
      style={{ backgroundImage: currentSlide !== 2 ? `url(${image})` : 'none' }}
    >
      {currentSlide === 2 && (
        <div
          className={styles.rightImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      <div className={styles.content}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>Dedicated to advancing the treatment of spinal disorders and providing personalized care to each patient.</p>
        <button className={styles.contactButton}>{buttonText}</button>
      </div>
    </section>
  );
};

export default HeroSection;
