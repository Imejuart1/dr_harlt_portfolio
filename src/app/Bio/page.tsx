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
            <img src="/img/newhartl6.jpg" alt="Dr. Roger Härtl" className={styles.profileImage} />
          </div>
          <div className={styles.textSection}>
            <h2>Mission</h2>
            <p>
            My mission is to bring together leading experts and streamlined services to deliver complete care for back and neck problems—all in one convenient location. Surgery is just one of the tools we offer. And when itit&apos;s needed, I focus on the least invasive, most effective option to help patients return to the life and activities they love.
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
              for the New York Giants Football Team, Named one of the best spine surgeons in the U.S. by Newsweek.
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
patients.
            </p>
          </div>
        </div>
        <div id="publications" className={styles.sectionpub}>
           {/* Book Recommendations Section */}
           <div className={styles.bookRecommendations}>
  <h2>Books by Dr. Härtl</h2>
  <div className={styles.bookGrid}>
    {[
      {
        src: 'https://www.amazon.com/Essential-Techniques-Minimally-Invasive-Surgery/dp/1684200091',
        title: 'Essential Techniques Minimally Invasive Surgery',
        previewImage: '/img/Book2.png',
      },
      {
        src: 'https://www.amazon.com/Technical-Advances-Minimally-Invasive-Surgery/dp/9811901740',
        title: 'Technical Advances Minimally Invasive Surgery',
        previewImage: '/img/B2.jpg',
      },
      {
        src: 'https://www.amazon.com/Biological-Approaches-Spinal-Regeneration-Clinicians/dp/1626232504',
        title: 'Biological Approaches Spinal Regeneration',
        previewImage: '/img/B4.jpg',
      },
      /*{
        src: 'https://www.amazon.com/Square-One-Simple-Guide-Balanced/dp/1684019184',
        title: 'Square One: A Simple Guide to a Balanced Life',
        previewImage: '/img/Book1.jpg',
      },
      {
        src: 'https://www.amazon.com/Taijiquan-Art-Nurturing-Science-Power/dp/0974099007',
        title: 'Taijiquan: The Art of Nurturing, The Science of Power',
        previewImage: '/img/Book3.jpg',
      },*/
    ].map((book, index) => (
      <a
        key={index}
        href={book.src}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.bookItem}
      >
        <div className={styles.bookCover}>
          <div className={styles.bookSpine}></div>
          <img
            src={book.previewImage}
            alt={book.title}
            className={styles.bookImage}
          />
        </div>
        <p className={styles.bookTitle}>{book.title}</p>
      </a>
    ))}
  </div>
