"use client";
import React from 'react';
import Link from 'next/link';
import styles from './ProjectComponent.module.scss';

const projectSections = [
    {
        title: "Biological Research",
        imageUrl: "/img/Researchnew.jpeg", // Replace with your actual image paths
       text:"Discover our cutting-edge research that is shaping the future of spinal care and regeneration",
        link: "Project/research",
    },
    {
        title: "Tanzania",
        imageUrl: "/img/tanzania.png", // Replace with your actual image paths
        text:"From New York to Tanzania: How Dr. Roger Härtl has spent 15 years creating a global impact,He sought out ways to return to Africa through Doctors Without Borders",
        link: "Project/tanzania-project",
    },
    {
        title: "Physician Education ",
        imageUrl: "/img/nycmiss.webp", // Replace with your actual image paths
        text:'Our summer master class in tubular decompression now open for registration',
        link: "https://nycmiss.org/",
    },
    {
        title: "Art and Spine",
        imageUrl: "/img/newhartl6.jpg", // Replace with your actual image paths
        text:'Explore Exhibition tours with Dr. Härtl.',
        link: "/Materials/other",
    },
    // Add more sections as needed
];

const ProjectComponent = () => {
    return (
        <section className={styles.projectSection}>
            {/* Hero Section */}
            <div className={styles.heroSection} style={{ backgroundImage: `url('/img/ROGERSPINER.png')` }}>
                <div className={styles.content}>
                    <h1>Explore Our Projects</h1>
                    <p>Delve into our groundbreaking research, international collaborations, and advanced imaging projects.</p>
                </div>
            </div>

            {/* Project Grid */}
            <div className={styles.projectGrid}>
                {projectSections.map((section, index) => (
                    <div key={index} className={styles.projectItem}>
                        <img src={section.imageUrl} alt={section.title} />
                        <h3>{section.title}</h3>
                        <p>{section.text}</p>
                        <Link href={section.link} target="__blank">Learn More</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectComponent;
