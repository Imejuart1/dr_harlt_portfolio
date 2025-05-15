"use client";
import React, { useState } from 'react';
import styles from './VideoComponent.module.scss';

const categories = [
  {
    title: 'Lecture Videos',
    videos: [
      { url: 'https://www.youtube.com/embed/ByqSJ8XleYc', thumbnail: 'https://img.youtube.com/vi/ByqSJ8XleYc/0.jpg' },
      { url: 'https://www.youtube.com/embed/_eojuoLUn8I', thumbnail: 'https://img.youtube.com/vi/_eojuoLUn8I/0.jpg' },
      { url: 'https://www.youtube.com/embed/kKOoUIsZVFg', thumbnail: 'https://img.youtube.com/vi/kKOoUIsZVFg/0.jpg' },
    ]
  },
  {
    title: 'Surgical Videos',
    videos: [
      { url: 'https://www.youtube.com/embed/ns5M41ePn14', thumbnail: 'https://img.youtube.com/vi/ns5M41ePn14/0.jpg' },
      { url: 'https://www.youtube.com/embed/LbQFK64lVYE', thumbnail: 'https://img.youtube.com/vi/LbQFK64lVYE/0.jpg' },
      { url: 'https://www.youtube.com/embed/AQ3zAqrGYQw', thumbnail: 'https://img.youtube.com/vi/AQ3zAqrGYQw/0.jpg' },
    ]
  },
  {
    title: 'Patient Stories',
    videos: [
      { url: 'https://wcm.app.box.com/s/0rp775k8bddb5eue0cgj6c57p6ivixmf', thumbnail: '/img/video tai chi.png' },
      { url: 'https://www.youtube.com/embed/ByqSJ8XleYc', thumbnail: 'https://img.youtube.com/vi/ByqSJ8XleYc/0.jpg' },
      { url: 'https://www.youtube.com/embed/kKOoUIsZVFg', thumbnail: 'https://img.youtube.com/vi/kKOoUIsZVFg/0.jpg' },
    ]
  }
];

const VideoComponent = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className={styles.videoSection}>
      <h1 className={styles.mainHeading}>Watch Our Stories</h1>
      {categories.map((category, index) => (
        <div key={index} className={styles.category}>
          <h2>{category.title}</h2>
          <div className={styles.videoGrid}>
            {category.videos.map((video, idx) => (
              <div key={idx} className={styles.videoCard} onClick={() => setActiveVideo(video.url)}>
                <img src={video.thumbnail} alt={`Video ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {activeVideo && (
        <div className={styles.modal} onClick={() => setActiveVideo(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <iframe
              src={activeVideo.includes('youtube') ? `${activeVideo}?autoplay=1` : activeVideo}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Player"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoComponent;
