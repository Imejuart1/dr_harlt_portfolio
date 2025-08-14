"use client"
import React, { useEffect , useState} from 'react';
import Link from 'next/link';
import styles from './lecture.module.scss';

const MaterialLecturesComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const elementId = window.location.hash.replace('#', '');
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
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

  const lectureVideos = [
    {
      title: "Expanding the Frontiers of Technology Assisted Surgery - Roger Hartl, M.D.",
      src: "https://www.youtube.com/embed/JvoIHZ8fnl0",
    },
    {
      title: "MIS & Navigation: Pros & Cons - Roger Hartl, M.D.",
      src: "https://www.youtube.com/embed/-Gv0lPB9v2U",
    },
    {
      title: "MIS & Navigation: Pros & Cons - Roger Hartl, M.D.",
      src: "https://www.youtube.com/embed/7jN4fx51lBo",
    },
    {
      title: "MISS Cervical Motion-Sparing Surgery",
      src: "https://www.youtube.com/embed/YtYQH1IHVYk",
    },
    {
      title: "From Tanzania to the OR – Rad & Norty Show",
      src: "https://www.youtube.com/embed/qspmogrSnos",
    },
    {
      title: "MOI Tanzania TV 2023 – Neurosurgical Training",
      src: "https://www.youtube.com/embed/ceQxOqsr2uE",
    },
    {
      title: "MOI Tanzania TV 2024 Feature",
      src: "https://drive.google.com/file/d/1zy6W0SSJBaY2R508r-mBnbMfjh1b_loe/preview",
    },
    {
      title: "Degenerative Disc Solutions – Regeneration & Repair",
      src: "https://drive.google.com/file/d/1wBzGVvVQgyW24eFPGPJmLp_4Gyigmpvb/preview",
    },
    {
      title: "The Spiral – Och Spine at Hudson Yards",
      src: "https://player.vimeo.com/video/1044763140",
    },
    {
      title: "Vittorio Sella & Wilfred Thesiger Lecture",
      src: "https://www.youtube.com/embed/UEizbdwpi7A",
    },
    {
      title: "Dr. Roger Härtl on MISS Motion Sparing Surgery in the Cervical Spine.",
      src: "https://www.youtube.com/embed/YtYQH1IHVYk?si=YzyUXtRplFW2o-oa",
    },
    {
      title: "NYC-MISS 2023 Summer Master Class (Weill Cornell Medicine, featuring Dr. Roger Hartl).",
      src: "https://www.youtube.com/embed/o6uRfi36Ciw?si=zGujABhrPCqGnjTY",
    },
  ];
  
  const filteredVideos = lectureVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(/img/lecturehero.png)` }}>
        <div className={styles.content}>
          <h1>Lecture Videos</h1>
          <p>Watch webinars, conferences, and media features where Dr. Härtl shares insights on spine surgery, augmented reality, and global care initiatives.</p>
        </div>
      </div>

      <div className={styles.flexWrapContainer}>

      <div className={styles.searchContainer}>
  <input
    type="text"
    placeholder="Search videos..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className={styles.searchInput}
  />
</div>


  <div className={styles.videoGrid}>
  {filteredVideos.map((video, index) => (
    <div key={index} className={styles.videoCard}>
      <iframe src={video.src} allowFullScreen width="100%" height="250" />
      <h3>
      <a href={video.src} target="_blank" rel="noopener noreferrer">
          {video.title}
        </a>
        </h3>
    </div>
  ))}
</div>
<div className={styles.materialLinks}>
    <div className={styles.materialGroup} id="youtube-education">
      <h2>Featured Lectures</h2>
      <ul>
        <li><Link href="/Materials/spine-time">Spine Time – Webinar Highlights</Link></li>
        <li><Link href="/Materials/finding-balance-neurosurgery">Finding Balance in Neurosurgery</Link></li>
      </ul>
    </div>
  </div>
</div>

    </section>
  );
};

export default MaterialLecturesComponent;
