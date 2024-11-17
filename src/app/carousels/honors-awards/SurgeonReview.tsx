// src/app/carousels/SurgeonReview/SurgeonReview.tsx
import React from 'react';
import styles from './SurgeonReview.module.scss';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

interface SurgeonReviewProps {
  image: string;
  name: string;
  title: string;
  location: string;
  review: string;
}

const surgeonReviews: SurgeonReviewProps[] = [
  {
    image: "/img/Buenos.jpg",
    name: "Marcelo Valacco MD",
    title: "Orthopaedic Surgeon/Spine Surgeon",
    location: "Buenos Aires. Argentina",
    review: `I have been last week in Weill Cornell visiting Dr Hartl. He showed me the steps by steps in Minimally invasive Spine Surgery in vivo in OR. Was tremendous experience can see him and learn about how he use navigation systems and microsurgery. Also I can attend in clinics and research meetings about the last technology and innovation. In clinics, was a very great experience to see him how the patients are examining and they know about spine patology. The motivation for this stage with Dr Roger Hartl was to learn and develop new technologies in my country nexts years. Thanks to Dr Hartl and his team for kindly accepting at the Hospital.`
  },
  {
    image: "/img/Anasurgeonjpeg.jpeg",
    name: "ANABEL EUÁN GUTIÉRREZ",
    title: "Orthopaedic Surgeon/Spine Surgeon",
    location: "Cancun, Mexico",
    review: `Becoming part of Dr. Roger ́s Härtl Fellows in Minimally Invasive Spine Surgery was such a privilege and an enriching experience; it helped me to understand better and apply all the knowledge of MISS with my patients.
Dr. Roger Härtl is such a very experienced spine surgeon and such a caring and gentle human being. I appreciate the opportunity I had to learn with him and his amazing team, I will always be thankful for such experience and knowledge and for the fact that I ́m now able to offer my patients different surgery options for their spine conditions.
Currently, I ́m a Spine Surgeon at the Hospital Galenia Cancun and a Spine Surgeon of the Spine Clinic at the Neurological Center of the “Hospital Galenia Cancun”.`
  },
  {
    image: "/img/sebastin.jpeg",
    name: "PD Dr. med. Sebastian Siller, MHBA, FEBNS",
    title: "Consultant spine and brain surgeon.",
    location: "University Hospital Regensburg, Germany.",
    review: `After finishing neurosurgical training and board-certification in Germany, my wish was to gain additional experience in complex and advanced spinal neurosurgery. The Observational and Research Spine Surgery Fellowship provided by Prof. Härtl and his team at Weill Cornell/Och Spine was warmly recommended by my mentors. I had the opportunity to stay with Prof. Härtl and his amazing team for a couple of weeks and was impressed by his concept of total navigation and minimal-invasive spinal surgery. I had a very warm welcome at Weill Cornell/Och Spine and I really enjoyed the scientific input I got from Prof. Härtl and his team. After a subsequent specialized clinical spine training in London, UK, I returned back to Germany and I am very happy to integrate the impressions I have made at my stay with Prof. Härtl and his team in New York in my practice`
  },
  {
    image: "/img/ASSTPROF.jpeg",
    name: "Dr. Ammar Dogar FCPS (Orth), FACS, FICS",
    title: "Assistant Professor.",
    location: "Ghurki Trust Teaching Hospital Lahore Pakistan.",
    review: `It was a great honor for me to spend sometime with Dr. Roger Härtl at Weil Cornell Medical Center in 2022. Though I was part of the first and busiest Spine Surgery center in my country Pakistan but working with Dr. Härtl made my vision broader giving me an idea of complex spine surgery emphasizing less invasive approaches to enhance recovery times and outcomes for patients suffering from spinal disorders.
This has helped me to be of use to my own people in a better way`
  },
];

const SurgeonReview: React.FC = () => {
  return (
    <section className={styles.vitalsSection}>
    <div className={styles.contentSS}>
    <h2 className={styles.sectionTitle}>
    {/*<FontAwesomeIcon icon={faUserDoctor} className={styles.icon} fixedWidth/> */}
      Surgeon&apos;s Reviews
      </h2>
    <p>See what top surgeon have to say about Dr. Härtl</p>
  </div>
    <div className={styles.container}>
      {surgeonReviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.reviewTextContainer}>
            <p className={styles.reviewText}>{review.review}</p>
          </div>
          <div className={styles.surgeonDetailsContainer}>
            <img src={review.image} alt={`Dr. ${review.name}`} className={styles.surgeonPhoto} />
            <div className={styles.surgeonDetails}>
              <h3 className={styles.surgeonName}>{review.name}</h3>
              <h4 className={styles.surgeonTitle}>{review.title}</h4>
              <p className={styles.surgeonLocation}>{review.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default SurgeonReview;
