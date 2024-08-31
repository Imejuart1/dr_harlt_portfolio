import React from 'react';
import Link from 'next/link';
import styles from './MaterialComponent.module.scss';

const MaterialComponent: React.FC = () => {
  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url('img/research.jpeg')` }}>
        <div className={styles.content}>
          <h1>Materials & Resources</h1>
          <p>Explore our comprehensive resources for pre-operative, post-operative care, referrals,heatlhy spine and Imaging</p>
        </div>
      </div>
      
      <div className={styles.materialLinks}>
        <div className={styles.materialGroup}>
          <h2>Pre-Operative Information</h2>
          <ul>
            <li><Link href="/Materials/surgical-guide-minimally-invasive-tubular-surgery">Surgical Guide for Minimally Invasive Tubular Surgery</Link></li>
            <li><Link href="/Materials/surgical-guide-minimally-invasive-tlif">Surgical Guide for Minimally Invasive TLIF</Link></li>
            <li><Link href="/Materials/surgical-guide-elif-xlif-llif-dlif">Surgical Guide for ELIF, XLIF, LLIF, DLIF</Link></li>
            <li><Link href="/Materials/surgical-guide-laminoplasty">Surgical Guide for Laminoplasty</Link></li>
            <li><Link href="https://www.nuvasive.com/procedures/ctdr/" target='__blank'>Cervical Disc Arthroplasty</Link></li>
            <li><Link href="https://drive.google.com/file/d/1JxGHNL9sgi19ncuJDXJkeAtblMfRLsCi/view" target='__blank'>Occipitocervical Fusion</Link></li>
          </ul>
        </div>
        
        <div className={styles.materialGroup}>
          <h2>Post-Operative Information</h2>
          <ul>
            <li><Link href="/Materials/post-op-instructions">Post-Op Instructions</Link></li>
            <li><Link href="/Materials/post-op-posture">Post-Op Posture</Link></li>
            <li><Link href="/Materials/hans-kraus-post-op-exercises">Hans-Kraus Post-Op Exercises</Link></li>
            <li><Link href="/Materials/post-op-activity-timeline">Post-Op Activity Timeline</Link></li>
            <li><Link href="https://www.rickysinghmd.com/exercises/" target='__blank'>Dr. Ricky Singh&apos;s Exercises &gt; 6 Weeks After Surgery</Link></li>
          </ul>
        </div>

        {/* Referrals Section */}
        <div className={styles.materialGroup}>
          <h2>Referrals</h2>
          <ul>
            <li><Link href="/Materials/physical-therapy-chiropractors">Physical Therapy and Chiropractors</Link></li>
            <li><Link href="/Materials/braces-lumbar-support">Braces for Lumbar Support</Link></li>
            <li><Link href="https://www.amazon.com/UTTU-Sandwich-Adjustable-Orthopedic-CertiPUR-US/dp/B079FK5QKD?th=1"
            target='__blank'>Pillows for Neck Pain</Link></li>
            <li><Link href="/Materials/spine-center-referrals">Spine Center Referrals</Link></li>
            <li><Link href="/Materials/neurology-referrals">Neurology Referrals</Link></li>
            <li><Link href="/Materials/norman-marcus-pain-referral">Norman Marcus Pain Referral</Link></li>
            <li><Link href="/Materials/weill-cornell-imaging-locations">Weill Cornell Imaging Locations</Link></li>
            <li><Link href="/Materials/psychology-referrals">Psychology Referrals</Link></li>
            <li><Link href="/Materials/hss-ortho-referrals">HSS Ortho Referrals</Link></li>
          </ul>
        </div>

        {/* Healthy Spine Section */}
        <div className={styles.materialGroup}>
          <h2>Healthy Spine</h2>
          <ul>
            <li><Link href="/Materials/sports-activities-beneficial-harmful-back">Sports Activities Beneficial or Harmful to Your Back</Link></li>
            <li><Link href="/Materials/vitamins-supplements">Vitamins and Supplements</Link></li>
            <li><Link href="/Materials/10-rules-healthy-back">10 Rules for a Healthy Back</Link></li>
            <li><Link href="/Materials/tips-tricks-protecting-spine">Tips and Tricks for Protecting Your Spine</Link></li>
            <li><Link href="/Materials/supplements-for-nerve-regeneration" target='__blank'>Supplements for Nerve Regeneration</Link></li>
            <li><Link href="https://wa-qi.com/">Tai Chi</Link></li>
            <li><Link href="/Materials/book-recommendations-dr-hartl">Book Recommendations by Dr. Härtl</Link></li>
          </ul>
        </div>

         {/* YouTube & Patient Education Materials Section */}
         <div className={styles.materialGroup}>
          <h2>Dr. Härtl&apos;s YouTube Channel & Other Patient Education Materials</h2>
          <ul>
            
            <li><Link href="/Materials/surgical-videos">Surgical Videos</Link></li>
            <li><Link href="/Materials/spine-time">Spine Time</Link></li>
            <li><Link href="https://smiss.org/patient-education-videos/" target='_blank'>Patient Education SMISS Videos</Link></li>
            <li><Link href="https://www.nyp.org/ochspine/services" target='_blank'>About Och Spine Hospital</Link></li>
            <li><Link href="/Materials/finding-balance-neurosurgery">Finding Your Balance in Neurosurgery</Link></li>
            <li><Link href="/Materials/other">Exhibitiion tour</Link></li>
            <li><Link href="/Materials/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className={styles.materialGroup}>
          <h2>Upload Imaging</h2>
          <ul>
            
            <li><Link href="/Materials/ambra-Instructions">Ambra Instructions</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MaterialComponent;
