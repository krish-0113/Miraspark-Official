
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestimonialFeatureSection from "@/components/Testimonials";
import FAQSection from "@/components/FAQ";
import Web3Platforms from "@/components/Web3Platforms";
import ChallengesSolutions from "@/components/ChallengesSolutions";
// import KeyFeatures from "@/components/KeyFeatures";
import UseCases from "@/components/UseCases";
import UpcomingProductsSection from "@/components/UpcomingProductsSection";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      <Web3Platforms/>
      <ChallengesSolutions/>
      {/* <KeyFeatures/> */}
      <UseCases/>
      <Services />
      <UpcomingProductsSection/>
      <About />
      <TestimonialFeatureSection/>
      <FAQSection/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
