// src/app/page.tsx
import Header from "../../components/Header";
import Contact from "./carousels/Contact/Contact";
import GratitudeSummaryCarousel from "./carousels/Gratitude/Gratitude";
import HonorsAndAwardsPage from "./carousels/Honors/HonorsAndAwardsPage";
import MaterialSummaryCarousel from "./carousels/Materials/Material";
import ProjectSummaryCarousel from "./carousels/Project/ProjectSummaryCarousel";
import Testimonials from "./carousels/Testimonials/Testimonials";
import HeroSection from "./Herosection/HeroSection";

export default function Home() {
  return (
    <div>
      <main>
      <HeroSection />
      <ProjectSummaryCarousel />
       <HonorsAndAwardsPage />
       <Testimonials/>
       <GratitudeSummaryCarousel/>
       <MaterialSummaryCarousel />
       <Contact/>
      </main>
    </div>
  );
}
