// src/app/honors-and-awards/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faNewspaper, faPodcast, faAward } from '@fortawesome/free-solid-svg-icons';
import styles from './HonorsAndAwards.module.scss';
import Link from 'next/link';

const carouselItems = [
  {
    title: "Honors & Awards",
    icon: faTrophy,
    images: ['img/bestspineppp.png', 'img/Brazil2.png', 'img/awardroger1.jpeg'],
    link: "/honors-awards#honors",
  },
  {
    title: "News",
    icon: faNewspaper,
    images: ['img/hartNews1.jpg', 'img/medicalmarvel.png', 'img/Brazil.png' ],
    link: "/honors-awards#news",
  },
  {
    title: "Podcasts",
    icon: faPodcast,
    images: ['img/beckerpodcast.png', 'img/advancepodcast6.png', 'img/healthpodcast.jpeg'],
    link: "/honors-awards#podcasts"
  }
];

const HonorsAndAwardsPage: React.FC = () => {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes(prevIndexes => prevIndexes.map((index, i) => (index + 1) % carouselItems[i].images.length));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.honorsSection}>
        <Link href='/honors-awards'>
        <FontAwesomeIcon icon={faAward} className={styles.icon} /> 
      <h2 className={styles.sectionTitle}>Explore Honors, News & Podcasts</h2>
      </Link>
      <p className={styles.sectionIntro}>Discover the latest recognitions, media features, and podcast episodes featuring Dr. Roger Härtl&apos;s work in neurosurgery.</p>

      <div className={styles.carouselContainer}>
        {carouselItems.map((item, i) => (
          <div key={i} className={styles.carouselItem}>
            <div className={styles.carouselHeader}>
              <FontAwesomeIcon icon={item.icon} className={styles.carouselIcon} />
              <h3>{item.title}</h3>
            </div>
            <div className={styles.carouselImage} style={{ backgroundImage: `url(${item.images[currentIndexes[i]]})` }}></div>
            <Link href={item.link} className={styles.carouselLink}>
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HonorsAndAwardsPage;
