// components/HealthgradesReview.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../Review.module.scss'

interface Slide {
  text: string;
  author: string;
  date: string;
  rating: number;
}

const healthgradesSlides: Slide[] = [
  {
    text: "Dr Hartl explained the situation with my back very well. He also described the alternatives and the reason why he was proposing the specific surgery. Dr. Hartl and his care team were great. He gave me confidence to move forward and have the much needed surgery. I am almost four weeks post surgery and continuing to progress well. I would highly recommend Dr. Hartl.",
    author: "Judy Bickart",
    date: "June 2024",
    rating: 5
  },
  {
    text: "Dr Hartl was brilliant I had really bad stenosis and I’m ready to dance out of the recovery room. He is the best and the king of minimally invasive spine surgery - 10 Stars!",
    author: "Mark Ohrstrom",
    date: "Sep 2024",
    rating: 5
  },
  {
    text: "Dr Hartl was highly recommended by my Urologist. I was diagnosed with severe cervical stenosis but my symptoms were improving over time. There’s an old saying that when all you have is a hammer, everything looks like a nail. It’s clear that Dr Hartl had more than a hammer in his tool belt. I found him to be intelligent, concise, and very patient focused (which are not traits you always find in a surgeon). He advised against surgery, and gave me some thoughtful advice about how I should proceed.",
    author: "Axer Toro",
    date: "May 2024",
    rating: 5
  },
  {
    text: "Dr. Hartl explained all options and answered all of my questions in detail. I greatly appreciated all the time he spent the fact that I never felt rushed. It’s obvious after a single an appointment why he is so highly regarded . I definitely recommend!",
    author: "Joe I",
    date: "Jun 23, 2024",
    rating: 5
  },
  {
    text: "Dr Hartl is exceptional from the moment you walk in until the moment you leave.His manner in evaluating your issues and going through the various alternatives as well as honesty regarding the breadth of outcomes is truly unique. His knowledge and ability to clearly communicate the sophisticated nature of spine surgery was extremely reassuring.",
    author: "Marc Mazur",
    date: "Feb 2024",
    rating: 5
  },
  {
    text: "Dr. Hartl is a thorough professional who takes time to explain the process he’s about to perform clearly to his patients.He is quite self-assured and I feel comfortable putting my trust in his hands.",
    author: "Roy Markowitz",
    date: "June, 2023",
    rating: 5
  },
  {
    text: "This is one of the most caring surgeons I’ve been spoken to, in a time of deep confusion. I can’t say enough good things about him. The NY Giants are lucky to have him..",
    author: "CA",
    date: "Mar 18, 2023",
    rating: 5
  },
  {
    text: "Dr. Hartl was warm, patient and clearly explained my injury to me and what the proposed treatment to remedy would be. To my good fortune, that treatment will not include surgery, which I had been led to expect would likely be his course of action.",
    author: "David Stone",
    date: "Jan 2024",
    rating: 5
  },

];


const GoogleReview: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % healthgradesSlides.length);
    }, 12000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handlePrevSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev === 0 ? healthgradesSlides.length - 1 : prev - 1));
    restartAutoSlide();
  };

  const handleNextSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % healthgradesSlides.length);
    restartAutoSlide();
  };

  const restartAutoSlide = () => {
    stopAutoSlide();
    setTimeout(() => {
      startAutoSlide();
    }, 10000); // Restart auto-slide after 10 seconds of inactivity
  };

  const renderStars = (rating: number) => (
    <>
      {Array.from({ length: rating }, (_, i) => (
        <FaStar key={i} className={styles.star} />
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => (
        <FaStar key={i + rating} className={styles.starEmpty} />
      ))}
    </>
  );

  return (
    <div className={styles.reviewContainer}>
      <h2 className={styles.h2}>Google Reviews</h2>
      <p className={styles.choiceProvider}>Reviews from Dr. Harlt patients</p>
      <div className={styles.slideshowContainer}>
        <div
          className={styles.slideshow}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {healthgradesSlides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.rating}>{renderStars(slide.rating)}</div>
              <p className={styles.text}>{slide.text}</p>
              <p className={styles.author}>- {slide.author}, {slide.date}</p>
            </div>
          ))}
        </div>
        <button onClick={handlePrevSlide} className={styles.prevArrow}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNextSlide} className={styles.nextArrow}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default GoogleReview;