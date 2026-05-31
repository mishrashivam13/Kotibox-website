import AboutHero from '@/app/(main)/about/AboutHero'
import VisionaryLeader from '@/app/(main)/about/VisionaryLeader'
import Achievements from './Achievements'
import WhoWeAre from './WhoWeAre'
import AboutStats from './AboutStats'
import OurJourney from './OurJourney'
import WhyChooseUs from './WhyChooseUs'
import OurValues from './OurValues'
import ContactSection from './ContactSection'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionaryLeader />
      <Achievements />
      <WhoWeAre />
      <AboutStats />
      <OurJourney />
      <WhyChooseUs />
      <OurValues />
      <ContactSection />
      
    </>
  )
}