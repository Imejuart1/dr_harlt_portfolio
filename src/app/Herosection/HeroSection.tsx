"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.scss';
/*
    {
      image: '/img/Aboutme2.jpg',
      title: 'Dr. Roger Härtl ',
      subtitle: 'Neurosurgeon at Och Spine, NewYork-Presbyterian',
      text: 'Augmented reality has created a new reality for spinal surgery.',
      buttonText: 'Get to Know Me',
      link: '/Bio'
    },
    {
      image: '/img/review5.jpeg', 
      title: 'Expert in Spine Surgery',
      subtitle: 'Specializing in minimally invasive spinal surgery',
      text: 'World-renowned neurosurgeon advancing spine care globally; New York Giants neurosurgeon.',
      buttonText: 'See Reviews',
      link: '/Reviews'
       {
      image: '/img/research.jpeg',
      title: 'Dr. Roger Härtl ',
      subtitle: 'Innovative Spine Care',
      text: 'World-renowned neurosurgeon advancing spine care globally; New York Giants neurosurgeon.Leading innovative, less invasive spinal treatments.',
      buttonText: 'Explore',
      link: '/Materials'
    }
    },*/
const HeroSection: React.FC = () => {
  const slides = [
    {
      image: '/img/Herowebb.png',
      title: 'Dr. Roger Härtl',
      subtitle: 'Spine Surgeon at Och Spine, NewYork-Presbyterian and Weil Cornell Medical Center',
      text: 'Leading expert in Minimally Invasive Spine surgery',
      text2: '',
      buttonText: 'Contact Me',
      link: '/Contact'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change every 7 seconds
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

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

  const { image, title, subtitle, text, buttonText, link , text2} = slides[currentSlide];

  return (
    <section
      className={`${styles.heroSection} ${currentSlide === 1 ? styles.rightText : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.content}>
      <h1>{title}</h1>
        {/*{currentSlide === 0 && <h3>I am</h3>}
*/}        {/*
    <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        <p>{text2}</p>
        {/*<Link href={link} passHref>
          <button className={styles.contactButton}>{buttonText}</button>
        </Link>*/}
      </div>

      {/* Navigation Arrows */}
      {/*<div className={styles.navArrowLeft} onClick={goToPrevSlide}>
        &#9664; 
      </div>
      <div className={styles.navArrowRight} onClick={goToNextSlide}>
        &#9654;
      </div>*/}
    </section>
  );
};

export default HeroSection;
