// components/HealthgradesReview.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../Review.module.scss'

interface Slide {
  text: string;
  author: string;
  date: string;
  rating: number;
}

const healthgradesSlides: Slide[] = [
  {
    text: "The Best! Very professional yet friendly. Explains well. Has patience. Great surgeon.",
    author: "Anonymous",
    date: "Jan 25, 2024",
    rating: 5
  },
  {
    text: "There is no doubt that I would recommend Dr Härtl. He is thoughtful, on the leading edge in his field...",
    author: "Leonard Harlan",
    date: "Jan 26, 2024",
    rating: 5
  }
];

const HealthgradesReview: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [subTab, setSubTab] = useState<"overview" | "detailed">("overview");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % healthgradesSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <img src='img/healthgrades-icon.svg' alt="Healthgrades Icon" className={styles.reviewIcon} />
        <h2 className={styles.h2}>Healthgrades Reviews</h2>
        <a href="https://www.healthgrades.com/physician/dr-roger-hartl-yy2qb?referrerSource=autosuggest" target="_blank" rel="noopener noreferrer" className={styles.moreLink}>See Source</a>
      </div>
      <p className={styles.choiceProvider}>Dr. Härtl is a Healthgrades Choice provider in Neurosurgery.</p>
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
      </div>

      <div className={styles.dropdown} >
            <div className={styles.dropdownHeader} onClick={toggleDropdown}>
              <h3 className={styles.h3}><strong>SEE HEALTHGRADES FEEDBACK CHART</strong></h3>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isDropdownOpen && (
              <>
              <div className={styles.tabNavigation}>
               <button
                 className={`${styles.tabButton} ${subTab === "overview" ? styles.active : ''}`}
                 onClick={() => setSubTab("overview")}
               >
                 Feedback Overview
               </button>
               <button
                 className={`${styles.tabButton} ${subTab === "detailed" ? styles.active : ''}`}
                 onClick={() => setSubTab("detailed")}
               >
                 Detailed Feedback
               </button>
               <div
                 className={`${styles.tabUnderline} ${subTab === "overview" ? styles.left : styles.right}`}
               />
             </div>
               {subTab === "overview" && (<div className={styles.feedbackOverview}>
                <h2>Dr. Hartl&apos;s Reviews</h2>
                <div className={styles.ratingSummary}>
                  <div className={styles.ratingOverall}>
                    <h3>4.8</h3>
                    <div className={styles.stariop}>
                    <div className={styles.stars}>
                      {renderStars(5)}
                    </div>
                    <p>306+ ratings, 214+ with a written review</p>
                    </div>
                  </div>
                  <div className={styles.ratingBreakdown}>
                    <div className={styles.ratingRow}>
                      <span>5 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '92%' }} />
                      </div>
                      <span>92%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>4 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '3%' }} />
                      </div>
                      <span>3%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>3 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '1%' }} />
                      </div>
                      <span>1%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>2 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '1%' }} />
                      </div>
                      <span>1%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>1 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '4%' }} />
                      </div>
                      <span>4%</span>
                    </div>
                    </div>
                  </div>
                </div>
            )}
              {subTab === "detailed" && (<div className={styles.dropdownContent}>
                <h4 className={styles.h4}>Provider Feedback</h4>
                <p className={styles.p}>96% positive</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Trusted the provider&apos;s decisions</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '96%' }} // Dynamically adjust width here
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>268 agree, 11 disagree</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Listened & answered questions</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '95%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>263 agree, 13 disagree</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Explained conditions well</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '96%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>263 agree, 11 disagree</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Appointment wasn&apos;t rushed</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '96%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>254 agree, 10 disagree</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>I felt respected</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '100%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>21 agree, 0 disagree</span>
                    </div>
                  </li>
                </ul>
                <h4 className={styles.office}>Office + Staff Feedback</h4>
                <p className={styles.p}>94% positive</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Staff friendliness</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '96%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>252 agree, 10 disagree</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Appointment scheduling</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '92%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>231 agree, 21 disagree</span>
                    </div>
                  </li>
                </ul>
              </div>)}
              </> )}
          </div>
        </div>
  )
};

export default HealthgradesReview;