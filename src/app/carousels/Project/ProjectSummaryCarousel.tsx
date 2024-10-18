"use client";
import React, { useState, useEffect, useRef  } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBrain, faChevronLeft, faChevronRight, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight, faLightbulb, faHandshake, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './ProjectSummaryCarousel.module.scss';

const projectSummaries = [
  {
    icon: faLightbulb,
    title: "Research",
    description: "Shaping the future of spinal care with cutting-edge research.",
    imageUrl: "/img/stemcells2.jpeg",
    link: "/Project/research",
  },
  {
    icon: faHandshake,
    title: "Tanzania",
    description: "Dr. Roger Härtl's 15-year journey creating a global impact from New York to Tanzania.",
    imageUrl: "/img/tanzania.png",
    link: "/Project/tanzania-project",
  },
  {
    icon: faUserCircle,
    title: "Physician Education",
    description: "Join our summer master class in tubular decompression, now open for registration.",
    imageUrl: "/img/nycmiss.webp",
    link: "https://nyc-miss.org/",
  },
];

const ProjectSummaryCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef<NodeJS.Timeout | null>(null);
   // const [transitioning, setTransitioning] = useState(false);
  
   useEffect(() => {
    projectSummaries.forEach((projectSummary) => {
      const img = new Image();
      img.src = projectSummary.imageUrl;
    });

    startSlideShow();

    return () => stopSlideShow(); // Cleanup on unmount
  }, []);

    const startSlideShow = () => {
        slideInterval.current = setInterval(() => {
            setCurrentIndex((prevSlide) => (prevSlide + 1) % projectSummaries.length);
        }, 5000); // Change every 7 seconds
      };
    
      const stopSlideShow = () => {
        if (slideInterval.current) {
          clearInterval(slideInterval.current);
        }
      };
  
    const handleNext = () => {
        stopSlideShow(); 
        setCurrentIndex((prevSlide) => (prevSlide + 1) % projectSummaries.length);
    startSlideShow(); 
    };
  
    const handlePrev = () => {
        stopSlideShow(); 
        setCurrentIndex((prevSlide) => (prevSlide - 1 + projectSummaries.length) % projectSummaries.length);
        startSlideShow();
    };
  return (
    <section className={styles.projectSection}>
      <Link href='/Project'>
        <h2 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faLightbulb} className={styles.icon} fixedWidth /> Explore Our Projects
        </h2>
      </Link>
      <p className={styles.sectionIntro}>
        Delve into our groundbreaking research, international collaborations, and advanced educational programs. Each project is designed to push the boundaries of spinal care and global health initiatives.
      </p>  
      <div className={styles.carousel}>
        <div
          className={`${styles.slide}`}
          style={{ backgroundImage: `url(${projectSummaries[currentIndex].imageUrl})` }}
        >
          <div className={styles.overlay}>
            <h3>
              <FontAwesomeIcon icon={projectSummaries[currentIndex].icon} className={styles.icon} />
              {projectSummaries[currentIndex].title}
            </h3>
            <p>{projectSummaries[currentIndex].description}</p>
            <div className={styles.overallnav}>
            <button onClick={handlePrev} className={styles.prevButton}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
        </button>
            <Link href={projectSummaries[currentIndex].link}>
              Learn More <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Link>
            <button onClick={handleNext} className={styles.nextButton}>
          <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
        </button>
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummaryCarousel;
