import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Bio.module.scss';

const Bio: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Roger Härtl",
    "image": "https://yourdomain.com/img/roger2.jpg",
    "jobTitle": "Hansen-MacDonald Professor of Neurological Surgery",
    "affiliation": {
      "@type": "Organization",
      "name": "Weill Cornell Medicine"
    },
    "medicalSpecialty": [
      "Neurosurgery",
      "Minimally Invasive Spinal Surgery",
      "Spinal Tumors",
      "Sports-related Spine Injuries"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "telephone": "+1-212-746-2152",
    "url": "https://hartlmd.net/bio",
    "sameAs": [
      "https://weillcornell.org/",
      "https://www.nyp.org/"
    ]
  };

  const specialties = [
  { title: "Minimally Invasive Spinal Surgery", slug: "minimally-invasive-spinal-surgery", img: "/img/Bio01.png" },
  { title: "Spinal Microsurgery", slug: "spinal-microsurgery", img: "/img/Bio02.png" },
  { title: "Spinal Tumors", slug: "spinal-tumors", img: "/img/Bio03.png" },
  { title: "Microdiscectomy", slug: "microdiscectomy", img: "/img/Bio04.png" },
  { title: "Spondylolisthesis", slug: "spondylolisthesis", img: "/img/Bio05.png" },
  { title: "Minimally Invasive Spinal Fusion", slug: "minimally-invasive-spinal-fusion", img: "/img/Bio06.png" },
  { title: "Cervical Laminoplasty", slug: "cervical-laminoplasty", img: "/img/Bio07.png" },
  { title: "Motion-Preserving Spine Surgery", slug: "motion-preserving-spine-surgery", img: "/img/Bio08.png"  },
  { title: "Disc Arthroplasty", slug: "disc-arthroplasty", img: "/img/Bio09.png"  },
  { title: "Spine Injuries in the Athlete", slug: "spine-injuries-athletes", img: "/img/Bio10.png"  },
  { title: "Sports Trauma", slug: "sports-trauma", img: "/img/Bio11.png" },
  { title: "Augmented Reality", slug: "augmented-reality",img: "/img/Bio12.png" },
  { title: "3D Navigation", slug: "3d-navigation", img: "/img/Bio13.png" },
  { title: "Minimally Invasive Decompression of Spinal Stenosis", slug: "minimally-invasive-decompression", img: "/img/Bio14.png" },
];

  return (
    <>
      <Head>
        <title>Dr. Roger Härtl | Neurosurgeon & Minimally Invasive Spine Surgery Specialist</title>
        <meta
          name="description"
          content="Dr. Roger Härtl is a world-renowned neurosurgeon in New York specializing in minimally invasive spine surgery, spinal tumors, motion-preserving techniques, and athlete spine injuries."
        />
        <link rel="canonical" href="https://yourdomain.com/bio" />
        <meta property="og:title" content="Dr. Roger Härtl | Neurosurgeon & Spine Specialist" />
        <meta
          property="og:description"
          content="Hansen-MacDonald Professor of Neurological Surgery and Director of Neurosurgery Spine at Weill Cornell Medicine."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://yourdomain.com/bio" />
        <meta property="og:image" content="https://yourdomain.com/img/roger2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section className={styles.bioSection}>
        <div className={styles.headerSection}>
          <h1>Roger Härtl, M.D.</h1>
          <p className={styles.title}>
            Hansen-MacDonald Professor of Neurological Surgery<br />
            Director of Neurosurgery Spine, Weill Cornell Medicine<br />
            Neurosurgical Director, Och Spine at NewYork-Presbyterian/Weill Cornell Medical Center
          </p>

          <div className={styles.specialties} aria-label="Clinical specialties">
            <strong><h1>SPECIALTIES</h1></strong>
             <ul className={styles.specialtiesGrid}>
    {specialties.map((s) => (
      <li key={s.slug} className={styles.specialtyCard}>
        <p className={styles.cardLink}>
          <div className={styles.thumbWrap} aria-hidden="true">
            {/* Next/Image keeps CLS low href={`/specialties/${s.slug}`}*/}
            <Image
              src={s.img}
              alt=""
              fill
              sizes="(max-width: 900px) 50vw, 200px"
              className={styles.thumb}
              priority={false}
            />
          </div>
          <span className={styles.cardTitle}><b>{s.title}</b></span>
        </p>
      </li>
    ))}
  </ul>
          </div>

         <div className="contactBlock">
  <p>
    <strong>Contact:</strong>{' '}
    <a href="tel:+12127462152" className="phoneLink">
      (212) 746-2152
    </a>
  </p>
  <p>
    Or reach us directly{' '}
    <Link href="/Contact" className="contactLink">
      <b>here</b>
    </Link>.
  </p>
</div>

        </div>

        <div className={styles.content}>
          <div id="personal-statement" className={styles.section}>
            <div className={styles.imageSection}>
              <Image
                src="/img/roger2.jpg"
                alt="Dr. Roger Härtl – Neurosurgeon and Spine Specialist in New York"
                width={480}
                height={600}
                className={styles.profileImage}
                priority
              />
            </div>

            <div className={styles.textSection}>
              <h2>Mission</h2>
              <p>
                My mission is to bring together leading experts and streamlined services to deliver
                complete care for back and neck problems—all in one convenient location. Surgery is
                one of many tools we offer. When it&apos;s needed, I focus on the least invasive,
                most effective option to help patients return to the life and activities they love.
              </p>

              <h2>Pledge to My Patients</h2>
              <ol className={styles.pledgeList}>
                <li>
                  Interdisciplinary evaluation to identify the source of your pain and related
                  symptoms.
                </li>
                <li>
                  Treatment begins with the least invasive option appropriate for your condition.
                </li>
                <li>
                  If surgery is recommended, I offer the least invasive approach that is safe,
                  effective, and durable.
                </li>
                <li>I support you from diagnosis through recovery and long-term follow-up.</li>
              </ol>
            </div>
          </div>

          <div id="biography" className={styles.section}>
            <div className={styles.textSection}>
              <h2>Biography</h2>
              <ul className={styles.biographyList}>
                <li>Hansen-MacDonald Professor of Neurological Surgery</li>
                <li>Named one of the best spine surgeons in the U.S. by Newsweek</li>
                <li>
                  Director of Neurosurgery Spine at Weill Cornell Medicine and Co-director of
                  NewYork-Presbyterian Och Spine
                </li>
                <li>
                  Founder and Co-Director of the Center for Comprehensive Spine Care at
                  NewYork-Presbyterian/Weill Cornell Medicine
                </li>
                <li>Neurosurgeon for the New York Giants Football Team</li>
                <li>
                  Pioneer in minimally invasive spinal surgery and computer-assisted spinal
                  navigation
                </li>
                <li>Expert in biological approaches for disc repair and regeneration</li>
                <li>
                  Patients travel globally, including physicians, surgeons, and other spine experts
                </li>
                <li>
                  Recognized by New York Super Doctors, America&apos;s Top Surgeons, America&apos;s
                  Best Doctors, and <em>New York</em> magazine&apos;s Best Doctors
                </li>
                <li>
                  Authored 300+ peer-reviewed articles and three books on minimally invasive spine
                  surgery and disc repair
                </li>
              </ul>
            </div>
          </div>

          <div id="training" className={styles.section}>
            <div className={styles.textSection}>
              <h2>Training</h2>
              <ul className={styles.List}>
                <li>M.D., Ludwig-Maximilians University, Munich, Germany</li>
                <li>
                  Neurosurgery residency at NewYork-Presbyterian/Weill Cornell Medical Center and
                  Memorial Sloan Kettering Cancer Center
                </li>
                <li>
                  Fellowship in complex spine surgery at Barrow Neurological Institute under Dr.
                  Volker Sonntag
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section} aria-label="Helpful links">
            <div className={styles.textSection}>
              <h2>Next Steps</h2>
              <p>
                Learn about{' '}
                <Link href="/treatments/minimally-invasive-spine-surgery">
                  minimally invasive spine surgery
                </Link>
                , explore our{' '}
                <Link href="/conditions/spinal-stenosis">spinal stenosis</Link> resources, or{' '}
                <Link href="/Contact">request an appointment</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
