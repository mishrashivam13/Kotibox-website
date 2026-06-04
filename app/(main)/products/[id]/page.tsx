import ProductsPageContent from './ProductsPageContent'

export function generateStaticParams() {
  return [
    'ott-platform',
    'ai-chatbot',
    'voice-ai',
    'food-delivery',
    'ai-image-generation',
    'banking-software',
    'healthcare-platform',
    'ecommerce-platform',
  ].map((id) => ({ id }))
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <ProductsPageContent params={params} />
}
