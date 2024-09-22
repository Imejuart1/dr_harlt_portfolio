// src/app/carousels/SurgeonReview/SurgeonReview.tsx
import React from 'react';
import styles from './SurgeonReview.module.scss';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

interface SurgeonReviewProps {
  image: string;
  name: string;
  title: string;
  location: string;
  review: string;
}

const surgeonReviews: SurgeonReviewProps[] = [
  {
    image: "/img/Anasurgeonjpeg.jpeg",
    name: "ANABEL EUÁN GUTIÉRREZ, MD",
    title: "Orthopaedic Surgeon/Spine Surgeon",
    location: "Cancun, Mexico",
    review: `Becoming part of Dr. Roger ́s Härtl Fellows in Minimally Invasive Spine Surgery was such a privilege and an enriching experience; it helped me to understand better and apply all the knowledge of MISS with my patients.
Dr. Roger Härtl is such a very experienced spine surgeon and such a caring and gentle human being. I appreciate the opportunity I had to learn with him and his amazing team, I will always be thankful for such experience and knowledge and for the fact that I ́m now able to offer my patients different surgery options for their spine conditions.
Currently, I ́m a Spine Surgeon at the Hospital Galenia Cancun and a Spine Surgeon of the Spine Clinic at the Neurological Center of the “Hospital Galenia Cancun”.`
  },
  // Add more reviews as needed
];

const SurgeonReview: React.FC = () => {
  return (
    <section className={styles.vitalsSection}>
    <div className={styles.contentSS}>
    <h2 className={styles.sectionTitle}>
    <FontAwesomeIcon icon={faUserDoctor} className={styles.icon} fixedWidth/> 
      Surgeon&apos;s Reviews
      </h2>
    <p>See what top surgeon have to say about Dr. Hartl</p>
  </div>
    <div className={styles.container}>
      {surgeonReviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.reviewTextContainer}>
            <p className={styles.reviewText}>{review.review}</p>
          </div>
          <div className={styles.surgeonDetailsContainer}>
            <img src={review.image} alt={`Dr. ${review.name}`} className={styles.surgeonPhoto} />
            <div className={styles.surgeonDetails}>
              <h3 className={styles.surgeonName}>{review.name}</h3>
              <h4 className={styles.surgeonTitle}>{review.title}</h4>
              <p className={styles.surgeonLocation}>{review.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default SurgeonReview;
