import React from 'react';
import Link from 'next/link';
import styles from './MaterialComponent.module.scss';

const MaterialComponent: React.FC = () => {
  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url('img/research.jpeg')` }}>
        <div className={styles.content}>
          <h1>Materials & Resources</h1>
          <p>Explore our comprehensive resources for pre-operative and post-operative care.</p>
        </div>
      </div>
      
      <div className={styles.materialLinks}>
        <div className={styles.materialGroup}>
          <h2>Pre-Operative Information</h2>
          <ul>
            <li><Link href="/Materials/surgical-guide-minimally-invasive-tubular-surgery">Surgical Guide for Minimally Invasive Tubular Surgery</Link></li>
            <li><Link href="/materials/surgical-guide-minimally-invasive-tlif">Surgical Guide for Minimally Invasive TLIF</Link></li>
            <li><Link href="/materials/surgical-guide-elif-xlif-llif-dlif">Surgical Guide for ELIF, XLIF, LLIF, DLIF</Link></li>
            <li><Link href="/materials/surgical-guide-laminoplasty">Surgical Guide for Laminoplasty</Link></li>
            <li><Link href="/materials/surgical-guide-cervical-disc-arthroplasty">Cervical Disc Arthroplasty</Link></li>
          </ul>
        </div>
        
        <div className={styles.materialGroup}>
          <h2>Post-Operative Information</h2>
          <ul>
            <li><Link href="/materials/post-op-instructions">Post-Op Instructions</Link></li>
            <li><Link href="/materials/post-op-posture">Post-Op Posture</Link></li>
            <li><Link href="/materials/hans-kraus-post-op-exercises">Hans-Kraus Post-Op Exercises</Link></li>
            <li><Link href="/materials/post-op-activity-timeline">Post-Op Activity Timeline</Link></li>
            <li><Link href="/materials/dr-ricky-singh-exercises">Dr. Ricky Singh&apos;s Exercises &gt; 6 Weeks After Surgery</Link></li>
          </ul>
        </div>

        {/* Referrals Section */}
        <div className={styles.materialGroup}>
          <h2>Referrals</h2>
          <ul>
            <li><Link href="/materials/physical-therapy-chiropractors">Physical Therapy and Chiropractors</Link></li>
            <li><Link href="/materials/braces-lumbar-support">Braces for Lumbar Support</Link></li>
            <li><Link href="/materials/pillows-neck-pain">Pillows for Neck Pain</Link></li>
            <li><Link href="/materials/spine-center-referrals">Spine Center Referrals</Link></li>
            <li><Link href="/materials/neurology-referrals">Neurology Referrals</Link></li>
            <li><Link href="/materials/norman-marcus-pain-referral">Norman Marcus Pain Referral</Link></li>
            <li><Link href="/materials/weill-cornell-imaging-locations">Weill Cornell Imaging Locations</Link></li>
            <li><Link href="/materials/psychology-referrals">Psychology Referrals</Link></li>
            <li><Link href="/materials/hss-ortho-referrals">HSS Ortho Referrals</Link></li>
          </ul>
        </div>

        {/* YouTube & Patient Education Materials Section */}
        <div className={styles.materialGroup}>
          <h2>Dr. Härtl's YouTube Channel & Other Patient Education Materials</h2>
          <ul>
            <li><Link href="/materials/testimonials">Testimonials</Link></li>
            <li><Link href="/materials/surgical-videos">Surgical Videos</Link></li>
            <li><Link href="/materials/spine-time">Spine Time</Link></li>
            <li><Link href="/materials/patient-education-smiss-videos">Patient Education SMISS Videos</Link></li>
            <li><Link href="/materials/about-och-spine-hospital">About Och Spine Hospital</Link></li>
            <li><Link href="/materials/finding-balance-neurosurgery">Finding Your Balance in Neurosurgery</Link></li>
            <li><Link href="/materials/other">Other</Link></li>
          </ul>
        </div>

        {/* Healthy Spine Section */}
        <div className={styles.materialGroup}>
          <h2>Healthy Spine</h2>
          <ul>
            <li><Link href="/materials/sports-activities-beneficial-harmful-back">Sports Activities Beneficial or Harmful to Your Back</Link></li>
            <li><Link href="/materials/vitamins-supplements">Vitamins and Supplements</Link></li>
            <li><Link href="/materials/10-rules-healthy-back">10 Rules for a Healthy Back</Link></li>
            <li><Link href="/materials/tips-tricks-protecting-spine">Tips and Tricks for Protecting Your Spine</Link></li>
            <li><Link href="/materials/supplements-nerve-regeneration">Supplements for Nerve Regeneration</Link></li>
            <li><Link href="/materials/tai-chi">Tai Chi</Link></li>
            <li><Link href="/materials/book-recommendations-dr-hartl">Book Recommendations by Dr. Härtl</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MaterialComponent;
