"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './HonorsAndAwards.module.scss';
import Link from 'next/link';

const images = [
  '/img/Brazil.png',
  '/img/Brazil2.png',
  '/img/Brazil2.png',
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

const HonorsAndAwardsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"honors" | "news" | "podcasts">("news");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [annaImageIndex, setAnnaImageIndex] = useState(0);
  const [iframeSrc, setIframeSrc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  const showVideo = () => {
    setIframeSrc("https://drive.google.com/file/d/1X5e09YgGcg7M0TPshxWdQnJ2mKWnp3lP/preview");
    setVideoVisible(true);
    if (iframeRef.current) {
      iframeRef.current.focus(); // Optional: Focus the iframe if necessary
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
      <div className={styles.heroSection} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className={styles.content}>
          <h1> News & Podcasts</h1>
          <p>Explore Dr. Roger Härtl in the news, along with the latest podcasts features.</p>
        </div>
      </div>

      <div className={styles.tabNavigation}>
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
          className={`${styles.tabUnderline} ${activeTab === "news" ? styles.left : activeTab === "podcasts" ? styles.right : styles.right}`}
        />
      </div>

 
      {activeTab === "news" && (
        <div className={styles.contentWrapper} id='#news'>
<div className={styles.sectionReverse}>
  <a href="https://www.nyp.org/advances/article/neurology-neurosurgery/stemming-the-tide-of-disc-degeneration-after-microdiscectomy#:~:text=That%20puts%20every%20patient%20who,level%20from%20the%20same%20side." target="_blank" rel="noopener noreferrer">
    <img src="/img/father.png" alt="News 1" className={styles.sectionImage} style={{objectFit:'contain'}} />
  </a>
  <div className={styles.textContent}>
    <h2>Archbishop Anoushavan's Post-Operative Visit</h2>
    <p>On Tuesday, May 28, during his post-operative visit to Och Spine at New York-Presbyterian at the Weill Cornell Medicine Center for Comprehensive Spine Care, Archbishop Anoushavan had all 20 stitches removed.</p>
    <p>During the visit, His Eminence met with his renowned neurosurgeon, Dr. Roger Härtl, who was pleased with the results of the surgery and encouraged the prelate to continue his treatment over the next four weeks, followed by physiotherapy.</p>
    <p>As a token of his gratitude, Archbishop Anoushavan presented Dr. Härtl with an Armenian-style cross, which was accepted with great appreciation.</p>
    <p>The Prelate continues fulfilling his obligations from home.</p>
    <a href="https://armenianprelacy.org/2024/05/30/update-on-prelates-health/" target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
</div>

  <div className={styles.section}>
            <a href="https://www.nyp.org/advances/article/neurology-neurosurgery/stemming-the-tide-of-disc-degeneration-after-microdiscectomy#:~:text=That%20puts%20every%20patient%20who,level%20from%20the%20same%20side." target="_blank" rel="noopener noreferrer">
              <img src="/img/hartl1mage.jpg" alt="News 1" className={styles.sectionImage} />
            </a>
            <div className={styles.textContent}>
              <h2>Stemming the Tide of Disc Degeneration After Microdiscectomy</h2>
              <p>A world-renowned pioneer and leader in minimally invasive spinal surgery,
                 Roger Härtl, MD, continually pursues research seeking innovative and less invasive 
                 surgical and biological treatment strategies for degenerative diseases of the spine. 
                 Most recently, Dr. Härtl, Co-Director of Och Spine at NewYork-Presbyterian and Director 
                 of the Weill Cornell Medicine&apos;s Center for Comprehensive Spine Care, is exploring novel 
                 tissue engineering techniques for the repair and regeneration of degenerated spinal discs, 
                 the most common cause of back and neck pain.</p>
              <a href="https://www.nyp.org/augmented-reality" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
           <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
            <h2> Och Spine at NewYork-Presbyterian/The Spiral</h2>
            <p>A state-of-the-art spine center is now open in The Spiral at Hudson Yards at 504 West 35th Street. This new center brings together spine care specialists from 
              Columbia and Weill Cornell Medicine, and will provide outpatient spine care for children and adults.</p>
              <a href="https://www.nyp.org/ochspine/thespiral" target="_blank" rel="noopener noreferrer">See more</a>
            </div>
            <div>
            <iframe
                src="https://player.vimeo.com/video/1044763140"
                allowFullScreen
                width="100%" 
                height="400" 
                frameBorder="0" className={styles.sectionImage}>
            </iframe>
            </div>
          </div>
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
            
          {/*<div className={styles.section}>
            <div className={styles.textContent}>
                    <h2>Vittorio Sella and Wilfred Thesiger: Photographs at the Edge</h2>
                    <p>
                    As photographer Paolo Pellegrin has written,art allows for the documentation of the alien with truth rather than conquest. The works of mountaineer and photographer Vittorio Sella (1859–1943) and desert traveler and author Wilfred Thesiger (1910–2003) are central to his collection.

Dr. Härtl continues to push the boundaries of neurological surgery while fostering connections between medical communities worldwide. His multidimensional approach to life reflects a deep-seated curiosity and a commitment to bridging cultural and intellectual divides through exploration and scholarship
                    </p>
                    <Link 
                    href="https://www.youtube.com/live/UEizbdwpi7A"
                    target='__blank'>Watch Video</Link>
                </div>
                <div className={styles.imageContainer2}>
                <iframe src="https://www.youtube.com/embed/UEizbdwpi7A?si=Krnmkq3zkV0gzbyf"  allowFullScreen className={styles.sectionImage}/>
                </div>
            </div>*/}

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
         
          <div className={styles.section}>
  <a href="https://www.npr.org/sections/shots-health-news/2024/11/11/nx-s1-5185967/low-back-pain-stretch-yoga" target="_blank" rel="noopener noreferrer">
    <img src="/img/yoga.webp" alt="Yoga and Back Pain" className={styles.sectionImage} />
  </a>
  <div className={styles.textContent}>
    <h2>Online Yoga Classes Prove Helpful for Back Pain</h2>
    <p>
      A recent study highlighted by NPR reveals that virtual yoga sessions can significantly alleviate chronic low back pain. Dr. Roger Härtl, neurosurgical director of Och Spine at NewYork-Presbyterian/Weill Cornell Medical Center, who was not involved in the study, commented on the findings, stating, &rdquo;I find this very exciting because we have this huge chunk of patients, 95% of patients, where we sometimes don&apos;t know what to do.&rdquo;
    </p>
    <a href="https://www.npr.org/sections/shots-health-news/2024/11/11/nx-s1-5185967/low-back-pain-stretch-yoga" target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
</div>


        </div>
      )}

      {activeTab === "podcasts" && (

        <div className={styles.contentWrapper} id='#podcasts'>
             <div className={styles.section}>
            <div className={styles.textContent}>
            <h2> Advancing Solutions for Degenerative Disc Disease Through Regeneration, Repair, and Replacement</h2>
            <p>Biology research is advancing lasting solutions for degenerative disc diseaese 
            through regeneration, repair, replacement.</p>
              <a href="https://drive.google.com/file/d/1wBzGVvVQgyW24eFPGPJmLp_4Gyigmpvb/preview" target="_blank" rel="noopener noreferrer">View Podcast</a>
            </div>
              <iframe
                src="https://www.youtube.com/embed/YVdUAgBZCRQ?si=2OORcbX4udpml67y"
                allowFullScreen
                width="100%" 
                height="400" 
                frameBorder="0" className={styles.sectionImage}>
            </iframe>
          </div>

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
        <h2>From Tanzania to the Operating Room: </h2>
        <p>A Spine Neurosurgeon&apos;s Mission | The Rad & Norty Show ,This episode of The Rad & Norty Show features an inspiring conversation with a renowned spine neurosurgeon Dr. Härtl, sharing his incredible journey from Tanzania to becoming a leading expert in the operating room.
           Tune in to hear about his challenges, successes, 
           and his commitment to helping patients worldwide.</p>
        <Link 
            href="https://www.youtube.com/live/qspmogrSnos?si=iTi1ium70-jnKHyO"
            target="_blank" rel="noopener noreferrer">Watch Video</Link>
    </div>
    <div className={styles.videoWrapper}>
    <iframe 
    src="https://www.youtube.com/embed/qspmogrSnos" 
    allowFullScreen
    width="100%" 
    height="400" 
    frameBorder="0" className={styles.sectionImage}>
</iframe>
    </div>
</div>     

             <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
                    <h2>Dr. Roger Härtl on MISS Motion Sparing Surgery in the Cervical Spine.</h2>
                    <p>
                    Dr. Roger Härtl presented an insightful talk at the 2024 Symposium on
                     Motion Sparing Surgery in Spine. In his presentation, 
                     he explored the role of motion-preserving techniques in cervical spine surgery.
                     He shared his experiences with minimally invasive over-the-top
                      decompression for patients with cervical spinal stenosis.
                    </p>
                    <Link 
                    href="https://www.youtube.com/watch?v=YtYQH1IHVYk"
                    target='__blank'>Watch Video</Link>
                </div>
                <div className={styles.imageContainer2}>
                <iframe src="https://www.youtube.com/embed/YtYQH1IHVYk?si=YzyUXtRplFW2o-oa"  allowFullScreen className={styles.sectionImage}/>
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

export default HonorsAndAwardsPage;
