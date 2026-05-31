import StartupHero from "./StartupHero";
import AboutStats from '../../about/AboutStats'
import StartupBundle from "./StartupBundle";
import StartupProcessSteps from "./StartupProcessSteps";
import CTASection from "./CTASection";
import WhyPickUs from "./WhyPickUs";
import ContactSection from "../..//about/ContactSection";
export default function StartupPage() {
  return (
    <>
        <StartupHero />
        <AboutStats />
        <StartupBundle />
        <StartupProcessSteps />
        <CTASection />
        <WhyPickUs />
        <ContactSection />

      
    </>
  );
}
