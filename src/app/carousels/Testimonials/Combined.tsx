// src/app/carousels/CombinedTestimonials/CombinedTestimonials.tsx
import React from 'react';
import styles from './CombinedTestimonials.module.scss';
import PatientTestimonials from './PatientTestimonials';
import Testimonials from './Testimonials';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const CombinedTestimonials: React.FC = () => {
  return (
    <div className={styles.combinedContainer}>
          <div className={styles.contentSS}>
         <Link href='/Reviews'>
    <h2 className={styles.sectionTitle}>
    {/*<FontAwesomeIcon icon={faThumbsUp} className={styles.icon} />*/} Patient Testimonials</h2>
    </Link>
<p>Discover firsthand accounts from patients who have experienced transformative care under Dr. Härtl. Their stories illuminate the profound impact of his expertise on their lives and well-being.</p>

</div>
    
      <PatientTestimonials />
      <Testimonials />
    </div>
  );
};

export default CombinedTestimonials;
