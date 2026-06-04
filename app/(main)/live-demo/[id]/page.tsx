import LiveDemoPageContent from './LiveDemoPageContent'

export function generateStaticParams() {
  return [
    'ai-agent-suite', 'security-monitoring', 'crm-sales', 'digital-wallet',
    'telemedicine', 'business-erp', 'ecommerce-suite', 'b2b-marketplace',
    'job-portal', 'food-tech', 'grocery-engine', 'lms-edtech', 'school-erp',
    'travel-booking', 'hotel-booking', 'real-estate-portal', 'ott-platform',
    'car-care', 'pharmacy-platform', 'fitness-app', 'salon-booking',
    'home-services', 'logistics-platform', 'social-community', 'news-media',
    'laundry-app', 'ai-image-generation', 'ai-image-enhancer', 'ai-chatbot',
    'job-seeker', 'astrology-platform', 'booking-engine', 'food-delivery',
    'grocery-single-vendor', 'grocery-multi-vendor', 'real-estate-suite',
    'mortgage-management', 'banking-software', 'hrms-software', 'task-management',
    'milestone-management', 'healthcare-platform', 'social-voice-rooms',
    'logistics-fleet', 'warehouse-erp', 'restaurant-pos', 'event-ticketing',
    'legal-tech', 'influencer-analytics', 'car-rental', 'cloud-kitchen-os',
    'agritech-platform', 'ai-voice-agent', 'ai-interior-landscape',
    'local-delivery-api', 'medical-equipment-rental', 'iot-smart-building',
    'subscription-billing', 'developer-api-portal', 'headless-cms',
    'digital-signage', 'escrow-payment-api', 'ai-video-generation',
    'pentest-cybersecurity', 'uptime-status-page', 'drone-fleet-os',
    'ev-charging-os', 'cloud-cost-management', 'data-etl-pipeline',
    'supply-chain-traceability', 'virtual-3d-expo', 'remote-server-management',
  ].map((id) => ({ id }))
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <LiveDemoPageContent params={params} />
}
