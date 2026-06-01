'use client'
import { use, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Code2 } from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const products = [
  {
    id: 'ai-agent-suite',
    tag: 'AI AGENT',
    accentColor: '#6366f1',
    title: 'AI Agent Web & App Suite',
    description: 'Smart automation platform for chatbots, lead follow-ups, workflows, reports, and business intelligence.',
    longDescription: 'Transform your business operations with our comprehensive AI Agent Suite. Deploy intelligent chatbots that learn from your data, automate repetitive workflows, and generate actionable insights — all from a single unified dashboard. Built for enterprises that want to move fast without compromising quality.',
    features: ['AI Chatbot with Custom Training', 'Automated Lead Follow-Up', 'Workflow Automation Engine', 'Business Intelligence Reports', 'Multi-channel Integration', 'Real-time Analytics Dashboard'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    ],
    faqs: [
      { question: 'Can the AI be trained on my company data?', answer: 'Yes, the AI Agent can be trained on your documents, FAQs, product catalogs, and website content for domain-specific responses.' },
      { question: 'Which channels does it support?', answer: 'It supports WhatsApp, website chat widget, Facebook Messenger, Instagram DMs, and email — all from one dashboard.' },
      { question: 'How long does deployment take?', answer: 'Basic deployment takes 3–5 days. Full customization with workflow automation takes 2–3 weeks.' },
    ],
    techStack: ['Next.js', 'Node.js', 'Python (LangChain)', 'Redis', 'PostgreSQL', 'WebSocket'],
  },
  {
    id: 'security-monitoring',
    tag: 'SECURITY',
    accentColor: '#ef4444',
    title: 'Security Monitoring Dashboard',
    description: 'Real-time security workspace for alerts, audits, user access, threat logs, and compliance tracking.',
    longDescription: 'Enterprise-grade security monitoring built for modern organizations. Get real-time threat detection, detailed audit trails, and role-based access control all in one place. Stay ahead of security incidents with AI-powered anomaly detection and automated compliance reporting.',
    features: ['Real-time Threat Detection', 'Role-Based Access Control', 'Complete Audit Trail', 'Compliance Reporting', 'Anomaly Detection AI', 'Incident Response Workflows'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    ],
    faqs: [
      { question: 'Is it compatible with existing infrastructure?', answer: 'Yes, it integrates with AWS, Azure, GCP, on-premise servers, and common SaaS tools via API.' },
      { question: 'Does it support compliance frameworks?', answer: 'It generates reports for ISO 27001, SOC 2, GDPR, and HIPAA compliance requirements.' },
      { question: 'How quickly are threats detected?', answer: 'Threat detection and alerting happens within seconds using real-time log analysis and ML models.' },
    ],
    techStack: ['React.js', 'Node.js', 'Elasticsearch', 'Kafka', 'Python (ML)', 'Docker'],
  },
  {
    id: 'crm-sales',
    tag: 'CRM',
    accentColor: '#3b82f6',
    title: 'CRM & Sales Automation Suite',
    description: 'Lead pipeline, customer history, quotations, tasks, reminders, analytics, and team collaboration.',
    longDescription: 'Close more deals faster with our intelligent CRM. Visualize your entire sales pipeline, automate follow-up sequences, generate instant quotations, and get AI-powered deal scoring — all while keeping your team aligned with shared tasks and activity feeds.',
    features: ['Visual Sales Pipeline', 'Automated Follow-up Sequences', 'Instant Quotation Generator', 'AI Deal Scoring', 'Team Collaboration Tools', 'Sales Forecasting Reports'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    ],
    faqs: [
      { question: 'Can it integrate with email and WhatsApp?', answer: 'Yes, it syncs with Gmail, Outlook, and WhatsApp Business API for seamless communication tracking.' },
      { question: 'How many users can use it simultaneously?', answer: 'The platform is built for unlimited concurrent users with role-based access for different team levels.' },
      { question: 'Is mobile app included?', answer: 'Yes, a full-featured mobile app for iOS and Android is included so your sales team can work on the go.' },
    ],
    techStack: ['React.js', 'Laravel', 'MySQL', 'Redis', 'React Native', 'AWS SES'],
  },
  {
    id: 'digital-wallet',
    tag: 'FINTECH',
    accentColor: '#22c55e',
    title: 'Digital Wallet & Payment App',
    description: 'Secure payment platform with wallet, invoices, merchant panel, transaction history, and analytics.',
    longDescription: 'Launch your own branded payment ecosystem. Our digital wallet solution supports P2P transfers, merchant payments, invoice generation, and multi-currency support — all with bank-grade security and PCI DSS compliance built in.',
    features: ['P2P Money Transfers', 'Merchant Payment Gateway', 'Invoice Generation', 'Multi-currency Support', 'Transaction Analytics', 'PCI DSS Compliant'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=800&q=80',
      'https://images.unsplash.com/photo-1592772874383-d08932d29db7?w=800&q=80',
    ],
    faqs: [
      { question: 'Which payment gateways are supported?', answer: 'Razorpay, Stripe, PayPal, Paytm, and local bank APIs can be integrated based on your region.' },
      { question: 'Is KYC verification included?', answer: 'Yes, the platform includes Aadhaar/PAN-based KYC verification and document upload workflows.' },
      { question: 'How is security ensured?', answer: 'End-to-end encryption, 2FA, biometric login, and PCI DSS compliance are built into the core system.' },
    ],
    techStack: ['Flutter (App)', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe/Razorpay API', 'AWS'],
  },
  {
    id: 'telemedicine',
    tag: 'HEALTH',
    accentColor: '#06b6d4',
    title: 'Telemedicine & Clinic Suite',
    description: 'Online consultation, appointment booking, patient records, e-prescriptions, and clinic management.',
    longDescription: 'Modernize your healthcare practice with our complete telemedicine platform. Enable video consultations, manage patient records digitally, issue e-prescriptions, and streamline clinic operations — all HIPAA-compliant and built for scale.',
    features: ['HD Video Consultations', 'Digital Patient Records (EMR)', 'E-Prescription System', 'Appointment Scheduling', 'Lab Report Management', 'HIPAA Compliant'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    ],
    faqs: [
      { question: 'Is it suitable for single doctors or hospital chains?', answer: 'Both. It supports individual practitioners, multi-doctor clinics, and large hospital networks with separate panels.' },
      { question: 'Can patients access their records?', answer: 'Yes, patients get a personal health dashboard to view prescriptions, reports, appointments, and payment history.' },
      { question: 'Does it support insurance billing?', answer: 'Yes, it includes insurance claim workflows and integrates with popular health insurance APIs.' },
    ],
    techStack: ['React.js', 'Node.js', 'WebRTC', 'MongoDB', 'React Native', 'AWS HIPAA'],
  },
  {
    id: 'business-erp',
    tag: 'ERP',
    accentColor: '#f5a623',
    title: 'Business ERP & Operations Suite',
    description: 'Cloud-ready ERP for inventory, HR, billing, projects, approvals, reporting, and multi-branch management.',
    longDescription: 'A complete enterprise resource planning solution tailored for growing businesses. Manage your entire operation — from inventory and procurement to HR, payroll, project tracking, and financial reporting — from a single cloud-based platform.',
    features: ['Inventory & Procurement', 'HR & Payroll Module', 'Project Management', 'Financial Reporting', 'Multi-branch Support', 'Automated Approval Workflows'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    ],
    faqs: [
      { question: 'Can it be customized for my industry?', answer: 'Yes, the ERP is modular and can be customized for manufacturing, retail, services, education, and more.' },
      { question: 'Is data migration from existing systems supported?', answer: 'Yes, we provide data migration services from Excel, Tally, SAP, and other legacy systems.' },
      { question: 'Is there a mobile app for managers?', answer: 'Yes, managers get a mobile app for approvals, reports, and real-time operational monitoring.' },
    ],
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Flutter (App)', 'AWS'],
  },
  {
    id: 'ecommerce-suite',
    tag: 'E-COMMERCE',
    accentColor: '#f59e0b',
    title: 'E-Commerce Suite',
    description: 'Complete multi-vendor digital storefront infrastructure built for high scalability and conversions.',
    longDescription: 'Launch a powerful online store or multi-vendor marketplace. Includes everything from product catalog management, AI-powered recommendations, abandoned cart recovery, and seller dashboards — to integrated payment gateways and real-time inventory sync.',
    features: ['Multi-vendor Marketplace', 'AI Product Recommendations', 'Abandoned Cart Recovery', 'Seller Dashboard', 'Real-time Inventory Sync', 'Flash Sale Engine'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    ],
    faqs: [
      { question: 'Can I run it as a single-vendor or multi-vendor store?', answer: 'Both modes are supported. You can switch from single-vendor to marketplace model as your business scales.' },
      { question: 'Which shipping providers are integrated?', answer: 'Shiprocket, Delhivery, FedEx, DHL, and local courier APIs are pre-integrated.' },
      { question: 'Is SEO optimization built in?', answer: 'Yes, including meta tags, structured data, sitemap generation, and page speed optimization.' },
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'React Native', 'Razorpay/Stripe'],
  },
  {
    id: 'job-portal',
    tag: 'RECRUITMENT',
    accentColor: '#8b5cf6',
    title: 'Job Portal Matrix',
    description: 'Advanced interactive recruitment networks containing smart profiling filters and AI candidate matching.',
    longDescription: 'Build your own job board or recruitment platform. Match candidates to roles using AI, let recruiters manage pipelines, and give job seekers the tools they need — resume builder, interview prep, and one-click apply. Perfect for niche job boards and staffing agencies.',
    features: ['AI Candidate Matching', 'Resume Parser & Scoring', 'Recruiter ATS Dashboard', 'One-Click Apply', 'Interview Scheduling', 'Employer Branding Pages'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    ],
    faqs: [
      { question: 'Can it be white-labeled for my brand?', answer: 'Yes, complete white-labeling is available including custom domain, logo, colors, and email templates.' },
      { question: 'Does it support video interviews?', answer: 'Yes, built-in video interview scheduling with recording and AI evaluation is included.' },
      { question: 'Can employers post jobs directly?', answer: 'Yes, employers get self-service job posting with approval workflows and usage analytics.' },
    ],
    techStack: ['React.js', 'Laravel', 'MySQL', 'Python (NLP)', 'React Native', 'AWS S3'],
  },
  {
    id: 'food-tech',
    tag: 'FOOD DELIVERY',
    accentColor: '#ef4444',
    title: 'Food Tech Ecosystem',
    description: 'Hyper-local ordering delivery engine supporting live location workflows and restaurant management.',
    longDescription: 'End-to-end food delivery platform including customer app, restaurant portal, rider app, and admin dashboard. Powered by AI to optimize delivery routes, predict order preparation times, and offer personalized menus based on user behavior.',
    features: ['Customer Ordering App', 'Restaurant Management Portal', 'Rider Delivery App', 'AI Route Optimization', 'Live Order Tracking', 'Personalized Menu AI'],
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      'https://images.unsplash.com/photo-1617347454431-f49cd7e4c1f6?w=800&q=80',
    ],
    faqs: [
      { question: 'How many apps are included in the suite?', answer: 'Four apps: Customer App, Restaurant App, Rider App, and Super Admin Dashboard.' },
      { question: 'Does it support multiple cities?', answer: 'Yes, multi-city and multi-zone configuration is supported with separate pricing and delivery rules per area.' },
      { question: 'Which payment options are available?', answer: 'Cash on delivery, Razorpay, Stripe, PayPal, and UPI payments are all supported out of the box.' },
    ],
    techStack: ['Flutter (3 Apps)', 'Node.js', 'MongoDB', 'Redis (Live Tracking)', 'Python (ML)', 'Google Maps API'],
  },
  {
    id: 'grocery-engine',
    tag: 'GROCERY',
    accentColor: '#16a34a',
    title: 'Grocery Engine',
    description: 'Real-time slot-based delivery scheduling for grocery with live tracking and inventory management.',
    longDescription: 'Power your online grocery business with intelligent slot-based delivery scheduling, real-time inventory management, and personalized product recommendations. Supports both standalone grocery stores and large supermarket chains.',
    features: ['Slot-based Delivery Scheduling', 'Real-time Inventory Sync', 'Product Recommendation Engine', 'Bulk Order Management', 'Subscription Basket Feature', 'Seller Onboarding Panel'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800&q=80',
      'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=800&q=80',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it support weekly subscription baskets?', answer: 'Yes, customers can create recurring grocery baskets with weekly/monthly auto-ordering.' },
      { question: 'Can I manage multiple store locations?', answer: 'Yes, multi-store inventory management with location-based stock visibility is built in.' },
      { question: 'Is barcode scanning supported for inventory?', answer: 'Yes, the warehouse management module supports barcode/QR scanning for stock operations.' },
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Flutter (App)', 'Redis', 'AWS'],
  },
  {
    id: 'car-care',
    tag: 'AUTOMOTIVE',
    accentColor: '#0ea5e9',
    title: 'Car Care App',
    description: 'On-demand vehicle servicing, live mechanic tracking, service history, and workshop management.',
    longDescription: 'The complete solution for automotive service businesses. Customers can book services, track mechanic arrival in real-time, and view service history — while your workshop manages job cards, parts inventory, and technician assignments from a unified dashboard.',
    features: ['On-demand Service Booking', 'Live Mechanic Tracking', 'Digital Service History', 'Workshop Job Cards', 'Parts Inventory Management', 'Customer Loyalty Program'],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it work for multi-brand workshops?', answer: 'Yes, it supports all vehicle types and brands. Service packages can be configured per vehicle category.' },
      { question: 'Can customers track their car during service?', answer: 'Yes, live status updates and photo documentation are sent to customers throughout the service process.' },
      { question: 'Is fleet management supported?', answer: 'Yes, businesses with fleets of vehicles can manage bulk servicing schedules and reports.' },
    ],
    techStack: ['Flutter (App)', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Firebase', 'AWS'],
  },
  {
    id: 'pharmacy-platform',
    tag: 'PHARMACY',
    accentColor: '#ec4899',
    title: 'Pharmacy Platform',
    description: 'Digital pharmacy with prescription management, inventory control, expiry tracking, and POS billing.',
    longDescription: 'Modernize your pharmacy with our comprehensive digital platform. Manage drug inventory with expiry alerts, process prescription orders, run a POS billing system, and deliver medicines to doorsteps — all while staying compliant with pharmaceutical regulations.',
    features: ['Prescription Management', 'Drug Inventory with Expiry Alerts', 'POS Billing System', 'Home Delivery Module', 'Doctor Tie-up Portal', 'Regulatory Compliance Reports'],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80',
      'https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it support controlled substance tracking?', answer: 'Yes, Schedule H and H1 drug tracking with mandatory prescription verification is built in.' },
      { question: 'Can it integrate with a doctor prescription system?', answer: 'Yes, it connects with digital prescription platforms so orders flow directly into the pharmacy queue.' },
      { question: 'Is GST billing supported?', answer: 'Yes, full GST-compliant billing with HSN codes, invoice generation, and return filing reports are included.' },
    ],
    techStack: ['React.js', 'Laravel', 'MySQL', 'React Native', 'Barcode SDK', 'AWS'],
  },
  {
    id: 'real-estate-portal',
    tag: 'REAL ESTATE',
    accentColor: '#14b8a6',
    title: 'Real Estate Portal',
    description: 'Property listing, virtual tours, agent management, EMI calculators, and buyer-seller chat.',
    longDescription: 'Build a comprehensive property marketplace. Enable agents to list properties with photo galleries and virtual tours, let buyers use AI-powered search and EMI calculators, and facilitate direct buyer-seller communication — all in one polished platform.',
    features: ['Property Listing Management', '360° Virtual Tours', 'AI-powered Property Search', 'EMI Calculator', 'Agent CRM', 'Buyer-Seller Chat'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
      'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it support both rent and sale listings?', answer: 'Yes, the platform supports residential sale, rent, commercial, and plot listings with separate filters.' },
      { question: 'Can agents manage their own listings?', answer: 'Yes, each agent gets a personal dashboard to add, edit, and track the performance of their listings.' },
      { question: 'Is Google Maps integration included?', answer: 'Yes, all listings are geo-tagged with neighborhood mapping, nearby amenities, and commute time calculators.' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'React Native', 'Google Maps API', 'AWS S3'],
  },
  {
    id: 'salon-booking',
    tag: 'LIFESTYLE',
    accentColor: '#d946ef',
    title: 'Salon & Spa Booking App',
    description: 'Appointment booking, stylist profiles, loyalty points, POS billing, and customer feedback.',
    longDescription: 'Give your salon or spa a digital edge. Customers book appointments with their preferred stylist, earn loyalty points, and receive service reminders — while your staff manages schedules, track revenue, and collect feedback from a smart admin panel.',
    features: ['Online Appointment Booking', 'Stylist Profile Management', 'Loyalty Rewards Program', 'POS Billing & Invoicing', 'Customer Feedback System', 'Staff Schedule Management'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138daaa0e9f9?w=800&q=80',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
    ],
    faqs: [
      { question: 'Can customers choose their stylist?', answer: 'Yes, customers can view stylist profiles, availability, and reviews before booking their preferred professional.' },
      { question: 'Does it support memberships and packages?', answer: 'Yes, monthly memberships, service packages, and prepaid wallets are all supported.' },
      { question: 'Is multi-branch management available?', answer: 'Yes, a central dashboard manages all branches, staff, inventory, and revenue reporting.' },
    ],
    techStack: ['React Native (App)', 'Node.js', 'MongoDB', 'Stripe/Razorpay', 'Firebase', 'AWS'],
  },
  {
    id: 'fitness-app',
    tag: 'FITNESS',
    accentColor: '#f97316',
    title: 'Fitness & Gym Management',
    description: 'Membership plans, workout tracking, trainer schedules, nutrition plans, and progress analytics.',
    longDescription: 'The complete fitness business platform. Manage gym memberships, assign personal trainers, create custom workout and nutrition plans, and track member progress over time — with a beautiful member-facing app that keeps clients engaged and motivated.',
    features: ['Membership & Plan Management', 'Workout Tracking App', 'Personal Trainer Assignment', 'Nutrition Plan Builder', 'Progress Analytics', 'Class Booking System'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    ],
    faqs: [
      { question: 'Can trainers create custom workout plans?', answer: 'Yes, trainers can build fully customized workout and diet plans with video demonstrations for each exercise.' },
      { question: 'Does it track attendance automatically?', answer: 'Yes, QR code-based attendance tracking is included, with automated entry/exit logging.' },
      { question: 'Is online coaching supported?', answer: 'Yes, trainers can conduct live video sessions, share workout videos, and communicate with clients remotely.' },
    ],
    techStack: ['React Native (App)', 'Node.js', 'PostgreSQL', 'Firebase', 'Razorpay', 'AWS'],
  },
  {
    id: 'laundry-app',
    tag: 'ON-DEMAND',
    accentColor: '#6366f1',
    title: 'On-Demand Laundry App',
    description: 'Pickup & delivery scheduling, order tracking, pricing management, and customer loyalty rewards.',
    longDescription: 'Launch your on-demand laundry business with our complete platform. Customers schedule pickups, track their laundry in real-time, and get doorstep delivery — while you manage orders, delivery agents, pricing, and customer retention from the admin panel.',
    features: ['Pickup & Delivery Scheduling', 'Real-time Order Tracking', 'Dynamic Pricing Engine', 'Delivery Agent App', 'Loyalty Rewards System', 'Multi-zone Service Areas'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80',
    ],
    faqs: [
      { question: 'How many apps are included?', answer: 'Three apps: Customer App, Delivery Agent App, and Admin Dashboard with full order management.' },
      { question: 'Can I set different prices for different services?', answer: 'Yes, you can configure pricing per garment type, service type (wash/iron/dry clean), and urgency level.' },
      { question: 'Is subscription service supported?', answer: 'Yes, weekly/monthly subscription plans with discounted pricing can be offered to regular customers.' },
    ],
    techStack: ['Flutter (2 Apps)', 'Node.js', 'MongoDB', 'Google Maps API', 'Razorpay', 'Firebase'],
  },
  {
    id: 'hotel-booking',
    tag: 'HOSPITALITY',
    accentColor: '#0ea5e9',
    title: 'Hotel & Room Booking System',
    description: 'Room management, online reservations, housekeeping schedules, POS, and revenue analytics.',
    longDescription: 'A complete property management system for hotels, resorts, and guesthouses. Enable online bookings, manage room availability in real-time, coordinate housekeeping, run restaurant POS, and get deep revenue insights — all from one centralized platform.',
    features: ['Online Room Booking Engine', 'Real-time Availability Calendar', 'Housekeeping Management', 'Restaurant POS Integration', 'Revenue & Occupancy Reports', 'Channel Manager (OTA Sync)'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it sync with Booking.com and Airbnb?', answer: 'Yes, the channel manager syncs availability and rates with OTA platforms like Booking.com, Airbnb, and Expedia.' },
      { question: 'Is check-in/check-out automation supported?', answer: 'Yes, digital check-in with ID verification and automated billing on checkout is included.' },
      { question: 'Can it handle multiple properties?', answer: 'Yes, multi-property management with consolidated reporting is built into the enterprise version.' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'React Native', 'Stripe', 'AWS'],
  },
  {
    id: 'logistics-platform',
    tag: 'LOGISTICS',
    accentColor: '#64748b',
    title: 'Logistics & Fleet Management',
    description: 'Vehicle tracking, route optimization, delivery management, driver app, and customer notifications.',
    longDescription: 'Scale your logistics operations with our intelligent fleet management platform. Track every vehicle in real-time, optimize delivery routes using AI, manage drivers and job assignments, and keep customers updated with automated delivery notifications.',
    features: ['Real-time Vehicle Tracking', 'AI Route Optimization', 'Driver Mobile App', 'Delivery Job Assignment', 'Customer Notification System', 'Fuel & Maintenance Logs'],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1519003300449-424ad0405076?w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80',
    ],
    faqs: [
      { question: 'What GPS devices are compatible?', answer: 'It works with most standard GPS trackers via API integration, as well as mobile-based GPS tracking through the driver app.' },
      { question: 'Can customers track their delivery?', answer: 'Yes, customers receive a live tracking link via SMS/WhatsApp to monitor their delivery in real-time.' },
      { question: 'Does it support cash-on-delivery management?', answer: 'Yes, COD collection tracking, reconciliation, and driver cash-flow management are all included.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Flutter (Driver App)', 'Google Maps API', 'Firebase'],
  },
]

