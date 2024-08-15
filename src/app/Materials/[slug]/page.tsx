"use client"
import { useParams } from 'next/navigation'; // Use next/navigation instead of next/router
import React from 'react';
import MediaCardComponent from '../MediaCardComponent';

const materialData = {
  "surgical-guide-minimally-invasive-tubular-surgery": {
    type: "pdf",
    src: "/path/to/your/pdf.pdf",
    title: "Surgical Guide for Minimally Invasive Tubular Surgery",
    content: "This is the content for the surgical guide...",
  },
  "surgical-guide-minimally-invasive-tlif": {
    type: "pdf",
    src: "/path/to/your/pdf2.pdf",
    title: "Surgical Guide for Minimally Invasive TLIF",
    content: "This is the content for the TLIF guide...",
  },
  // Add more materials here
};

const MaterialPage: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;  // Access the dynamic slug

  if (!slug) {
    return <div>Invalid material</div>;
  }

  const material = materialData[slug as keyof typeof materialData];

  if (!material) {
    return <div>Material not found</div>;
  }

  return (
    <div>
      <h1>{material.title}</h1>
      <p>{material.content}</p>
      <MediaCardComponent type={material.type} src={material.src} title={material.title} />
    </div>
  );
};

export default MaterialPage;
