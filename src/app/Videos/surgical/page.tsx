'use client';
import React, { useEffect, useState } from 'react';
import styles from './surgical.module.scss';

const SurgicalVideosComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Full list of videos 
  const surgicalVideos = [
     {
      title: "Spinal Navigation Nuances - Roger Härtl, M.D.",
      src: "https://www.youtube.com/embed/CuFUrso3Orw?si=mOhCTmLMXAdVPZIY" ,
    },
    {
      title: "Augmented Reality (AR) in a Spine Model",
      src: "https://www.youtube.com/embed/bNDthvkzlNs?si=_bK_Fa_tPSxA8DhJ",
    },
    {
      title: "Transforaminal Lumbar Interbody Fusion (TLIF)",
      src: "https://www.youtube.com/embed/KDQmEC7qvuc?si=L5Wo3sE_dyoqu4eZ",
    },
    {
      title: "Minimally Invasive Tubular Discectomy for a Left L4/5 Far Lateral Disc Herniation",
      src: "https://www.youtube.com/embed/CzryjLsYoXM?si=Jvs0J2hels5IHZvC" ,
    },
    {
      title: "Tubular MIS injection of BMAC after discectomy into intradiscal space",
      src: "https://www.youtube.com/embed/t3RTCaorCWE?si=FElaYu5gsHQKNy9w",
    },
    {
      title: "Cervical ULBD MIS Tubular",
      src: "https://www.youtube.com/embed/nQOpQtxvtDI",
    },
    {
      title: "Posterior Cervical Foraminotomy (MIS PCF)",
      src: "https://www.youtube.com/embed/UTc3eNLauUw",
    },
     {
      title: "NYC-MISS 2021 ULBD Surgical Demonstration - Weill Cornell Medicine CME",
      src: "https://www.youtube.com/embed/mq1XA_APQZE?si=VM1XLEv-jOuYee1n",
    },
    {
      title: "MIS Microdiscectomy for Lumbar Giant Spinal Disc Herniation",
      src: "https://www.youtube.com/embed/O7m0paEhn60",
    },
    {
      title: "MIS Over the Top ULBD for contralateral foraminal disc herniation",
      src: "https://www.youtube.com/embed/SXAP0TNRbFM",
    },
    {
      title: "MIS Lumbar Laminectomy and Contralateral Foraminotomy",
      src: "https://www.youtube.com/embed/B3xjrJ8kMpc",
    },
     {
      title: "MIS Lumbar AR Tumor Resection (Augmented Reality)",
      src: "https://www.youtube.com/embed/eirQBtNagiI?si=CxBxUpVYs8y3Jiof" ,
    },
    {
      title: "MIS Dural Repair Technique",
      src: "https://www.youtube.com/embed/9rJbNYdkAaE?si=ZiYFQlJwMPs0mhKc" ,
    },
    {
      title: "MIS L4-5 Over-the-Top ULBD for Lumbar Spinal Stenosis",
      src: "https://www.youtube.com/embed/AfsXdKMvRrc",
    },
    {
      title: "Transforaminal Interbody Fusion of the Lumbar Spine (MIS TLIF)",
      src: "https://www.youtube.com/embed/_7WVuwZ1Odc",
    },
    {
      title: "Surgical Guide for Minimally invasive spinal fusion.",
      src: "https://www.youtube.com/embed/9iXj1jAg5Vg",
    },
    {
      title: "Single Stage Lateral Lumbar Spine Interbody Fusion (MIS - SSLIF)",
      src: "https://www.youtube.com/embed/9iXj1jAg5Vg?si=gpb44MLxG4XKEQ9I" ,
    },
    {
      title: "Thoracic Spinal Cord Herniation Resection and Dural Repair",
      src: "https://www.youtube.com/embed/NJ5nNi3-JvI?si=AMhrepqOa6w34wzA" ,
    },
     {
      title: "MIS Over the Top ULBD for contralateral foraminal disc herniation",
      src: "https://www.youtube.com/embed/SXAP0TNRbFM?si=uJ8xGKgqRTYoNPZV"  ,
    },
  ];

    // ✅ Helper: extract YouTube video ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : '';
  };
  
 // ✅ Search filter
  const filteredVideos = surgicalVideos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.materialSection}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url('/img/Aboutme2.jpg')` }}
      >
        <div className={styles.content}>
          <h1>Surgical Videos</h1>
          <p>
            Explore detailed surgical procedures and guides by Dr. Härtl,
            covering minimally invasive and advanced spine surgeries.
          </p>
        </div>
      </div>

      <div className={styles.flexWrapContainer}>
        {/* ✅ Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* ✅ Thumbnail Grid */}
        <div className={styles.videoGrid}>
          {filteredVideos.map((video, index) => {
            const videoId = getYouTubeId(video.src);
            const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <div key={index} className={styles.videoCard}>
                <a
                  href={video.src.replace('/embed/', '/watch?v=')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className={styles.thumbnail}
                  />
                  <div className={styles.playButton}>▶</div>
                </a>
                <h3>{video.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SurgicalVideosComponent;