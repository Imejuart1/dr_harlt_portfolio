// components/VitalsReview.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    text: "Amazing doctor, I am grateful that I was referred to Dr. Härtl, he was able to pin point my fathers back pain and recommended the appropriate surgery. He then right away connected us to the surgical team to start scheduling everything. Very smooth and easy process.",
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
    text: "Dr. Härtl and his staff were terrific. He performed a laminectomy to L5/S1. No post-op pain, didn't need to fill the RX for pain meds! I was up and about the next day.",
    author: "",
    date: "July 16th, 2015",
    rating: 5
  },
  {
    text: "Dr. Härtl helped my husband walk again. He was always there at the hospital to check on my husband. We would definitely recommend him since he is an excellent doctor.",
    author: "",
    date: "October 30th, 2014",
    rating: 5
  },
  {
    text: "Dr. Härtl is a world class surgeon. I was in pain for over a year and a day after surgery, pain free. My recovery was rapid with no complications. He was recommended to me by 2 different sources and I will not hesitate to recommend him to others.",
    author: "",
    date: "July 17th, 2014",
    rating: 5
  },
  {
    text: "Dr. Härtl is extremely smart and patient. I had neck surgery and was so scared. I am not only pleased with the results but also the scar after two weeks you can hardly see. He also sat with me and answered all my questions without me feeling rushed. I highly recommend Dr. Härtl.",
    author: "",
    date: "June 2nd, 2013",
    rating: 5
  },
  {
    text: "Dr. Härtl is a wonderful doctor. Not only is he at the top of his game but he is very caring and considerate. He take care of you as if you were the only one that matters, while having many patients. He is very smart and looks out for the least invasive option possible for that patient. He is in a word wonderful!",
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [subTab, setSubTab] = useState<"overview" | "detailed">("overview");

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
      setCurrentSlide((prev) => (prev + 1) % vitalsSlides.length);
    }, 12000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handlePrevSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev === 0 ? vitalsSlides.length - 1 : prev - 1));
    restartAutoSlide();
  };

  const handleNextSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % vitalsSlides.length);
    restartAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  const restartAutoSlide = () => {
    stopAutoSlide();
    setTimeout(() => {
      startAutoSlide();
    }, 10000); // Restart auto-slide after 10 seconds of inactivity
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vitalsSlides.length);
    }, 8000);
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
      <h2 className={styles.h2}>Vitals Reviews</h2>
      <p className={styles.choiceProvider}>Dr. Härtl is a Vitals Choice provider in Neurosurgery.</p>
      <div className={styles.slideshowContainer}>
        <div
          className={styles.slideshow}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {vitalsSlides.map((slide, index) => (
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

      <div className={styles.dropdown} >
            <div className={styles.dropdownHeader} onClick={toggleDropdown}>
              <h3 className={styles.h3v}><strong>SEE VITALS FEEDBACK CHART</strong></h3>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isDropdownOpen && (
              <>
              <div className={styles.tabNavigation}>
               <button
                 className={`${styles.tabButton} ${subTab === "overview" ? styles.active : ""}`}
                 onClick={() => setSubTab("overview")}
               >
                 Feedback Overview
               </button>
               <button
                 className={`${styles.tabButton} ${subTab === "detailed" ? styles.active : ""}`}
                 onClick={() => setSubTab("detailed")}
               >
                 Detailed Feedback
               </button>
               <div
                 className={`${styles.tabUnderline} ${subTab === "overview" ? styles.left : styles.right}`}
               />
             </div>
               {subTab === "overview" && (<div className={styles.feedbackOverview}>
                <h2>Dr. Härtl&apos;s Reviews</h2>
                <div className={styles.ratingSummary}>
                  <div className={styles.ratingOverall}>
                    <h3 className={styles.rateh3}>4</h3>
                    <div className={styles.stariop}>
                    <div className={styles.stars}>
                      {renderStars(4)}
                    </div>
                    <p className={styles.ratep}> 83+ ratings with 34 comments</p>
                    </div>
                  </div>
                  <div className={styles.ratingBreakdown}>
                    <div className={styles.ratingRow}>
                      <span>5 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '70%' }} />
                      </div>
                      <span> 70.24%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>4 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '24%' }} />
                      </div>
                      <span>24.10%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>3 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '4%' }} />
                      </div>
                      <span>1.82%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>2 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '4%' }} />
                      </div>
                      <span>1.82%</span>
                    </div>
                    <div className={styles.ratingRow}>
                      <span>1 Star</span>
                      <div className={styles.ratingBar}>
                        <div className={styles.ratingFill} style={{ width: '1%' }} />
                      </div>
                      <span>1.20%</span>
                    </div>
                    </div>
                  </div>
                </div>
            )}
              {subTab === "detailed" && (<div className={styles.dropdownContent}>
                <h4 className={styles.h4v}>Provider Feedback</h4>
                <p className={styles.p}>80% positive</p>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Easy Appointment</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '80%' }} // Dynamically adjust width here
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>4 STAR</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Friendly Staff</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '80%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>4 STAR</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Bedside Manner</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '80%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>4 STAR</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Appropriate Followup</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '80%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>4 STAR</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Promptness</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '80%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>4 STAR</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Accurate Diagnosis</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '80%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>4 STAR</span>
                    </div>
                  </li>
                  <li className={styles.li}>
                    <span className={styles.feedbackText}>Spends Time with Patient</span>
                    <div className={styles.feedbackBar}>
                      <div className={styles.progress}>
                        <div
                          className={styles.progressFilled}
                          style={{ width: '80%' }} // Adjust according to the data
                        ></div>
                      </div>
                      <span className={styles.feedbackVotes}>4 STAR</span>
                    </div>
                  </li>
                </ul>
                {/*<h4 className={styles.office}>Office + Staff Feedback</h4>
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
                </ul>*/}
              </div>)}
              </> )}
          </div>
        </div>
  );
};

export default VitalsReview;
