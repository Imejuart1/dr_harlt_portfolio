import Link from "next/link";
import Script from "next/script";

import styles from "./ServiceLandingPage.module.scss";
import {
  officeEmail,
  officePhone,
  officePhoneIntl,
  practiceName,
  primaryOffice,
  siteUrl,
} from "../lib/site";

type FAQ = {
  question: string;
  answer: string;
};

type Stat = {
  value: string;
  label: string;
};

type ServiceLandingPageProps = {
  title: string;
  intro: string;
  heroImage: string;
  breadcrumbLabel: string;
  path: string;
  summaryPoints: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  stats: Stat[];
  faqs: FAQ[];
  relatedLinks: Array<{
    href: string;
    label: string;
  }>;
};

export default function ServiceLandingPage({
  title,
  intro,
  heroImage,
  breadcrumbLabel,
  path,
  summaryPoints,
  sections,
  stats,
  faqs,
  relatedLinks,
}: ServiceLandingPageProps) {
  const pageUrl = `${siteUrl}${path}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbLabel,
        item: pageUrl,
      },
    ],
  };

  const medicalPageLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    url: pageUrl,
    about: {
      "@type": "Physician",
      name: "Roger Hartl, MD",
      telephone: officePhoneIntl,
      medicalSpecialty: ["Spine Surgery", "Neurosurgery"],
      hospitalAffiliation: practiceName,
      address: {
        "@type": "PostalAddress",
        streetAddress: primaryOffice.streetAddress,
        addressLocality: primaryOffice.city,
        addressRegion: primaryOffice.region,
        postalCode: primaryOffice.postalCode,
        addressCountry: primaryOffice.country,
      },
    },
  };

  return (
    <section className={styles.page}>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className={styles.heroContent}>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.card}>
            <h2>Why Patients Search for This Care</h2>
            <p>
              Patients looking for a spine surgeon in New York want experience,
              modern treatment options, and a clear plan for recovery. These are
              the core areas emphasized throughout Dr. Hartl&apos;s practice.
            </p>
            <ul>
              {summaryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          {sections.map((section) => (
            <div key={section.heading} className={styles.card}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <div className={styles.card}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              {faqs.map((faq) => (
                <div key={faq.question} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h2>Schedule an Appointment</h2>
            <p>
              Contact {practiceName} for appointments, second opinions, and
              patient questions.
            </p>
            <div className={styles.actions}>
              <Link href="/Contact" className={styles.primaryLink}>
                Contact Dr. Hartl
              </Link>
              <a href={`tel:${officePhoneIntl}`} className={styles.secondaryLink}>
                Call {officePhone}
              </a>
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h2>Practice Details</h2>
            <ul>
              <li>{practiceName}</li>
              <li>
                {primaryOffice.fullStreet}, {primaryOffice.city},{" "}
                {primaryOffice.region} {primaryOffice.postalCode}
              </li>
              <li>{officePhone}</li>
              <li>{officeEmail}</li>
            </ul>
          </div>

          <div className={styles.sidebarCard}>
            <h2>Related Spine Resources</h2>
            <div className={styles.relatedLinks}>
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Script
        id={`${breadcrumbLabel}-faq`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Script
        id={`${breadcrumbLabel}-breadcrumb`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id={`${breadcrumbLabel}-medical-page`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageLd) }}
      />
    </section>
  );
}
