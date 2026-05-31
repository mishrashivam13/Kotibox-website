import DevelopmentServices from './DevelopmentServices'
import FAQ from './FAQ'
import LiveDemoHero from './LiveDemoHero'
import ProductGrid from './ProductGrid'
import ProjectQuote from './ProjectQuote'
import TalkDirectly from './TalkDirectly'

export default function livedemo() {
  return (
    <>
        <LiveDemoHero />
        <ProductGrid />
        <TalkDirectly />
        <ProjectQuote />
        <DevelopmentServices />
        <FAQ />
    </>
  )
}