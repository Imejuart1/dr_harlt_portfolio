// components/HomeSummary.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClipboardList, 
  faStethoscope, 
  faUsers, 
  faBone, 
  faVideo, 
  faUpload ,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import styles from './MaterialSummaryCarousel.module.scss';

interface SummaryItem {
  icon: any;
  title: string;
  description: string;
  link: string;
}

const summaryItems: SummaryItem[] = [
  {
    icon: faClipboardList,
    title: "Pre-Operative Information",
    description: "Prepare for your surgery with our comprehensive guides and resources.",
    link: "/Materials#pre-operative-information",
  },
  {
    icon: faStethoscope,
    title: "Post-Operative Information",
    description: "Ensure a smooth recovery with our post-op instructions and support.",
    link: "/Materials#post-operative-information",
  },
  {
    icon: faUsers,
    title: "Referrals",
    description: "Access trusted referrals for physical therapy, imaging, and more.",
    link: "/Materials#referrals",
  },
  {
    icon: faBone,
    title: "Healthy Spine",
    description: "Learn tips and exercises to maintain a healthy and strong spine.",
    link: "/Materials#healthy-spine",
  },
  {
    icon: faVideo,
    title: "Patient Education Videos",
    description: "Watch insightful videos from Dr. Härtl and his patients.",
    link: "/Materials#youtube-education",
  },
  {
    icon: faUpload,
    title: "Upload Imaging",
    description: "Easily upload and manage your medical imaging for consultations.",
    link: "/Materials#upload-imaging",
  },
];

const HomeSummary: React.FC = () => {
  return (
    <section className={styles.homeSummarySection}>
      <Link href='/Materials'>
       <h2 className={styles.header}>
        {/*<FontAwesomeIcon icon={faBook} className={styles.icon} />*/} Materials
      </h2> </Link>
      <p className={styles.description}>Explore Our Key Resources</p>
     
      <div className={styles.summaryGrid}>
        {summaryItems.map((item, index) => (
          <Link href={item.link} key={index} className={styles.summaryCard}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={item.icon} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeSummary;
