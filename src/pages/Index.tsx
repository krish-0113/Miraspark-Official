import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import TestimonialFeatureSection from "@/components/Testimonials";
import FAQSection from "@/components/FAQ";
import Web3Platforms from "@/components/Web3Platforms";
import ChallengesSolutions from "@/components/ChallengesSolutions";
import UseCases from "@/components/UseCases";
import Products from "@/components/Products";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <Web3Platforms/>
      <ChallengesSolutions/>
      <UseCases/>
      <Services />
      <Products/>
      <About />
      <TestimonialFeatureSection/>
      <FAQSection/>
      <Contact />
    </div>
  );
};

export default Index;
