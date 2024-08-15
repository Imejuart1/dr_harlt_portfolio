import React from 'react';
import styles from './MediaCardComponent.module.scss';

interface MediaCardProps {
  type: string;
  src: string;
  title: string;
}

const MediaCardComponent: React.FC<MediaCardProps> = ({ type, src, title }) => {
  return (
    <div className={styles.mediaCardContainer}>
      {/*<div className={styles.mediaCard}>
        {type === 'pdf' && (
          <iframe src={src} title={title} className={styles.pdfViewer}></iframe>
        )}
        {type === 'video' && (
          <iframe src={src} title={title} className={styles.videoViewer} allowFullScreen></iframe>
        )}
      </div>*/}
    </div>
  );
};

export default MediaCardComponent;
