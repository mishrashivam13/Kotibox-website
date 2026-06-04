import ServicesPageContent from './ServicesPageContent'

export function generateStaticParams() {
  return [
    'android', 'ios', 'flutter', 'react-native', 'cross-platform',
    'web-design', 'ecommerce', 'cms', 'pwa', 'seo', 'social-media',
    'ppc', 'content', 'ai', 'ai-chatbot', 'ai-automation', 'machine-learning',
    'ai-integration', 'generative-ai', 'ai-consulting',
  ].map((slug) => ({ slug }))
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ServicesPageContent params={params} />
}
