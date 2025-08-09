import Script from "next/script";
import HeroSection from "./Herosection/HeroSection";
import Bio from "./carousels/Bio/page";
import HonorsAndAwardsPages from "./carousels/honors-awards/page";
import SurgeonReview from "./carousels/honors-awards/SurgeonReview";
import VitalsReview from "./carousels/honors-awards/VitalsReview";
import CombinedTestimonials from "./carousels/Testimonials/Combined";
import Contact from "./carousels/Contact/Contact";

export default function Home() {
  // JSON-LD: Physician schema
  const physicianLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Roger Härtl, MD",
    image: "https://www.hartlmd.net/img/Dr.Hartls.png",
    description:
      "Hansen-MacDonald Professor of Neurological Surgery, Director of Spinal Surgery at Weill Cornell Medicine, and Neurosurgical Director of Och Spine at NewYork-Presbyterian Hospital. Specializing in minimally invasive spine surgery, spinal tumors, and sports-related spine injuries.",
    medicalSpecialty: [
      "Neurosurgery",
      "Spine Surgery",
      "Orthopedic Surgery",
      "Sports Medicine"
    ],
    url: "https://www.hartlmd.net/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "525 E 68th St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10065",
      addressCountry: "US"
    },
    telephone: "+1-212-746-2152",
    affiliation: {
      "@type": "MedicalOrganization",
      name: "Weill Cornell Medicine",
      url: "https://weillcornell.org/"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Weill Cornell Medical College"
    },
    sameAs: [
      "https://weillcornell.org/rhartl",
      "https://www.nyp.org/ochspine/our-team/roger-hartl-md",
      "https://en.wikipedia.org/wiki/Roger_H%C3%A4rtl"
      // add LinkedIn, Twitter, YouTube if official
    ]
  };

  // JSON-LD: MedicalOrganization schema
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Roger Härtl, MD - Spine & Neurosurgery",
    url: "https://www.hartlmd.net/",
    logo: "https://www.hartlmd.net/img/Dr.Hartls.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "525 E 68th St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10065",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-212-746-2152",
      contactType: "Patient Inquiries",
      areaServed: "US"
    }
  };

  return (
    <div>
      <main>
        <HeroSection />
        <Bio />
        <HonorsAndAwardsPages />
        <SurgeonReview />
        <CombinedTestimonials />
        <VitalsReview />
        <Contact />

        {/* JSON-LD scripts */}
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
      </main>
    </div>
  );
}
