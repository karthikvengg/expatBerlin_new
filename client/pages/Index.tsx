import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { RatingsSection } from "../components/RatingsSection";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RatingsSection />
      <Footer />
    </div>
  );
}
