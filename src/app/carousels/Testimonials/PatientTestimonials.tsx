// src/app/carousels/PatientTestimonials/PatientTestimonials.tsx
import React from 'react';
import styles from './PatientTestimonials.module.scss';
import Link from 'next/link';

interface Testimonial {
  image: string;
  title: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/img/testimonial1.jpg",
    title: "Overcoming Spine Challenges",
    link: "https://example.com/testimonial1"
  },
  {
    image: "/img/testimonial2.jpg",
    title: "A Journey Through Recovery",
    link: "https://example.com/testimonial2"
  },
  // Add more testimonials as needed
];

const PatientTestimonials: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Patient Testimonials</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <Link key={index} href={testimonial.link} passHref>
            <div className={styles.testimonialCard}>
              <img src={testimonial.image} alt={testimonial.title} className={styles.testimonialImage} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PatientTestimonials;
