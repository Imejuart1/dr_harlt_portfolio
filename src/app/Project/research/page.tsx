"use client";
import React from 'react';
import Link from 'next/link';
import styles from './research.module.scss';

const ResearchComponent = () => {
    return (
        <section className={styles.researchSection}>
            {/* Hero Section */}
            <div className={styles.heroSection} style={{ backgroundImage: `url('/img/stemcells2.jpeg')` }}>
                <div className={styles.content}>
                    <h1>Research Projects</h1>
                    <p>Discover our cutting-edge research that is shaping the future of spinal care and regeneration.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
                <div className={styles.imageContainer2}>
                    <img src="/img/stemcells.png" alt="Research Imagse" />
                </div>
                <div className={styles.textContainer}>
                    <h2>Guide for Stem Cell Procedure</h2>
                    <p>This guide outlines the procedure for stem cell treatment aimed at spinal regeneration. It is part of our ongoing efforts to innovate and improve patient care.</p>
                    <Link href="/Materials/stem-cell-guide">Learn More</Link>
                </div>
            </div>

            {/* Additional Content Sections */}
            <div className={styles.contentSection}>
            <div className={styles.textContainer } style={{marginRight:'0.3rem', paddingLeft:'0'}}>
                    <h2>Disc Degeneration Repair and Reproduction</h2>
                    <p>Our research into disc degeneration repair focuses on novel techniques to regenerate damaged spinal discs, offering hope to patients suffering from chronic back pain.</p>
                    <Link href="/Materials/disc-degeneration">Learn More</Link>
                </div>
                <div className={styles.imageContainer2}>
                    <img src="/img/spinexx.png" alt="Disc Degeneration Repair" />
                </div>
               
            </div>

            <div className={styles.contentSection}>
                <div className={styles.imageContainer2}>
                    <iframe src="https://player.vimeo.com/video/792032374?h=d361c1d124&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  allowFullScreen/>
                
                </div>
                <div className={styles.textContainer}>
                    <h2>Dr. Härtl&apos;s Lecture About BMAC for Disc Regeneration</h2>
                    <p>In this lecture, Dr. Härtl discusses the latest advancements in BMAC (Bone Marrow Aspirate Concentrate) for disc regeneration and its implications for future treatments.</p>
                    <Link href="https://vimeo.com/792032374/d361c1d124">Watch Lecture</Link>
                </div>
            </div>
        </section>
    );
};

export default ResearchComponent;

