'use client'
import React from 'react';
import styles from './Gratitude.module.scss';

const Gratitude: React.FC = () => {
  return (
    <div className={styles.gratitudeSection}>
      <div className={styles.content}>
        <h2>Gratitude from Dr. Roger Härtl</h2>
        <p>Taking excellent care of you is the biggest privilege I can think of. If your experience with us and the team at NYP Och Spine was positive, please consider leaving a review for us on Google at the following links:</p>
        
        <div className={styles.linkRow} id='1'>
          <a href="https://www.healthgrades.com/physician/dr-roger-hartl-yy2qb" target="_blank" rel="noopener noreferrer">
            <div className={styles.iconWrapper}>
              <img src="img/healthgrades-icon.svg" alt="Healthgrades Icon" className={styles.reviewIcon} />
            </div>
          </a>
          <a href="https://www.vitals.com/doctors/Dr_Roger_Hartl.html" target="_blank" rel="noopener noreferrer">
            <div className={styles.iconWrapper}>
              <img src="img/vitals.svg" alt="Vitals Icon" className={styles.reviewIcon2} />
            </div>
          </a>
        </div>

        <div className={styles.supportSection}>
          <p>Some of you may also consider supporting other areas I passionately pursue:</p>
          <div className={styles.supportOptions}>
            <button onClick={() => window.location.href = "#humanitarian-work"}>Humanitarian Work</button>
            <button onClick={() => window.location.href = "#spine-research"}>Spine Research</button>
          </div>
        </div>

        <div className={styles.bigImageRow} id='2'>
          <div id="humanitarian-work" className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <h3 className={styles.imageTitle}>Spine Research Projects</h3>
              <p>Please consider <strong>donating</strong> to our neurosurgery <strong>humanitarian work in Tanzania by clicking me</strong></p>
              <a href="https://neurosurgery.weillcornell.org/donate-now" target="_blank" rel="noopener noreferrer">
                <img src="img/humaritian.png" alt="Humanitarian Work" className={styles.bigImage} />
                <div className={styles.arrowIcon}></div>
              </a>
              <a href="https://neurosurgery.weillcornell.org/donate-now" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Go to Link</a>
            </div>
          </div>
        </div>

        <div className={styles.grandImage} id='3'>
          <h3 className={styles.imageTitle} id="spine-research">Spine Research Projects</h3>
          <p> We also work on improving spine care by developing new and innovative ways of making spine surgery less invasive through biological disc repair and regeneration. 
            Please consider making a donation to support our spine research projects. <strong>Click me to donate.</strong></p>
          <div className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <a href="https://www.childrensbraintumorproject.org/" target="_blank" rel="noopener noreferrer">
                <img src="img/bine-spine.jpg" alt="Biological Spine Tissue" />
                <div className={styles.imageTitle}>Biological Spine Tissue</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
            <div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/initiatives/epilepsy-research" target="_blank" rel="noopener noreferrer">
                <img src="img/Epilepsy.png" alt="Epilepsy Research" />
                <div className={styles.imageTitle}>Epilepsy Research</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
            <div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/initiatives/colloid-cyst-research-and-registry" target="_blank" rel="noopener noreferrer">
                <img src="img/braintumor.jpg" alt="Colloid Cyst Research and Registry" />
                <div className={styles.imageTitle}>Colloid Cyst Research and Registry</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/tanzania" target="_blank" rel="noopener noreferrer">
                <img src="img/Colloidcyclist.png" alt="Children's Brain Tumor" />
                <div className={styles.imageTitle}>Children&apos;s Brain Tumor</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
            <div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/initiatives/chiari-research" target="_blank" rel="noopener noreferrer">
                <img src="img/chiari.jpg"  alt="Chiari Research" />
                <div className={styles.imageTitle}>Chiari Research</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
            <div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/tanzania" target="_blank" rel="noopener noreferrer">
                <img src="img/baby.png" alt="Tanzania Neurosurgery Project" />
                <div className={styles.imageTitle}>Tanzania Neurosurgery Project</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Gratitude;
