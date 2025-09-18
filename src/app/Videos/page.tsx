'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ProjectComponent.module.scss';
import { useRouter } from 'next/navigation';

const videoData = [
  {
    title: 'Lecture Videos',
    videos: [
      'https://www.youtube.com/embed/NGr9cclDlnI', 
    ],
    link: '/Videos/lectures',
  },
  {
    title: 'Surgical Videos',
    videos: [ 
      'https://www.youtube.com/embed/Eo1GtDXxJYg',
      'https://www.youtube.com/embed/pgodXc8sqjg',
      'https://www.youtube.com/embed/Eo1GtDXxJYg',
    ],
    link: '/Videos/surgical',
  },
  {
    title: 'Patient Stories',
    videos: [
      'https://www.youtube.com/embed/LbQFK64lVYE',
      'https://www.youtube.com/embed/_eojuoLUn8I',
      'https://www.youtube.com/embed/kKOoUIsZVFg',
    ],
    link: '/Videos/stories',
  },
  {
    title: 'Explore Videos',
   videos: [
  'https://www.youtube.com/embed/ji83vBbXR7E',
  'https://www.youtube.com/embed/zV4a9RQppj8',
  'https://www.youtube.com/embed/kKOoUIsZVFg',
],
    link: '/Videos/explore',
  },
];

const AutoVideoCard = ({ title, videos, link }: { title: string; videos: string[]; link: string }) => {
  const [index, setIndex] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % videos.length;
      setIndex(nextIndex);
    }, 20000); // 7 seconds per video

    return () => clearInterval(interval);
  }, [index, videos.length]);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = `${videos[index]}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`;
    }
  }, [index, videos]);

  return (
    <div className={styles.videoCardSingle} onClick={() => router.push(link)}>
      <div className={styles.videoWrapper}>
        <iframe
          ref={iframeRef}
          title={`${title} Video`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <h3>{title}</h3>
    </div>
  );
};


const ProjectVideoComponent = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.heroSection} style={{ backgroundImage: `url('/img/hartl2mage.jpg')` }}>
        <div className={styles.content}>
          <h1>Video Library</h1>
          <p>Watch lectures, surgical procedures, and inspiring patient stories.</p>
        </div>
      </div>

      <div className={styles.singleCardGrid}>
        {videoData.map((section, index) => (
          <AutoVideoCard
            key={index}
            title={section.title}
            videos={section.videos}
            link={section.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectVideoComponent;
