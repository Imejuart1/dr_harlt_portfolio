// app/reviews/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import HealthgradesReview from './components/HealthgradesReview';
import VitalsReview from './components/VitalsReview';
import Gratitude from './components/Gratitude';
import Testimonials from './components/Testimonials'; // Import the Testimonials component
import styles from './Review.module.scss';
import GoogleReview from './components/Google';
import PatientTestimonials from '../carousels/Testimonials/PatientTestimonials';

const images = [
  '/img/reviewmain1.jpeg',
  '/img/reviewmain3.jpeg'
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

  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash === "testimonials" || hash === "reviews" || hash === "gratitude") {
          setActiveTab(hash as "testimonials" | "reviews" | "gratitude");
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
    <section className={styles.reviewSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className={styles.content}>
          <h1>Testimonials & Reviews</h1>
          <p>Read what <strong>Dr. Härtl&apos;s</strong> patients have to say about their experiences.</p>
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
        {/*<button
          className={`${styles.tabButton} ${activeTab === "gratitude" ? styles.active : ""}`}
          onClick={() => setActiveTab("gratitude")}
        >
          Gratitude
        </button>*/}
        <div
          className={`${styles.tabUnderline} ${activeTab === "testimonials" ? styles.left : activeTab === "reviews" ? styles.right : styles.right}`}
        />
      </div>
      <div className={styles.reviewscroll}>   
      {activeTab === "testimonials" && (
        <div className={styles.testimonialsSection} id='#testimonials'>
          <Testimonials />
        </div>
      )}
      {activeTab === "reviews" && (
        <div className={styles.reviewSection_content} id='#reviews'>
     
          <div id="healthgrades" className={styles.healthgSection}>
          <div className={styles.healrespo}>
        <img src='/img/healthgrades-icon.svg' alt="Healthgrades Icon" className={styles.reviewIcon} />
        <div>
        <a href="https://www.healthgrades.com/physician/dr-roger-hartl-yy2qb?referrerSource=autosuggest" target="_blank" rel="noopener noreferrer" className={styles.moreLink}>See Source</a>
        </div>
        </div>
            <HealthgradesReview />
          </div>
          <div id="vitals" className={styles.vitalsSection} >
          <div className={styles.reviewHeader}>
          <div className={styles.healrespo}>
        <img src='/img/vitals.svg' alt="Vitals Icon" className={styles.reviewIcon2} />
        <div>
        <a href="https://www.vitals.com/doctors/Dr_Roger_Hartl.html" target="_blank" rel="noopener noreferrer" className={styles.moreLinkvitals}>See Source</a>
        </div>
     </div>
      </div>
            <VitalsReview />
          </div>

          <div id="healthgrades" className={styles.googlesSection}>
          <div className={styles.healrespo}>
        <img src='/img/google_icon.svg' alt="Healthgrades Icon" className={styles.reviewIcon} />
        <div>
        <a 
  href="https://www.google.com/search?q=dr%20hartl%20google%20reviews&client=safari&rls=en&biw=1448&bih=733&ei=CJ_qYoGPINmHptQPr5uh8AM&oq=dr+hartl+google+r&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCCEQoAEyBQghEKsCMgUIIRCrAjIICCEQHhAWEB0yCAghEB4QFhAdMggIIRAeEBYQHTIICCEQHhAWEB0yCAghEB4QFhAdMggIIRAeEBYQHTIICCEQHhAWEB06BwgAEEcQsANKBAhBGABKBAhGGABQnAVYnAVgxxdoAXABeACAAV-IAV-SAQExmAEAoAEByAEFwAEB&sclient=gws-wiz&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=11833861767777315527&lqi=ChdkciBoYXJ0bCBnb29nbGUgcmV2aWV3cyIFOAGIAQFI5unAv-WAgIAIWhAQABABGAEiCGRyIGhhcnRskgEMbmV1cm9zdXJnZW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6YzA5RFpXeEJSUkFCqgEQEAEqDCIIZHIgaGFydGwoAA&ved=2ahUKEwiIsrPNiKv5AhXdkIkEHexIBQMQvS56BAgaEAE&sa=X&rlst=f#lkt=LocalPoiReviews&rlfi=hd:;si:11833861767777315527,l,ChdkciBoYXJ0bCBnb29nbGUgcmV2aWV3cyIFOAGIAQFI5unAv-WAgIAIWhAQABABGAEiCGRyIGhhcnRskgEMbmV1cm9zdXJnZW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6YzA5RFpXeEJSUkFCqgEQEAEqDCIIZHIgaGFydGwoAA;mv:[[40.7653584,-73.953091],[40.7603539,-73.9654797]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2" 

  target="_blank" 
  rel="noopener noreferrer" 
  className={styles.moreLinkgoogle}
>
  See Source
</a>

        </div>
        </div>
            <GoogleReview/>
          </div>
        </div>
      )}
      {activeTab === "gratitude" && (
        <div id='#gratitude'>
          <Gratitude />
        </div>
      )}
        </div>
    </section>
  );
};

export default ReviewPage;
