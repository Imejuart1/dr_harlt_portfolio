import React from 'react';
import styles from './Bio.module.scss';

const Bio: React.FC = () => {
  return (
    <section className={styles.bioSection}>

      <div className={styles.heroSection} style={{ backgroundImage: `url('/img/Aboutme2.jpg')` }}>
        <div className={styles.content_section}>
          <h1>About Dr. Roger Härtl</h1>
          <p>Augmented reality has created a new reality for spinal surgery.</p>
          <ul className={styles.heroNavLinks}>
            <li><a href="#personal-statement">Personal Statement</a></li>
            <li><a href="#biography">Biography</a></li>
            <li><a href="#training">Training</a></li>
            <li><a href="#research">Research</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.content}>
        {/* Section 1: Image on left */}
        <div id="personal-statement" className={styles.section}>
          <div className={styles.imageSection}>
            <img src="/img/roger2.jpg" alt="Dr. Roger Härtl" className={styles.profileImage} />
          </div>
          <div className={styles.textSection}>
            <h2>Mission</h2>
            <p>
            It is my mission to bring together all the disciplines required to provide comprehensive diagnosis,
             treatment, and care for back and neck disorders in one location. Surgical intervention is just a small part of 
             what we do – but when surgery is required,
             I will always strive for the least invasive, most effective option to get my patients back to enjoying their lives.
            </p>
  <h2>Pledge to My Patients:</h2>
  <ol className={styles.pledgeList}>
    <li>
      Interdisciplinary approach to identify the source of your pain and any other symptoms you may be experiencing.
    </li>
    <li>
      My treatment approach always begins with the least invasive option depending on the severity of your symptoms.
    </li>
    <li>
      If surgery is recommended, I will always offer the least invasive surgical option that is safe, effective, and has excellent long-term outcomes.
    </li>
    <li>
    I will be with you throughout this journey, from diagnosis to treatment to recovery and beyond.
    </li>
  </ol>
          </div>
        </div>

        {/* Section 2: Image on right */}
        <div id="biography" className={styles.section}>
          {/* Uncomment the image section if needed */}
          {/* <div className={styles.imageSection}>
          <img src="/img/roger.jpg" alt="Dr. Roger Härtl" className={styles.profileImage} />
          </div> */}
          <div className={styles.textSection}>
            <h2>Biography</h2>
            <p>
              Roger Härtl, M.D., is the Hansen-MacDonald Professor of Neurological Surgery and Director of Spinal Surgery at the Weill Cornell 
              Medicine Brain and Spine Center in New York, as well as the co-director of NewYork-Presbyterian Och Spine. He is also the founder 
              and director of the Weill Cornell Medicine Center for Comprehensive Spine Care as well as Weill Cornell Medicine&apos;s Global Neurosurgery 
              Initiative in Tanzania (for which he was named AANS Humanitarian of the Year for 2022). He also serves as the official neurosurgeon 
              for the New York Giants Football Team.
            </p>
            <p>
              Dr. Härtl&apos;s clinical interest focuses on simple and complex spine surgery for degenerative conditions, tumors and trauma as well as 
              biological approaches for disc repair and regeneration. He is a world-renowned pioneer and leader in minimally invasive spinal surgery 
              and computer-assisted spinal navigation surgery. He is actively involved in improving neurosurgical care in developing countries as 
              the leader of Weill Cornell&apos;s Global Health Neurosurgery Initiative in Tanzania.
            </p>
            <p>
              In order to achieve the very best in patient outcomes, Dr. Härtl&apos;s practice emphasizes an interdisciplinary approach to disease processes 
              and he works very closely with other specialists such as neurologists, pain specialists, sports medicine doctors and physical therapists. 
              His patients come from all over the globe and include many physicians, surgeons and even other neurological and spine surgeons. He has been 
              repeatedly named to the lists of New York Super Doctors, America&apos;s Top Surgeons, and America&apos;s Best Doctors, and has been included on the list 
              of New York&apos;s Best Doctors in New York magazine. He has authored more than 300 scholarly articles in peer-reviewed
journals and is the editor of three books on minimally invasive spinal surgery and biological disc repair and regeneration.
            </p>
            <p>
              Dr. Härtl has provided commentary for numerous television shows on ABC, NBC, and CBS in addition to national radio shows. His expertise has 
              been sought through interviews in the New York Times, The New York Post, The New York Daily News, and other media outlets. One of his patients, 
              boxer Danny Jacobs, was recently featured in a TV ad from NewYork-Presbyterian.
            </p>
          </div>
        </div>

        {/* Section 3: Image on left */}
        <div id="training" className={styles.section}>
         {/* Uncomment the image section if needed */}
          {/* <div className={styles.imageSection}>
          <img src="/img/roger.jpg" alt="Dr. Roger Härtl" className={styles.profileImage} />
          </div> */}
          <div className={styles.textSection}>
            <h2>Training</h2>
            <p>
              Dr. Härtl received his M.D. from the Ludwig-Maximilians University in Munich, Germany. In 1994 Dr. Härtl came to the Weill Cornell Medical College 
              as a post-doctoral research fellow in the Department of Surgery and the Brain Trauma Foundation to pursue research in traumatic brain and spinal 
              cord injury. He completed another fellowship in neurocritical care at the Charite Hospital of the Humboldt University in Berlin, Germany, followed 
              by a surgical internship and residency at Allegheny General Hospital in Pittsburgh, Pennsylvania. He completed his neurosurgery residency at 
              NewYork-Presbyterian/Weill Cornell Medical Center and Memorial Sloan-Kettering Cancer Center, after which he pursued specialized training in complex 
              spine surgery at the Barrow&apos;s Neurological Institute in Phoenix under Dr. Volker Sonntag. In 2004 Dr. Härtl returned to re-join the Department of 
              Neurosurgery at Weill Cornell Medical College.
            </p>
          </div>
        </div>

        {/* Section 4: Image on right */}
        <div id="research" className={styles.section}>
          {/* Uncomment the image section if needed */}
          {/* <div className={styles.imageSection}>
          <img src="/img/roger.jpg" alt="Dr. Roger Härtl" className={styles.profileImage} />
          </div> */}
          <div className={styles.textSection}>
            <h2>Research</h2>
            <p>
              Dr. Härtl&apos;s scientific interest focuses on clinical and basic science research surrounding
innovative and less invasive surgical and biological treatment strategies for
degenerative diseases of the spine. Together with the Biomedical Engineering
Department at Cornell he is working on tissue-engineering techniques for the repair and
regeneration of degenerated spinal discs, the most common cause of back and neck
pain. This has resulted in multiple patents and now clinical trials to address disc
degeneration in patients. Dr. Härtl has lectured and published extensively on the
surgical treatment of spinal disorders.
He is a leader and innovator in the application of computer-assisted navigation and
augmented reality in spinal surgery and works with his research team, collaborators
around the world and industry to make spinal surgery safer and more successful for
patients..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
