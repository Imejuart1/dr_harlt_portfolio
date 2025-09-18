'use client';
import React, { useEffect, useState } from 'react';
import styles from './surgical.module.scss';

const SurgicalVideosComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Full list of videos 
  const surgicalVideos = [
    {
      title: "Augmented Reality (AR) in a Spine Model",
      src: "https://www.youtube.com/embed/bNDthvkzlNs?si=_bK_Fa_tPSxA8DhJ",
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
      title: "Spinal Navigation Nuances - Roger Härtl, M.D.",
      src: "https://www.youtube.com/embed/CuFUrso3Orw?si=mOhCTmLMXAdVPZIY",
    },
  ];

  // ✅ Search filter
  const filteredVideos = surgicalVideos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.materialSection}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url('/img/newhartl2.jpg')` }}
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

        {/* ✅ Video Grid */}
        <div className={styles.videoGrid}>
          {filteredVideos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
              <iframe
                src={video.src}
                allowFullScreen
                width="100%"
                height="250"
              />
              <h3>
                <a
                  href={video.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

export default SurgicalVideosComponent;
