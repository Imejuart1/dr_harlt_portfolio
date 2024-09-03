// src/components/ProjectSummaryCarousel.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faLightbulb, faHandshake, faUserCircle } from '@fortawesome/free-regular-svg-icons'; // Using different regular icons
import styles from './ProjectSummaryCarousel.module.scss';

const projectSummaries = [
    {
        title: "Research",
        text: "Shaping the future of spinal care with cutting-edge research.",
        imageUrl: "img/stemcells2.jpeg",
        link: "/Project/research",
        icon: faLightbulb, // Regular lightbulb icon for innovative research
    },
    {
        title: "Tanzania",
        text: "Dr. Roger Hartl's 15-year journey creating a global impact from New York to Tanzania.",
        imageUrl: "img/tanzania.png",
        link: "/Project/tanzania-project",
        icon: faHandshake, // Regular handshake icon for global collaboration
    },
    {
        title: "Physician Education",
        text: "Join our summer master class in tubular decompression, now open for registration.",
        imageUrl: "img/nycmiss.webp",
        link: "https://nyc-miss.org/",
        icon: faUserCircle, // Regular user circle icon for medical education
    },
];

const ProjectSummaryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projectSummaries.length);
        }, 5000); // Change slide every 4 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={styles.projectSection}>
            <h2 className={styles.sectionTitle}>
                <FontAwesomeIcon icon={faLightbulb} className={styles.icon} /> Explore Our Projects
            </h2>
            <p className={styles.sectionIntro}>
                Delve into our groundbreaking research, international collaborations, and advanced educational programs. Each project is designed to push the boundaries of spinal care and global health initiatives.
            </p>

            <div className={styles.carousel}>
                {projectSummaries.map((project, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                    >
                        <div className={styles.overlay}>
                            <h3><FontAwesomeIcon icon={project.icon} className={styles.icon} /> {project.title}</h3>
                            <p>{project.text}</p>
                            <Link href={project.link}>
                                Learn More <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSummaryCarousel;
