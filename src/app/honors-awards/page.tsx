"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './HonorsAndAwards.module.scss';
import Link from 'next/link';

const images = [
  '/img/awardroger1.jpeg',
  '/img/awardroger1.jpeg',
  '/img/awardroger1.jpeg'
];

const brazilimages = [
  '/img/Brazil.png',
  '/img/Brazil2.png',
  '/img/Brazil2.png',
];

const annaimages = [
  '/img/anastory.png',
  '/img/annaspine.png',
  '/img/annastory2.png',
  '/img/augmented reality.png',
  '/img/augmented3.png',
];

const HonorsAndAwardsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"honors" | "news" | "podcasts">("honors");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [annaImageIndex, setAnnaImageIndex] = useState(0);
  const [iframeSrc, setIframeSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  const showVideo = () => {
    setIframeSrc("https://drive.google.com/file/d/1X5e09YgGcg7M0TPshxWdQnJ2mKWnp3lP/preview");
    setVideoVisible(true);
    if (iframeRef.current) {
      iframeRef.current.focus(); // Optional: Focus the iframe if necessary
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnaImageIndex((prevIndex) => (prevIndex + 1) % annaimages.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash === "honors" || hash === "news" || hash === "podcasts") {
          setActiveTab(hash as "honors" | "news" | "podcasts");
        }

        const element = document.getElementById(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 30, 
            behavior: 'smooth',
          });
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);



  return (
    <section className={styles.honorsSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className={styles.content}>
          <h1>Honors & Adwards</h1>
          <p>Explore the prestigious honors and awards received by Dr. Roger Härtl.</p>
        </div>
      </div>


      {activeTab === "honors" && (
        <div className={styles.contentWrapper} id='#honors'>
            <div className={styles.section}>
            <a href="https://www.newsweek.com/rankings/americas-best-spine-surgeons-2024" target="_blank" rel="noopener noreferrer">
              <div style={{ width: '100%' }}>
                <img src="/img/bestspineppp.png" alt="Honor 3" className={styles.sectionImage} />
              </div>
            </a>
            <div className={styles.textContent}>
              <h2>America&apos;s Best Spine Surgeons 2024</h2>
              <p>Dr. Härtl has been recognized as one of the best spine surgeons in the United States by Newsweek magazine.
                 Newsweek partnered with Statista to evaluate physician performance data, certifications, 
                 and professional reputation for American spine surgeons in 2024, resulting in the list 
                 of the top 150 in the country. Dr. Härtl is the Hansen-MacDonald Professor of Neurological 
                 Surgery and director of spinal surgery at Weill Cornell Medicine as well as co-director of Och 
                 Spine at NewYork-Presbyterian/Weill Cornell Medical Center.
                 He is one of four spine surgeons at Och Spine at NewYork-Presbyterian named to the list.</p>
              <a href="https://www.newsweek.com/rankings/americas-best-spine-surgeons-2024" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>

          <div className={styles.section}>
            <a href="https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year" target="_blank" rel="noopener noreferrer">
              <div style={{ width: '100%' }}>
                <img src="/img/awardroger1.jpeg" alt="Honor 1" className={styles.sectionImage} />
              </div>
            </a>
            <div className={styles.textContent}>
              <h2>Spine News International AANS Humanitarian of the Year Award Feature</h2>
              <p>Dr. Härtl has been honored with the AANS Humanitarian of the Year Award, recognizing his dedication to advancing spine care.
                At the 2022 annual meeting of the American Association of Neurological Surgeons in Philadelphia,
                Dr. Härtl was honored as the AANS Humanitarian of the Year.
                Dr. Härtl was lauded for his life-saving work in Tanzania
                and for his commitment to global neurosurgical education
                through CME courses and European training classes.
                The award is one of the highest honors bestowed by the AANS, which recognized Dr. Härtl for his years of dedication to these projects.</p>
              <a href="https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Hans Kraus Award</h2>
              <p>Dr. Roger Härtl has received the Hans Kraus Award for his groundbreaking work in spine surgery and patient care.<br></br>
              &quot;We are proud to present the award to Roger Härtl MD, the Hansen-MacDonald Professor of Neurological Surgery and Director of Neurosurgery Spine at the Weill Cornell Medicine Brain and Spine Center in New York.&quot;</p>
              <a href="https://frame.foundation/hans-kraus-award" target="_blank" rel="noopener noreferrer">Read more</a><br></br>
              <a href="https://drive.google.com/file/d/1cRrmQZABK_TlDbzbp6CESOsyfFB8u6r3/view" target="_blank" rel="noopener noreferrer">See pdf</a>
            </div>
            <a href="https://frame.foundation/hans-kraus-award" target="_blank" rel="noopener noreferrer">
              <div style={{ width: '100%' }}>
                <img src="/img/Hanskraus2.png" alt="Honor 2" className={styles.sectionImage} />
              </div>
            </a>
          </div>

        
        </div>
      )}
    </section>
  );
};

export default HonorsAndAwardsPage;
