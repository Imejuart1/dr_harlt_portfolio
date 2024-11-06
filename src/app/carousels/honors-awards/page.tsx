"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './HonorsAndAwards.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faAward } from '@fortawesome/free-solid-svg-icons';

const images = [
  '/img/Brazil.png',
  '/img/Brazil2.png',
  '/img/awardroger1.jpeg'
];

const brazilimages = [
  '/img/Brazil.png',
  '/img/Brazil2.png',
  '/img/Brazil2.png',
];

const annaimages = [
  '/img/anastory.png',
  '/img/annaspine.png',
  '/img/annastory2.png',
  '/img/augmented reality.png',
  '/img/augmented3.png',
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
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnaImageIndex((prevIndex) => (prevIndex + 1) % annaimages.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash === "honors" || hash === "news" || hash === "podcasts") {
          setActiveTab(hash as "honors" | "news" | "podcasts");
        }

        const element = document.getElementById(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 30, 
            behavior: 'smooth',
          });
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);



  return (
    <section className={styles.honorsSection}>
      <div className={styles.contentSS}>
      <Link href='/honors-awards#honors'>
      <h2 className={styles.sectionTitle}>
         {/* <FontAwesomeIcon icon={faAward} className={styles.icon} fixedWidth />*/}
          Honors and Awards
        </h2>
        </Link>
        </div>
     {/* <div className={styles.heroSection} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className={styles.content}>
          <h1>Honors, News & Podcasts</h1>
          <p>Explore the prestigious honors and awards received by Dr. Roger Härtl, along with the latest news features.</p>
        </div>
      </div>

      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${activeTab === "honors" ? styles.active : ""}`}
          onClick={() => setActiveTab("honors")}
        >
          Honors & Awards
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "news" ? styles.active : ""}`}
          onClick={() => setActiveTab("news")}
        >
          News
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "podcasts" ? styles.active : ""}`}
          onClick={() => setActiveTab("podcasts")}
        >
          Podcasts
        </button>
        <div
          className={`${styles.tabUnderline} ${activeTab === "honors" ? styles.left : activeTab === "news" ? styles.center : styles.right}`}
        />
      </div>*/}

      {activeTab === "honors" && (
        <div className={styles.contentWrapper} id='#honors'>
           <div className={styles.section}>
            <a href="https://www.newsweek.com/rankings/americas-best-spine-surgeons-2024" target="_blank" rel="noopener noreferrer">
              <div style={{ width: '100%' }}>
                <img src="/img/bestspineppp.png" alt="Honor 3" className={styles.sectionImage} />
              </div>
            </a>
            <div className={styles.textContent}>
              <h2>America&apos;s Best Spine Surgeons 2024</h2>
              <p>Dr. Härtl has been recognized as one of the best spine surgeons in the United States by Newsweek magazine.
                 Newsweek partnered with Statista to evaluate physician performance data, certifications, 
                 and professional reputation for American spine surgeons in 2024, resulting in the list 
                 of the top 150 in the country. Dr. Härtl is the Hansen-MacDonald Professor of Neurological 
                 Surgery and director of spinal surgery at Weill Cornell Medicine as well as co-director of Och 
                 Spine at NewYork-Presbyterian/Weill Cornell Medical Center.
                 He is one of four spine surgeons at Och Spine at NewYork-Presbyterian named to the list.</p>
              <a href="https://www.newsweek.com/rankings/americas-best-spine-surgeons-2024" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
          <div className={styles.sectionReverse}>
  <div className={styles.textContent}>
    <h2>Topping the List of Top Doctors Once Again in 2024</h2>
    <p>Dr. Roger Härtl has once again been named to the prestigious list of New York&apos;s Top Doctors for 2024, in recognition of his excellence in spine neurosurgery. He continues to lead innovative treatments and patient care at the Weill Cornell Medicine Brain and Spine Center.</p>
    <a href="https://neurosurgery.weillcornell.org/in-the-news/topping-list-top-doctors-once-again-2024" target="_blank" rel="noopener noreferrer">Read more</a><br />
  </div>
  <a href="https://neurosurgery.weillcornell.org/in-the-news/topping-list-top-doctors-once-again-2024" target="_blank" rel="noopener noreferrer">
    <div style={{ width: '100%' }}>
      <img src="/img/castle 2024.png" alt="Honor 2" className={styles.sectionImage} />
    </div>
  </a>
</div>
           {/*} <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Hans Kraus Award</h2>
              <p>Dr. Roger Härtl has received the Hans Kraus Award for his groundbreaking work in spine surgery and patient care.<br></br>
              &quot;We are proud to present the award to Roger Härtl , the Hansen-MacDonald Professor of Neurological Surgery and Director of Neurosurgery Spine at the Weill Cornell Medicine Brain and Spine Center in New York.&quot;</p>
              <a href="https://frame.foundation/hans-kraus-award" target="_blank" rel="noopener noreferrer">Read more</a><br></br>
              <a href="https://drive.google.com/file/d/1cRrmQZABK_TlDbzbp6CESOsyfFB8u6r3/view" target="_blank" rel="noopener noreferrer">See pdf</a>
            </div>
            <a href="https://frame.foundation/hans-kraus-award" target="_blank" rel="noopener noreferrer">
              <div style={{ width: '100%' }}>
                <img src="/img/Hanskraus2.png" alt="Honor 2" className={styles.sectionImage} />
              </div>
            </a>
          </div>*/}
          <div className={styles.section}>
            <a href="https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year" target="_blank" rel="noopener noreferrer">
              <div style={{ width: '100%' }}>
                <img src="/img/awardroger1.jpeg" alt="Honor 1" className={styles.sectionImage} />
              </div>
            </a>
            <div className={styles.textContent}>
              <h2>Spine News International AANS Humanitarian of the Year Award Feature</h2>
              <p>Dr. Härtl has been honored with the AANS Humanitarian of the Year Award, recognizing his dedication to advancing spine care.
                At the 2022 annual meeting of the American Association of Neurological Surgeons in Philadelphia,
                Dr. Härtl was honored as the AANS Humanitarian of the Year.
                Dr. Härtl was lauded for his life-saving work in Tanzania
                and for his commitment to global neurosurgical education
                through CME courses and European training classes.
                The award is one of the highest honors bestowed by the AANS, which recognized Dr. Härtl for his years of dedication to these projects.</p>
              <a href="https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>

        
        </div>
      )}

      {activeTab === "news" && (
        <div className={styles.contentWrapper} id='#news'>
          <div className={styles.section}>
            <a href="https://www.nyp.org/augmented-reality" target="_blank" rel="noopener noreferrer">
              <img src="/img/hartnews1.jpg" alt="News 1" className={styles.sectionImage} />
            </a>
            <div className={styles.textContent}>
              <h2>New York-Presbyterian Augmented Reality Advances Feature</h2>
              <p>Dr. Härtl&apos;s innovative use of augmented reality in spine surgery is transforming patient outcomes and setting new standards in the field.
                For nearly 20 years, Roger Härtl, Co-Director of Och Spine at NewYork-Presbyterian and Director of Weill Cornell Medicine’s Center for Comprehensive Spine Care, has used intraoperative imaging and stereotactic
                navigation in spinal surgery to guide instrumentation placement and tumor resection in minimally invasive spine surgery.</p>
              <a href="https://www.nyp.org/augmented-reality" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Dr. Orna Guralink&apos;s Spine Tumor Story</h2>
              <p>Dr. Roger Härtl utilized cutting-edge augmented reality technology
                to precisely remove a spinal tumor, enabling a faster recovery for Orna
                Guralnik. Her insistence on further investigation led to a life-changing
                surgery that allowed her to quickly return to her busy life as a renowned therapist and TV host.
              </p>
              <a href="https://neurosurgery.weillcornell.org/patient-story/more-precision-less-incision-augmented-reality-spine-tumor-story" target="_blank" rel="noopener noreferrer">Read Story</a>
            </div>
            <div className={styles.thumbnailWrapper}>
              <a href="https://neurosurgery.weillcornell.org/patient-story/more-precision-less-incision-augmented-reality-spine-tumor-story" target="_blank" rel="noopener noreferrer">
                <div className={styles.indSection2} style={{ backgroundImage: `url(${annaimages[annaImageIndex]})` }}></div>
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <a href="https://nymag.com/health/bestdoctors/2006/17259/" target="_blank" rel="noopener noreferrer">
              <img src="/img/medicalmarvel.png" alt="News 2" className={styles.sectionImage} />
            </a>
            <div className={styles.textContent}>
              <h2>Medical Marvel - New York Magazine Feature</h2>
              <p>Dr. Roger Härtl performed a life-saving surgery on firefighter Eugene Stolowski, reconnecting his nearly severed skull to his spine after a devastating fall during the Black Sunday fire. Despite a mere 5% survival chance,
                Dr. Härtl&apos;s expertise led to a miraculous recovery, showcasing his unparalleled skill in neurosurgery.</p>
              <a href="https://nymag.com/health/bestdoctors/2006/17259/" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Kenny Schachter Piece</h2>
              <p>Kenny Schachter Emerges From Surgery With Dirt on Damien Hirst, Ed Sheeran, and a Lot More
              In part one of his &apos;Busted-Disc Diaries,&apos; he recounts blowing out his back moving his art.
               He&apos;s recovering, and just as indefatigable as ever. Thank his art-loving doctors!<br></br>
               After a brief examination by Dr. Roger Härtl—who is nothing short of a magician, a brilliant virtuoso, and the director of spinal surgery at Och Spine at NewYork-Presbyterian/Weill 
               Cornell Medical Center—it was flagrantly clear that I needed surgery, which...</p>
              <a href="https://news.artnet.com/market/kenny-schachters-hospital-report-2478298" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
            <a href="https://news.artnet.com/market/kenny-schachters-hospital-report-2478298" target="_blank" rel="noopener noreferrer">
              <img src="/img/piece (2).png" alt="News 6" className={styles.sectionImage} />
            </a>
          </div>
        </div>
      )}

      {activeTab === "podcasts" && (
        <div className={styles.contentWrapper} id='#podcasts'>
          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Congresso de Coluna Brasil/Argentina</h2>
              <p>Dr. Roger Härtl was featured in a special podcast episode during the Congresso de Coluna
                Brasil/Argentina. In this episode, he discusses the latest advancements in spine surgery,
                including the use of augmented reality in complex procedures. Dr. Härtl shares insights
                from his extensive experience and highlights the collaboration between Brazil and Argentina in advancing spinal care.</p>
              <a href="https://drive.google.com/file/d/1X5e09YgGcg7M0TPshxWdQnJ2mKWnp3lP/view?t=541" target="_blank" rel="noopener noreferrer">View Podcast</a>
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                src={iframeSrc}
                width="640"
                height="480"
                allow="autoplay; fullscreen"
                className={`${styles.videoIframe} ${videoVisible ? styles.visible : ''}`}
                ref={iframeRef}
                style={{ display: videoVisible ? 'block' : 'none' }}
              />
              {!videoVisible && (
                <div onClick={showVideo} className={styles.thumbnailWrapper}>
                  <div className={styles.indSection} style={{ backgroundImage: `url(${brazilimages[currentImageIndex]})` }}></div>
                  <div className={styles.playButton}>
                    <img src='/img/play-button.svg' />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.section}>
          <div className={styles.textContent}>
                    <h2>MOI Tanzania TV 2023 Feature</h2>
                    <p>International training on the brain, spine, and nervous system held in Tanzania </p>
                    <Link 
                    href="https://www.youtube.com/watch?v=ceQxOqsr2uE"
                    target='__blank'>Watch Video</Link>
                </div>
                <div className={styles.videoWrapper}>
                <iframe src="https://www.youtube.com/embed/ceQxOqsr2uE?si=BV1-7JrOtsmTXvBc"  allowFullScreen className={styles.sectionImage}/>
                </div>
            </div>

            <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
                    <h2>MOI Tanzania TV 2024 Feature</h2>
                    <p>International training on the brain, spine, and nervous system held in Tanzania </p>
                    <Link 
                    href="https://drive.google.com/file/d/1zy6W0SSJBaY2R508r-mBnbMfjh1b_loe/view"
                    target='__blank'>Watch Video</Link>
                </div>
                <div className={styles.imageContainer2}>
                <iframe src="https://drive.google.com/file/d/1zy6W0SSJBaY2R508r-mBnbMfjh1b_loe/preview" allowFullScreen className={styles.sectionImage}/>
                </div>
            </div>

          <div className={styles.section}>
            <a href="https://podcasts.apple.com/us/podcast/beckers-healthcare-spine-and-orthopedic-podcast/id1512530263" target="_blank" rel="noopener noreferrer">
              <img src="/img/beckerpodcast.png" alt="News 3" className={styles.sectionImage} />
            </a>
            <div className={styles.textContent}>
              <h2>Becker&apos;s Healthcare: Spine and Orthopedic Podcast</h2>
              <p>Dr. Roger Härtl, Professor of Neurological Surgery and Director of Spinal Surgery at Weill Cornell Medicine
                as well as Neurosurgical Director, Och Spine at NewYork-Presbyterian, provides a glimpse into his journey,
                offers insights into his expertise in neurological surgery, developments in his field, and trends
                shaping the industry as we approach 2024. He delves into his mission work in Tanzania,
                discussing his proudest achievements and providing guidance for other surgeons eager to contribute to a cause.</p>
              <a href="https://podcasts.apple.com/us/podcast/beckers-healthcare-spine-and-orthopedic-podcast/id1512530263" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Becker&apos;s Spine Review: AR in MIS-TLIF Feature</h2>
              <p>Researchers with New York City-based Weill Cornell Medicine were able to complete 10 minimally
                invasive transforaminal lumbar interbody fusions using augmented reality with no complications ...</p>
              <a href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
            <a href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter" target="_blank" rel="noopener noreferrer">
              <img src="/img/becker.png" alt="News 4" className={styles.sectionImage} />
            </a>
          </div>

          <div className={styles.section}>
            <a href="https://www.beckershospitalreview.com/podcasts/podcasts-beckers-hospital-review/roger-h-rtl-director-of-neurosurgery-spine-at-weill-cornell-medicine-94433094.html" target="_blank" rel="noopener noreferrer">
              <img src="/img/becker2.png" alt="News 5" className={styles.sectionImage} />
            </a>
            <div className={styles.textContent}>
              <h2>Becker&apos;s Hospital Review: Podcast Features</h2>
              <p>Roger Härtl, Director of Neurosurgery Spine at Weill Cornell Medicine, joins the podcast to discuss his background, his focus on patient access to quality care & minimally invasive spine surgery, and what healthcare leaders need to be successful.</p>
              <a href="https://www.beckershospitalreview.com/podcasts/podcasts-beckers-hospital-review/roger-h-rtl-director-of-neurosurgery-spine-at-weill-cornell-medicine-94433094.html" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>NYP Advances in Care Podcast Feature</h2>
              <p>Dr. Roger Härtl is no stranger to forging new ground in neurosurgery. In this episode, Dr. Härtl and Host Catherine Price discuss how far navigation technology has come over the past 20 years and look ahead to how implementing augmented reality can make surgery even more precise for surgeons and less invasive for patients. Dr. Härtl also shares the impact of his work teaching
                and training neurosurgeons in Tanzania and discusses where he hopes technology will take the field of neurosurgery next.</p>
              <a href="https://podcasts.apple.com/us/podcast/the-visionary-seeing-the-future-of-spine-surgery/id1671647417?i=1000605317340" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
            <a href="https://podcasts.apple.com/us/podcast/the-visionary-seeing-the-future-of-spine-surgery/id1671647417?i=1000605317340" target="_blank" rel="noopener noreferrer">
              <img src="/img/advancepodcast6.png" alt="News 6" className={styles.sectionImage} />
            </a>
          </div>

          <div className={styles.section}>
            <div className={styles.textContent}>
              <h2>Healthcare Digital Interview in German</h2>
              <p>Healthcare Digital #10: Robots in the OR, AI in diagnostics, a gateway to TI, In future, access to the TI will be via a gateway. eHex Managing Director Frédéric Naujokat knows why and how. Spinal surgery with the surgical robot, on the other hand, is the domain of Prof. Dr. Roger Härtl. He demonstrated this live at this year&apos;s Brainlab Spine Symposium in Munich
                s. Our colleague Johannes Kapfer was there and spoke to him...</p>
              <a href="https://www.healthcare-digital.de/healthcare-digital-10-roboter-im-op-ki-in-der-diagnostik-ein-gateway-zur-ti-a-610cb0edbfae37b59d7d866acbe98349/?cflt=rel" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
            <a href="https://www.healthcare-digital.de/healthcare-digital-10-roboter-im-op-ki-in-der-diagnostik-ein-gateway-zur-ti-a-610cb0edbfae37b59d7d866acbe98349/?cflt=rel" target="_blank" rel="noopener noreferrer">
              <img src="/img/healthpodcast.jpeg" alt="News 6" className={styles.sectionImage} />
            </a>
          </div>

        </div>
      )}
    </section>
  );
};

export default HonorsAndAwardsPages;
