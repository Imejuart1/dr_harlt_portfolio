"use client";

import Link from "next/link";
import { useRef } from "react";

import styles from "./HeroSection.module.scss";

const hero = {
  image: "/img/Herowebb.png",
  title: "Roger Härtl, MD",
  subtitle:
    "Spine Surgeon at Och Spine, NewYork-Presbyterian/Weill Cornell Medicine",
  buttonText: "Contact Dr. Härtl",
  link: "/Contact",
  topicLinks: [
    { href: "/spine-surgeon-new-york", label: "Spine Surgeon in New York" },
    {
      href: "/cervical-laminoplasty-new-york",
      label: "Cervical Laminoplasty",
    },
    { href: "/acdf-neurosurgery-nyc", label: "ACDF Neurosurgery in NYC" },
    {
      href: "/best-neurosurgeon-nyc",
      label: "One of the Best Neurosurgeons in NYC",
    },
  ],
};

const HeroSection = () => {
  const topicLinksRef = useRef<HTMLDivElement>(null);

  const scrollTopics = (direction: "left" | "right") => {
    const offset = direction === "left" ? -220 : 220;

    topicLinksRef.current?.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className={styles.content}>
        <h1>{hero.title}</h1>
        <h2>{hero.subtitle}</h2>
        <Link href={hero.link} className={styles.contactButton}>
          {hero.buttonText}
        </Link>
        <div className={styles.topicRail}>
          <div className={styles.topicHintRow}>
            <div className={styles.topicHint}>Swipe or tap the arrows</div>
            <div className={styles.topicControls}>
              <button
                type="button"
                className={styles.topicScrollButton}
                onClick={() => scrollTopics("left")}
                aria-label="Scroll topic links left"
              >
                ←
              </button>
              <button
                type="button"
                className={styles.topicScrollButton}
                onClick={() => scrollTopics("right")}
                aria-label="Scroll topic links right"
              >
                →
              </button>
            </div>
          </div>
          <div className={styles.topicLinks} ref={topicLinksRef}>
            {hero.topicLinks.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className={styles.topicLink}
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
