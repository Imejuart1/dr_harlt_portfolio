'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './surgical.module.scss';

interface MaterialLink {
  title: string;
  href: string;
  isExternal?: boolean;
  triggerVideosTab?: boolean;
}

interface MaterialGroup {
  id: string;
  heading: string;
  links: MaterialLink[];
}

  
const materialGroups: MaterialGroup[] = [
  {
    id: 'pre-operative-information',
    heading: 'Pre-Operative Information',
    links: [
      {
        title: 'Surgical Guide for Minimally Invasive Tubular Surgery',
        href: '/Materials/surgical-guide-minimally-invasive-tubular-surgery',
        triggerVideosTab: true,
      },
      {
        title: 'Surgical Guide for Minimally Invasive TLIF',
        href: '/Materials/surgical-guide-minimally-invasive-tlif',
        triggerVideosTab: true,
      },
      {
        title: 'Surgical Guide for ELIF, XLIF, LLIF, DLIF',
        href: '/Materials/surgical-guide-elif-xlif-llif-dlif',
        triggerVideosTab: true,
      },
      {
        title: 'Occipitocervical Fusion',
        href: 'https://drive.google.com/file/d/1JxGHNL9sgi19ncuJDXJkeAtblMfRLsCi/view',
        isExternal: true,
      },
    ],
  },
  {
    id: 'post-operative-information',
    heading: 'Post-Operative Information',
    links: [
      {
        title: 'B.L.T. Video',
        href: '/Materials/B.L.T',
        triggerVideosTab: true,
      },
    ],
  },
  {
    id: 'youtube-education',
    heading: 'Dr. Härtl\'s YouTube Channel & Other Patient Education Materials',
    links: [
      {
        title: 'Surgical Videos',
        href: '/Materials/surgical-videos',
        triggerVideosTab: true,
      },
      {
        title: 'Spine Time - highlights from our patient education webinar',
        href: '/Materials/spine-time',
        triggerVideosTab: true,
      },
    ],
  }, {
    id: 'youtube-education',
    heading: 'Dr. Härtl\'s YouTube Channel & Other Patient Education Materials',
    links: [
      {
        title: 'Surgical Videos',
        href: '/Materials/surgical-videos',
        triggerVideosTab: true,
      },
      {
        title: 'Spine Time - highlights from our patient education webinar',
        href: '/Materials/spine-time',
        triggerVideosTab: true,
      },
    ],
  },
];

const SurgicalVideosComponent: React.FC = () => {
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
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
 const surgicalVideos = [
    
    {
      title: "Spinal Navigation Nuances - Roger Härtl, M.D.",
      src: "https://www.youtube.com/embed/CuFUrso3Orw?si=mOhCTmLMXAdVPZIY" ,
    },
  ]

   const filteredVideos = surgicalVideos.filter(video =>
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
      <div className={styles.materialLinks}>
        {materialGroups.map((group) => (
          <div key={group.id} className={styles.materialGroup} id={group.id}>
            <h2>{group.heading}</h2>
            <ul>
              {group.links.map((link, index) => (
                <li key={index}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() =>
                        link.triggerVideosTab &&
                        sessionStorage.setItem('fromVideos', 'true')
                      }
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default SurgicalVideosComponent;
