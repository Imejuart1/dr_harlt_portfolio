'use client'
import React from 'react';
import styles from './Gratitude.module.scss';

const Gratitude: React.FC = () => {
  return (
    <div className={styles.gratitudeSection}>
      <div className={styles.content}>
        <h2>Gratitude for Dr. Roger Härtl</h2>
        <p>Taking excellent care of you is the biggest privilege I can think of. If your experience with us and the team at NYP Och Spine was positive, please consider leaving a review for us  at the following links:</p>
        
        <div className={styles.linkRow} id='1'>
          <a href="https://www.healthgrades.com/physician/dr-roger-hartl-yy2qb" target="_blank" rel="noopener noreferrer">
            <div className={styles.iconWrapper}>
              <img src="/img/healthgrades-icon.svg" alt="Healthgrades Icon" className={styles.reviewIcon} />
            </div>
          </a>
          <a href="https://www.vitals.com/doctors/Dr_Roger_Hartl.html" target="_blank" rel="noopener noreferrer">
            <div className={styles.iconWrapper}>
              <img src="/img/vitals.svg" alt="Vitals Icon" className={styles.reviewIcon2} />
            </div>
          </a>
          <a href="https://www.google.com/search?q=dr%20hartl%20google%20reviews&client=safari&rls=en&biw=1448&bih=733&ei=CJ_qYoGPINmHptQPr5uh8AM&oq=dr+hartl+google+r&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCCEQoAEyBQghEKsCMgUIIRCrAjIICCEQHhAWEB0yCAghEB4QFhAdMggIIRAeEBYQHTIICCEQHhAWEB0yCAghEB4QFhAdMggIIRAeEBYQHTIICCEQHhAWEB06BwgAEEcQsANKBAhBGABKBAhGGABQnAVYnAVgxxdoAXABeACAAV-IAV-SAQExmAEAoAEByAEFwAEB&sclient=gws-wiz&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=11833861767777315527&lqi=ChdkciBoYXJ0bCBnb29nbGUgcmV2aWV3cyIFOAGIAQFI5unAv-WAgIAIWhAQABABGAEiCGRyIGhhcnRskgEMbmV1cm9zdXJnZW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6YzA5RFpXeEJSUkFCqgEQEAEqDCIIZHIgaGFydGwoAA&ved=2ahUKEwiIsrPNiKv5AhXdkIkEHexIBQMQvS56BAgaEAE&sa=X&rlst=f#lkt=LocalPoiReviews&rlfi=hd:;si:11833861767777315527,l,ChdkciBoYXJ0bCBnb29nbGUgcmV2aWV3cyIFOAGIAQFI5unAv-WAgIAIWhAQABABGAEiCGRyIGhhcnRskgEMbmV1cm9zdXJnZW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6YzA5RFpXeEJSUkFCqgEQEAEqDCIIZHIgaGFydGwoAA;mv:[[40.7653584,-73.953091],[40.7603539,-73.9654797]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2" target="_blank" rel="noopener noreferrer">
            <div className={styles.iconWrapper}>
            <img src='/img/google_icon.svg' alt="Healthgrades Icon" className={styles.reviewIcon} />
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
              <h3 className={styles.imageTitle}>Humanitarian Work</h3>
              <p>Please consider <strong>donating</strong> to our neurosurgery <strong>humanitarian work in Tanzania</strong></p>
              <a href="https://tanzanianeurosurgery.org/" target="_blank" rel="noopener noreferrer">Find out more about our humanitarian work</a>
              <a href="https://neurosurgery.weillcornell.org/donate-now" target="_blank" rel="noopener noreferrer">
                <img src="/img/humaritian.png" alt="Humanitarian Work" className={styles.bigImage} />
                <div className={styles.arrowIcon}></div>
              </a>
              <a href="https://neurosurgery.weillcornell.org/donate-now" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Go to Link</a>
            </div>
          </div>
        </div>

        <div className={styles.bigImageRow} id='2'>
          <div id="spine-research" className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <h3 className={styles.imageTitle}>Spine Research Projects</h3>
              <p> We also work on improving spine care by developing new and innovative ways of making spine surgery less invasive through biological disc repair and regeneration. 
              Please consider making a donation to support our spine research projects.<a href='https://neurosurgery.weillcornell.org/donate-now' target="_blank"><strong>Click me to donate.</strong></a></p>
              <a href="https://neurosurgery.weill.cornell.edu/research/our-laboratories/dr-roger-hartl-biological-spine-tissue" target="_blank" rel="noopener noreferrer">
                <img src="/img/helper.jpg" alt="Humanitarian Work" className={styles.bigImage} style={{height:'10%'}} />
                <div className={styles.arrowIcon}></div>
              </a>
              <a href="https://neurosurgery.weillcornell.org/donate-now" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Please Donate</a>
            </div>
          </div>
        </div>

        {/*<div className={styles.grandImage} id='3'>
          <h3 className={styles.imageTitle} id="spine-research"></h3>
          <p> We also work on improving spine care by developing new and innovative ways of making spine surgery less invasive through biological disc repair and regeneration. 
            Please consider making a donation to support our spine research projects.<a href='https://neurosurgery.weillcornell.org/donate-now' target="_blank"><strong>Click me to donate.</strong></a></p>
          <div className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <a href="https://neurosurgery.weill.cornell.edu/research/our-laboratories/dr-roger-hartl-biological-spine-tissue" target="_blank" rel="noopener noreferrer">
                <img src="/img/bine-spine.jpg" alt="Biological Spine Tissue" />
                <div className={styles.imageTitle}>Biological Spine Tissue</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
           {/*} <div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/initiatives/epilepsy-research" target="_blank" rel="noopener noreferrer">
                <img src="/img/Epilepsy.png" alt="Epilepsy Research" />
                <div className={styles.imageTitle}>Epilepsy Research</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>*/}
            {/*<div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/initiatives/colloid-cyst-research-and-registry" target="_blank" rel="noopener noreferrer">
                <img src="/img/braintumor.jpg" alt="Colloid Cyst Research and Registry" />
                <div className={styles.imageTitle}>Colloid Cyst Research and Registry</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>*/}
          {/*</div>

          <div className={styles.imageContainer}>
            <div className={styles.imageBox}>
             {/*} <a href="https://neurosurgery.weillcornell.org/tanzania" target="_blank" rel="noopener noreferrer">
                <img src="/img/Colloidcyclist.png" alt="Children's Brain Tumor" />
                <div className={styles.imageTitle}>Children&apos;s Brain Tumor</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div>
            <div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/initiatives/chiari-research" target="_blank" rel="noopener noreferrer">
                <img src="/img/chiari.jpg"  alt="Chiari Research" />
                <div className={styles.imageTitle}>Chiari Research</div>
                <div className={styles.arrowIcon}></div>
              </a>*/}
           {/*</div>
            {/*<div className={styles.imageBox}>
              <a href="https://neurosurgery.weillcornell.org/tanzania" target="_blank" rel="noopener noreferrer">
                <img src="/img/baby.png" alt="Tanzania Neurosurgery Project" />
                <div className={styles.imageTitle}>Tanzania Neurosurgery Project</div>
                <div className={styles.arrowIcon}></div>
              </a>
            </div></div>  
        </div>*/}
        
      </div>
    </div>
  );
};


export default Gratitude;
