import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { RatingsSection } from "../components/RatingsSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RatingsSection />
    </div>
  );
}
