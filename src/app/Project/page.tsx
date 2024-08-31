"use client";
import React from 'react';
import Link from 'next/link';
import styles from './ProjectComponent.module.scss';

const projectSections = [
    {
        title: "Research",
        imageUrl: "img/ROGERSPINER.png", // Replace with your actual image paths
        link: "img/ROGERSPINER.png",
    },
    {
        title: "Tanzania",
        imageUrl: "path-to-tanzania-image.jpg", // Replace with your actual image paths
        link: "/projects/tanzania",
    },
    {
        title: "Imaging",
        imageUrl: "path-to-imaging-image.jpg", // Replace with your actual image paths
        link: "/projects/imaging",
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
                        <Link href={section.link}>Learn More</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectComponent;
