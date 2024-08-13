// src/app/page.tsx
import Header from "../../components/Header";
import HeroSection from "./Herosection/HeroSection";

export default function Home() {
  return (
    <div>
      <main>
      <HeroSection />
        <h1>Welcome to Mediz Medical Center</h1>
      </main>
    </div>
  );
}
