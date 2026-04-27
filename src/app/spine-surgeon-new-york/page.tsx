import ServiceLandingPage from "../../components/ServiceLandingPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Spine Surgeon in New York | Roger Hartl, MD",
  description:
    "Roger Hartl, MD is a spine surgeon in New York at Och Spine, NewYork-Presbyterian, and Weill Cornell Medicine. Learn about treatment options, patient care, and how to schedule an appointment.",
  path: "/spine-surgeon-new-york",
});

export default function SpineSurgeonNewYorkPage() {
  return (
    <ServiceLandingPage
      title="Spine Surgeon in New York"
      breadcrumbLabel="Spine Surgeon in New York"
      path="/spine-surgeon-new-york"
      heroImage="/img/ROGERSPINER.png"
      intro="Patients searching for a spine surgeon in New York often want a specialist who can evaluate both common and complex spinal conditions, explain treatment options clearly, and use surgery only when it is truly the right next step."
      summaryPoints={[
        "Evaluation of neck pain, back pain, spinal stenosis, herniated discs, scoliosis, trauma, and spinal tumors.",
        "Emphasis on conservative care first, with surgery considered when symptoms, imaging, and quality of life point in that direction.",
        "Experience with minimally invasive spine surgery, motion-preserving procedures, cervical disc replacement, and complex deformity care.",
      ]}
      stats={[
        { value: "300+", label: "peer-reviewed articles and scholarly publications" },
        { value: "Newsweek", label: "recognized among the best spine surgeons in the U.S." },
        { value: "NYC", label: "care rooted in Weill Cornell Medicine and NewYork-Presbyterian" },
      ]}
      sections={[
        {
          heading: "What Patients Usually Need from a Spine Surgeon",
          paragraphs: [
            "Many people start by searching broad phrases such as spine surgeon in NYC or best spine surgeon in New York because they are still trying to understand which specialist is the right fit. A strong spine practice must be able to evaluate both surgical and non-surgical options, identify the true source of symptoms, and coordinate care with imaging, physical therapy, sports medicine, pain management, and rehabilitation when appropriate.",
            "Dr. Hartl&apos;s practice is built around that kind of comprehensive approach. The goal is not simply to recommend surgery. The goal is to understand the condition, explain the treatment path, and move patients toward the least invasive and most effective plan for their situation.",
          ],
        },
        {
          heading: "Conditions Commonly Evaluated",
          paragraphs: [
            "Patients may seek care for cervical radiculopathy, lumbar disc herniation, sciatica, spinal stenosis, spondylolisthesis, spinal instability, spinal tumors, deformity, and sports-related spine injuries. Some patients need help understanding whether symptoms come from the neck, lower back, nerves, or another musculoskeletal source.",
          ],
          bullets: [
            "Herniated discs causing arm pain, leg pain, or weakness",
            "Spinal stenosis affecting walking tolerance and balance",
            "Degenerative cervical and lumbar conditions",
            "Complex revision cases and deformity evaluation",
            "Tumors and trauma involving the spine",
          ],
        },
        {
          heading: "Why Experience and Setting Matter",
          paragraphs: [
            "Patients searching for the best neurosurgeon or spine surgeon in New York are usually looking for proof, not slogans. Credentials, hospital affiliations, surgical volume, published research, and patient outcomes all matter. Dr. Hartl serves at Weill Cornell Medicine and NewYork-Presbyterian, where patients have access to a high-level multidisciplinary environment for diagnostics, treatment planning, surgery, and recovery.",
            "That environment is especially important for complex cases, second opinions, and patients who want to compare multiple treatment options before moving forward.",
          ],
        },
        {
          heading: "Treatment Philosophy",
          paragraphs: [
            "The philosophy throughout this practice is to begin with the least invasive option appropriate for the diagnosis. Some patients improve with focused rehabilitation, medications, injections, or activity modification. When surgery is recommended, the aim is to choose the safest approach that can achieve durable long-term improvement.",
            "For many conditions, minimally invasive techniques can reduce tissue disruption, shorten recovery time, and help patients return to work, exercise, and family life sooner. Not every case is appropriate for a minimally invasive approach, but careful patient selection is part of the decision-making process.",
          ],
        },
      ]}
      faqs={[
        {
          question: "When should I see a spine surgeon in New York?",
          answer:
            "You should consider evaluation when back or neck symptoms persist, when pain travels into the arm or leg, when weakness or numbness develops, or when previous non-surgical care has not led to meaningful improvement.",
        },
        {
          question: "Does seeing a spine surgeon mean I will need surgery?",
          answer:
            "No. A spine surgeon should help determine whether surgery is appropriate, but the evaluation itself should include discussion of non-surgical options and the risks and benefits of each path.",
        },
        {
          question: "What makes a spine surgeon different from a general orthopedist?",
          answer:
            "A spine surgeon focuses specifically on disorders of the cervical, thoracic, and lumbar spine. That includes specialized training in nerve compression, spinal instability, deformity, tumors, and motion-preserving or minimally invasive procedures.",
        },
      ]}
      relatedLinks={[
        { href: "/Bio", label: "About Roger Hartl, MD" },
        { href: "/Reviews", label: "Patient reviews and testimonials" },
        { href: "/Materials", label: "Patient information and recovery guides" },
        { href: "/cervical-laminoplasty-new-york", label: "Cervical laminoplasty in New York" },
      ]}
    />
  );
}
