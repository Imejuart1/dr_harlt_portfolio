// app/honors-and-awards/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import styles from './HonorsAndAwards.module.scss';

const images = [
  'img/awardsback.jpeg',
  'img/reviewmain3.jpeg'
];

const HonorsAndAwardsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"honors" | "news">("honors");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.honorsSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className={styles.content}>
          <h1>Honors & Awards</h1>
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
        <div
          className={`${styles.tabUnderline} ${activeTab === "honors" ? styles.left : styles.right}`}
        />
      </div>
      
      {activeTab === "honors" && (
        <div className={styles.contentWrapper}>
          <div className={styles.section}>
            
            <a href="https://neurosurgery.weillcornell.org/in-the-news/dr-roger-h%C3%A4rtl-named-aans-humanitarian-year" target="_blank" rel="noopener noreferrer">
            <div style={{width:'100%'}}>
              <img src="img/awardroger1.jpeg" alt="Honor 1" className={styles.sectionImage}/>
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

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Hans Kraus Award</h2>
              <p>Dr. Roger Härtl has received the Hans Kraus Award for his groundbreaking work in spine surgery and patient care.<br></br>
              "We are proud to present the award to Roger Härtl MD, the Hansen-MacDonald Professor of Neurological Surgery and Director of Neurosurgery Spine at the Weill Cornell Medicine Brain and Spine Center in New York."</p>
              <a href="https://frame.foundation/hans-kraus-award" target="_blank" rel="noopener noreferrer">Read more</a><br></br>
              <a>See pdf</a>
            </div>
            <a href="https://frame.foundation/hans-kraus-award" target="_blank" rel="noopener noreferrer">
            <div style={{width:'100%'}}>
              <img src="img/HansKraus2.png" alt="Honor 2" className={styles.sectionImage}/>
              </div>
            </a>
          </div>

          <div className={styles.section}>
            <a href="https://www.americasbestspinesurgeons.com" target="_blank" rel="noopener noreferrer">
            <div style={{width:'100%'}}>
              <img src="img/hartNews1.jpg" alt="Honor 3" className={styles.sectionImage}/>
              </div>
            </a>
            <div className={styles.textContent}>
              <h2>America's Best Spine Surgeons 2024</h2>
              <p>Dr. Roger Härtl has been named one of America’s Best Spine Surgeons for 2024, highlighting his exceptional contributions to the field.</p>
              <a href="https://www.americasbestspinesurgeons.com" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>

          {/* Add more sections as needed */}
        </div>
      )}
      
      {activeTab === "news" && (
        <div className={styles.contentWrapper}>
          <div className={styles.section}>
            <a href="https://www.nyp.org/augmented-reality" target="_blank" rel="noopener noreferrer">
              <img src="img/hartNews1.jpg" alt="News 1" className={styles.sectionImage}/>
            </a>
            <div className={styles.textContent}>
              <h2>New York-Presbyterian Augmented Reality Advances Feature</h2>
              <p>Dr. Härtl's innovative use of augmented reality in spine surgery is transforming patient outcomes and setting new standards in the field. 
              For nearly 20 years, Roger Härtl, MD, Co-Director of Och Spine at NewYork-Presbyterian and Director of Weill Cornell Medicine’s Center for Comprehensive Spine Care, has used intraoperative imaging and stereotactic 
              navigation in spinal surgery to guide instrumentation placement and tumor resection in minimally invasive spine surgery.</p>
              <a href="https://www.nyp.org/augmented-reality" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Medical Marvel - New York Magazine Feature</h2>
              <p>Dr. Roger Härtl performed a life-saving surgery on firefighter Eugene Stolowski, reconnecting his nearly severed skull to his spine after a devastating fall during the Black Sunday fire. Despite a mere 5% survival chance, 
              Dr. Härtl's expertise led to a miraculous recovery, showcasing his unparalleled skill in neurosurgery.</p>
              <a href="https://nymag.com/health/bestdoctors/2006/17259/" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
            <a href="https://nymag.com/health/bestdoctors/2006/17259/" target="_blank" rel="noopener noreferrer">
              <img src="img/medicalmarvel.png" alt="News 2" className={styles.sectionImage}/>
            </a>
          </div>

          <div className={styles.section}>
            <a href="https://podcasts.apple.com/us/podcast/beckers-healthcare-spine-and-orthopedic-podcast/id1512530263" target="_blank" rel="noopener noreferrer">
              <img src="img/beckerpodcast.png" alt="News 3" className={styles.sectionImage}/>
            </a>
            <div className={styles.textContent}>
              <h2>Becker's Healthcare: Spine and Orthopedic Podcast</h2>
              <p>Dr. Roger Hartl, Professor of Neurological Surgery and Director of Spinal Surgery at Weill Cornell Medicine 
              as well as Neurosurgical Director, Och Spine at NewYork-Presbyterian, provides a glimpse into his journey, 
              offers insights into his expertise in neurological surgery, developments in his field, and trends 
              shaping the industry as we approach 2024. He delves into his mission work in Tanzania, 
              discussing his proudest achievements and providing guidance for other surgeons eager to contribute to a cause.</p>
              <a href="https://podcasts.apple.com/us/podcast/beckers-healthcare-spine-and-orthopedic-podcast/id1512530263" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>Becker's Spine Review: AR in MIS-TLIF Feature</h2>
              <p>Researchers with New York City-based Weill Cornell Medicine were able to complete 10 minimally 
              invasive transforaminal lumbar interbody fusions using augmented reality with no complications ...</p>
              <a href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
            <a href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter" target="_blank" rel="noopener noreferrer">
              <img src="img/becker.png" alt="News 4" className={styles.sectionImage}/>
            </a>
          </div>

          <div className={styles.section}>
            <a href="https://www.beckershospitalreview.com/podcasts/podcasts-beckers-hospital-review/roger-h-rtl-director-of-neurosurgery-spine-at-weill-cornell-medicine-94433094.html" target="_blank" rel="noopener noreferrer">
              <img src="img/becker2.png" alt="News 5" className={styles.sectionImage}/>
            </a>
            <div className={styles.textContent}>
              <h2>Becker's Hospital Review: Podcast Features</h2>
              <p>Roger Härtl, Director of Neurosurgery Spine at Weill Cornell Medicine, joins the podcast to discuss his background, his focus on patient access to quality care & minimally invasive spine surgery, and what healthcare leaders need to be successful.</p>
              <a href="https://www.beckershospitalreview.com/podcasts/podcasts-beckers-hospital-review/roger-h-rtl-director-of-neurosurgery-spine-at-weill-cornell-medicine-94433094.html" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
          </div>

          <div className={styles.sectionReverse}>
            <div className={styles.textContent}>
              <h2>NYP Advances in Care Podcast Feature</h2>
              <p>Dr. Roger Härtl is no stranger to forging new ground in neurosurgery. In this episode, Dr. Härtl and Host Catherine Price discuss how far navigation technology has come over the past 20 years and look ahead to how implementing augmented reality can make surgery even more precise for surgeons and less invasive for patients. Dr. Härtl also shares the impact of his work teaching
                 and training neurosurgeons in Tanzania and discusses where he hopes technology will take the field of neurosurgery next.</p>
              <a href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter" target="_blank" rel="noopener noreferrer">Listen to the Podcast</a>
            </div>
            <a href="https://www.beckersspine.com/spine/55630-the-potential-of-ar-in-minimally-invasive-tlif-procedures.html?utm_medium=email&utm_content=newsletter" target="_blank" rel="noopener noreferrer">
              <img src="img/advancepodcast6.png" alt="News 6" className={styles.sectionImage}/>
            </a>
          </div>

          {/* Add more sections as needed */}
        </div>
      )}
    </section>
  );
};

export default HonorsAndAwardsPage;
