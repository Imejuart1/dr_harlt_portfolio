import Script from "next/script";

import HeroSection from "./Herosection/HeroSection";
import Bio from "./carousels/Bio/page";
import HonorsAndAwardsPages from "./carousels/honors-awards/page";
import SurgeonReview from "./carousels/honors-awards/SurgeonReview";
import VitalsReview from "./carousels/honors-awards/VitalsReview";
import CombinedTestimonials from "./carousels/Testimonials/Combined";
import Contact from "./carousels/Contact/Contact";
import {
  doctorName,
  officePhoneIntl,
  practiceName,
  primaryOffice,
  siteUrl,
} from "../lib/site";

export default function Home() {
  const srOnlyStyles = {
    position: "absolute" as const,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden" as const,
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap" as const,
    border: 0,
  };

  const physicianLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorName,
    image: `${siteUrl}/img/Dr.Hartls.png`,
    description:
      "Roger Hartl, MD is a spine surgeon and neurosurgeon in New York specializing in minimally invasive spine surgery, disc replacement, spinal tumors, and complex deformity care.",
    medicalSpecialty: [
      "Spine Surgery",
      "Neurosurgery",
      "Orthopedic Surgery",
      "Sports Medicine",
    ],
    knowsAbout: [
      "Spine Surgery",
      "Neurosurgery",
      "Minimally Invasive Spine Surgery",
      "Cervical Disc Replacement",
      "Spinal Tumors",
      "Spinal Stenosis",
      "Spondylolisthesis",
    ],
    url: `${siteUrl}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: primaryOffice.streetAddress,
      addressLocality: primaryOffice.city,
      addressRegion: primaryOffice.region,
      postalCode: primaryOffice.postalCode,
      addressCountry: primaryOffice.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: primaryOffice.latitude,
      longitude: primaryOffice.longitude,
    },
    openingHours: "Mo-Fr 09:00-17:00",
    telephone: officePhoneIntl,
    affiliation: {
      "@type": "MedicalOrganization",
      name: "Weill Cornell Medicine",
      url: "https://weillcornell.org/",
    },
    sameAs: [
      "https://weillcornell.org/rhartl",
      "https://www.nyp.org/ochspine/our-team/roger-hartl-md",
    ],
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: `${doctorName} - Spine and Neurosurgery`,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/img/Dr.Hartls.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: primaryOffice.streetAddress,
      addressLocality: primaryOffice.city,
      addressRegion: primaryOffice.region,
      postalCode: primaryOffice.postalCode,
      addressCountry: primaryOffice.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: officePhoneIntl,
      contactType: "Patient Inquiries",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(
      primaryOffice.mapQuery,
    )}`,
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: `${siteUrl}/`,
    name: doctorName,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Roger Hartl, MD?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Roger Hartl, MD is a spine surgeon and neurosurgeon in New York at Weill Cornell Medicine and NewYork-Presbyterian.",
        },
      },
      {
        "@type": "Question",
        name: "What does a spine surgeon in New York treat?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A spine surgeon treats conditions such as herniated discs, spinal stenosis, scoliosis, fractures, tumors, neck pain, and back pain using non-surgical care when possible and surgery when needed.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Roger Hartl, MD practice?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Roger Hartl, MD practices at Och Spine, NewYork-Presbyterian, and Weill Cornell Medicine in New York City.",
        },
      },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Roger Hartl, MD - Spine Surgeon in New York",
    url: `${siteUrl}/`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      ],
    },
    about: [{ "@type": "MedicalSpecialty", name: "Spine Surgery" }],
  };

  return (
    <div>
      <div style={srOnlyStyles}>
        <h1>{doctorName} | Spine Surgeon in New York</h1>
        <h2>Minimally Invasive Spine Surgery at Weill Cornell Medicine</h2>
        <section aria-label="Spine Surgeon Frequently Asked Questions">
          <h3>Spine Surgeon Frequently Asked Questions</h3>
          <p>
            <strong>Who is Roger Hartl, MD?</strong> Roger Hartl, MD is a spine
            surgeon and neurosurgeon in New York at Weill Cornell Medicine and
            NewYork-Presbyterian.
          </p>
          <p>
            <strong>What does a spine surgeon in New York treat?</strong> Spine
            surgeons treat herniated discs, spinal stenosis, scoliosis,
            fractures, tumors, neck pain, and back pain.
          </p>
          <p>
            <strong>Where does Roger Hartl, MD practice?</strong> Roger Hartl,
            MD practices at {practiceName} in New York City.
          </p>
        </section>
      </div>

      <main>
        <HeroSection />
        <Bio />
        <HonorsAndAwardsPages />
        <SurgeonReview />
        <CombinedTestimonials />
        <VitalsReview />
        <Contact />

        <Script
          id="ld-physician"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianLd) }}
        />
        <Script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <Script
          id="ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <Script
          id="ld-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
        />
      </main>
    </div>
  );
}
