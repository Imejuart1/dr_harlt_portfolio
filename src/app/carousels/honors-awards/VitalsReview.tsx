// components/VitalsReview.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './Vitals.module.scss';
import Link from 'next/link';
import { faBuyNLarge } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

interface Slide {
  text: string;
  author: string;
  date: string;
  rating: number;
}

const vitalsSlides: Slide[] = [
  {
    text: "Went in for a 2 level ACDF. Discharged the next day without a brace and feeling great. All that worrying for nothing. A month later and I'm feeling great",
    author: "",
    date: "Feb 2nd, 2024",
    rating: 4
  },
  {
    text: "Amazing doctor, I am grateful that I was referred to Dr. Härtl, he was able to pin point my fathers back pain and recommended the appropriate surgery. He then right away connected us to the surgical team to start scheduling everything. Very smooth and easy process.",
    author: "",
    date: "Feb 03, 2023",
    rating: 5
  },
  {
    text: "Dr. Härtl and his staff were terrific. He performed a laminectomy to L5/S1. No post-op pain, didn't need to fill the RX for pain meds! I was up and about the next day.",
    author: "",
    date: "July 16th, 2015",
    rating: 5
  },
  {
    text: "Dr. Härtl helped my husband walk again. He was always there at the hospital to check on my husband. We would definitely recommend him since he is an excellent doctor.",
    author: "",
    date: "October 30th, 2014",
    rating: 5
  },
  {
    text: "Dr. Härtl is a world class surgeon. I was in pain for over a year and a day after surgery, pain free. My recovery was rapid with no complications. He was recommended to me by 2 different sources and I will not hesitate to recommend him to others.",
    author: "",
    date: "July 17th, 2014",
    rating: 5
  },
  {
    text: "Dr. Härtl is extremely smart and patient. I had neck surgery and was so scared. I am not only pleased with the results but also the scar after two weeks you can hardly see. He also sat with me and answered all my questions without me feeling rushed. I highly recommend Dr. Härtl.",
    author: "",
    date: "June 2nd, 2013",
    rating: 5
  },
  {
    text: "Dr. Härtl is a wonderful doctor. Not only is he at the top of his game but he is very caring and considerate. He take care of you as if you were the only one that matters, while having many patients. He is very smart and looks out for the least invasive option possible for that patient. He is in a word wonderful!",
    author: "",
    date: "February 16th, 2010",
    rating: 5
  },

  {
    text: "He is the best neurosurgeon. He cured my back pain. I had been to many so called top doctors and no one found the reason for my pain. He did in a heartbeat. It was a tough surgery but so worth it. I have no pain . It was a long haul but there was a pot of gold at the end of the rainbow! Thank you",
    author: "",
    date: "August 18th, 2013",
    rating: 5
  },
];


const healthgradesSlides: Slide[] = [
  {
    text: "The Best! Very professional yet friendly. Explains well. Has patience. Great surgeon.",
    author: "Anonymous",
    date: "Jan 25, 2024",
    rating: 5
  },
  {
    text: "There is no doubt that I would recommend Dr Härtl. He is thoughtful, on the leading edge in his field...",
    author: "Leonard Harlan",
    date: "Jan 26, 2024",
    rating: 5
  },
  {
    text: "Dr Härtl is a genius and angel in equal measure!",
    author: "Kenny Schachter ",
    date: "Apr 06, 2024",
    rating: 5
  },
  {
    text: "He’s one of the most skilled and knowledgeable surgeons for spine. His attention to his patients is unparalleled and his staff is the best. You know you are good hands with a Dr that really cares.",
    author: "Anonymous",
    date: "Jun 23, 2024",
    rating: 5
  },
  {
    text: "Dr. Härtl comprehensively performed an extensive physical exams and with me reviewed every aspect of an MRI of my entire spine. He explained all was very patient and caring.",
    author: "William Sherman",
    date: "Feb 17, 2024",
    rating: 5
  },
  {
    text: "I came into the emergency room with a headache, soon after I was receiving emergency brain surgery under the guide of Dr. Härtl. Forever grateful for a second chance at life. Thank you Dr. Härtl",
    author: "Cosmo Ramirez",
    date: "Nov 04, 2023",
    rating: 5
  },
  {
    text: "Dr. Härtl explained my condition thoroughly as well as the surgical procedure. I have not yet had surgery, but so far so good.",
    author: "Jane",
    date: "Mar 18, 2023",
    rating: 5
  },
  {
    text: "I felt completely trusting of Dr Härtls advice and expertise. He was straight forward, competent and did not push for any unnecessary surgical intervention. He suggested alternate treatment such as Physical Therapy and/or a possible steroid injections for my pain. I respect his conservative...",
    author: "Nancy K de Groot ",
    date: "Oct 13, 2022",
    rating: 5
  },
];

