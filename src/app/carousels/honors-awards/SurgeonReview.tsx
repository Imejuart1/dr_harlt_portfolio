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
    image: "/img/indiaman.jpg",
    name: "Dr Hardik Darji ",
    title: "Consultant Neurosurgeon",
    location: "Ahmedabad, Gujarat. India",
    review: `Dr. Roger Hartl is one of the best spine surgeons, a great mentor, and a wonderful human being. It was a great honor for me to learn about minimally invasive spine surgery in detail under his guidance. I feel fortunate to have learned everything from the basics of MISS to advanced concepts, techniques, and technologies from him. I was truly impressed by his diagnostic methods and treatment plans. This fellowship program will definitely help budding spine surgeons like me to grow further in our careers. Dr. Roger Hartl is a dedicated, disciplined, and dynamic spine surgeon. I wish him all the best and am very grateful to him for having me at Weill Cornell Medicine, New York.`
  },
  {
    image: "/img/Buenos.jpg",
    name: "Marcelo Valacco MD",
    title: "Orthopaedic Surgeon/Spine Surgeon",
    location: "Buenos Aires. Argentina",
    review: `I visited and observed Dr Härtl at Weill Cornell. He showed me the “step-by-step” procedures in Minimally Invasive Spinal Surgery in the OR. It was a tremendous experience to observe him and learn about how he uses navigation systems and microsurgery. Also, I attended research meetings about the latest technologies and innovation. In the clinic, it was a very great experience to see him examining patients to find out about their spine pathologies. The motivation for my visit with Dr Roger Härtl was to learn and develop new technologies that I can introduce in my country over the next years. Thanks to Dr Härtl and his team for kindly accepting at the Hospital.`
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
