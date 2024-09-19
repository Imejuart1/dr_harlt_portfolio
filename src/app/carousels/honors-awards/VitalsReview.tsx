// components/VitalsReview.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../Review.module.scss';

interface Slide {
  text: string;
  author: string;
  date: string;
  rating: number;
}

const vitalsSlides: Slide[] = [
  {
    text: "Went in for a 2 level ACDF. Discharged the next day without a brace and feeling great. All that worrying for nothing. A month later and I'm feeling great",
    author: "",
    date: "Feb 2nd, 2024",
    rating: 4
  },
  {
    text: "Amazing doctor, I am grateful that I was referred to Dr. Hartl, he was able to pin point my fathers back pain and recommended the appropriate surgery. He then right away connected us to the surgical team to start scheduling everything. Very smooth and easy process.",
    author: "",
    date: "Feb 03, 2023",
    rating: 5
  },
  {
    text: "Excellent surgeon!",
    author: "",
    date: "July 27th, 2016",
    rating: 5
  },
  {
    text: "Dr. Hartl and his staff were terrific. He performed a laminectomy to L5/S1. No post-op pain, didn't need to fill the RX for pain meds! I was up and about the next day.",
    author: "",
    date: "July 16th, 2015",
    rating: 5
  },
  {
    text: "Dr. Hartl helped my husband walk again. He was always there at the hospital to check on my husband. We would definitely recommend him since he is an excellent doctor.",
    author: "",
    date: "October 30th, 2014",
    rating: 5
  },
  {
    text: "Dr. Hartl is a world class surgeon. I was in pain for over a year and a day after surgery, pain free. My recovery was rapid with no complications. He was recommended to me by 2 different sources and I will not hesitate to recommend him to others.",
    author: "",
    date: "July 17th, 2014",
    rating: 5
  },
  {
    text: "Dr. Hartl is extremely smart and patient. I had neck surgery and was so scared. I am not only pleased with the results but also the scar after two weeks you can hardly see. He also sat with me and answered all my questions without me feeling rushed. I highly recommend Dr. Hartl.",
    author: "",
    date: "June 2nd, 2013",
    rating: 5
  },
  {
    text: "Dr. Hartl is a wonderful doctor. Not only is he at the top of his game but he is very caring and considerate. He take care of you as if you were the only one that matters, while having many patients. He is very smart and looks out for the least invasive option possible for that patient. He is in a word wonderful!",
    author: "",
    date: "February 16th, 2010",
    rating: 5
  },

  {
    text: "He is the best neurosurgeon. He cured my back pain. I had been to many so called top doctors and no one found the reason for my pain. He did in a heartbeat. It was a tough surgery but so worth it. I have no pain . It was a long haul but there was a pot of gold at the end of the rainbow! Thank you",
    author: "",
    date: "August 18th, 2013",
    rating: 5
  },
];

const VitalsReview: React.FC = () => {
  return (
    <div className={styles.vitalsReviewContainer}>
      <h2>Patient Testimonials</h2>
      <div className={styles.reviewGrid}> {/* Changed to reviewGrid */}
        {vitalsSlides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.rating}>
              {[...Array(slide.rating)].map((_, i) => (
                <FaStar key={i} className={styles.star} />
              ))}
            </div>
            <p className={styles.text}>{slide.text}</p>
            <div className={styles.meta}>
              <span>{slide.author}</span>
              <span>{slide.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitalsReview;