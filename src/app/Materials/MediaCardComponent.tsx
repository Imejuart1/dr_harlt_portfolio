import React from 'react';
import styles from './MediaCardComponent.module.scss';
import { FaFilePdf } from 'react-icons/fa';

interface MediaCardProps {
  type: string;
  src: string;
  title: string;
  previewImage?: string; // Optional preview image for PDF
}

const MediaCardComponent: React.FC<MediaCardProps> = ({ type, src, title, previewImage }) => {
  return (
    <div className={styles.mediaCardContainer}>
      <div className={styles.mediaCard}>
        {type === 'pdf' && (
          <div className={styles.pdfContainer}>
              
            <div className={styles.pdfHeader}>
              <FaFilePdf className={styles.pdfIcon} />
              <h2>{title}</h2>
              <div className={styles.pdfActions}>
                <a href={src} target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
                  READ
                </a>
              </div>
            </div>
            <iframe src={src} title={title} className={styles.pdfPreviewImage}  allowFullScreen></iframe>
           {/*{previewImage && (
              <img src={previewImage} alt={`Preview of ${title}`} className={styles.pdfPreviewImage} />
            )}*/}
          </div>
        )}

{type === 'images' && (
          <div className={styles.pdfContainer}>
            <img src={previewImage} alt={`Preview of ${title}`} className={styles.pdfPreviewImage} />
  
          </div>
        )}
        

        {type === 'video' && (
          <a href={src} target="_blank">
          <div className={styles.videoContainer}>
            <h2 className={styles.videoTitle}>{title}</h2>
            <iframe src={src} title={title} className={styles.videoViewer} referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default MediaCardComponent;