const googleSlides: Slide[] = [
  {
    text: "Dr Härtl explained the situation with my back very well. He also described the alternatives and the reason why he was proposing the specific surgery. Dr. Härtl and his care team were great. He gave me confidence to move forward and have the much needed surgery. I am almost four weeks post surgery and continuing to progress well. I would highly recommend Dr. Härtl.",
    author: "Judy Bickart",
    date: "June 2024",
    rating: 5
  },
  {
    text: "Dr Härtl was brilliant I had really bad stenosis and I’m ready to dance out of the recovery room. He is the best and the king of minimally invasive spine surgery - 10 Stars!",
    author: "Mark Ohrstrom",
    date: "Sep 2024",
    rating: 5
  },
  {
    text: "Dr Härtl was highly recommended by my Urologist. I was diagnosed with severe cervical stenosis but my symptoms were improving over time. There’s an old saying that when all you have is a hammer, everything looks like a nail. It’s clear that Dr Härtl had more than a hammer in his tool belt. I found him to be intelligent, concise, and very patient focused (which are not traits you always find in a surgeon). He advised against surgery, and gave me some thoughtful advice about how I should proceed.",
    author: "Axer Toro",
    date: "May 2024",
    rating: 5
  },
  {
    text: "Dr. Härtl explained all options and answered all of my questions in detail. I greatly appreciated all the time he spent the fact that I never felt rushed. It’s obvious after a single an appointment why he is so highly regarded . I definitely recommend!",
    author: "Joe I",
    date: "Jun 23, 2024",
    rating: 5
  },
  {
    text: "Dr Härtl is exceptional from the moment you walk in until the moment you leave.His manner in evaluating your issues and going through the various alternatives as well as honesty regarding the breadth of outcomes is truly unique. His knowledge and ability to clearly communicate the sophisticated nature of spine surgery was extremely reassuring.",
    author: "Marc Mazur",
    date: "Feb 2024",
    rating: 5
  },
  {
    text: "Dr. Härtl is a thorough professional who takes time to explain the process he’s about to perform clearly to his patients.He is quite self-assured and I feel comfortable putting my trust in his hands.",
    author: "Roy Markowitz",
    date: "June, 2023",
    rating: 5
  },
  {
    text: "This is one of the most caring surgeons I’ve been spoken to, in a time of deep confusion. I can’t say enough good things about him. The NY Giants are lucky to have him..",
    author: "CA",
    date: "Mar 18, 2023",
    rating: 5
  },
  {
    text: "Dr. Härtl was warm, patient and clearly explained my injury to me and what the proposed treatment to remedy would be. To my good fortune, that treatment will not include surgery, which I had been led to expect would likely be his course of action.",
    author: "David Stone",
    date: "Jan 2024",
    rating: 5
  },

];

const ReviewSection: React.FC<{ title: string; link: string; reviews: Slide[] }> = ({ title, link, reviews }) => (
  <div className={styles.reviewSection}>
    <h3 className={styles.subTitle}>
      <Link href={link} passHref>
        <div className={styles.sectionLink}>{title}</div>
      </Link>
    </h3>
    <div className={styles.reviewsContainer}>
      {reviews.map((slide, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.rating}>
            {[...Array(slide.rating)].map((_, i) => (
              <FaStar key={i} className={styles.star} />
            ))}
          </div>
          <p className={styles.reviewText}>&quot;{slide.text}&quot;</p>
          <div className={styles.reviewMeta}>
            <span>{slide.author || "Anonymous"}</span>
            <span className={styles.date}>{slide.date}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VitalsReview: React.FC = () => {
  return (
    <section className={styles.vitalsSection}>
      <div className={styles.contentSS}>
        <Link href='/Reviews#reviews'>
        <h2 className={styles.sectionTitle}>
        <FontAwesomeIcon icon={faUserDoctor} className={styles.icon} fixedWidth/> 
          Patient Reviews
          </h2>
          </Link>
      </div>
      <div className={styles.content}>
        {/* Healthgrades Reviews */}
        <ReviewSection title="From Healthgrades" link="https://www.healthgrades.com/physician/dr-roger-hartl-yy2qb?referrerSource=autosuggest" reviews={healthgradesSlides} />

        {/* Vitals Reviews */}
        <ReviewSection title="From Vitals" link="https://www.vitals.com/doctors/Dr_Roger_Hartl.html" reviews={vitalsSlides} />

        {/* Google Reviews */}
        <ReviewSection title="From Google" link="https://www.google.com/search?q=dr%20hartl%20google%20reviews&client=safari&rls=en&biw=1448&bih=733&ei=CJ_qYoGPINmHptQPr5uh8AM&oq=dr+hartl+google+r&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCCEQoAEyBQghEKsCMgUIIRCrAjIICCEQHhAWEB0yCAghEB4QFhAdMggIIRAeEBYQHTIICCEQHhAWEB0yCAghEB4QFhAdMggIIRAeEBYQHTIICCEQHhAWEB06BwgAEEcQsANKBAhBGABKBAhGGABQnAVYnAVgxxdoAXABeACAAV-IAV-SAQExmAEAoAEByAEFwAEB&sclient=gws-wiz&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=11833861767777315527&lqi=ChdkciBoYXJ0bCBnb29nbGUgcmV2aWV3cyIFOAGIAQFI5unAv-WAgIAIWhAQABABGAEiCGRyIGhhcnRskgEMbmV1cm9zdXJnZW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6YzA5RFpXeEJSUkFCqgEQEAEqDCIIZHIgaGFydGwoAA&ved=2ahUKEwiIsrPNiKv5AhXdkIkEHexIBQMQvS56BAgaEAE&sa=X&rlst=f#lkt=LocalPoiReviews&rlfi=hd:;si:11833861767777315527,l,ChdkciBoYXJ0bCBnb29nbGUgcmV2aWV3cyIFOAGIAQFI5unAv-WAgIAIWhAQABABGAEiCGRyIGhhcnRskgEMbmV1cm9zdXJnZW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6YzA5RFpXeEJSUkFCqgEQEAEqDCIIZHIgaGFydGwoAA;mv:[[40.7653584,-73.953091],[40.7603539,-73.9654797]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2!3sIAE,lf:1,lf_ui:2" reviews={googleSlides} />
      </div>
    </section>
  );
};

export default VitalsReview;