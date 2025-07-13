import React from 'react';
import styles from './Bio.module.scss';
import Link from 'next/link';

const Bio: React.FC = () => {
  return (
    <section className={styles.bioSection}>
<div className={styles.headerSection}>
        <h1>Roger Härtl, M.D.</h1>
        <p className={styles.title}>
          Hansen-MacDonald Professor of Neurological Surgery<br />
          Director of Neurosurgery Spine, Weill Cornell Medicine<br />
          Neurosurgical Director, Och Spine at NewYork-Presbyterian/Weill Cornell Medical Center<br />
        </p>
        <div className={styles.specialties}>
        <strong>Specialties:</strong>
<ul className={styles.specialtiesGrid}>
  <li>Minimally Invasive Spinal Surgery</li>
  <li>Spinal Microsurgery</li>
  <li>Spinal Tumors</li>
  <li>Microdiscectomy</li>
  <li>Spondylolisthesis</li>
  <li>Minimally Invasive Spinal Fusion</li>
  <li>Cervical Laminoplasty</li>
  <li>Motion Preserving Spine Surgery</li>
  <li>Disc Arthroplasty</li>
  <li>Spine Injuries in the Athlete</li>
  <li>Sports Trauma</li>
  <li>Augmented Reality</li>
  <li>3D Navigation</li>
  <li>Minimally Invasive Decompression of Spinal Stenosis</li>
</ul>

</div>

        <div>Contact: (212) 746-2152, or click <Link href='/Contact'><b>here.</b></Link></div>
      </div>
      <div className={styles.content}>
        {/* Section 1: Image on left */}
        <div id="personal-statement" className={styles.section}>
          <div className={styles.imageSection}>
            <img src="/img/roger2.jpg" alt="Dr. Roger Härtl" className={styles.profileImage} />
          </div>
          <div className={styles.textSection}>
            <h2>Mission</h2>
            <p>
             My mission is to bring together leading experts and streamlined services to deliver complete care for back and neck problems—all in one convenient location. Surgery is just one of the tools we offer. And when it&apos;s needed, I focus on the least invasive, most effective option to help patients return to the life and activities they love.
            </p>
  <h2>Pledge to My Patients:</h2>
  <ol className={styles.pledgeList}>
    <li>
      Interdisciplinary approach to identify the source of your pain and any other symptoms you may be experiencing.
    </li>
    <li>
      My treatment approach always begins with the least invasive option depending on the severity of your symptoms.
    </li>
    <li>
      If surgery is recommended, I will always offer the least invasive surgical option that is safe, effective, and has excellent long-term outcomes.
    </li>
    <li>
    I will be with you throughout this journey, from diagnosis to treatment to recovery and beyond.
    </li>
  </ol>
          </div>
        </div>
        <div id="biography" className={styles.section}>
          <div className={styles.textSection}>
  <h2>Biography</h2>
  <ul className={styles.biographyList}>
    <li>Hansen-MacDonald Professor of Neurological Surgery</li>
    <li>Named one of the best spine surgeons in the U.S. by Newsweek</li>
    <li>Director of Neurosurgery Spine at Weill Cornell Medicine and Co-director of NewYork-Presbyterian Och Spine</li>
    <li>Founder and Co-Director of the Och Spine at NewYork-Presbyterian/Weill Cornell Medicine Center for Comprehensive Spine Care</li>
    <li>Neurosurgeon for the New York Giants Football Team</li>
    <li>Pioneer and leader in minimally invasive spinal surgery and computer-assisted spinal navigation surgery</li>
    <li>Expert in biological approaches for disc repair and regeneration</li>
    <li>Patients come from all over the globe, including physicians, surgeons, and even other neurological and spine surgeons</li>
    <li>Repeatedly named to the lists of New York Super Doctors, America&apos;s Top Surgeons, and America&apos;s Best Doctors, and included on the list of New York&apos;s Best Doctors in <em>New York</em> magazine</li>
    <li>Authored over 300 scholarly articles in peer-reviewed journals and three books on minimally invasive spinal surgery and biological disc repair and regeneration</li>
  </ul>
</div>

        </div>

        {/* Section 3: Image on left */}
        <div id="training" className={styles.section}>
          <div className={styles.textSection}>
            <h2>Training</h2>
            <ul className={styles.List}>
    <li>M.D. from the Ludwig-Maximilians University in Munich, Germany</li>
    <li>Neurosurgery residency at NewYork-Presbyterian/Weill Cornell Medical Center and Memorial Sloan-Kettering Cancer Center</li>
    <li>Fellowship in complex spine surgery at the Barrow Neurological Institute in Phoenix under Dr. Volker Sonntag</li>
  </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
