import Link from "next/link";

import styles from "./HeroSection.module.scss";

const hero = {
  image: "/img/Herowebb.png",
  title: "Roger Härtl, MD",
  subtitle:
    "Spine Surgeon in New York at Och Spine, NewYork-Presbyterian and Weill Cornell Medicine",
  text:
    "Minimally invasive spine surgery, disc replacement, spinal tumors, and complex deformity care.",
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
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className={styles.content}>
        <h1>{hero.title}</h1>
        <h2>{hero.subtitle}</h2>
        <p>{hero.text}</p>
        <Link href={hero.link} className={styles.contactButton}>
          {hero.buttonText}
        </Link>
        <div className={styles.topicRail}>
          <div className={styles.topicHint} aria-hidden="true">
            Swipe for more <span className={styles.topicHintArrow}>→</span>
          </div>
          <div className={styles.topicLinks}>
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

