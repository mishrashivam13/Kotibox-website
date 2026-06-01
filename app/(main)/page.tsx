'use client'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProductsSection from '@/components/sections/ProductsSection'
import IndustrySolutions from '@/components/sections/IndustrySolutions'
import GrowthJourney from '@/components/sections/GrowthJourney'
import MarketingHero from '@/components/sections/MarketingHero'
import WhyKotibox from '@/components/sections/WhyKotibox'
import CaseStudies from '@/components/sections/CaseStudies'
import TechStack from '@/components/sections/TechStack'
import Testtimonials from '@/components/sections/Testimonials'
import TrainingSection from '@/components/sections/TrainingSection'
import LogoTicker from '@/components/sections/LogoTicker'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProductsSection />
      <IndustrySolutions />
      <GrowthJourney />
      <MarketingHero />
      <WhyKotibox />
      <CaseStudies />
      <TechStack />
      <Testtimonials />
      <TrainingSection />
      <LogoTicker />
    </>
  )
}