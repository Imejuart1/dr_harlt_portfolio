"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import React from "react";
import MediaCardComponent from "../MediaCardComponent";
import styles from "./Slug.module.scss";

const materialData = {
  "surgical-guide-minimally-invasive-tubular-surgery": {
    title: "Minimally Invasive Tubular Surgery Resources",
    content:
      "Explore detailed guides and instructional videos for minimally invasive tubular surgery.",
    media: [
      {
        type: "video",
        src: "https://www.youtube.com/embed/nQOpQtxvtDI",
        title: "Minimally Invasive Tubular Surgery Video",
      },
      {
        type: "pdf",
        src: "pdfs/surgery1.pdf",
        title: "Surgical Guide for Minimally Invasive Tubular Surgery",
        previewImage: "/img/surgy1.png", // Add the preview image path
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/UTc3eNLauUw",
        title: "Additional Video 1",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/O7m0paEhn60",
        title: "Additional Video 2",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/SXAP0TNRbFM",
        title: "Additional Video 3",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/B3xjrJ8kMpc",
        title: "Additional Video 4",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/AfsXdKMvRrc",
        title: "Additional Video 5",
      },
    ],
  },
  // Add more materials here
};

const MaterialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"guides" | "videos">("guides");
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
s
      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${activeTab === "guides" ? "active" : ""}`}
          onClick={() => setActiveTab("guides")}
        >
          Guides
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "videos" ? "active" : ""}`}
          onClick={() => setActiveTab("videos")}
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
