// src/app/page.tsx
import Header from "../../components/Header";
import GratitudeSummaryCarousel from "./carousels/Gratitude/Gratitude";
import HonorsAndAwardsPage from "./carousels/Honors/HonorsAndAwardsPage";
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
      </main>
    </div>
  );
}
