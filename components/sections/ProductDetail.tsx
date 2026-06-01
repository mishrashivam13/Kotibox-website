'use client'
import { 
  Monitor, MessageSquare, Mic, UtensilsCrossed, Wand2, UserSearch 
} from 'lucide-react';

export const products = [
  {
    id: 'ott-platform',
    tag: 'VERTICAL OTT',
    tagColor: 'bg-red-500',
    title: 'AI-Powered Vertical OTT Platform',
    description: 'Niche OTT solution with video streaming, subscriptions, recommendations, creator panels, and AI content...',
    longDescription: 'Launch your own scalable video streaming platform in weeks. Our OTT suite comes packed with AI-driven content recommendations, seamless subscription management, and a powerful creator dashboard. Perfect for niche content creators and media houses.',
    features: ['AI Content Recommendations', '4K Video Streaming', 'Subscription & Paywall', 'Creator Analytics Dashboard'],
    Icon: Monitor,
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    ],
    faqs: [
      { question: "How long does it take to launch my own OTT platform?", answer: "Since our core suite is ready, we typically launch a fully branded platform for you within 4 to 6 weeks, including customizations." },
      { question: "Can I monetize my content?", answer: "Yes, the platform supports multiple monetization models including SVOD (Subscription), TVOD (Pay-per-view), and AVOD (Ad-supported)." },
      { question: "Does it support 4K streaming?", answer: "Absolutely. Our infrastructure is built to handle scalable high-definition streaming up to 4K resolution with adaptive bitrate." }
    ],
    // NAYA: Tech Stack Added
    techStack: ['MERN Stack', 'React Native (Mobile App)', 'AWS MediaLive', 'Python (AI Engine)', 'MongoDB']
  },
  {
    id: 'ai-chatbot',
    tag: 'AI CHATBOT',
    tagColor: 'bg-blue-500',
    title: 'AI Chatbot Web & App Suite',
    description: 'Smart support and sales chatbot with knowledge base training, lead capture, analytics, and CRM handoff.',
    longDescription: 'Automate your customer support and lead generation with our advanced AI Chatbot suite. Train the bot on your own company data, capture leads 24/7, and seamlessly hand off complex queries to human agents via your CRM.',
    features: ['Custom Knowledge Base Training', 'Human-Agent Handoff', 'Lead Capture Workflows', 'Multi-language Support'],
    Icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80'
    ],
    faqs: [
      { question: "Can I train the AI on my own website data?", answer: "Yes, you can upload PDFs, Word documents, or simply provide your website URL. The AI will ingest the data and answer customer queries based exclusively on your context." },
      { question: "Does it integrate with my CRM?", answer: "Yes, our chatbot integrates natively with popular CRMs like Salesforce, HubSpot, and Zoho, allowing seamless lead syncing and human agent handoff." },
      { question: "What languages does the chatbot support?", answer: "The chatbot supports over 90+ languages globally, automatically detecting the user's language and responding appropriately." }
    ],
    // NAYA: Tech Stack Added
    techStack: ['Next.js', 'Node.js', 'Python (LangChain/LLM)', 'Redis', 'PostgreSQL']
  },
  {
    id: 'voice-ai',
    tag: 'VOICE-TO-VOICE',
    tagColor: 'bg-[#f5a623]',
    title: 'Voice-to-Voice AI Chat',
    description: 'Real-time voice conversation assistant for calls, bookings, FAQs, follow-ups, and customer workflows.',
    longDescription: 'Revolutionize phone support with our ultra-low latency Voice AI. It sounds human, understands context, and can execute workflows like booking appointments, checking order status, and making follow-up calls automatically.',
    features: ['Ultra-low Latency Responses', 'Custom Voice Cloning', 'API Integration for Bookings', 'Emotion & Tone Detection'],
    Icon: Mic,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80'
    ],
    faqs: [
      { question: "Is there any lag during the conversation?", answer: "We use highly optimized ultra-low latency models ensuring response times of under 500ms, making the conversation feel natural and human-like." },
      { question: "Can I choose or clone a specific voice?", answer: "Yes, you can choose from dozens of premium pre-made voices or securely clone a brand ambassador's voice with their permission." },
      { question: "Does this work over standard phone lines?", answer: "Absolutely. We provide SIP trunking and Twilio/Vapi integrations so the AI can make and receive standard phone calls." }
    ],
    // NAYA: Tech Stack Added
    techStack: ['React.js', 'Flutter (App)', 'Python (Speech-to-Text)', 'WebRTC', 'Node.js']
  },
  {
    id: 'food-delivery',
    tag: 'AI FOOD DELIVERY',
    tagColor: 'bg-green-500',
    title: 'AI Food Delivery Platform',
    description: 'Food ordering suite with smart recommendations, route optimization, rider tracking, and restaurant analytics.',
    longDescription: 'A complete end-to-end food delivery ecosystem. Includes a customer app, restaurant portal, and rider app, all powered by AI to optimize delivery routes, predict preparation times, and offer personalized food recommendations.',
    features: ['AI Route Optimization', 'Real-time Order Tracking', 'Personalized Menus', 'Automated Dispatch System'],
    Icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      'https://images.unsplash.com/photo-1617347454431-f49cd7e4c1f6?w=800&q=80'
    ],
    faqs: [
      { question: "Are the Rider and Restaurant apps included?", answer: "Yes, the suite includes 3 distinct interfaces: The Customer App, the Restaurant/Vendor Dashboard, and the Rider Delivery App." },
      { question: "How does AI optimize the delivery process?", answer: "Our AI considers traffic patterns, restaurant preparation times, and rider availability to automatically batch orders and calculate the fastest routes." },
      { question: "Can we integrate our local payment gateway?", answer: "Yes, the platform is modular, allowing integration with Stripe, Razorpay, PayPal, or any local payment gateway of your choice." }
    ],
    // NAYA: Tech Stack Added
    techStack: ['MERN Stack', 'Flutter (Customer/Rider Apps)', 'Redis (Live Tracking)', 'Python (Routing ML)', 'AWS']
  },
  {
    id: 'ai-image-generation',
    tag: 'AI IMAGE GEN',
    tagColor: 'bg-purple-500',
    title: 'AI Image Generation & Transformation',
    description: 'Creative AI suite for text-to-image, image editing, background removal, style transfer, and brand visuals.',
    longDescription: 'Empower your marketing and design teams with our AI image suite. Generate high-quality visuals from text prompts, automatically remove backgrounds in bulk, and apply your brand style to existing product photos instantly.',
    features: ['Text-to-Image Generation', 'Bulk Background Removal', 'Brand Style Transfer', 'High-Res Upscaling'],
    Icon: Wand2,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80'
    ],
    faqs: [
      { question: "Who owns the copyright of the generated images?", answer: "You do. All images generated through your licensed platform belong entirely to your brand for commercial use." },
      { question: "Is there an API available for my other apps?", answer: "Yes, the suite comes with a robust REST API so you can integrate image generation directly into your existing SaaS or mobile apps." },
      { question: "Can I train the AI on my specific product photos?", answer: "Yes! You can fine-tune the model using a process called LoRA to generate new lifestyle images featuring your exact physical products." }
    ],
    // NAYA: Tech Stack Added
    techStack: ['Next.js', 'FastAPI (Python)', 'PyTorch / Stable Diffusion', 'PostgreSQL', 'AWS S3']
  },
  {
    id: 'job-seeker',
    tag: 'AI JOB SEEKER',
    tagColor: 'bg-teal-500',
    title: 'AI Job Seeker & Career Platform',
    description: 'Career platform with AI resume builder, job matching, interview prep, recruiter tools, and applicant tracking.',
    longDescription: 'Bridge the gap between talent and companies. Our AI-driven job platform automatically matches candidates to the right roles, helps them build ATS-friendly resumes, and provides recruiters with intelligent applicant ranking.',
    features: ['AI Resume Parsing & Scoring', 'Smart Candidate Matching', 'Mock AI Interviews', 'Recruiter ATS Dashboard'],
    Icon: UserSearch,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
    ],
    faqs: [
      { question: "How does the AI score and rank resumes?", answer: "The AI parses the job description and the candidate's resume, scoring them based on keyword overlap, experience relevance, and skill matching." },
      { question: "Are AI mock video interviews supported?", answer: "Yes, candidates can practice via webcam. The AI asks questions and analyzes their tone, pace, and answer quality to provide constructive feedback." },
      { question: "Is the platform ATS compliant?", answer: "Absolutely. The resumes generated by our builder are 100% ATS-friendly, ensuring they pass through standard screening software easily." }
    ],
    // NAYA: Tech Stack Added
    techStack: ['Laravel (Admin Backend)', 'React.js (Web)', 'React Native (App)', 'Python (NLP & ATS parsing)', 'MySQL']
  },
];