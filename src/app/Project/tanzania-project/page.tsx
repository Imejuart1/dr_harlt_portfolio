"use client";
import React from 'react';
import Link from 'next/link';
import styles from './research.module.scss';

const tanzania = () => {
    return (
        <section className={styles.researchSection}>
            {/* Hero Section */}
            <div className={styles.heroSection} style={{ backgroundImage: `url('/img/tanzania.png')` }}>
                <div className={styles.content}>
                    <h1>Tanzania Project</h1>
                    <p>The Tanzania Neurosurgery Project is conducted by Weill Cornell Medicine Neurological Surgery ...</p>
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
                <div className={styles.imageContainer2}>
                    <img src="/img/tanzania.png" alt="Research Imagse" />
                </div>
                <div className={styles.textContainer}>
                    <h2>Homepage</h2>
                    <p>The Tanzania Neurosurgery Project is conducted by Weill Cornell Medicine
                         Neurological Surgery in collaboration 
                         with the Foundation for International Education in Neurological Surgery (FIENS), Each year we hold a “hands-on” course for doctors and nurses in Tanzania, empowering them 
                         with a high level of expertise in the management of neurosurgical disorders and neurosurgical procedures. </p>
                    <Link href="https://tanzanianeurosurgery.org/" target='__blank'>Official Website</Link>
                </div>
            </div>

            {/* Additional Content Sections */}
            <div className={styles.contentSection}>
    <div className={styles.textContainer}>
        <h2>From Tanzania to the Operating Room: </h2>
        <p>A Spine Neurosurgeon&apos;s Mission | The Rad & Norty Show ,This episode of The Rad & Norty Show features an inspiring conversation with a renowned spine neurosurgeon Dr. Härtl, sharing his incredible journey from Tanzania to becoming a leading expert in the operating room.
           Tune in to hear about his challenges, successes, 
           and his commitment to helping patients worldwide.</p>
        <Link 
            href="https://www.youtube.com/live/qspmogrSnos?si=iTi1ium70-jnKHyO"
            target="_blank" rel="noopener noreferrer">Watch Video</Link>
    </div>
    <div className={styles.imageContainer2}>
    <iframe 
    src="https://www.youtube.com/embed/qspmogrSnos" 
    allowFullScreen
    width="100%" 
    height="400" 
    frameBorder="0">
</iframe>
    </div>
</div>

            <div className={styles.contentSection}>
                <div className={styles.textContainer}>
                    <h2>MOI Tanzania TV 2023 Feature</h2>
                    <p>International training on the brain, spine, and nervous system held in Tanzania </p>
                    <Link 
                    href="https://www.youtube.com/watch?v=ceQxOqsr2uE"
                    target='__blank'>Watch Video</Link>
                </div>
                <div className={styles.imageContainer2}>
                <iframe src="https://www.youtube.com/embed/ceQxOqsr2uE?si=BV1-7JrOtsmTXvBc"  allowFullScreen/>
                </div>
            </div>

            <div className={styles.contentSection}>
                <div className={styles.textContainer}>
                    <h2>MOI Tanzania TV 2024 Feature</h2>
                    <p>International training on the brain, spine, and nervous system held in Tanzania </p>
                    <Link 
                    href="https://drive.google.com/file/d/1zy6W0SSJBaY2R508r-mBnbMfjh1b_loe/view"
                    target='__blank'>Watch Video</Link>
                </div>
                <div className={styles.imageContainer2}>
                <iframe src="https://drive.google.com/file/d/1zy6W0SSJBaY2R508r-mBnbMfjh1b_loe/preview"  allowFullScreen/>
                </div>
            </div>
            <div className={styles.contentSection}>
            <div className={styles.textContainer } style={{marginRight:'0.3rem', paddingLeft:'0'}}>
                    <h2>Becker&apos;s Hospital Review: First 3D Navigated Spinal Surgery in sub-Saharan Africa Feature</h2>
                    <p>Roger Härtl, MD, director of neurosurgery spine for New York City-based Weill Cornell Medicine and co-director for New York Presbyterian OCH Spine, 
                        has performed the first spine case using 3D navigation in sub-Saharan Africa... </p>
                    <Link href="https://www.beckersspine.com/spine/56558-dr-roger-haertl-performs-1st-3d-navigation-spinal-surgery-in-sub-saharan-africa.html" target='__blank'>Learn More</Link>
                </div>
                <div className={styles.imageContainer2}>
                    <img src="/img/becktan.webp" alt="Disc Degeneration Repair" />
                </div>
               
            </div>

            <div className={styles.contentSection}>
                <div className={styles.imageContainer2}>
                <img src="/img/tanzaniaroger.jpg" alt="Disc Degeneration Repair" /> 
                </div>
                <div className={styles.textContainer}>
                    <h2>Becker&apos;s Hospital Review: From New York to Tanzania</h2>
                    <p>From New York to Tanzania: How Dr. Roger Härtl has spent 15 years creating a global impact,He sought out ways to return to Africa through Doctors Without Borders and the Bill Gates Foundation but was told they had no need for spine and neurosurgeons; 
                        only infectious disease specialists. </p>
                    <Link 
                    href="https://www.beckersspine.com/spine/56825-from-new-york-to-tanzania-how-dr-roger-hartl-has-spent-15-years-creating-a-global-impact.html"
                    target='__blank'>Learn More</Link>
                </div>
            </div>

           
        </section>
    );
};

export default tanzania;

