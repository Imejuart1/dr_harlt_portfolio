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
      title: "Tanzania Neurosurgery Project 2019: Dr. Roger Hartl in New ICU at MOI",
      src: "https://www.youtube.com/embed/ji83vBbXR7E?si=jtJxt3RF7VIYWT_s",
    },
    
  ];
  
  const filteredVideos = lectureVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <section className={styles.materialSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(/img/lecturehero.png)` }}>
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
