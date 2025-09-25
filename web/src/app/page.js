import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import YouTubeAnalyticsSection from "@/components/YouTubeAnalyticsSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <YouTubeAnalyticsSection />
      <CoursesSection />
      <Footer />
    </main>
  );
}
