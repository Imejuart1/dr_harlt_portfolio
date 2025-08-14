"use client"
import React, { useEffect , useState} from 'react';
import Link from 'next/link';
import styles from './explore.module.scss';

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
      title: "Dr. Roger Hartl -14 Years inTanzania (J&J Interview 2022)",
      src: "https://www.youtube.com/embed/n81sJVbMIUw?si=fEmR9pM2tps23x6S",
    },
   {
      title: "Tanzania Neurosurgery Project 2019: Dr. Roger Hartl in New ICU at MOI",
      src: "https://www.youtube.com/embed/ji83vBbXR7E?si=jtJxt3RF7VIYWT_s",
    },
       {
      title: "NYC-MISS 2019: Dr. Roger Hartl",
      src: "https://www.youtube.com/embed/zV4a9RQppj8?si=EDU9y6D6gv_UNc-o",
    },
     {
      title: "NYC-MISS 2019: Dr. Roger Hartl in the Lab",
      src: "https://www.youtube.com/embed/0RyCrtTLkBA?si=oX5vyswHbe_7PX9p",
    },
     {
      title: "Tanzania Neurosurgery Project 2019: Dr. Roger Hartl and Dr. Jose Corredor",
      src: "https://www.youtube.com/embed/IIsgHCwkW1c?si=9FZ99Kl1OHUgJxd6",
    },
    {
      title: "Tanzania Neurosurgery Project 2019: Dr. Roger Hartl Update",
      src: "https://www.youtube.com/embed/sr8QTPt5N9g?si=VIouyzETyu9tWAr_",
    },
  ];
  
  const filteredVideos = lectureVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(/img/newhartl2.jpg)` }}>
        <div className={styles.content}>
          <h1>Explore Videos</h1>
          <p>Watch insightful exploration videos from Dr. Härtl.</p>
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

</div>

    </section>
  );
};

export default MaterialLecturesComponent;