</div>

  <div className={styles.textSection}>
    <h2>Publications</h2>
    <p>
      Dr. Härtl&apos;s work in neurosurgery and spine care is highlighted through his numerous
      publications. Below is a selection of his latest contributions:
    </p>
    <ul className={styles.publicationList}>
      {[
        {
  title: 'Safety and effectiveness of expandable cages in ACDF: clinical study summary.',
  authors: 'Hartl R, et al.',
  journal: 'Becker’s Spine Review',
  year: 2025,
  pmid: null, // or the PMID of the actual academic publication
  free: false,
  link: 'https://www.beckersspine.com/spine/study-affirms-safety-effectiveness-of-expandable-cages-in-acdf/'
},
{
  title: 'Expandable cages in TLIF are not one-size-fits-all: study analysis.',
  authors: 'Hartl R, et al.',
  journal: 'Becker’s Spine Review',
  year: 2025,
  pmid: null,
  free: false,
  link: 'https://www.beckersspine.com/spine/expandable-cages-arent-a-one-size-fits-all-solution-for-tlif-study/'
},
        {
          title: 'Introduction. Robotics in the neurosurgical operating room.',
          authors: 'Vajkoczy P, et al. Among authors: hartl r.',
          journal: 'Neurosurg Focus',
          year: 2024,
          pmid: '39616643',
          free: false,
        },
        {
          title: 'A Tai chi and qigong mind-body program for low back pain.',
          authors: 'Yang Y, et al. Among authors: hartl r.',
          journal: 'N Am Spine Soc J',
          year: 2024,
          pmid: '39469294',
          free: true,
        },
        {
          title: 'Complications in Minimally Invasive Spine Surgery in the Last 10 Years: A Narrative Review.',
          authors: 'Boadi BI, et al. Among authors: hartl r.',
          journal: 'Neurospine',
          year: 2024,
          pmid: '39363458',
          free: true,
        },
        {
          title: 'High Accuracy of Three-Dimensional Navigated Kirschner-Wire-Less Single-Step Pedicle Screw System (SSPSS) in Lumbar Fusions: Comparison of Intraoperatively Planned versus Final Screw Position.',
          authors: 'Bielecki M, Boadi BI, Xie Y, Ikwuegbuenyi CA, Farooq M, Berger J, Hernández-Hernández A, Hussain I, Härtl R.',
          journal: 'Brain Sci.',
          year: 2024,
          pmid: '39335369',
          free: true,
        },
        {
          title: 'Continuing Education for Global Neurosurgery Graduates: Visiting Surgeons, Skills Teaching, Bootcamps, and Twinning Programs.',
          authors: 'Woodfield J, Reese J, Härtl R, Rock J.',
          journal: 'Neurosurg Clin N Am.',
          year: 2024,
          pmid: '39244316',
          free: false,
        },
        {
          title: 'Clinical Capacity Building Through Partnerships: Boots on the Ground in Global Neurosurgery.',
          authors: 'Lippa L, Cadieux M, Barthélemy EJ, et al. Among authors: Härtl R.',
          journal: 'Neurosurgery',
          year: 2024,
          pmid: '39185894',
          free: true,
        },
        {
          title: 'The Use of Augmented Reality as an Educational Tool in Minimally Invasive Transformational Lumbar Interbody Fusion.',
          authors: 'Schmidt FA, Hussain I, Boadi B, Sommer FJ, Thomé C, Härtl R.',
          journal: 'Oper Neurosurg (Hagerstown).',
          year: 2024,
          pmid: '39185869',
          free: true,
        },
        {
          title: 'Where are the women in spine surgery? A demographic study of the range of gender disparity in academic spine hospitals in the United States.',
          authors: 'Bratescu RA, Berger J, Härtl R.',
          journal: 'Spine J.',
          year: 2024,
          pmid: '39154946',
          free: true,
        },
        {
          title: 'Flexible support material maintains disc height and supports the formation of hydrated tissue engineered intervertebral discs in vivo.',
          authors: 'Fidai AB, Kim B, Lintz M, Kirnaz S, et al. Among authors: Härtl R.',
          journal: 'JOR Spine',
          year: 2024,
          pmid: '39104832',
          free: true,
        },
        {
          title: 'Is mechanism of injury associated with outcome in spinal trauma? An observational cohort study from Tanzania.',
          authors: 'Ikwuegbuenyi CA, Woodfield J, Waterkeyn F, et al. Among authors: Härtl R.',
          journal: 'PLoS One.',
          year: 2024,
          pmid: '39024312',
          free: true,
        },
        // Add more publications as needed
      ].map((publication, index) => (
  <li key={index} className={styles.publicationItem}>
    <h3>
      {publication.link ? (
        <a 
          href={publication.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {publication.title}
        </a>
      ) : (
        publication.title
      )}
    </h3>

    <p>{publication.authors}</p>

    <p>
      <em>{publication.journal}</em>, {publication.year}. 
      PMID: {publication.pmid}.
      {publication.free && (
        <span className={styles.freeBadge}>Free PMC article</span>
      )}
    </p>
  </li>
))}
    </ul>
    <div className={styles.seeMore}>
      <a
        href="https://pubmed.ncbi.nlm.nih.gov/?term=Roger%20Hartl&sort=date&page=2"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.seeMoreLink}
      >
        See More Publications
      </a>
    </div>
  </div>
 
</div>

      </div>
    </section>
  );
};

export default Bio;
