"use client";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import styles from "./HonorsAndAwards.module.scss";

const images = ["/img/Brazil.png", "/img/Brazil2.png", "/img/awardroger1.jpeg"];
const brazilimages = ["/img/Brazil.png", "/img/Brazil2.png", "/img/Brazil2.png"];
const annaimages = [
  "/img/anastory.png",
  "/img/annaspine.png",
  "/img/annastory2.png",
  "/img/augmented reality.png",
  "/img/augmented3.png",
];

const HonorsAndAwardsPages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"honors" | "news" | "podcasts">("honors");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [annaImageIndex, setAnnaImageIndex] = useState(0);
  const [iframeSrc, setIframeSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  const showVideo = () => {
    setIframeSrc("https://drive.google.com/file/d/1X5e09YgGcg7M0TPshxWdQnJ2mKWnp3lP/preview");
    setVideoVisible(true);
    if (iframeRef.current) iframeRef.current.focus();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnaImageIndex((i) => (i + 1) % annaimages.length);
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "honors" || hash === "news" || hash === "podcasts") {
        setActiveTab(hash as typeof activeTab);
        const el = document.getElementById(hash);
        if (el) window.scrollTo({ top: el.offsetTop - 30, behavior: "smooth" });
      }
    };
    if (window.location.hash) handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const canonical = "https://yourdomain.com/honors-awards";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://yourdomain.com/" },
      { "@type": "ListItem", position: 2, name: "Honors & Awards", item: canonical },
    ],
  };

  const honorsItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Honors & Awards",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "CreativeWork",
          name: "America's Best Spine Surgeons 2024",
          url: "https://www.newsweek.com/rankings/americas-best-spine-surgeons-2024",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "CreativeWork",
          name: "Top Doctors 2024 (Castle Connolly)",
          url: "https://neurosurgery.weillcornell.org/in-the-news/topping-list-top-doctors-once-again-2024",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "CreativeWork",
          name: "AANS Humanitarian of the Year",
          url: "https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Honors, Awards, News & Podcasts | Dr. Roger Härtl</title>
        <meta
          name="description"
          content="Explore awards, honors, major news features, and podcasts highlighting Dr. Roger Härtl, world-renowned neurosurgeon and spine specialist."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Honors & Awards — Roger Härtl, M.D." />
        <meta
          property="og:description"
          content="Recognitions, media features, and podcasts about Dr. Roger Härtl."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/img/og-honors.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script id="breadcrumbs-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      <Script id="honors-itemlist-jsonld" type="application/ld+json">
        {JSON.stringify(honorsItemListJsonLd)}
      </Script>

      <section className={styles.honorsSection}>
        <div className={styles.contentSS}>
          <Link href="/honors-awards#honors">
            <h2 className={styles.sectionTitle}>Honors and Awards</h2>
          </Link>
        </div>

        {/* HONORS */}
        <div
          id="honors"
          className={styles.contentWrapper}
          data-tab="honors"
          data-active={activeTab === "honors"}
          aria-hidden={activeTab !== "honors"}
        >
          <div className={styles.section}>
            <a
              href="https://www.newsweek.com/rankings/americas-best-spine-surgeons-2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ width: "100%" }}>
                <Image
                  src="/img/bestspineppp.png"
                  alt="Newsweek badge: America's Best Spine Surgeons 2024"
                  className={styles.sectionImage}
                  width={1600}
                  height={900}
                  sizes="(max-width: 800px) 100vw, 800px"
                  priority={true}
                />
              </div>
            </a>
            <div className={styles.textContent}>
              <h2>America&apos;s Best Spine Surgeons 2024</h2>
              <p>
                Dr. Härtl has been recognized as one of the best spine surgeons in the United States by{" "}
                <strong>Newsweek</strong>. The ranking, developed with Statista, evaluated physician performance,
                certifications, and professional reputation to identify the top 150 U.S. spine surgeons. Dr. Härtl is the
                Hansen-MacDonald Professor of Neurological Surgery and Director of Spinal Surgery at Weill Cornell
                Medicine and Co-Director of Och Spine at NewYork-Presbyterian/Weill Cornell Medical Center.
              </p>
              <a
                href="https://www.newsweek.com/rankings/americas-best-spine-surgeons-2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Topping the List of Top Doctors Once Again in 2024</h2>
              <p>
                Dr. Roger Härtl was named to New York&apos;s Top Doctors for 2024 for his excellence in spine neurosurgery,
                continuing leadership in innovation and patient care at the Weill Cornell Medicine Brain and Spine Center.
              </p>
              <a
                href="https://neurosurgery.weillcornell.org/in-the-news/topping-list-top-doctors-once-again-2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
            <a
              href="https://neurosurgery.weillcornell.org/in-the-news/topping-list-top-doctors-once-again-2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/castle 2024.png"
                alt="Castle Connolly Top Doctors 2024 badge"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
          </div>

          <div className={styles.section}>
            <a
              href="https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ width: "100%" }}>
                <Image
                  src="/img/awardroger1.jpeg"
                  alt="AANS Humanitarian of the Year Award feature"
                  className={styles.sectionImage}
                  width={1600}
                  height={900}
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="lazy"
                />
              </div>
            </a>
            <div className={styles.textContent}>
              <h2>Spine News International: AANS Humanitarian of the Year</h2>
              <p>Dr. Härtl has been honored with the AANS Humanitarian of the Year Award, recognizing his dedication to advancing spine care.
                At the 2022 annual meeting of the American Association of Neurological Surgeons in Philadelphia,
                Dr. Härtl was honored as the AANS Humanitarian of the Year.
                Dr. Härtl was lauded for his life-saving work in Tanzania
                and for his commitment to global neurosurgical education
                through CME courses and European training classes.
                The award is one of the highest honors bestowed by the AANS, which recognized Dr. Härtl for his years of dedication to these projects.</p>
              <a
                href="https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* NEWS */}
        <div
          id="news"
          className={styles.contentWrapper}
          data-tab="news"
          data-active={activeTab === "news"}
          aria-hidden={activeTab !== "news"}
        >
          <div className={styles.section}>
            <a href="https://www.nyp.org/augmented-reality" target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/hartnews1.jpg"
                alt="NewYork-Presbyterian feature on augmented reality in spine surgery"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
            <div className={styles.textContent}>
              <h2>NewYork-Presbyterian: Augmented Reality Advances</h2>
              <p>
                For nearly 20 years, Dr. Härtl has used intraoperative imaging and stereotactic navigation in minimally
                invasive spine surgery. AR further improves precision and outcomes.
              </p>
              <a href="https://www.nyp.org/augmented-reality" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Dr. Orna Guralnik&apos;s Spine Tumor Story</h2>
              <p>
                A complex tumor resection guided by augmented reality enabled a faster recovery and return to work for Dr.
                Guralnik.
              </p>
              <a
                href="https://neurosurgery.weillcornell.org/patient-story/more-precision-less-incision-augmented-reality-spine-tumor-story"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Story
              </a>
            </div>
            <div className={styles.thumbnailWrapper}>
              <a
                href="https://neurosurgery.weillcornell.org/patient-story/more-precision-less-incision-augmented-reality-spine-tumor-story"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={styles.indSection2}
                  style={{ backgroundImage: `url(${annaimages[annaImageIndex]})` }}
                  aria-label="Patient story thumbnails"
                />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <a href="https://nymag.com/health/bestdoctors/2006/17259/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/medicalmarvel.png"
                alt="New York Magazine Medical Marvel feature"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
            <div className={styles.textContent}>
              <h2>Medical Marvel — New York Magazine</h2>
              <p>
                Dr. Härtl reattached a firefighter’s skull to his spine after the Black Sunday fire — a case with only a 5%
                survival chance — resulting in a remarkable recovery.
              </p>
              <a href="https://nymag.com/health/bestdoctors/2006/17259/" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Kenny Schachter Piece</h2>
              <p>
                After evaluation by Dr. Härtl, surgical intervention led to recovery — detailed in Schachter’s “Busted-Disc
                Diaries.”
              </p>
              <a
                href="https://news.artnet.com/market/kenny-schachters-hospital-report-2478298"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen to the Podcast
              </a>
            </div>
            <a
              href="https://news.artnet.com/market/kenny-schachters-hospital-report-2478298"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/piece (2).png"
                alt="Kenny Schachter article artwork"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* PODCASTS */}
        <div
          id="podcasts"
          className={styles.contentWrapper}
          data-tab="podcasts"
          data-active={activeTab === "podcasts"}
          aria-hidden={activeTab !== "podcasts"}
        >
          <div className={styles.section}>
            <div className={styles.textContent}>
              <h2>Congresso de Coluna Brasil/Argentina</h2>
              <p>
                Dr. Härtl discusses the latest advances in spine surgery, including augmented reality in complex procedures,
                and international collaboration in spinal care.
              </p>
              <a
                href="https://drive.google.com/file/d/1X5e09YgGcg7M0TPshxWdQnJ2mKWnp3lP/view?t=541"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Podcast
              </a>
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                title="Congresso de Coluna Brasil/Argentina"
                src={iframeSrc}
                width="640"
                height="480"
                allow="autoplay; fullscreen"
                className={`${styles.videoIframe} ${videoVisible ? styles.visible : ""}`}
                ref={iframeRef}
                style={{ display: videoVisible ? "block" : "none" }}
                loading="lazy"
              />
              {!videoVisible && (
                <div onClick={showVideo} className={styles.thumbnailWrapper} role="button" aria-label="Play podcast video">
                  <div
                    className={styles.indSection}
                    style={{ backgroundImage: `url(${brazilimages[currentImageIndex]})` }}
                  />
                  <div className={styles.playButton}>
                    <Image src="/img/play-button.svg" alt="Play" width={64} height={64} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Advancing Solutions for Degenerative Disc Disease</h2>
              <p>Biologic strategies for durable disc regeneration, repair, and replacement.</p>
              <a
                href="https://drive.google.com/file/d/1wBzGVvVQgyW24eFPGPJmLp_4Gyigmpvb/preview"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Podcast
              </a>
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                title="Degenerative Disc Disease — Research talk"
                src="https://www.youtube.com/embed/YVdUAgBZCRQ?si=2OORcbX4udpml67y"
                width="640"
                height="480"
                allow="autoplay; fullscreen"
                className={`${styles.videoIframe} ${videoVisible ? styles.visible : ""}`}
                ref={iframeRef}
                style={{ display: videoVisible ? "block" : "none" }}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.textContent}>
              <h2>MOI Tanzania TV 2023 Feature</h2>
              <p>International training on the brain, spine, and nervous system held in Tanzania.</p>
              <Link href="https://www.youtube.com/watch?v=ceQxOqsr2uE" target="__blank">
                Watch Video
              </Link>
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                title="MOI Tanzania TV 2023 Feature"
                src="https://www.youtube.com/embed/ceQxOqsr2uE?si=BV1-7JrOtsmTXvBc"
                allowFullScreen
                className={styles.sectionImage}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>MOI Tanzania TV 2024 Feature</h2>
              <p>International training on the brain, spine, and nervous system held in Tanzania.</p>
              <Link href="https://drive.google.com/file/d/1zy6W0SSJBaY2R508r-mBnbMfjh1b_loe/view" target="__blank">
                Watch Video
              </Link>
            </div>
            <div className={styles.imageContainer2}>
              <iframe
                title="MOI Tanzania TV 2024 Feature"
                src="https://drive.google.com/file/d/1zy6W0SSJBaY2R508r-mBnbMfjh1b_loe/preview"
                allowFullScreen
                className={styles.sectionImage}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.section}>
            <a
              href="https://podcasts.apple.com/us/podcast/beckers-healthcare-spine-and-orthopedic-podcast/id1512530263"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/beckerpodcast.png"
                alt="Becker's Healthcare: Spine and Orthopedic Podcast cover"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
            <div className={styles.textContent}>
              <h2>Becker&apos;s Healthcare: Spine and Orthopedic Podcast</h2>
              <p>
                Dr. Härtl shares insights into minimally invasive spine surgery, mission work in Tanzania, and key trends
                shaping the field.
              </p>
              <a
                href="https://podcasts.apple.com/us/podcast/beckers-healthcare-spine-and-orthopedic-podcast/id1512530263"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen to the Podcast
              </a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Becker&apos;s Spine Review: AR in MIS-TLIF</h2>
              <p>Weill Cornell researchers completed 10 MIS-TLIFs using augmented reality with no complications.</p>
              <a
                href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
            <a
              href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/becker.png"
                alt="Becker's Spine Review cover"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
          </div>

          <div className={styles.section}>
            <a
              href="https://www.beckershospitalreview.com/podcasts/podcasts-beckers-hospital-review/roger-h-rtl-director-of-neurosurgery-spine-at-weill-cornell-medicine-94433094.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/becker2.png"
                alt="Becker's Hospital Review podcast cover"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
            <div className={styles.textContent}>
              <h2>Becker&apos;s Hospital Review: Podcast Features</h2>
              <p>Patient access, minimally invasive surgery, and leadership insights from Dr. Härtl.</p>
              <a
                href="https://www.beckershospitalreview.com/podcasts/podcasts-beckers-hospital-review/roger-h-rtl-director-of-neurosurgery-spine-at-weill-cornell-medicine-94433094.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen to the Podcast
              </a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>NYP Advances in Care Podcast</h2>
              <p>Navigation tech, AR adoption, and global training work in Tanzania.</p>
              <a
                href="https://podcasts.apple.com/us/podcast/the-visionary-seeing-the-future-of-spine-surgery/id1671647417?i=1000605317340"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen to the Podcast
              </a>
            </div>
            <a
              href="https://podcasts.apple.com/us/podcast/the-visionary-seeing-the-future-of-spine-surgery/id1671647417?i=1000605317340"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/advancepodcast6.png"
                alt="NYP Advances in Care podcast cover"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
          </div>

          <div className={styles.section}>
            <div className={styles.textContent}>
              <h2>Healthcare Digital Interview (German)</h2>
              <p>Robots in the OR, AI in diagnostics, and live demo at Brainlab Spine Symposium in Munich.</p>
              <a
                href="https://www.healthcare-digital.de/healthcare-digital-10-roboter-im-op-ki-in-der-diagnostik-ein-gateway-zur-ti-a-610cb0edbfae37b59d7d866acbe98349/?cflt=rel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen to the Podcast
              </a>
            </div>
            <a
              href="https://www.healthcare-digital.de/healthcare-digital-10-roboter-im-op-ki-in-der-diagnostik-ein-gateway-zur-ti-a-610cb0edbfae37b59d7d866acbe98349/?cflt=rel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/healthpodcast.jpeg"
                alt="Healthcare Digital podcast cover"
                className={styles.sectionImage}
                width={1600}
                height={900}
                sizes="(max-width: 800px) 100vw, 800px"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Keep all sections in DOM; hide inactive with CSS (better crawlability) */
        [data-tab][data-active="false"] {
          display: none;
        }
      `}</style>
    </>
  );
};

export default HonorsAndAwardsPages;
