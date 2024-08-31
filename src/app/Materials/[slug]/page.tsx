"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import React from "react";
import MediaCardComponent from "../MediaCardComponent";
import styles from "./Slug.module.scss";
import { materialData } from "./Materialsdata/materialData";

const MaterialPage: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;

  if (!slug) {
    return <div>Invalid material</div>;
  }

  const material = materialData[slug as keyof typeof materialData];

  if (!material) {
    return <div>Material not found</div>;
  }

  const pdfs = material.media.filter((item) => item.type === "pdf");
  const videos = material.media.filter((item) => item.type === "video");

  const guidesAvailable = pdfs.length > 0;
  const videosAvailable = videos.length > 0;

  // Set initial active tab based on availability
  const [activeTab, setActiveTab] = useState<"guides" | "videos">(
    guidesAvailable ? "guides" : "videos"
  );

  return (
    <div className={styles.mainmaterial}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url('img/surgical (2).jpeg')` }}
      >
        <div className={styles.content}>
          <h1>{material.title}</h1>
          <p>{material.content}</p>
        </div>
      </div>

      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${activeTab === "guides" ? "active" : ""} ${!guidesAvailable ? styles.disabled : ""}`}
          onClick={() => guidesAvailable && setActiveTab("guides")}
          disabled={!guidesAvailable}
        >
          Guides
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "videos" ? "active" : ""} ${!videosAvailable ? styles.disabled : ""}`}
          onClick={() => videosAvailable && setActiveTab("videos")}
          disabled={!videosAvailable}
        >
          Videos
        </button>
        <div
          className={`${styles.tabUnderline} ${activeTab === "guides" ? styles.left : styles.right}`}
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
