"use client";
import Script from "next/script";
import HeroSection from "./Herosection/HeroSection";
import Bio from "./carousels/Bio/page";
import HonorsAndAwardsPages from "./carousels/honors-awards/page";
import SurgeonReview from "./carousels/honors-awards/SurgeonReview";
import VitalsReview from "./carousels/honors-awards/VitalsReview";
import CombinedTestimonials from "./carousels/Testimonials/Combined";
import Contact from "./carousels/Contact/Contact";

export default function Home() {
  // ===== JSON-LD: Physician =====
  const physicianLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Roger Härtl, MD",
    image: "https://www.hartlmd.net/img/Dr.Hartls.png",
    description:
      "World-renowned spine surgeon and neurosurgeon specializing in minimally invasive spine surgery, spinal tumors, disc arthroplasty, and sports-related spine injuries.",
    medicalSpecialty: ["Spine Surgery", "Neurosurgery", "Orthopedic Surgery", "Sports Medicine"],
    knowsAbout: [
      "Spine Surgery",
      "Neurosurgery",
      "Minimally Invasive Spine Surgery",
      "Cervical Disc Replacement",
      "Spinal Tumors",
      "Spinal Stenosis",
      "Spondylolisthesis"
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
    geo: { "@type": "GeoCoordinates", latitude: 40.764, longitude: -73.954 },
    openingHours: "Mo-Fr 09:00-17:00",
    telephone: "+1-212-746-2152",
    affiliation: {
      "@type": "MedicalOrganization",
      name: "Weill Cornell Medicine",
      url: "https://weillcornell.org/"
    },
    sameAs: [
      "https://weillcornell.org/rhartl",
      "https://www.nyp.org/ochspine/our-team/roger-hartl-md"
    ]
  };

  // ===== JSON-LD: MedicalOrganization (practice) =====
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
      areaServed: "US",
      availableLanguage: ["English"]
    },
    hasMap: "https://www.google.com/maps?q=525+E+68th+St+New+York+NY+10065"
  };

  // ===== JSON-LD: WebSite (for sitelinks search box) =====
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.hartlmd.net/",
    name: "Roger Härtl, MD",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.hartlmd.net/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // ===== JSON-LD: FAQPage (targets “what is a spine surgeon / who is…”) =====
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a spine surgeon?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A spine surgeon is a medical doctor specializing in diagnosis and treatment of spinal conditions such as herniated discs, spinal stenosis, scoliosis, fractures, and tumors. They use non-surgical care first and perform minimally invasive or complex procedures when needed."
        }
      },
      {
        "@type": "Question",
        name: "Who is Roger Härtl, MD?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Roger Härtl, MD is a world-renowned neurosurgeon and spine specialist based in New York City. He serves as the Director of Spinal Surgery at Weill Cornell Medicine and Neurosurgical Director of Och Spine at NewYork-Presbyterian."
        }
      },
      {
        "@type": "Question",
        name: "What procedures does Dr. Härtl perform?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Minimally invasive decompression and fusion, cervical disc replacement (arthroplasty), navigation/AR-guided surgery, tumor resection, and complex deformity correction."
        }
      }
    ]
  };

  // ===== JSON-LD: WebPage/Breadcrumb (optional, reinforces topic) =====
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Roger Härtl, MD — Spine Surgeon & Neurosurgeon in New York",
    url: "https://www.hartlmd.net/",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hartlmd.net/" }
      ]
    },
    about: [{ "@type": "MedicalSpecialty", name: "Spine Surgery" }]
  };

  return (
    <div>
      {/* Screen-reader only block to keep headings/FAQ *present* but not visible */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>

      <div className="sr-only">
        <h1>Spine Surgeon & Neurosurgeon in New York — Roger Härtl, MD</h1>
        <h2>World-Renowned Spine Specialist</h2>

        {/* Mirror the FAQ content in the DOM (good practice for FAQ rich results) */}
        <section aria-label="Spine Surgeon Frequently Asked Questions">
          <h3>Spine Surgeon – Frequently Asked Questions</h3>
          <p><strong>What is a spine surgeon?</strong> A spine surgeon is a medical doctor who treats spinal conditions such as herniated discs, spinal stenosis, scoliosis, fractures, and tumors.</p>
          <p><strong>Who is Roger Härtl, MD?</strong> A world-renowned neurosurgeon and spine specialist at Weill Cornell Medicine and NewYork-Presbyterian in New York City.</p>
          <p><strong>What procedures does Dr. Härtl perform?</strong> Minimally invasive decompression and fusion, cervical disc replacement, navigation/AR-guided surgery, and tumor/deformity surgery.</p>
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

        {/* Structured data injections */}
        <Script id="ld-physician" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianLd) }} />
        <Script id="ld-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
        <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <Script id="ld-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      </main>
    </div>
  );
}
