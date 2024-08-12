"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  const slides = [
    {
      image: 'img/Aboutme2.jpg',
      title: 'Dr. Roger Härtl MD',
      subtitle: 'Neurosurgeon at Och Spine, NewYork-Presbyterian',
      text: 'Unifying disciplines to provide minimally invasive care for neck disorders.',
      buttonText: 'Get to Know Me'
    },
    {
      image: 'img/review5.jpeg',
      title: 'Expert in Spine Surgery',
      subtitle: 'Specializing in minimally invasive spinal surgery',
      text: 'World-renowned neurosurgeon advancing spine care globally; New York Giants neurosurgeon.',
      buttonText: 'See Reviews'
    },
    {
      image: 'img/research.jpeg',
      title: 'Research and Training',
      subtitle: 'Innovative Spine Care',
      text: 'Leading innovative, less invasive spinal treatments and pioneering disc regeneration.',
      buttonText: 'Explore'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change every 7 seconds
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideShow();

    return () => stopSlideShow(); // Cleanup on unmount
  }, []);

  const goToNextSlide = () => {
    stopSlideShow(); // Stop the interval
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    startSlideShow(); // Restart the interval
  };

  const goToPrevSlide = () => {
    stopSlideShow(); // Stop the interval
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    startSlideShow(); // Restart the interval
  };

  const { image, title, subtitle, text, buttonText } = slides[currentSlide];

  return (
    <section
      className={`${styles.heroSection} ${currentSlide === 1 ? styles.rightText : ''} ${currentSlide === 1 ? styles.rightText : ''}` }
      
      style={{ backgroundImage:  `url(${image})`}}
    >
     {/*} {currentSlide === 2 && (
        <div
          className={styles.rightImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}*/}
      <div className={styles.content}>
        {currentSlide === 0 && <h3>I am</h3>}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        <button className={styles.contactButton}>{buttonText}</button>
      </div>

      {/* Navigation Arrows */}
      <div className={styles.navArrowLeft} onClick={goToPrevSlide}>
        &#9664; {/* Left Arrow (Unicode character) */}
      </div>
      <div className={styles.navArrowRight} onClick={goToNextSlide}>
        &#9654; {/* Right Arrow (Unicode character) */}
      </div>
    </section>
  );
};

export default HeroSection;
