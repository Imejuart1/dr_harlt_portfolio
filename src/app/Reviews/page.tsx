"use client"
import React, { useState } from 'react';
import styles from './Review.module.scss';

interface Slide {
  image: string;
  text: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: 'img/review1.jpg',
    text: '"Dr. Härtl provided exceptional care during my spinal surgery..."',
    link: 'https://example.com/full-review-1'
  },
  {
    image: 'img/review2.jpg',
    text: '"I am grateful for the outstanding care and expertise..."',
    link: 'https://example.com/full-review-2'
  },
  {
    image: 'img/review3.jpg',
    text: '"The best spinal surgeon I have ever encountered..."',
    link: 'https://example.com/full-review-3'
  }
];

const Review: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.reviewSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url('img/review-background.jpg')` }}>
        <div className={styles.content_section}>
          <h1>Reviews & Gratitude</h1>
          <p>Read what our patients have to say about their experiences.</p>
        </div>
      </div>

      <div className={styles.slideshow}>
        <div className={styles.slide} style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
          <div className={styles.reviewText}>
            <p>{slides[currentSlide].text}</p>
            <a href={slides[currentSlide].link} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>
        <button onClick={prevSlide} className={styles.prevButton}>‹</button>
        <button onClick={nextSlide} className={styles.nextButton}>›</button>
      </div>

      <div className={styles.reviewLinks}>
        <h2>Read Full Reviews</h2>
        <ul>
          <li><a href="https://example.com/review-google" target="_blank" rel="noopener noreferrer">Google Review for Och Spine at NewYork-Presbyterian</a></li>
          <li><a href="https://example.com/review-vitals" target="_blank" rel="noopener noreferrer">Vitals</a></li>
          <li><a href="https://example.com/review-healthgrades" target="_blank" rel="noopener noreferrer">Healthgrades</a></li>
          <li><a href="https://example.com/gratitude" target="_blank" rel="noopener noreferrer">Learn more about how you can show your gratitude for Dr. Härtl and the team.</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Review;