export default function LiveDemoProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const product = products.find((p) => p.id === id)
  const { openModal } = useModal()

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-20">
        <p className="text-2xl font-bold text-[#0a1628] mb-4">Product not found</p>
        <Link href="/live-demo" className="text-[#f5a623] font-semibold hover:underline">
          ← Back to Live Demo
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 via-transparent to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-6 md:left-12">
          <Link
            href="/live-demo"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
          >
            <ArrowLeft size={15} />
            Back to Products
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-2xl">
          <span
            className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4"
            style={{ background: product.accentColor }}
          >
            {product.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
            {product.title}
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT: Overview + Gallery + FAQs */}
          <div className="lg:col-span-2 flex flex-col gap-14">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>
                  Overview
                </span>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Gallery */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>
                  Gallery
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video bg-gray-100">
                    <img
                      src={img}
                      alt={`${product.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: product.accentColor }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: product.accentColor }}>
                  FAQs
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">
                        {faq.question}
                      </span>
                      {openFaq === i
                        ? <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
                        : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                      }
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Key Features */}
            <div className="bg-[#0a1628] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${product.accentColor}22` }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: product.accentColor }} />
                </div>
                <span className="text-white font-bold text-base">Key Features</span>
              </div>
              <div className="flex flex-col gap-3">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: product.accentColor }} />
                    <span className="text-white/80 text-sm leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={18} className="text-[#0a1628]" />
                <span className="text-[#0a1628] font-bold text-base">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] border border-gray-300 bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2f4e 100%)' }}
            >
              <div className="w-12 h-1 rounded-full mb-4" style={{ background: product.accentColor }} />
              <h3 className="text-lg font-extrabold mb-2">Interested in this product?</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Get a free demo and custom pricing tailored to your business needs.
              </p>
              <button
                onClick={openModal}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: product.accentColor, color: '#fff' }}
              >
                Request a Demo
              </button>
              <Link
                href="/live-demo"
                className="w-full flex items-center justify-center gap-2 py-3 mt-3 rounded-xl font-semibold text-sm border border-white/20 text-white/80 hover:bg-white/10 transition-all"
              >
                Browse All Products →
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
