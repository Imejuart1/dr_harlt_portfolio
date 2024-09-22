// src/app/carousels/PatientTestimonials/PatientTestimonials.tsx
import React from 'react';
import styles from './PatientTestimonial.module.scss';
import Link from 'next/link';

interface Testimonial {
  image: string;
  title: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/img/stories1.png",
    title: "Overcoming Spine Challenges",
    link: "https://neurosurgery.weillcornell.org/patient-story/more-precision-less-incision-augmented-reality-spine-tumor-story"
  },
  {
    image: "/img/stories2.png",
    title: "Going for the Win: A Spine Tumor Story",
    link: "https://neurosurgery.weillcornell.org/patient-story/going-win-spine-tumor-story"
  },
  {
    image: "/img/stories3.png",
    title: "Alicia Ortega: Dr. Härtl Is My Angel!",
    link: "https://neurosurgery.weillcornell.org/patient-story/alicia-ortega-dr-h%C3%A4rtl-my-angel"
  },
  {
    image: "/img/stories4.png",
    title: "I Was Like the Leaning Tower of Pisa Before!",
    link: "https://neurosurgery.weillcornell.org/patient-story/i-was-leaning-tower-pisa"
  },
  {
    image: "/img/stories5.png",
    title: "The Very First Rung on a Very Tall Ladder",
    link: "https://neurosurgery.weillcornell.org/patient-story/very-first-rung-very-tall-ladder"
  },
  {
    image: "/img/stories6.png",
    title: "Navigating Back to Normal Life",
    link: "https://neurosurgery.weillcornell.org/patient-story/navigating-back-normal-life"
  },
  {
    image: "/img/stories7.png",
    title: "Going for It: A Patient Story",
    link: "https://neurosurgery.weillcornell.org/patient-story/going-it-patient-story"
  },
];

const PatientTestimonials: React.FC = () => {
  return (
    <section className={styles.vitalsSection}>
    <p>Read personal stories and experiences shared by Dr. Hartls&apos; patients.</p>
    
    <div className={styles.container}>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <Link key={index} href={testimonial.link} passHref target='__blank'>
            <div className={styles.testimonialCard}>
              <img src={testimonial.image} alt={testimonial.title} className={styles.testimonialImage} />
              <div className={styles.testimonialTitle}>{testimonial.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
};

export default PatientTestimonials;
