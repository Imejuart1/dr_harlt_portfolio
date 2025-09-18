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
    title: "Dr. Härtl on Expandable Cervical Interbody Cages",
    src: "https://www.youtube.com/embed/m-4G6DrD5Uo?si=WvDXrouSQ_jZhYJ5"  
  },
      {
    title: "Segmental Lordosis Restoration with Expandable Cervical Interbody Cages - Roger Härtl, MD",
    src: "https://player.vimeo.com/video/1078359511?h=a5787ab73e" 
  },
    {
      title: "Dr. Roger Härtl on Global Neurosurgery Collaboration MOI/Dar Es Salaam Tanzania.",
      src: "https://www.youtube.com/embed/NGr9cclDlnI?si=6nQ3sfE2VrjWFj3N",
    },
    {
      title: "Expanding the Frontiers of Technology Assisted Surgery - Roger Hartl, M.D.",
      src: "https://www.youtube.com/embed/JvoIHZ8fnl0",
    },
    {
      title: "MIS & Navigation: Pros & Cons - Roger Hartl, M.D.",
      src: "https://www.youtube.com/embed/-Gv0lPB9v2U",
    },
    {
      title: "Complication Avoidance, Pearls of MIS Surgery",
      src: "https://www.youtube.com/embed/AmpW3aKUytI?si=KXCuYb1X_AYwZ_L0",
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
      title: "Complication Avoidance, Pearls of MIS Surgery ",
      src: "https://www.youtube.com/embed/Dc0LNYoouHE?si=M0ajRZ0QFpVuEEBn",
    }, 
     {
      title: "Dr. Roger Hartl on Exploration, Neurosurgery, and Finding Balance in Life",
      src: "https://www.youtube.com/embed/L968wcWuAxw?si=I1yUenK74V-SIakJ",
    }, 
    {
      title: "Roger Härtl: MISS Target Philosophy",
      src:"https://www.youtube.com/embed/t_dCS7HwlKk?si=HpsV_JTyIcKsdytp",
    }, 
    {
      title: "Optimizing Alignment Occipitocervical Instability 2024",
      src: "https://www.youtube.com/embed/Eo1GtDXxJYg?si=D9iFtrXDP2dev8Gz",
    }, 
     {
      title: "Optimizing Alignment Occipitocervical Instability 2024",
      src: "https://www.youtube.com/embed/Eo1GtDXxJYg?si=D9iFtrXDP2dev8Gz",
    }, 
    {
      title: "NYC-MISS 2021 Cervical Laminoplasty Surgical Demonstration - Weill Cornell Medicine CME",
      src: "https://www.youtube.com/embed/7puFVMZtB4w?si=EXwW0Ha1XRORwyBV" ,
    }, 
     {
      title: "NYC-MISS 2021 Endoscopic Interlaminar Decompression - Weill Cornell CME",
      src: "https://www.youtube.com/embed/i0TuHMstDA8?si=4M5Ql_0il9A2RLdB" ,
    }, 
     {
      title: "NYC-MISS 2021 TLIF Surgical Demonstration - Weill Cornell Medicine CME",
      src: "https://www.youtube.com/embed/2Ji0lny79Sk?si=ZuHRk3wy5NHCocOF"  ,
    }, 
     {
      title: "MIS TLIF RealSpine Demo with 3D NAV and Augmented Reality",
      src: "https://www.youtube.com/embed/h09Qi_IqDSY?si=CDfFyBx4J5ADGrqK"   ,
    }, 
    {
      title: "Dr. Roger Härtl on MISS Motion Sparing Surgery in the Cervical Spine.",
      src: "https://www.youtube.com/embed/YtYQH1IHVYk?si=YzyUXtRplFW2o-oa",
    },
    {
      title: "NYC-MISS 2023 Summer Master Class (Weill Cornell Medicine, featuring Dr. Roger Hartl).",
      src: "https://www.youtube.com/embed/o6uRfi36Ciw?si=zGujABhrPCqGnjTY",
    }, 
    {
      title: "Dr. Roger Härtl on Non-Surgical Approaches to Back Pain: Conservative Management Strategies &Tai Chi",
      src: "https://www.youtube.com/embed/qHnS_x4wuAo?si=oK0I5Rj34D9pDX8_" ,
    },
     {
      title: "WCM Neurosurgery Grand Rounds: Dr. Roger Härtl, The 5 Ts of Minimally Invasive Spinal Surgery",
      src: "https://www.youtube.com/embed/3uUjtwErP5c?si=fEvSVzfevVMzdfZl" ,
    },
     {
      title: "MISS Target Philosophy Roger Hartl, MD",
      src: "https://www.youtube.com/embed/26EXjg-C00o?si=uZWizKKYzax68sdb"  ,
    },
    {
      title:"MIS & Navigation: Pros & Cons - Roger Hartl, MD",
     src:"https://www.youtube.com/embed/7jN4fx51lBo?si=oDdOnXg4Kz4Fmgdf"
    },
    {
      title:"Does MIS Have a Role in Adult Deformity Surgery",
     src:"https://www.youtube.com/embed/KTu4DxQ8XZw?si=vh60l-Uu52gFs2iO"
    },
     {
      title:"Surgical Management of Benign Tumors of the Spine",
     src:"https://www.youtube.com/embed/-Gv0lPB9v2U?si=aCI6p5ILzSxNDIQN"
    },
      { 
      title:"MIS, Navigation, and AR: Techniques for the Resection of Spinal Tumors",
     src:"https://www.youtube.com/embed/SziIt5QfOSU?si=OSRfQu6sf1Ci4ZoR"
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
      <iframe src={video.src} allowFullScreen width="100%" height="250"  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"/>
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
