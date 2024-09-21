// src/app/page.tsx
import Header from "../../components/Header";
import Bio from "./carousels/Bio/page";
import Contact from "./carousels/Contact/Contact";
import GratitudeSummaryCarousel from "./carousels/Gratitude/Gratitude";
import HonorsAndAwardsPage from "./carousels/Honors/HonorsAndAwardsPage";
import HonorsAndAwardsPages from "./carousels/honors-awards/page";
import MaterialSummaryCarousel from "./carousels/Materials/Material";
import ProjectSummaryCarousel from "./carousels/Project/ProjectSummaryCarousel";
import Testimonials from "./carousels/Testimonials/Testimonials";
import HeroSection from "./Herosection/HeroSection";
import VitalsReview from "./carousels/honors-awards/VitalsReview";

export default function Home() {
  return (
    <div>
      <main>
      <HeroSection />
      <Bio/>
      <HonorsAndAwardsPages/>
      <VitalsReview/>
      <Testimonials/>
      <ProjectSummaryCarousel/>
       <HonorsAndAwardsPage />
       <GratitudeSummaryCarousel/>
       <MaterialSummaryCarousel />
       <Contact/>
      </main>
    </div>
  );
}
