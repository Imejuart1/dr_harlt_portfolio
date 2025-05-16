"use client"
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import MediaCardComponent from "../MediaCardComponent";
import styles from "./Slug.module.scss";
import { materialData } from "./Materialsdata/materialData";

interface MediaItem {
  type: string;
  src: string;
  title: string;
  previewImage?: string; 
}


const MaterialPage: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;

  const material = slug ? materialData[slug as keyof typeof materialData] : null;

  const pdfs = material?.media.filter((item) => item.type === "pdf") || [];
  const videos = material?.media.filter((item) => item.type === "video") || [];
  const images = material?.media.filter((item) => item.type === "images") || [];

  const guidesAvailable = pdfs.length || images.length> 0;
  const videosAvailable = videos.length > 0;

  const [activeTab, setActiveTab] = useState<"guides" | "videos">("guides");

useEffect(() => {
  const referrer = document.referrer;
  if (referrer.includes("/Videos") && videosAvailable) {
    setActiveTab("videos");
  } else if (!guidesAvailable && videosAvailable) {
    setActiveTab("videos");
  }
}, [videosAvailable, guidesAvailable]);
  
  if (!slug || !material) {
    return <div>{!slug ? "Invalid material" : "Material not found"}</div>;
  }

  return (
<div className={styles.mainmaterial}>
  <div
    className={styles.heroSection}
    style={{ 
      backgroundImage: `url('/img/Aboutme2.jpg')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}
  >
    <div className={styles.content}>
      <h1>{material.title}</h1>
      <p>{material.content}</p>
    </div>
  </div>


      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "guides" ? "active" : ""
          } ${!guidesAvailable ? styles.disabled : ""}`}
          onClick={() => guidesAvailable && setActiveTab("guides")}
          disabled={!guidesAvailable}
        >
          Guides
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "videos" ? "active" : ""
          } ${!videosAvailable ? styles.disabled : ""}`}
          onClick={() => videosAvailable && setActiveTab("videos")}
          disabled={!videosAvailable}
        >
          Videos
        </button>
        <div
          className={`${styles.tabUnderline} ${
            activeTab === "guides" ? styles.left : styles.right
          }`}
        />
      </div>

      <div className={styles.materialGroup}>
        <div className={styles.mediaContainer}>
          {activeTab === "guides" &&
            pdfs.map((item, index) => (
              <MediaCardComponent
                key={index}
                type={item.type}
                src={item.src}
                title={item.title}
              />
            ))}
             {activeTab === "guides" &&
            images.map((item: MediaItem, index) => (
              <MediaCardComponent
                key={index}
                type={item.type}
                src={item.src}
                title={item.title}
                previewImage={item.previewImage}
              />
            ))}
          {activeTab === "videos" &&
            videos.map((item, index) => (
              <MediaCardComponent
                key={index}
                type={item.type}
                src={item.src}
                title={item.title}
              />
            ))}

           
        </div>
       
      </div>
    </div>
  );
};

export default MaterialPage;