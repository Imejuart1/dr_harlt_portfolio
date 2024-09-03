// src/app/page.tsx
import Header from "../../components/Header";
import HonorsAndAwardsPage from "./carousels/Honors/HonorsAndAwardsPage";
import ProjectSummaryCarousel from "./carousels/Project/ProjectSummaryCarousel";
import HeroSection from "./Herosection/HeroSection";


export default function Home() {
  return (
    <div>
      <main>
      <HeroSection />
      <ProjectSummaryCarousel />
       <HonorsAndAwardsPage />
      </main>
    </div>
  );
}
