// app/reviews/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import HealthgradesReview from './components/HealthgradesReview';
import VitalsReview from './components/VitalsReview';
import Gratitude from './components/Gratitude';
import Testimonials from './components/Testimonials'; // Import the Testimonials component
import styles from './Review.module.scss';

const images = [
  'img/reviewmain1.jpeg',
  'img/reviewmain3.jpeg'
];

const ReviewPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"testimonials" | "reviews" | "gratitude">("testimonials");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.reviewSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className={styles.content}>
          <h1>Testimonials, Reviews & Gratitude</h1>
          <p>Read what <strong>Dr. Hartl&apos;s</strong> patients have to say about their experiences.</p>
        </div>
      </div>
      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${activeTab === "testimonials" ? styles.active : ""}`}
          onClick={() => setActiveTab("testimonials")}
        >
          Testimonials
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "reviews" ? styles.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "gratitude" ? styles.active : ""}`}
          onClick={() => setActiveTab("gratitude")}
        >
          Gratitude
        </button>
        <div
          className={`${styles.tabUnderline} ${activeTab === "testimonials" ? styles.left : activeTab === "reviews" ? styles.center : styles.right}`}
        />
      </div>
      {activeTab === "testimonials" && (
        <div className={styles.testimonialsSection}>
          <Testimonials />
        </div>
      )}
      {activeTab === "reviews" && (
        <div className={styles.reviewSection_content}>
          <div id="healthgrades" className={styles.healthgSection}>
            <HealthgradesReview />
          </div>
          <div id="vitals" className={styles.vitalsSection}>
            <VitalsReview />
          </div>
        </div>
      )}
      {activeTab === "gratitude" && (
        <div>
          <Gratitude />
        </div>
      )}
    </section>
  );
};

export default ReviewPage;
