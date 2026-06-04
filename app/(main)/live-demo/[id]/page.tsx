'use client'
import { use, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Code2, ArrowRight,
  Users, Building2, Rocket, Package, Zap, Shield, Activity, Settings,
  Globe, TrendingUp, BarChart3, Star, Monitor, Award, Database, XCircle,
  Clock, Layers,
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

type Product = {
  id: string
  tag: string
  accentColor: string
  title: string
  description: string
  longDescription: string
  features: string[]
  image: string
  gallery: string[]
  faqs: { question: string; answer: string }[]
  techStack: string[]
  stats: { value: string; label: string }[]
  useCases: { icon: 'startup' | 'enterprise' | 'agency'; title: string; desc: string }[]
  userFlow: { title: string; desc: string }[]
  deliverables: string[]
}

const products: Product[] = [
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
    stats: [{ value: '90%', label: 'Task Automation Rate' }, { value: '3×', label: 'Faster Lead Response' }, { value: '24/7', label: 'AI Availability' }],
    useCases: [
      { icon: 'startup', title: 'Startups', desc: 'Automate customer support and lead qualification from day one without hiring a large team.' },
      { icon: 'enterprise', title: 'Enterprises', desc: 'Integrate with existing CRM, ERP, and communication tools for full workflow automation.' },
      { icon: 'agency', title: 'Agencies', desc: 'White-label the suite and offer AI automation as a service to your own clients.' },
    ],
    userFlow: [
      { title: 'Connect Your Channels', desc: 'Link WhatsApp, website chat widget, email, and your existing CRM in minutes with one-click integrations.' },
      { title: 'Train the AI', desc: 'Upload company documents, FAQs, product catalogs, and policies. The AI learns your business and responds with domain-specific accuracy.' },
      { title: 'Set Automation Rules', desc: 'Use the drag-and-drop workflow builder to define lead nurturing sequences, escalation triggers, and team notification rules.' },
      { title: 'Go Live & Monitor', desc: 'Deploy instantly and track conversation volume, resolution rates, response times, and ROI from the analytics dashboard.' },
    ],
    deliverables: ['Admin Web Dashboard', 'Customer-facing Chat Widget (Embeddable)', 'Mobile Management App (iOS & Android)', 'WhatsApp Business API Integration', 'AI Training Pipeline & Knowledge Base', 'Full Source Code & API Documentation'],
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
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    ],
    faqs: [
      { question: 'Is it compatible with existing infrastructure?', answer: 'Yes, it integrates with AWS, Azure, GCP, on-premise servers, and common SaaS tools via API.' },
      { question: 'Does it support compliance frameworks?', answer: 'It generates reports for ISO 27001, SOC 2, GDPR, and HIPAA compliance requirements.' },
      { question: 'How quickly are threats detected?', answer: 'Threat detection and alerting happens within seconds using real-time log analysis and ML models.' },
    ],
    techStack: ['React.js', 'Node.js', 'Elasticsearch', 'Kafka', 'Python (ML)', 'Docker'],
    stats: [{ value: '<5s', label: 'Threat Detection Time' }, { value: '99.9%', label: 'Uptime SLA' }, { value: '4+', label: 'Compliance Frameworks' }],
    useCases: [
      { icon: 'enterprise', title: 'Enterprises', desc: 'Centralize security monitoring across all cloud and on-premise infrastructure.' },
      { icon: 'startup', title: 'SaaS Companies', desc: 'Meet SOC 2 and GDPR compliance requirements for enterprise sales.' },
      { icon: 'agency', title: 'MSSPs', desc: 'Manage security monitoring for multiple client environments from one platform.' },
    ],
    userFlow: [
      { title: 'Connect Infrastructure', desc: 'Install lightweight agents on servers, cloud environments, and endpoints. Data flows into the platform within minutes.' },
      { title: 'Configure Alert Rules', desc: 'Set thresholds for anomaly detection, define severity levels, and assign who gets notified via email, SMS, or Slack.' },
      { title: 'Assign User Roles', desc: 'Create profiles for security analysts, compliance officers, and management with different permission levels and dashboard views.' },
      { title: 'Monitor & Respond', desc: 'Watch the live threat dashboard, run compliance audit reports, and use incident response workflows to contain and resolve issues.' },
    ],
    deliverables: ['Web Security Dashboard', 'Infrastructure Agent Installers (Linux/Windows)', 'Role-based Admin & Analyst Panels', 'Compliance Report Templates (ISO 27001, SOC 2, GDPR)', 'SIEM API Integration Layer', 'Full Source Code & Documentation'],
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
    stats: [{ value: '40%', label: 'Faster Deal Closure' }, { value: '3×', label: 'Lead Conversion Rate' }, { value: '360°', label: 'Customer View' }],
    useCases: [
      { icon: 'startup', title: 'Sales Teams', desc: 'Give every rep a complete view of their pipeline and automate follow-up sequences.' },
      { icon: 'enterprise', title: 'Enterprises', desc: 'Integrate with ERP and marketing automation for full revenue operations.' },
      { icon: 'agency', title: 'Agencies', desc: 'Manage multiple client relationships and proposals from one platform.' },
    ],
    userFlow: [
      { title: 'Import & Capture Leads', desc: 'Pull leads from website forms, WhatsApp, email, and manual entry into a unified pipeline view.' },
      { title: 'Manage the Pipeline', desc: 'Drag deals across stages, add notes and attachments, assign owners, and set follow-up reminders per lead.' },
      { title: 'Automate Follow-ups', desc: 'Schedule email sequences and WhatsApp reminders that fire automatically based on deal stage and time elapsed.' },
      { title: 'Close & Analyze', desc: 'Generate quotations, close deals, and review team performance, conversion rates, and revenue forecasts.' },
    ],
    deliverables: ['Web CRM Dashboard', 'Mobile Sales App (iOS & Android)', 'Email & WhatsApp Automation Engine', 'Quotation & Invoice Generator', 'Sales Analytics & Forecasting Module', 'Full Source Code & Documentation'],
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
    stats: [{ value: 'PCI DSS', label: 'Compliant' }, { value: '99.99%', label: 'Transaction Uptime' }, { value: '50+', label: 'Currency Support' }],
    useCases: [
      { icon: 'startup', title: 'Fintech Startups', desc: 'Launch a branded wallet app without building payment infrastructure from scratch.' },
      { icon: 'enterprise', title: 'Enterprises', desc: 'Create internal payment flows, expense management, and vendor payouts.' },
      { icon: 'agency', title: 'Marketplaces', desc: 'Enable split payments, escrow, and multi-party transactions for your platform.' },
    ],
    userFlow: [
      { title: 'Register & Complete KYC', desc: 'Users sign up and verify identity via Aadhaar/PAN document upload for regulatory compliance.' },
      { title: 'Add Money to Wallet', desc: 'Top up via UPI, debit/credit card, or bank transfer with instant confirmation and balance update.' },
      { title: 'Pay or Transfer', desc: 'Send money to contacts, pay merchants by scanning QR codes, or pay bills with one tap.' },
      { title: 'Track & Manage', desc: 'View full transaction history, download statements, set spending limits, and manage linked accounts.' },
    ],
    deliverables: ['Customer Wallet App (iOS & Android)', 'Merchant POS & QR Payment System', 'Admin Panel with Transaction Monitoring', 'KYC Verification Workflow Module', 'Invoice & Account Statement Generator', 'Full Source Code & Documentation'],
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
    stats: [{ value: 'HIPAA', label: 'Compliant' }, { value: 'HD', label: 'Video Quality' }, { value: '4', label: 'Apps Included' }],
    useCases: [
      { icon: 'startup', title: 'Solo Doctors', desc: 'Start online consultations the same day — no heavy setup required.' },
      { icon: 'enterprise', title: 'Hospital Chains', desc: 'Multi-branch, multi-specialty management with centralized patient records.' },
      { icon: 'agency', title: 'Health Startups', desc: 'White-label and launch your own branded telehealth product.' },
    ],
    userFlow: [
      { title: 'Book an Appointment', desc: 'Patients search doctors by specialty, check real-time availability, and book a video or in-clinic slot.' },
      { title: 'Join the Video Consultation', desc: 'Doctor and patient join a secure HD video call at the scheduled time from web or mobile.' },
      { title: 'Receive Digital Prescription', desc: 'Doctor issues an e-prescription from the dashboard — sent instantly to the patient and their preferred pharmacy.' },
      { title: 'Access Records & Reports', desc: 'Patients upload lab reports, view complete health history, and track ongoing treatments from their personal dashboard.' },
    ],
    deliverables: ['Patient Web & Mobile App (iOS & Android)', 'Doctor Dashboard (Web)', 'Admin & Clinic Management Panel', 'WebRTC Secure Video Infrastructure', 'E-Prescription & Lab Report Module', 'Full Source Code & Documentation'],
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
    stats: [{ value: '12+', label: 'Core Modules' }, { value: '60%', label: 'Ops Cost Reduction' }, { value: 'Cloud', label: 'Ready' }],
    useCases: [
      { icon: 'startup', title: 'SMEs', desc: 'Replace spreadsheets and disconnected tools with one integrated business platform.' },
      { icon: 'enterprise', title: 'Enterprises', desc: 'Manage multiple branches, departments, and approval chains in one system.' },
      { icon: 'agency', title: 'Manufacturers', desc: 'Connect production, inventory, procurement, and billing end-to-end.' },
    ],
    userFlow: [
      { title: 'Configure Your Modules', desc: 'Enable only the modules you need — inventory, HR, billing, projects — and configure settings per department.' },
      { title: 'Import Existing Data', desc: 'Migrate from Excel, Tally, or legacy systems using guided data import tools with validation checks.' },
      { title: 'Run Daily Operations', desc: 'Process purchase orders, manage inventory, run payroll, track projects, and handle multi-level approvals.' },
      { title: 'Review Business Performance', desc: 'Generate P&L reports, inventory valuation, HR analytics, and multi-branch performance comparisons.' },
    ],
    deliverables: ['Web ERP Platform (12+ Modules)', 'Mobile App for Managers & Approvals (iOS & Android)', 'HR & Payroll Management Module', 'Accounting & Financial Reporting Module', 'Data Migration from Legacy Systems', 'Full Source Code & Documentation'],
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
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    ],
    faqs: [
      { question: 'Can I run it as a single-vendor or multi-vendor store?', answer: 'Both modes are supported. You can switch from single-vendor to marketplace model as your business scales.' },
      { question: 'Which shipping providers are integrated?', answer: 'Shiprocket, Delhivery, FedEx, DHL, and local courier APIs are pre-integrated.' },
      { question: 'Is SEO optimization built in?', answer: 'Yes, including meta tags, structured data, sitemap generation, and page speed optimization.' },
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'React Native', 'Razorpay/Stripe'],
    stats: [{ value: '40%', label: 'Conversion Boost' }, { value: '3×', label: 'Revenue Growth' }, { value: '99.9%', label: 'Uptime' }],
    useCases: [
      { icon: 'startup', title: 'D2C Brands', desc: 'Launch your direct-to-consumer store with all tools to grow and retain customers.' },
      { icon: 'enterprise', title: 'Marketplaces', desc: 'Build an Amazon-style multi-vendor platform for any product niche.' },
      { icon: 'agency', title: 'Retailers', desc: 'Take your offline store online with full inventory and order management.' },
    ],
    userFlow: [
      { title: 'Set Up Your Store', desc: 'Add products, categories, and pricing in the admin panel. Configure payment gateways and shipping rules.' },
      { title: 'Customers Shop', desc: 'Shoppers browse personalized product feeds, use search and filters, and add items to cart on web or app.' },
      { title: 'Order Processing', desc: 'Payment is confirmed, order is routed to the correct seller or warehouse, and fulfillment begins automatically.' },
      { title: 'Shipping & Delivery', desc: 'Integrated courier APIs generate tracking IDs and notify customers at every stage until delivery.' },
    ],
    deliverables: ['Customer Web Storefront (Next.js)', 'Customer Mobile App (iOS & Android)', 'Seller Dashboard (Multi-vendor)', 'Admin Panel with Analytics', 'Integrated Payment & Shipping SDKs', 'Full Source Code & Documentation'],
  },
  {
    id: 'b2b-marketplace',
    tag: 'B2B',
    accentColor: '#0891b2',
    title: 'B2B Wholesale Marketplace',
    description: 'Bulk ordering, GST invoicing, credit management, vendor portal, and procurement workflow automation.',
    longDescription: 'A purpose-built B2B marketplace for wholesalers, distributors, and manufacturers. Buyers place bulk orders with MOQ rules, manage credit limits, generate GST-compliant invoices, and track shipments — while vendors manage catalogs, pricing tiers, and order fulfillment from their portal.',
    features: ['Bulk Order Management with MOQ Rules', 'GST-Compliant Invoice Generation', 'Buyer Credit Limit & Ledger Management', 'Tiered Pricing per Buyer Segment', 'Vendor Catalog & Product Management', 'Procurement Approval Workflow'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    ],
    faqs: [
      { question: 'Can buyers pay on credit terms?', answer: 'Yes, net-30/60/90 credit terms are supported with automated reminders, outstanding balance tracking, and credit limit enforcement.' },
      { question: 'Does it support multiple warehouses?', answer: 'Yes, inventory can be managed across multiple warehouse locations with location-based stock allocation.' },
      { question: 'Is RFQ (Request for Quotation) supported?', answer: 'Yes, buyers can raise RFQs, vendors submit quotes, and a negotiation workflow manages the approval process.' },
    ],
    techStack: ['React.js', 'Node.js', 'MySQL', 'Redis', 'React Native', 'Razorpay'],
    stats: [{ value: 'GST', label: 'Compliant' }, { value: 'MOQ', label: 'Rules Supported' }, { value: 'Credit', label: 'Management' }],
    useCases: [
      { icon: 'startup', title: 'Distributors', desc: 'Digitize order-taking, invoicing, and collections for your dealer network.' },
      { icon: 'enterprise', title: 'Manufacturers', desc: 'Give dealers a self-service portal to place, track, and manage bulk orders.' },
      { icon: 'agency', title: 'Buying Groups', desc: 'Aggregate purchasing power of multiple buyers for better vendor rates.' },
    ],
    userFlow: [
      { title: 'Vendor Onboarding', desc: 'Vendors register, upload their product catalog, set MOQ rules, and configure buyer-specific pricing tiers.' },
      { title: 'Buyer Places Bulk Order', desc: 'Registered buyers browse vendor catalogs and place bulk orders meeting the minimum order quantity.' },
      { title: 'Approval & Invoice', desc: 'Orders are reviewed, buyer credit limit is verified, and GST-compliant invoices are auto-generated.' },
      { title: 'Fulfillment & Tracking', desc: 'Vendor dispatches goods, shipment tracking is updated, and buyer confirms delivery on the platform.' },
    ],
    deliverables: ['Buyer Web & Mobile Portal', 'Vendor Dashboard & Catalog Manager', 'Admin Panel with Ledger & Credit Management', 'GST Invoice & E-way Bill Generator', 'Procurement Approval Workflow Module', 'Full Source Code & Documentation'],
  },
  {
    id: 'job-portal',
    tag: 'RECRUITMENT',
    accentColor: '#8b5cf6',
    title: 'Job Portal Matrix',
    description: 'Advanced interactive recruitment platform with AI candidate matching and applicant tracking.',
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
    stats: [{ value: 'AI', label: 'Resume Matching' }, { value: '10×', label: 'Faster Screening' }, { value: 'White-label', label: 'Ready' }],
    useCases: [
      { icon: 'startup', title: 'Job Boards', desc: 'Launch a niche job board with AI-powered matching for specific industries.' },
      { icon: 'enterprise', title: 'HR Teams', desc: 'Streamline the entire hiring pipeline from posting to onboarding.' },
      { icon: 'agency', title: 'Staffing Firms', desc: 'Manage multiple employer clients and candidate pools from one dashboard.' },
    ],
    userFlow: [
      { title: 'Employer Posts a Job', desc: 'Employer creates a listing with required skills, experience range, and screening questions.' },
      { title: 'AI Screens Candidates', desc: 'Uploaded resumes are parsed and ranked by the AI based on job match score automatically.' },
      { title: 'Shortlist & Interview', desc: 'Recruiter reviews AI-ranked profiles, shortlists candidates, and schedules video interviews inside the platform.' },
      { title: 'Evaluate & Hire', desc: 'Interview scorecards are filled in, offer letters are generated, and the candidate moves to onboarding.' },
    ],
    deliverables: ['Job Seeker Web & Mobile App', 'Employer / Recruiter Dashboard', 'AI Resume Parsing & Scoring Engine', 'Video Interview Module', 'Applicant Tracking System (ATS)', 'Full Source Code & Documentation'],
  },
  {
    id: 'food-tech',
    tag: 'FOOD DELIVERY',
    accentColor: '#ef4444',
    title: 'Food Tech Ecosystem',
    description: 'Hyper-local ordering delivery engine with live tracking and restaurant management.',
    longDescription: 'End-to-end food delivery platform including customer app, restaurant portal, rider app, and admin dashboard. Powered by route optimization to minimize delivery times, predict order preparation, and offer personalized menus based on user behavior.',
    features: ['Customer Ordering App', 'Restaurant Management Portal', 'Rider Delivery App', 'Route Optimization Engine', 'Live Order Tracking', 'Personalized Menu Recommendations'],
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
    techStack: ['Flutter (3 Apps)', 'Node.js', 'MongoDB', 'Redis', 'Python (ML)', 'Google Maps API'],
    stats: [{ value: '4', label: 'Apps Included' }, { value: 'Multi-city', label: 'Support' }, { value: 'Live', label: 'Route Optimization' }],
    useCases: [
      { icon: 'startup', title: 'Cloud Kitchens', desc: 'Launch food delivery from multiple kitchen locations under one brand.' },
      { icon: 'enterprise', title: 'Restaurant Chains', desc: 'Own your delivery channel instead of paying 30% commissions to aggregators.' },
      { icon: 'agency', title: 'Food Aggregators', desc: 'Build a Swiggy/Zomato-style marketplace for your city or niche.' },
    ],
    userFlow: [
      { title: 'Customer Browses & Orders', desc: 'Customer opens the app, browses restaurant menus, customizes items, and places an order with payment.' },
      { title: 'Restaurant Confirms', desc: 'The restaurant app receives the order with a loud alert, confirms it, and sets the preparation time.' },
      { title: 'Rider Picks Up', desc: 'An available delivery rider is auto-assigned, navigates to the restaurant, and picks up the packed order.' },
      { title: 'Delivered to Door', desc: 'Customer tracks the rider live on the map and receives the order with a digital receipt and rating prompt.' },
    ],
    deliverables: ['Customer Ordering App (iOS & Android)', 'Restaurant Management App & Web Panel', 'Rider Delivery App (iOS & Android)', 'Super Admin Dashboard', 'Google Maps & Route Optimization', 'Full Source Code & Documentation'],
  },
  {
    id: 'grocery-engine',
    tag: 'GROCERY',
    accentColor: '#16a34a',
    title: 'Grocery Engine',
    description: 'Slot-based grocery delivery with real-time inventory, subscriptions, and dark store support.',
    longDescription: 'Power your online grocery business with intelligent slot-based delivery scheduling, real-time inventory management, and personalized product recommendations. Supports both standalone grocery stores and large supermarket chains with dark store operations.',
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
    stats: [{ value: '10-min', label: 'Express Delivery' }, { value: 'Dark Store', label: 'Support' }, { value: 'Auto', label: 'Subscriptions' }],
    useCases: [
      { icon: 'startup', title: 'Grocery Startups', desc: 'Launch a hyperlocal grocery delivery brand with all technology in place.' },
      { icon: 'enterprise', title: 'Supermarket Chains', desc: 'Add online ordering and home delivery to your existing store network.' },
      { icon: 'agency', title: 'Kirana Networks', desc: 'Digitize and aggregate local kirana stores onto a single delivery platform.' },
    ],
    userFlow: [
      { title: 'Browse & Add to Cart', desc: 'Customers browse categories, see real-time stock availability, and add items including recurring subscription staples.' },
      { title: 'Choose Delivery Slot', desc: 'Select a preferred delivery time slot from available windows in their zone.' },
      { title: 'Checkout & Pay', desc: 'Review cart, apply coupons, choose payment method, and confirm the order.' },
      { title: 'Track & Receive', desc: 'Receive updates as the order is packed and dispatched, then track the delivery rider to the door.' },
    ],
    deliverables: ['Customer App (iOS & Android)', 'Store Operations & Picker App', 'Delivery Rider App', 'Admin & Inventory Management Panel', 'Slot Management & Scheduling Engine', 'Full Source Code & Documentation'],
  },
  {
    id: 'lms-edtech',
    tag: 'EDTECH',
    accentColor: '#7c3aed',
    title: 'LMS & EdTech Platform',
    description: 'Live classes, recorded courses, quizzes, certificates, student analytics, and instructor management.',
    longDescription: 'A full-featured Learning Management System built for modern education. Deliver live classes via video, host recorded course libraries, run assessments with auto-grading, issue certificates, and give instructors powerful tools to manage their cohorts — all on a branded platform.',
    features: ['Live Class Scheduling with Video', 'Recorded Course Library & Modules', 'Quizzes & Auto-graded Assessments', 'Certificate Generation & Verification', 'Student Progress & Engagement Analytics', 'Instructor Dashboard & Earnings Management'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
      'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    ],
    faqs: [
      { question: 'Which video conferencing tools are integrated?', answer: 'Zoom, Google Meet, and built-in WebRTC are all supported. Classes can be scheduled from inside the platform.' },
      { question: 'Can I sell courses with different pricing models?', answer: 'Yes, individual courses, subscription bundles, or one-time cohort access with coupon code support are all available.' },
      { question: 'Is mobile learning supported?', answer: 'Yes, a full-featured mobile app is included for iOS and Android so students can learn on any device.' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'React Native', 'Zoom API'],
    stats: [{ value: 'Live', label: 'Video Classes' }, { value: 'Auto', label: 'Certificate Issuance' }, { value: 'Mobile', label: 'App Included' }],
    useCases: [
      { icon: 'startup', title: 'Ed Startups', desc: 'Launch a branded online learning platform without building technology from scratch.' },
      { icon: 'enterprise', title: 'Coaching Institutes', desc: 'Shift offline batches online with live classes and full student management.' },
      { icon: 'agency', title: 'Corporate Training', desc: 'Deliver employee training programs with progress tracking and compliance reports.' },
    ],
    userFlow: [
      { title: 'Browse & Enroll', desc: 'Students discover courses, review curriculum and instructor profiles, and enroll via payment or invitation link.' },
      { title: 'Learn at Their Pace', desc: 'Watch recorded lessons, download resources, and post questions in course discussion threads.' },
      { title: 'Attend Live Classes', desc: 'Join scheduled video sessions, ask questions in real-time, and access session recordings afterward.' },
      { title: 'Complete & Get Certified', desc: 'Pass quizzes, complete all modules, and download a verifiable digital certificate instantly.' },
    ],
    deliverables: ['Student Web & Mobile App (iOS & Android)', 'Instructor Dashboard & Course Builder', 'Admin Platform Management Panel', 'Live Class Video Infrastructure', 'Certificate Generation & Verification System', 'Full Source Code & Documentation'],
  },
  {
    id: 'school-erp',
    tag: 'EDUCATION',
    accentColor: '#2563eb',
    title: 'School & College ERP',
    description: 'Admissions, attendance, fee management, timetables, parent portal, exams, and report cards.',
    longDescription: 'A comprehensive school management system covering every aspect of institution administration. From admissions and fee collection to attendance tracking, exam management, and parent communication — everything is digitized and connected in one easy-to-use platform.',
    features: ['Student Admission & Enrollment Management', 'Biometric & App-based Attendance', 'Online Fee Collection & Receipt Generation', 'Timetable & Substitute Teacher Management', 'Exam Scheduling, Grading & Report Cards', 'Parent Communication Portal & App'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    ],
    faqs: [
      { question: 'Can it manage multiple schools under one account?', answer: 'Yes, a multi-school admin panel lets you manage multiple branches with separate logins and consolidated reporting.' },
      { question: 'Is fee reminder automation available?', answer: 'Yes, automated SMS and email reminders are sent to parents before and after due dates.' },
      { question: 'Does it generate report cards automatically?', answer: 'Yes, report cards are auto-generated based on exam scores entered by teachers, with custom grading scales.' },
    ],
    techStack: ['React.js', 'Laravel', 'MySQL', 'React Native', 'Firebase', 'Razorpay'],
    stats: [{ value: 'Multi', label: 'School Support' }, { value: 'Auto', label: 'Fee Reminders' }, { value: 'Parent', label: 'App Included' }],
    useCases: [
      { icon: 'startup', title: 'Small Schools', desc: 'Replace registers and spreadsheets with a complete digital school management system.' },
      { icon: 'enterprise', title: 'School Chains', desc: 'Manage hundreds of schools from one admin panel with role-based access.' },
      { icon: 'agency', title: 'Colleges', desc: 'Handle admissions, attendance, exams, and student communication at scale.' },
    ],
    userFlow: [
      { title: 'Student Enrollment', desc: 'Admin adds student details, assigns class and section, and generates a student ID with photo.' },
      { title: 'Daily Operations', desc: 'Teachers mark attendance via app, update lesson plans, and communicate with parents through the portal.' },
      { title: 'Fee Collection', desc: 'Finance staff tracks dues, generates fee receipts, and automated reminders go out before and after due dates.' },
      { title: 'Exams & Results', desc: 'Create exam schedules, enter marks, auto-calculate grades, and publish report cards for parents to view in the app.' },
    ],
    deliverables: ['Admin Web Dashboard', 'Teacher App for Attendance & Grades', 'Parent Mobile App (iOS & Android)', 'Student Portal (Web)', 'Fee Collection & Receipt Module', 'Full Source Code & Documentation'],
  },
  {
    id: 'travel-booking',
    tag: 'TRAVEL',
    accentColor: '#0284c7',
    title: 'Travel & Tour Booking Platform',
    description: 'Flight, hotel, and tour package booking with itinerary builder, group travel, and agent portal.',
    longDescription: 'A complete travel booking platform for tour operators and travel agencies. Enable customers to browse and book holiday packages, build custom itineraries, manage group bookings, and handle payments — while your team manages supplier contracts, agent commissions, and profitability.',
    features: ['Holiday Package Listing & Booking', 'Custom Itinerary Builder', 'Group Travel & Seat Management', 'Travel Agent Commission Portal', 'Booking Amendment & Cancellation Workflows', 'Voucher & Travel Document Generation'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    ],
    faqs: [
      { question: 'Can travel agents book on behalf of customers?', answer: 'Yes, agents get a dedicated portal with commission tracking, customer management, and booking history.' },
      { question: 'Is flight and hotel API integration available?', answer: 'Yes, we integrate with Amadeus, TBO, and other GDS/aggregator APIs for live inventory.' },
      { question: 'Does it support partial payment and installments?', answer: 'Yes, customers can pay a deposit upfront and the balance closer to travel date with automated reminders.' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Amadeus API', 'React Native', 'Razorpay'],
    stats: [{ value: 'GDS', label: 'API Integration' }, { value: 'Custom', label: 'Itinerary Builder' }, { value: 'Agent', label: 'Portal Included' }],
    useCases: [
      { icon: 'startup', title: 'Tour Operators', desc: 'Sell your holiday packages online with a complete booking and payment system.' },
      { icon: 'enterprise', title: 'Travel Agencies', desc: 'Manage agent networks, commissions, and supplier contracts from one platform.' },
      { icon: 'agency', title: 'Aggregators', desc: 'Build a multi-supplier travel marketplace for domestic or international travel.' },
    ],
    userFlow: [
      { title: 'Discover Packages', desc: 'Travellers browse curated holiday packages with photos, inclusions, pricing, and day-by-day itineraries.' },
      { title: 'Customize the Trip', desc: 'Adjust dates, add optional excursions, upgrade accommodation, or build a fully custom itinerary from scratch.' },
      { title: 'Book & Pay', desc: 'Choose a payment plan (full or deposit), pay securely, and receive an instant booking confirmation.' },
      { title: 'Travel with Documents', desc: 'Download e-vouchers, hotel confirmations, and the complete travel itinerary directly from the app.' },
    ],
    deliverables: ['Customer Web & Mobile App (iOS & Android)', 'Travel Agent Booking Portal', 'Admin Backend with Package Builder', 'Itinerary & Voucher Generator', 'Payment & Installment Management Module', 'Full Source Code & Documentation'],
  },
  {
    id: 'hotel-booking',
    tag: 'HOSPITALITY',
    accentColor: '#0ea5e9',
    title: 'Hotel & Room Booking System',
    description: 'Room management, online reservations, housekeeping, POS, and revenue analytics.',
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
    stats: [{ value: 'OTA', label: 'Channel Manager' }, { value: 'POS', label: 'F&B Included' }, { value: 'Multi', label: 'Property Support' }],
    useCases: [
      { icon: 'startup', title: 'Boutique Hotels', desc: 'Accept online bookings and manage your property without expensive legacy PMS software.' },
      { icon: 'enterprise', title: 'Hotel Chains', desc: 'Centralize revenue management and OTA distribution across all properties.' },
      { icon: 'agency', title: 'Resorts', desc: 'Manage rooms, restaurants, activities, and billing from one platform.' },
    ],
    userFlow: [
      { title: 'Search & Compare Rooms', desc: 'Guests search by dates and guest count, view room photos, amenities, and live pricing.' },
      { title: 'Book & Confirm', desc: 'Select a room, enter guest details, pay securely, and receive an instant booking confirmation via email/SMS.' },
      { title: 'Check In', desc: 'Front desk verifies the booking, assigns the room, and issues a digital or physical room key.' },
      { title: 'Enjoy & Check Out', desc: 'F&B and service charges are added to the room folio and settled automatically on checkout.' },
    ],
    deliverables: ['Guest Booking Website & Mobile App', 'Front Desk / Receptionist Web Panel', 'Housekeeping Management App', 'Restaurant POS Module', 'Revenue & Occupancy Analytics Dashboard', 'Full Source Code & Documentation'],
  },
  {
    id: 'real-estate-portal',
    tag: 'REAL ESTATE',
    accentColor: '#14b8a6',
    title: 'Real Estate Portal',
    description: 'Property listing, virtual tours, agent management, EMI calculators, and buyer-seller chat.',
    longDescription: 'Build a comprehensive property marketplace. Enable agents to list properties with photo galleries and virtual tours, let buyers use advanced search and EMI calculators, and facilitate direct buyer-seller communication — all in one polished platform.',
    features: ['Property Listing Management', '360° Virtual Tours', 'Advanced Property Search & Filters', 'EMI Calculator', 'Agent CRM', 'Buyer-Seller Live Chat'],
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
    stats: [{ value: '360°', label: 'Virtual Tours' }, { value: 'Built-in', label: 'EMI Calculator' }, { value: 'Agent', label: 'CRM Included' }],
    useCases: [
      { icon: 'startup', title: 'PropTech Startups', desc: 'Launch a property marketplace for any city, niche, or property type.' },
      { icon: 'enterprise', title: 'Developers', desc: 'Showcase projects with virtual tours and manage buyer leads centrally.' },
      { icon: 'agency', title: 'Brokers & Agents', desc: 'Get a professional platform to list, market, and close property deals.' },
    ],
    userFlow: [
      { title: 'List or Search Property', desc: 'Agents upload property listings with photos, floor plans, and geo-location; buyers search using advanced filters.' },
      { title: 'Explore with Virtual Tour', desc: 'Buyers take a 360° virtual tour of the property from anywhere without visiting in person.' },
      { title: 'Connect with Agent', desc: 'Interested buyers send enquiries or book a physical site visit via the built-in chat and appointment scheduler.' },
      { title: 'Close the Deal', desc: 'Agent manages follow-ups in the CRM, generates offer letters, and tracks the deal through to closure.' },
    ],
    deliverables: ['Property Listing Web Portal', 'Buyer & Seller Mobile App (iOS & Android)', 'Agent CRM & Listing Dashboard', '360° Virtual Tour Integration', 'EMI Calculator & Lead Management Tools', 'Full Source Code & Documentation'],
  },
  {
    id: 'ott-platform',
    tag: 'STREAMING',
    accentColor: '#dc2626',
    title: 'OTT Streaming Platform',
    description: 'Video streaming with subscription plans, content management, multi-language, and monetization tools.',
    longDescription: 'Launch your own Netflix-style streaming service. Deliver content via HLS adaptive streaming, manage subscriptions and pay-per-view, publish via a powerful CMS, and monetize with ads or premium tiers — all on a CDN-backed, DRM-protected infrastructure.',
    features: ['HLS Adaptive Bitrate Video Streaming', 'Subscription & Pay-per-View Monetization', 'Content Management System (CMS)', 'Multi-language Subtitle & Dubbing Support', 'Ad Insertion (AVOD/SVOD)', 'Viewer Analytics & Content Performance'],
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      'https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=800&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    ],
    faqs: [
      { question: 'Which devices does the app support?', answer: 'Web, iOS, Android, Smart TV (Fire TV, Android TV), and Roku are all supported with native apps.' },
      { question: 'How is video content protected from piracy?', answer: 'DRM (Widevine, FairPlay, PlayReady) encryption and token-based URL signing protect all content.' },
      { question: 'Can I run ads alongside my subscription model?', answer: 'Yes, AVOD and SVOD can coexist — ads for free-tier users while premium subscribers get an ad-free experience.' },
    ],
    techStack: ['React Native', 'Node.js', 'AWS CloudFront', 'AWS MediaConvert', 'Stripe', 'Elasticsearch'],
    stats: [{ value: 'DRM', label: 'Content Protection' }, { value: 'Multi', label: 'Device Support' }, { value: 'CDN', label: 'Backed Delivery' }],
    useCases: [
      { icon: 'startup', title: 'Content Creators', desc: 'Launch a paid streaming platform for your audience without relying on YouTube.' },
      { icon: 'enterprise', title: 'Media Companies', desc: 'Migrate existing content libraries to your own branded streaming service.' },
      { icon: 'agency', title: 'Ed-Streamers', desc: 'Deliver video courses and webinars on a Netflix-style learning platform.' },
    ],
    userFlow: [
      { title: 'Subscribe & Register', desc: 'Users choose a plan, complete payment, and create a profile with genre and language preferences.' },
      { title: 'Discover Content', desc: 'Browse curated categories, trending titles, and personalized recommendations across all devices.' },
      { title: 'Stream or Download', desc: 'Watch in HD with adaptive bitrate streaming, or download for offline playback within the app.' },
      { title: 'Continue Watching', desc: 'Resume where you left off — watchlist and progress sync seamlessly across web, mobile, and TV.' },
    ],
    deliverables: ['Web Streaming Platform', 'iOS & Android Mobile Apps', 'Smart TV App (Android TV / Fire TV)', 'Content Management System (CMS)', 'Subscription & Payment Management', 'Full Source Code & Documentation'],
  },
  {
    id: 'car-care',
    tag: 'AUTOMOTIVE',
    accentColor: '#0ea5e9',
    title: 'Car Care App',
    description: 'On-demand vehicle servicing, live mechanic tracking, service history, and workshop management.',
    longDescription: 'The complete solution for automotive service businesses. Customers book services, track mechanic arrival in real-time, and view full service history — while your workshop manages job cards, parts inventory, and technician assignments from a unified dashboard.',
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
      { question: 'Is fleet management supported?', answer: 'Yes, businesses with fleets can manage bulk servicing schedules and maintenance reports.' },
    ],
    techStack: ['Flutter (App)', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Firebase', 'AWS'],
    stats: [{ value: 'Live', label: 'Mechanic Tracking' }, { value: 'Digital', label: 'Job Cards' }, { value: 'Fleet', label: 'Management' }],
    useCases: [
      { icon: 'startup', title: 'Service Centers', desc: 'Digitize bookings, job cards, and customer communication for your workshop.' },
      { icon: 'enterprise', title: 'Auto Chains', desc: 'Manage multiple service center locations with centralized reporting.' },
      { icon: 'agency', title: 'Fleet Owners', desc: 'Track maintenance schedules, fuel logs, and service history for entire fleets.' },
    ],
    userFlow: [
      { title: 'Book a Service', desc: 'Customer selects vehicle, chooses service type (oil change, repair, etc.), and picks a time slot.' },
      { title: 'Mechanic Assigned', desc: 'A verified mechanic is assigned and navigates to the customer location or workshop.' },
      { title: 'Service in Progress', desc: 'Customer receives real-time status updates and photos of the work being done on their vehicle.' },
      { title: 'Done & Documented', desc: 'Customer approves the job, pays via app, and a digital service record is added to the vehicle history.' },
    ],
    deliverables: ['Customer App (iOS & Android)', 'Mechanic App with Digital Job Cards', 'Workshop Admin Panel', 'Parts Inventory Management Module', 'Service History & Vehicle Report System', 'Full Source Code & Documentation'],
  },
  {
    id: 'pharmacy-platform',
    tag: 'PHARMACY',
    accentColor: '#ec4899',
    title: 'Pharmacy Platform',
    description: 'Digital pharmacy with prescription management, inventory, expiry tracking, and POS billing.',
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
    stats: [{ value: 'GST', label: 'Compliant Billing' }, { value: 'Auto', label: 'Expiry Alerts' }, { value: 'Home', label: 'Delivery Built-in' }],
    useCases: [
      { icon: 'startup', title: 'Independent Pharmacies', desc: 'Digitize billing, inventory, and prescription management affordably.' },
      { icon: 'enterprise', title: 'Pharmacy Chains', desc: 'Multi-branch management with centralized inventory and reporting.' },
      { icon: 'agency', title: 'Healthcare Platforms', desc: 'Add pharmacy integration to your existing health or telemedicine app.' },
    ],
    userFlow: [
      { title: 'Upload Prescription', desc: 'Customer uploads a photo of the prescription via app, or pharmacist adds it manually at the counter.' },
      { title: 'Pharmacist Verifies', desc: 'Pharmacist reviews the prescription, checks for drug interactions, and confirms stock availability.' },
      { title: 'Order is Packed', desc: 'Drugs are picked from inventory, verified against the prescription, labelled, and prepared for dispatch.' },
      { title: 'Delivery or Pickup', desc: 'Customer tracks home delivery in real-time, or walks in for counter pickup with a digital receipt.' },
    ],
    deliverables: ['Customer App & Web Portal', 'Pharmacist / Counter Staff App', 'Admin Panel with Inventory & Expiry Tracking', 'POS Billing with GST Reports', 'Prescription Management & Compliance Module', 'Full Source Code & Documentation'],
  },
  {
    id: 'fitness-app',
    tag: 'FITNESS',
    accentColor: '#f97316',
    title: 'Fitness & Gym Management',
    description: 'Membership plans, workout tracking, trainer schedules, nutrition plans, and progress analytics.',
    longDescription: 'The complete fitness business platform. Manage gym memberships, assign personal trainers, create custom workout and nutrition plans, and track member progress — with a beautiful member-facing app that keeps clients engaged and motivated.',
    features: ['Membership & Plan Management', 'Workout Tracking App', 'Personal Trainer Assignment', 'Nutrition Plan Builder', 'Progress Analytics & Body Metrics', 'Class Booking System'],
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
    stats: [{ value: 'QR', label: 'Attendance Tracking' }, { value: 'Custom', label: 'Workout Plans' }, { value: 'Live', label: 'Online Coaching' }],
    useCases: [
      { icon: 'startup', title: 'Gyms', desc: 'Manage members, trainers, and revenue all from a single dashboard.' },
      { icon: 'enterprise', title: 'Fitness Chains', desc: 'Standardize operations with central control over all gym locations.' },
      { icon: 'agency', title: 'Online Coaches', desc: 'Deliver personalized fitness plans and coaching to clients remotely.' },
    ],
    userFlow: [
      { title: 'Join & Get Assessed', desc: 'Member enrolls, completes a fitness assessment, and gets assigned to a trainer and the right membership plan.' },
      { title: 'Follow the Plan', desc: 'Access personalized workout and nutrition plans in the app and log daily training activity.' },
      { title: 'Book Classes', desc: 'Browse the class schedule, book a group session or personal training slot, and receive automated reminders.' },
      { title: 'Track Progress', desc: 'Review body measurement trends, workout consistency, and personal records over time on the progress dashboard.' },
    ],
    deliverables: ['Member App (iOS & Android)', 'Trainer App & Program Builder', 'Gym Admin & Membership Dashboard', 'QR Code Attendance System', 'Progress Tracking & Analytics Module', 'Full Source Code & Documentation'],
  },
  {
    id: 'salon-booking',
    tag: 'LIFESTYLE',
    accentColor: '#d946ef',
    title: 'Salon & Spa Booking App',
    description: 'Appointment booking, stylist profiles, loyalty points, POS billing, and customer feedback.',
    longDescription: 'Give your salon or spa a digital edge. Customers book with their preferred stylist, earn loyalty points, and receive service reminders — while your staff manages schedules, tracks revenue, and collects feedback from a smart admin panel.',
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
    stats: [{ value: '24/7', label: 'Online Booking' }, { value: 'POS', label: 'Billing Included' }, { value: 'Multi-branch', label: 'Support' }],
    useCases: [
      { icon: 'startup', title: 'Solo Salons', desc: 'Eliminate phone bookings and manage your schedule from a simple app.' },
      { icon: 'enterprise', title: 'Salon Chains', desc: 'Standardize operations and track performance across all locations.' },
      { icon: 'agency', title: 'Beauty Platforms', desc: 'Build a marketplace connecting clients with independent beauty professionals.' },
    ],
    userFlow: [
      { title: 'Browse & Choose a Stylist', desc: 'Customers view stylist profiles, specialties, ratings, and real-time availability before booking.' },
      { title: 'Book an Appointment', desc: 'Pick a service, preferred stylist, and available slot; receive SMS and email confirmation instantly.' },
      { title: 'Visit the Salon', desc: 'Stylist has all booking details ready. Service is delivered as scheduled with no wait time.' },
      { title: 'Pay & Earn Points', desc: 'Customer pays at checkout via app or POS, earns loyalty points, and is invited to leave a review.' },
    ],
    deliverables: ['Customer Booking App (iOS & Android)', 'Stylist & Staff App', 'Salon Admin & POS Dashboard', 'Loyalty Points & Membership Management', 'Customer Feedback & Review System', 'Full Source Code & Documentation'],
  },
  {
    id: 'home-services',
    tag: 'ON-DEMAND',
    accentColor: '#059669',
    title: 'Home Services Marketplace',
    description: 'On-demand plumbing, cleaning, electrical, and repair services with provider management and ratings.',
    longDescription: 'An Urban Company-style marketplace for on-demand home services. Customers book verified professionals for cleaning, plumbing, electrical, pest control, and more — while service providers manage their availability, earnings, and job history from a dedicated app.',
    features: ['Multi-category Service Booking', 'Provider Verification & Background Checks', 'Real-time Provider Tracking & ETA', 'Slot-based Appointment Scheduling', 'Two-way Rating & Review System', 'Provider Earnings Dashboard & Payouts'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80',
    ],
    faqs: [
      { question: 'How many service categories can be listed?', answer: 'Unlimited categories and sub-categories can be configured, each with their own pricing, providers, and booking rules.' },
      { question: 'Can prices be set per hour or per job?', answer: 'Both models are supported. Fixed packages and hourly rates can run side by side.' },
      { question: 'How do providers receive payments?', answer: 'Providers receive weekly automated payouts to their bank account after platform commission is deducted.' },
    ],
    techStack: ['Flutter', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Razorpay', 'Firebase'],
    stats: [{ value: 'Multi', label: 'Service Categories' }, { value: 'Live', label: 'Provider Tracking' }, { value: 'Auto', label: 'Weekly Payouts' }],
    useCases: [
      { icon: 'startup', title: 'Service Marketplaces', desc: 'Launch a hyperlocal home services brand with all tech and operations tools included.' },
      { icon: 'enterprise', title: 'Facility Managers', desc: 'Manage scheduled maintenance contracts for residential communities or offices.' },
      { icon: 'agency', title: 'Service Franchises', desc: 'Digitize a franchise home services brand with central and franchisee portals.' },
    ],
    userFlow: [
      { title: 'Select a Service', desc: 'Customer picks from categories like cleaning, plumbing, or electrical, and chooses a service package.' },
      { title: 'Choose Provider & Slot', desc: 'Browse available verified providers with ratings and select a convenient date and time slot.' },
      { title: 'Provider Arrives', desc: 'Provider navigates to the customer location via the app. Customer tracks their arrival in real-time.' },
      { title: 'Job Complete & Review', desc: 'Customer reviews the completed work, makes payment in-app or by cash, and rates the provider.' },
    ],
    deliverables: ['Customer App (iOS & Android)', 'Service Provider App', 'Admin & Provider Management Dashboard', 'Booking & Scheduling Engine', 'Provider Payout & Earnings Management', 'Full Source Code & Documentation'],
  },
  {
    id: 'logistics-platform',
    tag: 'LOGISTICS',
    accentColor: '#64748b',
    title: 'Logistics & Fleet Management',
    description: 'Vehicle tracking, route optimization, delivery management, driver app, and notifications.',
    longDescription: 'Scale your logistics operations with our intelligent fleet management platform. Track every vehicle in real-time, optimize delivery routes, manage drivers and job assignments, and keep customers updated with automated delivery notifications.',
    features: ['Real-time Vehicle Tracking (GPS)', 'Route Optimization Engine', 'Driver Mobile App', 'Delivery Job Assignment', 'Customer Notification System', 'Fuel & Maintenance Logs'],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1519003300449-424ad0405076?w=800&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80',
    ],
    faqs: [
      { question: 'What GPS devices are compatible?', answer: 'It works with most standard GPS trackers via API integration, as well as mobile GPS through the driver app.' },
      { question: 'Can customers track their delivery?', answer: 'Yes, customers receive a live tracking link via SMS/WhatsApp to monitor their delivery in real-time.' },
      { question: 'Does it support cash-on-delivery management?', answer: 'Yes, COD collection tracking, reconciliation, and driver cash-flow management are all included.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Flutter (Driver App)', 'Google Maps API', 'Firebase'],
    stats: [{ value: 'Live', label: 'GPS Tracking' }, { value: 'Route', label: 'Optimization' }, { value: 'COD', label: 'Management' }],
    useCases: [
      { icon: 'startup', title: 'Courier Startups', desc: 'Launch last-mile delivery operations with complete tech infrastructure.' },
      { icon: 'enterprise', title: 'Enterprises', desc: 'Optimize delivery costs and SLA compliance across large fleets.' },
      { icon: 'agency', title: 'E-Commerce', desc: 'Build your own delivery arm instead of relying on third-party couriers.' },
    ],
    userFlow: [
      { title: 'Create Shipment', desc: 'Operations team adds pickup details, package info, and assigns to a driver or lets the system auto-assign by zone.' },
      { title: 'Driver Picks Up', desc: 'Driver app shows job details, navigates to the pickup location, and marks the shipment as collected.' },
      { title: 'In Transit', desc: 'Shipment is tracked live on the admin dashboard, and the customer receives a tracking link via SMS.' },
      { title: 'Delivered & Confirmed', desc: 'Driver marks delivery complete with proof-of-delivery photo. The system closes the job and updates reports.' },
    ],
    deliverables: ['Web Operations Dashboard', 'Driver Mobile App (iOS & Android)', 'Customer Shipment Tracking Portal', 'Vehicle & Fleet Management Module', 'COD Reconciliation & Reporting Tools', 'Full Source Code & Documentation'],
  },
  {
    id: 'social-community',
    tag: 'COMMUNITY',
    accentColor: '#7c3aed',
    title: 'Social Community App',
    description: 'Niche community platform with posts, groups, live rooms, events, and creator monetization.',
    longDescription: 'Build a dedicated social community for any niche — professionals, fans, hobbyists, or students. Members post content, join interest groups, participate in live rooms, attend events, and creators monetize through subscriptions and tips.',
    features: ['News Feed with Posts, Media & Reactions', 'Interest-based Groups & Subgroups', 'Live Audio & Video Rooms', 'Event Creation & RSVP Management', 'Creator Subscription & Tipping System', 'Content Moderation & Reporting Tools'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      'https://images.unsplash.com/photo-1543269664-647163e1dcf4?w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    ],
    faqs: [
      { question: 'Can it be white-labeled with our branding?', answer: 'Yes, complete white-labeling is available — custom domain, app name, colors, logo, and onboarding flow.' },
      { question: 'How is harmful content moderated?', answer: 'Automated keyword/image filters combined with a human moderator dashboard keeps the community safe.' },
      { question: 'Is direct messaging between members supported?', answer: 'Yes, one-to-one and group direct messaging with media sharing is included.' },
    ],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'Firebase', 'AWS S3'],
    stats: [{ value: 'Live', label: 'Audio/Video Rooms' }, { value: 'Creator', label: 'Monetization' }, { value: 'White', label: 'Label Ready' }],
    useCases: [
      { icon: 'startup', title: 'Niche Communities', desc: 'Launch a private social network for a specific profession, hobby, or interest group.' },
      { icon: 'enterprise', title: 'Media Brands', desc: 'Turn your audience into an engaged community with creator tools and monetization.' },
      { icon: 'agency', title: 'Education Platforms', desc: 'Add a student community layer to your LMS for peer learning and discussions.' },
    ],
    userFlow: [
      { title: 'Create a Profile', desc: 'Users sign up, fill out their profile, and select interest topics to personalize their content feed.' },
      { title: 'Join Groups & Follow Creators', desc: 'Discover and join niche groups, follow creators, and engage with content relevant to their interests.' },
      { title: 'Contribute & Engage', desc: 'Post content, comment, react, and join live audio/video rooms for real-time community conversations.' },
      { title: 'Monetize (Creators)', desc: 'Creators offer paid subscriptions, sell digital products, and receive tips directly from their audience.' },
    ],
    deliverables: ['Social Platform Web App', 'Member Mobile App (iOS & Android)', 'Creator Monetization Dashboard', 'Admin & Moderation Panel', 'Content Feed & Group Management Engine', 'Full Source Code & Documentation'],
  },
  {
    id: 'news-media',
    tag: 'MEDIA',
    accentColor: '#b45309',
    title: 'News & Media Portal',
    description: 'Multi-editor news platform with CMS, push notifications, ads management, and analytics dashboard.',
    longDescription: 'A professional news publishing platform built for digital media houses. Multi-editor CMS with article scheduling, category management, breaking news push notifications, ad slot management, and reader analytics — everything a modern news organization needs to publish, monetize, and grow.',
    features: ['Multi-editor CMS with Role-based Access', 'Article Scheduling & Category Management', 'Breaking News Push Notifications', 'Ad Slot & Campaign Management', 'Paywall & Subscription System', 'Reader Analytics & Content Performance'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    ],
    faqs: [
      { question: 'Can reporters submit drafts for editor approval?', answer: 'Yes, a full editorial workflow supports draft submission, editor review, revision requests, and publish approval.' },
      { question: 'Is AMP supported for Google News?', answer: 'Yes, AMP is automatically generated for all articles to improve mobile load speed and Google News indexing.' },
      { question: 'Can I monetize with both ads and subscriptions?', answer: 'Yes, a hybrid model lets you show ads to free readers while premium content sits behind a paywall.' },
    ],
    techStack: ['Next.js', 'Sanity CMS', 'Node.js', 'PostgreSQL', 'Firebase', 'Google Ad Manager'],
    stats: [{ value: 'AMP', label: 'Enabled Articles' }, { value: 'Push', label: 'Notifications' }, { value: 'Paywall', label: 'Supported' }],
    useCases: [
      { icon: 'startup', title: 'Digital News Outlets', desc: 'Launch a fully professional news portal with multi-editor workflows from day one.' },
      { icon: 'enterprise', title: 'Media Houses', desc: 'Migrate from legacy CMS to a modern platform with ad revenue and subscription monetization.' },
      { icon: 'agency', title: 'Hyperlocal News', desc: 'Run city or niche news platforms with push notifications and ad revenue.' },
    ],
    userFlow: [
      { title: 'Reporter Writes Article', desc: 'Journalist drafts the article, adds images and videos, tags categories, and submits for editorial review.' },
      { title: 'Editor Reviews & Publishes', desc: 'Editor reviews the draft, requests revisions or approves, and schedules for immediate or future publication.' },
      { title: 'Readers Are Notified', desc: 'Published articles trigger push notifications to relevant subscriber segments based on their topic preferences.' },
      { title: 'Engagement & Analytics', desc: 'Editors review page views, read time, scroll depth, and social shares per article to guide future content.' },
    ],
    deliverables: ['News Web Portal (Next.js + AMP)', 'iOS & Android Reader App', 'Multi-editor CMS Dashboard', 'Push Notification System', 'Ad Management & Paywall Module', 'Full Source Code & Documentation'],
  },
  {
    id: 'laundry-app',
    tag: 'ON-DEMAND',
    accentColor: '#6366f1',
    title: 'On-Demand Laundry App',
    description: 'Pickup & delivery scheduling, order tracking, pricing management, and customer loyalty rewards.',
    longDescription: 'Launch your on-demand laundry business with our complete platform. Customers schedule pickups, track their laundry in real-time, and get doorstep delivery — while you manage orders, delivery agents, pricing, and customer retention from the admin panel.',
    features: ['Pickup & Delivery Scheduling', 'Real-time Order Tracking', 'Dynamic Pricing per Garment & Service', 'Delivery Agent App', 'Loyalty Rewards & Subscription Plans', 'Multi-zone Service Area Management'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80',
    ],
    faqs: [
      { question: 'How many apps are included?', answer: 'Three apps: Customer App, Delivery Agent App, and Admin Dashboard with full order management.' },
      { question: 'Can I set different prices for different services?', answer: 'Yes, pricing can be configured per garment type, service type (wash/iron/dry clean), and urgency level.' },
      { question: 'Is subscription service supported?', answer: 'Yes, weekly/monthly subscription plans with discounted pricing can be offered to regular customers.' },
    ],
    techStack: ['Flutter (2 Apps)', 'Node.js', 'MongoDB', 'Google Maps API', 'Razorpay', 'Firebase'],
    stats: [{ value: '3', label: 'Apps Included' }, { value: 'Live', label: 'Order Tracking' }, { value: 'Auto', label: 'Subscriptions' }],
    useCases: [
      { icon: 'startup', title: 'Laundry Startups', desc: 'Launch a complete on-demand laundry brand with every tech tool included.' },
      { icon: 'enterprise', title: 'Hotel Groups', desc: 'Add guest laundry service with pickup and tracking capabilities.' },
      { icon: 'agency', title: 'Service Aggregators', desc: 'Build a multi-vendor laundry marketplace across cities.' },
    ],
    userFlow: [
      { title: 'Schedule a Pickup', desc: 'Customer selects services (wash, iron, dry clean), chooses a pickup time slot, and confirms the order.' },
      { title: 'Clothes Collected', desc: 'Delivery agent picks up the laundry bag, scans it into the system, and drops it at the facility.' },
      { title: 'Processing at Facility', desc: 'Clothes are washed, dried, and packed. Customer gets status updates as each stage is completed.' },
      { title: 'Delivered to Door', desc: 'Clean clothes are delivered in the chosen time slot. Customer pays and rates the experience.' },
    ],
    deliverables: ['Customer App (iOS & Android)', 'Delivery Agent App', 'Facility Operations Dashboard', 'Order Tracking & Status Management', 'Subscription & Loyalty Management Module', 'Full Source Code & Documentation'],
  },

  // ── AI Image Generation ──────────────────────────────────────────────────
  {
    id: 'ai-image-generation',
    tag: 'AI IMAGE SUITE',
    accentColor: '#a855f7',
    title: 'AI Image Generation & Transformation Suite',
    description: 'Generate high-quality, on-brand images from text prompts with custom LoRA model fine-tuning.',
    longDescription: 'Your marketing and design teams spend thousands on photoshoots for content that needs refreshing every week. Our AI Image Suite ends that. Generate professional product photos, lifestyle imagery, and ad creatives from text prompts in seconds — in your exact brand style, featuring your actual products via LoRA fine-tuning. Process thousands of images in bulk for background removal, quality upscaling, and brand filter application — all via API.',
    features: ['Text-to-Image Generation (DALL-E 3 / SDXL)', 'Custom LoRA Fine-tuning on Your Products', 'Bulk Background Removal (99.2% accuracy)', 'Brand Style Transfer & Lock', '4× High-Resolution Upscaling', 'REST API + Python & Node.js SDKs'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80',
    ],
    faqs: [
      { question: 'Can I train the AI on my specific products?', answer: 'Yes. LoRA fine-tuning trains the model on 20–50 photos of your physical products so it generates images featuring your actual products in any setting.' },
      { question: 'Who owns the copyright of generated images?', answer: 'You do. All images generated through your licensed instance belong entirely to your brand for commercial use without restriction.' },
      { question: 'Is there a bulk processing API?', answer: 'Yes. Every feature — generation, background removal, upscaling, style transfer — is available as a REST API endpoint with Python and Node.js SDKs.' },
    ],
    techStack: ['Python (FastAPI)', 'Stable Diffusion XL', 'DALL-E 3', 'PyTorch', 'AWS EC2 (GPU)', 'Next.js'],
    stats: [{ value: '4×', label: 'Image upscaling quality' }, { value: '99.2%', label: 'BG removal accuracy' }, { value: 'LoRA', label: 'Custom product training' }],
    useCases: [
      { icon: 'startup', title: 'E-Commerce Brands', desc: 'Generate professional product photos and lifestyle shots at a fraction of photoshoot costs.' },
      { icon: 'enterprise', title: 'Marketing Teams', desc: 'Create 20 ad creative variants in the time it used to take to brief one designer.' },
      { icon: 'agency', title: 'Creative Agencies', desc: 'Offer AI-powered visual creation as a managed service and process entire client catalogues in bulk.' },
    ],
    userFlow: [
      { title: 'Configure Brand Style', desc: 'Define your colour palette, composition rules, and visual tone. Provide 20–30 reference images.' },
      { title: 'LoRA Fine-Tuning', desc: 'Upload 20–50 product photos. The AI trains a custom model that places your actual products in any scene.' },
      { title: 'Generate & Transform', desc: 'Type a text prompt or upload a batch CSV. Images generate in seconds at 4K resolution.' },
      { title: 'Download or Push via API', desc: 'Download images directly or integrate the REST API into your e-commerce platform or CMS workflow.' },
    ],
    deliverables: ['Private AI Image Studio Web App', 'Brand Style Engine (Configured)', 'Custom LoRA Model (Trained on Your Products)', 'Bulk Processing Pipeline (BG Removal + Upscaling)', 'REST API + Python & Node.js SDKs', 'Full Source Code & Documentation'],
  },

  // ── AI Image Enhancer ────────────────────────────────────────────────────
  {
    id: 'ai-image-enhancer',
    tag: 'IMAGE TOOLS',
    accentColor: '#7c3aed',
    title: 'AI Image Enhancer & Editor',
    description: 'Upscale low-res images, bulk remove backgrounds, and apply automated brand style transfers.',
    longDescription: 'Rescue old product photos, batch-process thousands of catalogue images overnight, and deliver print-quality assets without a single manual edit. Our AI Image Enhancer runs entirely via API — upload a CSV of image URLs, configure your output settings, and receive processed images in hours. Ideal for e-commerce catalogues, marketing teams, and agencies managing high-volume visual content.',
    features: ['4× AI Super-Resolution Upscaling', 'Bulk Background Removal & Replacement', 'Brand Style Transfer (One-click)', 'Image Quality Restoration & Denoising', 'Batch Processing via CSV or API', 'Output Formatting for All Platforms (Instagram, Amazon, Print)'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80',
    ],
    faqs: [
      { question: 'How many images can be processed in a batch?', answer: 'Background removal processes 300–500 images per hour per GPU. A batch of 10,000 images typically completes in 20–35 hours.' },
      { question: 'Does it work on complex edges like jewellery or hair?', answer: 'Yes. Our model handles fine jewellery, hair, fur, and transparent objects significantly better than older matting approaches.' },
      { question: 'Can it resize images for different platforms?', answer: 'Yes. Output profiles for Instagram, Amazon, Flipkart, print, and custom dimensions are all configurable from the dashboard.' },
    ],
    techStack: ['Python (FastAPI)', 'Real-ESRGAN (Upscaling)', 'REMBG (BG Removal)', 'PyTorch', 'Celery (Queue)', 'AWS S3'],
    stats: [{ value: '10K+', label: 'Images per batch' }, { value: '99.2%', label: 'BG removal accuracy' }, { value: '4×', label: 'Upscaling quality' }],
    useCases: [
      { icon: 'startup', title: 'E-Commerce Sellers', desc: 'Clean up your entire product catalogue overnight — white backgrounds, consistent sizing, print quality.' },
      { icon: 'enterprise', title: 'Catalogue Managers', desc: 'Process 10,000+ SKU images in bulk via API and push directly to your PIM or CMS.' },
      { icon: 'agency', title: 'Design Agencies', desc: 'Offer bulk image enhancement as a managed retainer service to clients.' },
    ],
    userFlow: [
      { title: 'Upload or Connect', desc: 'Upload images directly, share a CSV of image URLs, or connect via API to your product management system.' },
      { title: 'Choose Operations', desc: 'Select which enhancements to apply — upscale, background removal, style transfer, format conversion.' },
      { title: 'Batch Process', desc: 'The pipeline processes all images in the queue. A progress dashboard shows completion status in real time.' },
      { title: 'Download or Push', desc: 'Download the processed ZIP or let the API push images directly to your S3 bucket, Shopify, or CDN.' },
    ],
    deliverables: ['Web Processing Dashboard', 'Batch Processing Pipeline', 'Background Removal Engine', '4× Upscaling Module', 'REST API + SDKs', 'Full Source Code & Documentation'],
  },

  // ── AI Chatbot ───────────────────────────────────────────────────────────
  {
    id: 'ai-chatbot',
    tag: 'AI CHATBOT',
    accentColor: '#3b82f6',
    title: 'AI Chatbot & Lead Generator',
    description: 'Smart WhatsApp & Web chatbot trained on your data to answer queries, capture leads, and sync with CRM.',
    longDescription: 'Your customers ask the same 50 questions 1,000 times a month. Our AI Chatbot ends that permanently. Trained on your company\'s documents, FAQs, and product pages, it answers accurately, captures leads with qualifying questions, and hands off complex cases to human agents with full context. Deploy on your website, WhatsApp, and Instagram DM from one unified dashboard.',
    features: ['RAG-Powered Knowledge Base Training', 'Lead Capture & CRM Qualification', 'Human-Agent Handoff with Context', '90+ Language Auto-Detection', 'Web Widget + WhatsApp + Instagram DM', 'Analytics: Resolution Rate, CSAT, Lead Conversion'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
    ],
    faqs: [
      { question: 'Can I train it on my own documents and website?', answer: 'Yes. Provide PDFs, Word docs, website URLs, and product catalogues. The bot answers strictly from this content — it never makes up information.' },
      { question: 'Does it integrate with my CRM?', answer: 'Yes. HubSpot, Salesforce, Zoho CRM, Freshdesk, and Intercom integrations are built in. Custom webhook integrations are also supported.' },
      { question: 'How does the human handoff work?', answer: 'You configure triggers (sentiment, explicit request, failed attempts). When triggered, the full conversation and AI summary transfer to your live agent instantly.' },
    ],
    techStack: ['LangChain', 'OpenAI GPT-4o', 'Pinecone (Vector DB)', 'Node.js', 'WhatsApp Cloud API', 'PostgreSQL'],
    stats: [{ value: '80%', label: 'Queries resolved without human' }, { value: '<500ms', label: 'Response time' }, { value: '90+', label: 'Languages supported' }],
    useCases: [
      { icon: 'startup', title: 'E-Commerce & D2C', desc: 'Answer product questions, check order status, recover abandoned carts — 24/7 without extra staff.' },
      { icon: 'enterprise', title: 'SaaS Companies', desc: 'Deflect repetitive support, qualify inbound leads, and provide in-app onboarding assistance.' },
      { icon: 'agency', title: 'Service Businesses', desc: 'Book appointments, collect intake information, and send follow-up reminders automatically.' },
    ],
    userFlow: [
      { title: 'Knowledge Base Ingestion', desc: 'Share your FAQs, docs, and website URLs. We embed everything into a private vector database in 2–3 days.' },
      { title: 'Conversation Flow Design', desc: 'We design greetings, lead capture flows, escalation triggers, and handoff rules for your business.' },
      { title: 'Deploy on All Channels', desc: 'One JS snippet on your site, WhatsApp Business API connected, Instagram DM linked — all in one dashboard.' },
      { title: 'Monitor & Improve', desc: 'Review conversation logs weekly. We update the knowledge base to improve accuracy over the first 30 days.' },
    ],
    deliverables: ['Embeddable Web Chat Widget', 'WhatsApp Business API Integration', 'Instagram DM Integration', 'Admin Analytics Dashboard', 'CRM & Helpdesk Integration', 'Full Source Code & Documentation'],
  },

  // ── Job Seeker Platform ──────────────────────────────────────────────────
  {
    id: 'job-seeker',
    tag: 'AI JOB PLATFORM',
    accentColor: '#6366f1',
    title: 'AI Job Seeker & Recruitment Platform',
    description: 'Smart job portal with semantic matching, AI resume builder, and an advanced employer ATS.',
    longDescription: 'The job market is more competitive than ever but most job portals are stuck in 2010. Our platform gives candidates an AI that rewrites their resume to match any job description, a voice-based interview coach, and a matching engine that surfaces only the roles they qualify for. Employers get an ATS with AI resume scoring, structured interview scheduling, and hiring analytics — all in one platform.',
    features: ['AI Resume Builder & JD Optimiser', 'Semantic Job Matching Engine', 'AI Mock Interview Coach (Voice & Text)', 'Employer ATS with Resume Scoring', 'Skill Gap Analysis & Upskilling', 'Application Tracker & Status Hub'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    ],
    faqs: [
      { question: 'Can the AI really optimise a resume to pass ATS systems?', answer: 'Yes. When the job seeker pastes a JD, the AI rewrites their resume using the exact keywords — AI-optimised resumes had 3× more callbacks in testing.' },
      { question: 'How does job matching work?', answer: 'Semantic matching converts both the candidate profile and job descriptions into vector embeddings ranked by cosine similarity — meaning "built Python pipelines" matches "data engineering experience."' },
      { question: 'Can employers manage their own hiring pipeline?', answer: 'Yes. Employers get a self-service ATS with AI resume scoring, Google Calendar interview sync, and automated rejection/follow-up sequences.' },
    ],
    techStack: ['Next.js', 'Python (FastAPI)', 'OpenAI GPT-4o', 'Elasticsearch', 'PostgreSQL', 'React Native'],
    stats: [{ value: '3×', label: 'More callbacks with AI resume' }, { value: '60%', label: 'Faster time-to-hire' }, { value: '2-sided', label: 'Seeker + Employer marketplace' }],
    useCases: [
      { icon: 'startup', title: 'Niche Job Boards', desc: 'Launch a focused job board for a specific industry with AI matching that serves both specialised candidates and employers.' },
      { icon: 'enterprise', title: 'Recruitment Agencies', desc: 'Give recruiters an ATS that auto-screens and ranks resumes, cutting time-to-hire by 60%.' },
      { icon: 'agency', title: 'Universities & Placement Cells', desc: 'Connect students with recruiters, track placement status, and prepare every student with AI resume and interview tools.' },
    ],
    userFlow: [
      { title: 'Profile & Resume Setup', desc: 'Job seeker creates a profile. AI generates an optimised resume from their work history description.' },
      { title: 'Smart Job Discovery', desc: 'The matching engine shows jobs ranked by fit score with explanation of why each role was recommended.' },
      { title: 'Practice Interviews', desc: 'AI coach asks role-specific questions and gives instant feedback on content, clarity, and confidence.' },
      { title: 'Apply & Track', desc: 'One-click apply with AI-optimised resume. Track all applications and interview stages from a single dashboard.' },
    ],
    deliverables: ['Job Seeker Web Portal & Mobile App', 'Employer / Recruiter ATS Dashboard', 'AI Resume Builder & JD-Optimisation Engine', 'AI Mock Interview Coach', 'Smart Matching & Skill Gap Engine', 'Full Source Code & Documentation'],
  },

  // ── Astrology Platform ───────────────────────────────────────────────────
  {
    id: 'astrology-platform',
    tag: 'ASTROTECH',
    accentColor: '#7c3aed',
    title: 'Astrology & Consultation App',
    description: 'Live astrologer consultations, daily horoscopes, kundli generation, and in-app wallet calling.',
    longDescription: 'Build your own Astrotalk or AstroSage. Our Astrology Platform connects users with verified astrologers for live voice, video, and chat consultations — powered by a coin/wallet system. Users get personalised daily horoscopes, kundli generation, and compatibility reports. Astrologers manage their availability, earnings, and reviews from a dedicated dashboard. Built to scale from 50 to 50,000 concurrent sessions.',
    features: ['Live Voice, Video & Chat Consultations', 'Kundli Generation & Birth Chart Engine', 'Daily Horoscope & Personalised Feed', 'In-App Wallet & Coin Recharge System', 'Astrologer Verification & Onboarding', 'Earnings Dashboard & Automated Payouts'],
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
      'https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=800&q=80',
      'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80',
    ],
    faqs: [
      { question: 'How does the wallet/coin system work?', answer: 'Users recharge their wallet with coins (₹1 = 1 coin typically). Consultations deduct coins per minute. Astrologers earn a share of each session automatically.' },
      { question: 'How are astrologers verified?', answer: 'Astrologers go through document verification, skill assessment, and a profile review before going live. Admin can approve/reject/suspend from the dashboard.' },
      { question: 'Can we add free first-consultation offers?', answer: 'Yes. Promo mechanics like "first 5 minutes free," referral coins, and daily login bonuses are all configurable from the admin panel.' },
    ],
    techStack: ['Flutter (iOS & Android)', 'Node.js', 'WebRTC (Agora)', 'Firebase', 'Razorpay', 'PostgreSQL'],
    stats: [{ value: 'Live', label: 'Voice, Video & Chat' }, { value: 'Wallet', label: 'Coin System' }, { value: 'Auto', label: 'Astrologer Payouts' }],
    useCases: [
      { icon: 'startup', title: 'Astrology Startups', desc: 'Launch your own branded Astrotalk-style platform with all tech built and ready.' },
      { icon: 'enterprise', title: 'Media & Content Brands', desc: 'Monetise your astrology audience with live consultation features beyond daily horoscope content.' },
      { icon: 'agency', title: 'Astrologer Networks', desc: 'Give your network of astrologers a professional platform to grow their client base and earnings.' },
    ],
    userFlow: [
      { title: 'Register & Enter Birth Details', desc: 'User signs up, enters name, birth date, time, and place for personalised horoscope and kundli generation.' },
      { title: 'Recharge Wallet & Browse', desc: 'Add coins to wallet, browse astrologer profiles by speciality, language, rating, and per-minute rate.' },
      { title: 'Start a Live Consultation', desc: 'Tap to start a voice/video/chat session. Coins are deducted per minute and shown in real time.' },
      { title: 'Review & Revisit', desc: 'Rate the astrologer, save the session notes, and book follow-up sessions directly from the app.' },
    ],
    deliverables: ['User App (iOS & Android)', 'Astrologer App & Earnings Dashboard', 'Admin Panel with Verification & Analytics', 'Kundli Engine & Horoscope Module', 'Wallet & Payout Management System', 'Full Source Code & Documentation'],
  },

  // ── Universal Booking Engine ─────────────────────────────────────────────
  {
    id: 'booking-engine',
    tag: 'BOOKING SUITE',
    accentColor: '#0891b2',
    title: 'Universal Booking & Appointments',
    description: 'Versatile booking engine for salons, consultants, and clinics with calendar sync and POS billing.',
    longDescription: 'One booking platform that works for any service business — salons, clinics, tutors, consultants, gyms, or spas. Customers book slots online 24/7, receive automated reminders, and pay in advance. Service providers manage their calendar, staff schedules, and billing from one admin panel. Syncs with Google Calendar and eliminates double-bookings completely.',
    features: ['Multi-service Slot Management', 'Google & Outlook Calendar Sync', 'POS Billing & Invoice Generation', 'Staff Schedule & Availability Management', 'Automated SMS/WhatsApp Reminders', 'Loyalty Points & Membership Plans'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138daaa0e9f9?w=800&q=80',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
    ],
    faqs: [
      { question: 'Can multiple staff members have separate booking calendars?', answer: 'Yes. Each staff member gets their own schedule and availability. Customers can choose a specific provider or accept "first available."' },
      { question: 'Does it support advance payment or deposits?', answer: 'Yes. You can require full prepayment, a deposit percentage, or offer pay-at-venue — configurable per service type.' },
      { question: 'Can it be customised for a medical clinic?', answer: 'Yes. The platform is configurable for any service type — clinic appointments, tutor sessions, legal consultations, and more.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Google Calendar API', 'Razorpay', 'Firebase'],
    stats: [{ value: '24/7', label: 'Online Booking' }, { value: 'Zero', label: 'Double Bookings' }, { value: 'Auto', label: 'Reminders' }],
    useCases: [
      { icon: 'startup', title: 'Salons & Spas', desc: 'Replace phone bookings. Let customers self-book, choose their stylist, and pay in advance.' },
      { icon: 'enterprise', title: 'Clinics & Hospitals', desc: 'Manage doctor availability, patient appointments, and teleconsultation slots from one panel.' },
      { icon: 'agency', title: 'Consultants & Tutors', desc: 'Share a booking link, set your available hours, and let clients schedule sessions without back-and-forth.' },
    ],
    userFlow: [
      { title: 'Select Service & Provider', desc: 'Customer browses services, picks a staff member, and sees real-time available slots.' },
      { title: 'Book & Pay', desc: 'Choose a time slot, enter details, and pay online or select pay-at-venue. Confirmation sent instantly.' },
      { title: 'Automated Reminders', desc: 'WhatsApp and SMS reminders fire 24 hours and 1 hour before the appointment automatically.' },
      { title: 'Attend & Feedback', desc: 'Service is delivered. Customer gets a digital invoice and is invited to leave a rating.' },
    ],
    deliverables: ['Customer Booking Web Portal & App (iOS & Android)', 'Staff & Admin Management Dashboard', 'POS Billing & Invoice Module', 'Google Calendar Sync Integration', 'Loyalty & Membership Management', 'Full Source Code & Documentation'],
  },

  // ── Food Delivery ────────────────────────────────────────────────────────
  {
    id: 'food-delivery',
    tag: 'FOOD DELIVERY',
    accentColor: '#ef4444',
    title: 'Food Delivery Platform',
    description: 'End-to-end food delivery with AI routing, restaurant portal, live tracking, and multi-payment support.',
    longDescription: 'Build your own Swiggy or Zomato for your city, food niche, or restaurant chain. A complete three-sided marketplace — customer app with personalised AI food recommendations, a restaurant portal for order management, and a rider app with AI-optimised delivery routes. Everything connected in real time so customers see exact ETAs and riders get dynamic routing that avoids traffic.',
    features: ['Customer Ordering App (iOS & Android)', 'Restaurant Management Portal', 'Rider Delivery App with AI Routing', 'Live GPS Order Tracking', 'Personalised Menu Recommendations', 'Multi-payment: UPI, COD, Wallet, Stripe'],
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      'https://images.unsplash.com/photo-1617347454431-f49cd7e4c1f6?w=800&q=80',
    ],
    faqs: [
      { question: 'Are the restaurant and rider apps included?', answer: 'Yes. The full suite includes Customer App, Restaurant Portal (Web), and Rider App — all branded under your identity.' },
      { question: 'Does it support multiple cities?', answer: 'Yes. Multi-city with separate delivery zones, restaurant catalogues, pricing rules, and rider pools per city is supported.' },
      { question: 'Can restaurant chains own their delivery instead of using Swiggy?', answer: 'Yes. This is one of the primary use cases — own your delivery channel and save the 25–35% aggregator commission.' },
    ],
    techStack: ['Flutter (3 Apps)', 'Node.js', 'MongoDB', 'Google Maps API', 'Redis', 'Razorpay'],
    stats: [{ value: '4 Apps', label: 'Customer, Restaurant, Rider, Admin' }, { value: '22%', label: 'Faster delivery via AI routing' }, { value: 'Multi-city', label: 'Support built-in' }],
    useCases: [
      { icon: 'startup', title: 'Cloud Kitchens', desc: 'Launch delivery from multiple kitchen brands under one app without paying aggregator commissions.' },
      { icon: 'enterprise', title: 'Restaurant Chains', desc: 'Own your delivery channel, collect customer data, and run loyalty programmes aggregators block.' },
      { icon: 'agency', title: 'City-Level Aggregators', desc: 'Launch a Swiggy-style aggregator for your city, cuisine niche, or premium restaurant segment.' },
    ],
    userFlow: [
      { title: 'Browse & Order', desc: 'Customer opens the app, browses menus with personalised recommendations, and places an order.' },
      { title: 'Restaurant Confirms', desc: 'Restaurant app receives the order with an alert, confirms it, and sets the preparation time.' },
      { title: 'Rider Picks Up', desc: 'An available rider is auto-assigned via the routing engine and picks up the packed order.' },
      { title: 'Delivered to Door', desc: 'Customer tracks the rider live on the map and receives the order with a digital receipt.' },
    ],
    deliverables: ['Customer Ordering App (iOS & Android)', 'Restaurant Management App & Web Portal', 'Rider Delivery App (iOS & Android)', 'Super Admin Dashboard', 'AI Routing & Recommendation Engines', 'Full Source Code & Documentation'],
  },

  // ── Single-Vendor Grocery ────────────────────────────────────────────────
  {
    id: 'grocery-single-vendor',
    tag: 'GROCERY STORE',
    accentColor: '#16a34a',
    title: 'Single-Vendor Grocery Store App',
    description: 'Dedicated supermarket app with inventory management, slot booking, and home delivery tracking.',
    longDescription: 'Give your supermarket or grocery store a complete online presence. Customers browse your full catalogue, add items to cart, choose a delivery slot, and track delivery in real time. Your team manages inventory levels, processes orders, and handles delivery from the admin panel — eliminating stockouts, reducing manual calls, and growing repeat orders through loyalty points.',
    features: ['Real-time Inventory Sync & Alerts', 'Home Delivery Slot Booking', 'Live Order Tracking', 'Barcode Scanning for Stock Management', 'Loyalty Points & Coupons', 'Weekly Subscription Baskets'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800&q=80',
      'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=800&q=80',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80',
    ],
    faqs: [
      { question: 'Can customers subscribe to a weekly grocery basket?', answer: 'Yes. Customers can create recurring baskets with weekly or monthly auto-ordering at a discounted rate.' },
      { question: 'Does it support multiple store locations?', answer: 'Yes. Multi-store inventory with location-based stock visibility and order routing is built in.' },
      { question: 'How are low-stock items handled?', answer: 'Automated alerts notify your team when items fall below reorder points. Out-of-stock items are hidden from customers automatically.' },
    ],
    techStack: ['React Native (App)', 'Node.js', 'MongoDB', 'Firebase', 'Google Maps', 'Razorpay'],
    stats: [{ value: 'Real-time', label: 'Inventory Sync' }, { value: 'Slot', label: 'Delivery Booking' }, { value: 'Auto', label: 'Subscriptions' }],
    useCases: [
      { icon: 'startup', title: 'Standalone Grocery Stores', desc: 'Launch an online grocery store for your neighbourhood without building tech from scratch.' },
      { icon: 'enterprise', title: 'Supermarket Chains', desc: 'Add home delivery to your existing store network with centralised inventory control.' },
      { icon: 'agency', title: 'Organic & Specialty Stores', desc: 'Sell niche products online — organic, imported, health — with a subscription basket model.' },
    ],
    userFlow: [
      { title: 'Browse & Add to Cart', desc: 'Customer browses categories, sees live stock, and adds items including weekly subscription staples.' },
      { title: 'Choose Delivery Slot', desc: 'Select a preferred delivery window from available slots in their zone.' },
      { title: 'Pay & Confirm', desc: 'Review cart, apply coupons, choose payment, and confirm the order.' },
      { title: 'Track to Door', desc: 'Receive packing and dispatch updates, then track delivery live until it arrives.' },
    ],
    deliverables: ['Customer App (iOS & Android)', 'Store Operations & Picker App', 'Admin & Inventory Dashboard', 'Slot Management Engine', 'Loyalty & Subscription Module', 'Full Source Code & Documentation'],
  },

  // ── Quick-Commerce Grocery ───────────────────────────────────────────────
  {
    id: 'grocery-multi-vendor',
    tag: 'QUICK-COMMERCE',
    accentColor: '#15803d',
    title: 'Quick-Commerce Grocery (Blinkit Clone)',
    description: 'Hyper-local multi-vendor grocery with dark store mapping, 10-min delivery ops, and live rider tracking.',
    longDescription: 'Build the Blinkit or Zepto for your city. Our Quick-Commerce platform connects customers to the nearest dark store for 10-minute delivery — with multi-vendor seller onboarding, live rider dispatch, demand forecasting to prevent stockouts, and flash sale mechanics to drive basket size. Fully configurable delivery zones, store coverage areas, and dynamic delivery pricing.',
    features: ['Multi-Vendor Seller Onboarding & Panel', 'Dark Store Operations & Zone Mapping', '10-Minute Delivery Dispatch Engine', 'Live Rider Tracking for Customers', 'Demand Forecasting & Auto-restock Alerts', 'Flash Sales & Time-limited Promotions'],
    image: 'https://images.unsplash.com/photo-1604719312566-8fa20f135b91?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
      'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800&q=80',
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80',
    ],
    faqs: [
      { question: 'How is the 10-minute delivery achieved technically?', answer: 'Riders are pre-positioned at dark stores. On order placement, the nearest available rider is dispatched immediately with the optimised route. Order is packed in parallel.' },
      { question: 'Can multiple dark stores serve overlapping zones?', answer: 'Yes. Zone mapping defines which dark store serves each pin code. Overlapping zones can have priority rules based on stock availability.' },
      { question: 'Is B2B bulk ordering supported alongside B2C?', answer: 'Yes. Separate buyer tiers can be created for B2B buyers with MOQ rules, credit terms, and wholesale pricing.' },
    ],
    techStack: ['Flutter (iOS & Android)', 'Next.js', 'MongoDB', 'Redis', 'Google Maps', 'Razorpay'],
    stats: [{ value: '10-min', label: 'Target delivery time' }, { value: 'Multi', label: 'Vendor & Dark Store' }, { value: 'Live', label: 'Rider Dispatch' }],
    useCases: [
      { icon: 'startup', title: 'Quick-Commerce Startups', desc: 'Launch a hyperlocal grocery delivery brand in your city with full dark store operations.' },
      { icon: 'enterprise', title: 'Kirana Aggregators', desc: 'Aggregate local kirana stores onto one platform and digitise last-mile delivery.' },
      { icon: 'agency', title: 'D-Mart / Big Bazaar Type Chains', desc: 'Launch a quick-delivery arm for your retail chain to compete with Blinkit and Zepto.' },
    ],
    userFlow: [
      { title: 'Open App & Browse', desc: 'Customer sees available products from the nearest dark store based on their PIN code.' },
      { title: 'Add to Cart & Pay', desc: 'Add items, apply promo codes, choose payment, and confirm order in under 60 seconds.' },
      { title: 'Dark Store Packs', desc: 'Store picker receives the order and packs items. A rider is dispatched simultaneously.' },
      { title: '10-Min Delivery', desc: 'Customer tracks the rider live. Delivery is confirmed with a photo and digital receipt.' },
    ],
    deliverables: ['Customer App (iOS & Android)', 'Seller / Dark Store Panel', 'Rider Dispatch App', 'Super Admin & Zone Management Dashboard', 'Demand Forecasting Engine', 'Full Source Code & Documentation'],
  },

  // ── Real Estate Suite ────────────────────────────────────────────────────
  {
    id: 'real-estate-suite',
    tag: 'PROPTECH',
    accentColor: '#8b5cf6',
    title: 'AI Real Estate Portal',
    description: 'Buy, sell, and rent properties. Manage leads, track deals, and generate AI pitch PPTs automatically.',
    longDescription: 'A full-stack property portal with AI-powered search, 360° virtual tours, and an agent CRM that converts more enquiries into deals. Buyers find properties through natural language search ("3BHK near metro under 80L"), explore them via virtual tours, and connect with agents. Agents manage their entire pipeline — leads, site visits, negotiations, and deal closure — from a mobile-friendly dashboard.',
    features: ['AI-Powered Natural Language Property Search', '360° Virtual Property Tours', 'Agent CRM & Lead Pipeline', 'EMI Calculator & Home Loan Integration', 'Developer Project Showcase Pages', 'AI Pitch Deck Generator for Agents'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
      'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it support both residential and commercial listings?', answer: 'Yes. Residential sale, rent, commercial, plots, and new developer projects are all supported with separate listing templates.' },
      { question: 'How does the AI pitch PPT generator work?', answer: 'Agents select a property and the AI generates a branded presentation with photos, key features, price comparison, neighbourhood data, and ROI projections in under 2 minutes.' },
      { question: 'Can developers showcase new projects?', answer: 'Yes. Developers get branded project pages with floor plan galleries, construction progress updates, RERA details, and deposit collection.' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'React Native', 'Google Maps API', 'OpenAI (PPT Generator)'],
    stats: [{ value: '360°', label: 'Virtual tours' }, { value: 'AI', label: 'Property search & PPT' }, { value: 'Agent', label: 'CRM included' }],
    useCases: [
      { icon: 'startup', title: 'PropTech Startups', desc: 'Launch a property marketplace for any city, niche, or property type in 5–8 weeks.' },
      { icon: 'enterprise', title: 'Real Estate Developers', desc: 'Showcase projects with virtual tours and manage buyer leads without third-party portals.' },
      { icon: 'agency', title: 'Brokers & Agencies', desc: 'Give your agents a professional platform to list, pitch, and close property deals faster.' },
    ],
    userFlow: [
      { title: 'Search with Natural Language', desc: 'Buyer types "spacious 3BHK near good schools under 80L" — AI returns semantically matched listings.' },
      { title: 'Virtual Tour & Shortlist', desc: 'Explore properties via 360° virtual tours and shortlist without visiting in person.' },
      { title: 'Connect & Visit', desc: 'Send an enquiry or book a site visit. Agent receives a WhatsApp notification instantly.' },
      { title: 'Agent Pitches & Closes', desc: 'Agent generates an AI pitch deck, follows up via CRM, and tracks the deal to closure.' },
    ],
    deliverables: ['Property Listing Web Portal', 'Buyer & Seller Mobile App (iOS & Android)', 'Agent CRM & Listing Dashboard', 'AI Property Search & PPT Generator', 'Virtual Tour Integration', 'Full Source Code & Documentation'],
  },

  // ── Mortgage Management ──────────────────────────────────────────────────
  {
    id: 'mortgage-management',
    tag: 'FINTECH',
    accentColor: '#0ea5e9',
    title: 'Smarter Mortgage Management',
    description: 'Streamline loan origination, EMI calculations, credit checks, and document verification workflows.',
    longDescription: 'A complete digital mortgage and loan management platform for banks, NBFCs, and mortgage brokers. Digitise the entire loan journey — from online application and AI credit scoring to document verification, underwriting workflow, disbursement tracking, and EMI management. Reduce processing time from weeks to days and eliminate paper-based bottlenecks entirely.',
    features: ['Online Loan Application & KYC', 'AI Credit Scoring & Risk Assessment', 'Document Upload & Verification Workflow', 'EMI Calculator & Loan Comparison Tool', 'Underwriting & Approval Pipeline', 'Disbursement Tracking & Repayment Management'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it integrate with CIBIL for credit checks?', answer: 'Yes. CIBIL, Experian, and CRIF High Mark bureau integrations are available for real-time credit score checks during the application.' },
      { question: 'Can brokers manage multiple lender products on one platform?', answer: 'Yes. Multi-lender product catalogues, comparison tools, and commission tracking for brokers are all included.' },
      { question: 'Is it RBI-compliant for Indian lending?', answer: 'Yes. The platform is designed for RBI KYC/CKYC guidelines, PMLA compliance, and digital lending framework requirements.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Python (ML)', 'CIBIL API', 'Razorpay'],
    stats: [{ value: 'Digital', label: 'End-to-end loan journey' }, { value: 'AI', label: 'Credit scoring' }, { value: 'RBI', label: 'Compliance ready' }],
    useCases: [
      { icon: 'startup', title: 'Mortgage Brokers', desc: 'Give customers a digital application experience and manage multiple lender products from one dashboard.' },
      { icon: 'enterprise', title: 'NBFCs & Banks', desc: 'Digitise the full loan origination to disbursement pipeline and reduce processing time from weeks to days.' },
      { icon: 'agency', title: 'Real Estate Developers', desc: 'Offer home loan facilitation to buyers directly from your property portal with integrated lender connections.' },
    ],
    userFlow: [
      { title: 'Apply Online', desc: 'Applicant fills a digital form, uploads identity and income documents, and submits the loan application.' },
      { title: 'AI Credit Scoring', desc: 'Automated credit bureau check, income analysis, and risk scoring generates a preliminary credit decision.' },
      { title: 'Underwriting Review', desc: 'Loan officer reviews the AI-scored application, requests additional documents if needed, and approves or declines.' },
      { title: 'Disbursement & Repayment', desc: 'Loan is disbursed digitally. Borrower manages EMI payments, statements, and foreclosure from the app.' },
    ],
    deliverables: ['Borrower Web Portal & Mobile App', 'Loan Officer & Underwriting Dashboard', 'AI Credit Scoring Engine', 'Document Management & Verification Module', 'EMI & Repayment Management System', 'Full Source Code & Documentation'],
  },

  // ── Banking Software ─────────────────────────────────────────────────────
  {
    id: 'banking-software',
    tag: 'BANKING PLATFORM',
    accentColor: '#14b8a6',
    title: 'Core Banking & Fintech Platform',
    description: 'Digital banking suite with AI fraud detection, real-time transaction monitoring, and multi-rail payments.',
    longDescription: 'Built for neobanks, credit unions, and fintech startups. Our banking platform delivers current and savings account management, NEFT/RTGS/UPI payment rails, AI-powered fraud detection, loan origination, and regulatory compliance reporting — on a microservices architecture that scales from 1,000 to 10 million customers without re-platforming.',
    features: ['AI Fraud Detection (85% loss reduction)', 'Real-time AML Transaction Monitoring', 'Digital Account Opening with Video KYC', 'UPI, NEFT, RTGS & IMPS Payment Rails', 'Loan Origination & EMI Servicing', 'Regulatory Compliance Reporting (RBI/SEBI)'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1593672715438-d88a70629abe?w=800&q=80',
    ],
    faqs: [
      { question: 'Is it RBI-compliant for Indian banking?', answer: 'Yes. Designed for RBI KYC/CKYC guidelines, PMLA compliance, FATF AML requirements, and NPCI integration (UPI/IMPS/NEFT).' },
      { question: 'Can it integrate with Finacle or Temenos core banking?', answer: 'Yes. Integration adapters for Finacle, Temenos T24, Oracle FLEXCUBE, and Mphasis BankWare are available.' },
      { question: 'How does the AI fraud detection work?', answer: 'An ensemble ML model scores every transaction in under 200ms across transaction patterns, device fingerprints, and behavioural biometrics.' },
    ],
    techStack: ['Java Spring Boot', 'React Native', 'PostgreSQL', 'Kafka', 'Python (ML)', 'HSM Security'],
    stats: [{ value: '85%', label: 'Fraud loss reduction' }, { value: '<200ms', label: 'Transaction monitoring' }, { value: 'PCI-DSS', label: 'Level 1 compliant' }],
    useCases: [
      { icon: 'startup', title: 'Neobanks', desc: 'Launch a fully regulated digital banking experience without legacy core banking overhead.' },
      { icon: 'enterprise', title: 'Credit Unions', desc: 'Modernise member-facing banking with digital account opening, UPI, and app-based access.' },
      { icon: 'agency', title: 'Fintech & NBFCs', desc: 'Enter lending or payments with a compliant, scalable platform. KYC, UPI, and loans built in.' },
    ],
    userFlow: [
      { title: 'Account Opening & KYC', desc: 'Customer completes a video KYC, uploads identity documents, and opens a digital account in minutes.' },
      { title: 'Fund & Transact', desc: 'Add funds via UPI/NEFT, make payments, and transfers — all monitored by the fraud engine in real time.' },
      { title: 'Apply for Loans', desc: 'Digital loan application with AI credit scoring, automated underwriting, and disbursement in days.' },
      { title: 'Compliance & Reporting', desc: 'Automated regulatory reports for RBI, SEBI, and IRDAI generated from the compliance module.' },
    ],
    deliverables: ['Customer Mobile Banking App (iOS & Android)', 'Internet Banking Web Portal', 'Operations & Compliance Admin Panel', 'AI Fraud Detection Engine', 'Payment Rails Integration (UPI/NEFT/RTGS)', 'Full Source Code & Documentation'],
  },

  // ── HRMS Software ────────────────────────────────────────────────────────
  {
    id: 'hrms-software',
    tag: 'HRMS',
    accentColor: '#f59e0b',
    title: 'HRMS & Payroll Software',
    description: 'Automate attendance, leave approvals, automated payroll processing, and employee lifecycle management.',
    longDescription: 'Replace spreadsheets and manual HR processes with a complete Human Resource Management System. From hiring and onboarding to attendance tracking, payroll processing, performance reviews, and exit management — every HR workflow is automated, documented, and accessible by the right people at the right time. Built for companies of 20 to 2,000 employees.',
    features: ['Automated Payroll Processing with Tax Calculation', 'Biometric & App-based Attendance Tracking', 'Leave & Overtime Management', 'Employee Onboarding & Exit Workflows', 'Performance Review & Goal Tracking', 'HR Analytics & Headcount Reports'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it handle Indian payroll with PF, ESI, and TDS?', answer: 'Yes. PF, ESI, TDS, professional tax, and salary components are all configurable. Payslips and Form 16 are auto-generated.' },
      { question: 'Can employees apply for leave from mobile?', answer: 'Yes. The employee self-service mobile app lets staff apply for leave, check balances, view payslips, and submit expense claims.' },
      { question: 'Does it integrate with biometric attendance systems?', answer: 'Yes. Integration with ZKTeco, Suprema, and other RFID/biometric systems is available. App-based geo-fencing is also supported.' },
    ],
    techStack: ['Vue.js', 'Laravel', 'MySQL', 'React Native', 'Razorpay', 'Firebase'],
    stats: [{ value: 'Auto', label: 'Payroll Processing' }, { value: 'Biometric', label: 'Attendance Sync' }, { value: 'PF/ESI/TDS', label: 'Compliant' }],
    useCases: [
      { icon: 'startup', title: 'Growing Companies (20–200 staff)', desc: 'Replace WhatsApp leave requests and Excel payroll sheets with a proper HR system.' },
      { icon: 'enterprise', title: 'Mid & Large Enterprises', desc: 'Manage multi-location teams, complex leave policies, and compliance across departments.' },
      { icon: 'agency', title: 'Outsourcing & Staffing Firms', desc: 'Manage hundreds of client-deployed staff with separate payroll cycles and compliance tracking.' },
    ],
    userFlow: [
      { title: 'Employee Onboarding', desc: 'HR adds new employee, completes digital joining formalities, and sets up payroll and leave entitlements.' },
      { title: 'Daily Attendance', desc: 'Staff mark attendance via biometric, app check-in, or QR code. Data syncs automatically.' },
      { title: 'Leave & Payroll Processing', desc: 'Employees apply for leave via app. Payroll runs automatically at month-end with all deductions calculated.' },
      { title: 'Reports & Reviews', desc: 'HR views headcount reports, attendance trends, payroll summaries, and manages performance cycles.' },
    ],
    deliverables: ['HR Admin Web Dashboard', 'Employee Self-Service Mobile App (iOS & Android)', 'Payroll Processing & Payslip Engine', 'Attendance & Leave Management Module', 'Performance Review System', 'Full Source Code & Documentation'],
  },

  // ── Task Management ──────────────────────────────────────────────────────
  {
    id: 'task-management',
    tag: 'PROJECT MGMT',
    accentColor: '#3b82f6',
    title: 'Task & Project Management',
    description: 'Visual Kanban boards, time tracking, team collaboration, and automated progress reporting.',
    longDescription: 'A Jira/Asana-style project management platform built for teams that want power without complexity. Create projects, assign tasks, track time, collaborate in context, and get automated progress reports — without chasing team members for updates. Configurable for software teams (sprints, bug tracking) and non-tech teams (marketing calendars, client projects).',
    features: ['Visual Kanban & List Task Boards', 'Time Tracking & Timesheet Reports', 'Sprint Planning & Backlog Management', 'Team Chat & Threaded Comments on Tasks', 'Automated Weekly Progress Reports', 'Client Portal for External Stakeholders'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    ],
    faqs: [
      { question: 'Does it support Agile sprints and backlogs?', answer: 'Yes. Sprint planning, velocity tracking, burndown charts, and backlog grooming are all included for software development teams.' },
      { question: 'Can clients view project progress without full access?', answer: 'Yes. A read-only client portal shows milestones, task statuses, and uploaded deliverables — without exposing internal discussions.' },
      { question: 'Can it replace tools like Jira, Asana, or Trello?', answer: 'Yes. It covers all core features of those tools with the added benefit of white-labeling under your brand for client delivery.' },
    ],
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'React Native', 'WebSocket'],
    stats: [{ value: 'Kanban', label: 'Visual task boards' }, { value: 'Sprint', label: 'Agile planning' }, { value: 'Client', label: 'Portal included' }],
    useCases: [
      { icon: 'startup', title: 'Software Dev Teams', desc: 'Sprint planning, bug tracking, code review tasks, and deployment milestones in one board.' },
      { icon: 'enterprise', title: 'Marketing Agencies', desc: 'Manage client campaigns, content calendars, and delivery timelines with client portal access.' },
      { icon: 'agency', title: 'SaaS & Product Companies', desc: 'Manage product roadmap, engineering backlogs, and cross-team dependencies in one place.' },
    ],
    userFlow: [
      { title: 'Create Project & Board', desc: 'Set up a Kanban or sprint board, define stages, and invite team members with appropriate roles.' },
      { title: 'Add & Assign Tasks', desc: 'Create tasks with descriptions, attachments, due dates, and assign to team members with priority levels.' },
      { title: 'Track & Collaborate', desc: 'Team updates tasks, logs time, comments in context, and moves cards across stages.' },
      { title: 'Report & Review', desc: 'Automated weekly reports show completion rates, time logged, and blockers — sent to managers and clients.' },
    ],
    deliverables: ['Web Project Management Platform', 'Mobile App for Task Updates (iOS & Android)', 'Client Portal (Read-only Access)', 'Time Tracking & Timesheet Module', 'Sprint Planning & Reporting Engine', 'Full Source Code & Documentation'],
  },

  // ── Milestone Management ─────────────────────────────────────────────────
  {
    id: 'milestone-management',
    tag: 'DELIVERY TRACKER',
    accentColor: '#6366f1',
    title: 'Milestone & Delivery Tracker',
    description: 'Client-facing dashboard to track project phases, approve deliverables, and release milestone payments.',
    longDescription: 'Built for agencies, software firms, and construction companies that deliver projects in phases. A client-facing portal where clients see live project progress, approve deliverables, and release milestone payments — while your team tracks phase completion, uploads evidence, and generates invoices automatically on approval. Eliminates the "where are we?" client email permanently.',
    features: ['Client-facing Project Progress Dashboard', 'Milestone-based Payment Escrow & Release', 'Deliverable Upload & Client Approval Workflow', 'Gantt Chart & Phase Timeline View', 'Auto-Invoice Generation on Milestone Approval', 'PDF Progress Report & Summary Export'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    ],
    faqs: [
      { question: 'How does milestone payment release work?', answer: 'When your team marks a milestone complete and uploads evidence, the client gets a notification to review and approve. On approval, the linked payment is released or an invoice is auto-generated.' },
      { question: 'Can the client add comments or request revisions?', answer: 'Yes. Clients can approve, reject with comments, or request changes on any deliverable. The full revision history is maintained.' },
      { question: 'Is it suitable for construction projects?', answer: 'Yes. Construction phases (foundation, structure, fit-out, handover) with photo evidence upload and site inspection approval are all supported.' },
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay (Escrow)', 'AWS S3', 'PostgreSQL'],
    stats: [{ value: 'Client', label: 'Live progress portal' }, { value: 'Escrow', label: 'Milestone payments' }, { value: 'Auto', label: 'Invoice on approval' }],
    useCases: [
      { icon: 'startup', title: 'Software Development Agencies', desc: 'Give clients a professional portal to track development phases, review demos, and release payments.' },
      { icon: 'enterprise', title: 'Construction Companies', desc: 'Track construction phases with photo evidence and manage bank-linked milestone disbursements.' },
      { icon: 'agency', title: 'Consultants & Freelancers', desc: 'Manage deliverables, approvals, and payments for multiple client projects from one dashboard.' },
    ],
    userFlow: [
      { title: 'Define Project Milestones', desc: 'Create project phases with deadlines, deliverables required, and linked payment amounts.' },
      { title: 'Invite Client to Portal', desc: 'Client receives a link to their personalised portal showing the full project Gantt and current phase status.' },
      { title: 'Upload & Submit for Approval', desc: 'Team uploads deliverables (documents, videos, demo links) and marks the milestone ready for review.' },
      { title: 'Client Approves & Pays', desc: 'Client reviews deliverables, approves or requests changes. An invoice is auto-generated on approval.' },
    ],
    deliverables: ['Client-facing Progress Portal (Web)', 'Team Admin & Milestone Dashboard', 'Deliverable Upload & Approval Workflow', 'Escrow Payment Release Module', 'Auto-Invoice & PDF Report Generator', 'Full Source Code & Documentation'],
  },

  // ── Healthcare Platform ──────────────────────────────────────────────────
  {
    id: 'healthcare-platform',
    tag: 'HEALTHTECH',
    accentColor: '#06b6d4',
    title: 'Healthcare & Telemedicine Platform',
    description: 'Video consultations, digital EMR, e-prescriptions, and smart appointment triage for clinics and hospitals.',
    longDescription: 'A complete telemedicine and clinic management platform that modernises patient care. Enable HD video consultations, maintain digital EMR, issue e-prescriptions, and let patients book and track appointments online — while clinics manage schedules, staff, lab reports, and billing from one HIPAA-compliant system. Scales from a solo doctor to a 500-doctor hospital chain.',
    features: ['HD WebRTC Video Consultations', 'Electronic Medical Records (EMR)', 'E-Prescription with Pharmacy Integration', 'Smart Appointment Booking & Triage', 'Lab Report Upload & Management', 'Insurance Billing & Claim Workflows'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    ],
    faqs: [
      { question: 'Is patient data HIPAA compliant?', answer: 'Yes. HIPAA-compliant AWS infrastructure with AES-256 encryption, TLS 1.3 in transit, and full audit trails. DPDP Act compliance for Indian clients.' },
      { question: 'Can patients join video calls without downloading an app?', answer: 'Yes. Patients join from any browser — no app download required. iOS and Android apps are also available for those who prefer them.' },
      { question: 'Does it work for both in-clinic and online visits?', answer: 'Yes. In-clinic appointment management and video consultations share the same EMR, prescription, and billing system.' },
    ],
    techStack: ['React Native', 'Node.js', 'WebRTC', 'AWS HIPAA', 'PostgreSQL', 'Firebase'],
    stats: [{ value: 'HIPAA', label: 'Compliant' }, { value: 'HD', label: 'Video consultations' }, { value: '4 Apps', label: 'Patient, Doctor, Admin, Pharmacy' }],
    useCases: [
      { icon: 'startup', title: 'Solo Doctors & Clinics', desc: 'Accept online bookings and video consultations with digital prescriptions the same week.' },
      { icon: 'enterprise', title: 'Multi-Specialty Hospitals', desc: 'Centralised patient records, cross-specialty referrals, and multi-branch revenue reporting.' },
      { icon: 'agency', title: 'Health Startups', desc: 'White-label and launch your own branded telehealth product for a specific medical vertical.' },
    ],
    userFlow: [
      { title: 'Book an Appointment', desc: 'Patient searches by specialty, views doctor availability, and books a video or in-clinic slot.' },
      { title: 'Join Video Consultation', desc: 'Doctor and patient join a secure HD video call at the scheduled time from web or mobile.' },
      { title: 'Receive E-Prescription', desc: 'Doctor issues a digital prescription from the dashboard — sent to the patient and pharmacy instantly.' },
      { title: 'Access Health Records', desc: 'Patient uploads lab reports and views full health history from their personal health dashboard.' },
    ],
    deliverables: ['Patient Web & Mobile App (iOS & Android)', 'Doctor Dashboard & Video Platform', 'Admin & Clinic Management Panel', 'EMR & E-Prescription Module', 'Lab Integration & Billing System', 'Full Source Code & Documentation'],
  },

  // ── Social Voice Rooms ───────────────────────────────────────────────────
  {
    id: 'social-voice-rooms',
    tag: 'SOCIAL APP',
    accentColor: '#ec4899',
    title: 'Social Voice & Live Rooms App',
    description: 'Real-time voice conversations, virtual gifting, live music sharing, and monetized creator moments.',
    longDescription: 'Build the next Clubhouse or Stereo — a social platform built around live audio and real-time community experiences. Users join themed live rooms, participate in voice conversations, send virtual gifts to speakers, and share music together. Creators monetize through virtual gifts, fan subscriptions, and sponsored room events. Built for Web, iOS, and Android with sub-100ms audio latency.',
    features: ['Live Audio Rooms with Stage & Audience', 'Virtual Gift & Coin Economy', 'Synchronized Music Listening Rooms', 'Creator Fan Subscriptions & Tipping', 'Room Discovery & Interest-based Feed', 'Moderation Tools & Community Management'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      'https://images.unsplash.com/photo-1543269664-647163e1dcf4?w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    ],
    faqs: [
      { question: 'How does the virtual gift economy work?', answer: 'Users purchase coins via in-app purchase. They send gifts (animated icons with coin values) to creators during live rooms. Creators cash out their accumulated coins to their bank account.' },
      { question: 'What is the audio latency?', answer: 'We use Agora RTC for sub-100ms audio latency — indistinguishable from a real conversation. Up to 10,000 listeners per room are supported.' },
      { question: 'Can creators host paid, ticketed rooms?', answer: 'Yes. Creators can set a coin price to enter specific rooms or unlock premium content, creating exclusive experiences for paying fans.' },
    ],
    techStack: ['Flutter (iOS & Android)', 'Node.js', 'Agora (WebRTC)', 'Firebase', 'MongoDB', 'Razorpay'],
    stats: [{ value: '<100ms', label: 'Audio latency' }, { value: '10K+', label: 'Listeners per room' }, { value: 'Creator', label: 'Monetization built-in' }],
    useCases: [
      { icon: 'startup', title: 'Audio Social Startups', desc: 'Launch your own Clubhouse-style platform for a specific niche — music, comedy, language learning, or spirituality.' },
      { icon: 'enterprise', title: 'Media & Entertainment Brands', desc: 'Add live audio community features to your existing app to increase engagement and session time.' },
      { icon: 'agency', title: 'Creator Economy Platforms', desc: 'Build a monetization layer for creators beyond content — live rooms, fan subscriptions, and virtual events.' },
    ],
    userFlow: [
      { title: 'Create Profile & Interests', desc: 'User signs up, selects topic interests (music, tech, comedy), and sees a personalised room discovery feed.' },
      { title: 'Join or Start a Room', desc: 'Join an active room as a listener or start a new room — public, invite-only, or ticketed.' },
      { title: 'Participate & Gift', desc: 'Request to speak, contribute to conversations, and send virtual gifts to creators during the live session.' },
      { title: 'Monetize (Creators)', desc: 'Creators track gift earnings, set up fan subscriptions, and cash out to their bank account from the creator dashboard.' },
    ],
    deliverables: ['iOS & Android Social App', 'Creator Dashboard & Earnings Management', 'Admin & Moderation Panel', 'Virtual Gift & Coin Economy System', 'Live Room Infrastructure (Agora)', 'Full Source Code & Documentation'],
  },
]

const useCaseIcons = { startup: Rocket, enterprise: Building2, agency: Users }

const FEATURE_ICONS = [Zap, Shield, Activity, Settings, Globe, TrendingUp, BarChart3, Star, Monitor, Award, Database, Layers]

function SLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[2px] rounded-full" style={{ background: color }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{text}</span>
    </div>
  )
}

const BUILD_VS_BUY = [
  { criteria: 'Time to Market',    custom: '12–18 months of development',              ours: '4–8 weeks — platform is ready-built' },
  { criteria: 'Development Cost',  custom: '₹30L – ₹1.5Cr+ engineering cost',         ours: 'Fixed price — fraction of custom build' },
  { criteria: 'Team Required',     custom: '8–12 engineers, PMs, QA, DevOps',          ours: 'No dev team needed — we handle everything' },
  { criteria: 'Project Risk',      custom: '60% of custom builds go over budget',       ours: 'Low — battle-tested across real clients' },
  { criteria: 'Post-launch',       custom: 'Full engineering team needed permanently',  ours: 'Covered by 3-month support plan' },
  { criteria: 'Customisation',     custom: 'Full control — at enormous cost',           ours: 'Full white-label — your brand, your domain' },
]

export default function LiveDemoProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { openModal } = useModal()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-20">
        <p className="text-2xl font-bold text-[#0a1628] mb-4">Product not found</p>
        <Link href="/live-demo" className="text-[#f5a623] font-semibold hover:underline">← Back to Live Demo</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <div className="relative min-h-[75vh] overflow-hidden">
        <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-[#0a1628]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/40 to-transparent" />

        {/* Back */}
        <div className="absolute top-28 left-6 md:left-12 z-10">
          <Link href="/live-demo" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full transition-colors">
            <ArrowLeft size={15} /> Back to Products
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="max-w-6xl mx-auto px-6 md:px-12 pb-12 pt-20">
            <span className="inline-block px-3 py-1.5 rounded-full text-white text-xs font-black tracking-wider mb-5" style={{ background: product.accentColor }}>
              {product.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3 max-w-3xl">
              {product.title}
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">{product.description}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mb-5">
              {product.stats.map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-center">
                  <div className="text-lg font-black text-white leading-none">{s.value}</div>
                  <div className="text-[10px] text-white/55 mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech, i) => (
                <span key={i} className="bg-white/10 border border-white/15 text-white/65 text-[11px] font-semibold px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* ── LEFT col-span-2 ── */}
          <div className="lg:col-span-2 flex flex-col gap-16">

            {/* 1. Overview */}
            <section>
              <SLabel text="Overview" color={product.accentColor} />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-4 leading-tight">
                Everything You Need — Ready to Launch
              </h2>
              {/* Stats highlight strip */}
              <div className="flex flex-wrap gap-3 mb-6">
                {product.stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-gray-100 bg-gray-50">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: product.accentColor }} />
                    <span className="text-base font-black text-[#0a1628]">{s.value}</span>
                    <span className="text-xs text-gray-400 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <p className="text-gray-600 text-base leading-relaxed">{product.longDescription}</p>
                <div className="relative">
                  <img src={product.gallery[0]} alt={product.title} className="rounded-2xl object-cover w-full h-64 shadow-lg" />
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: product.accentColor }}>
                    <Zap size={28} className="text-white" />
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Feature Cards */}
            <section>
              <SLabel text="Features" color={product.accentColor} />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-2 leading-tight">
                What&apos;s Inside the Platform
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Every feature is production-ready and included in the base deployment — not sold as separate add-ons.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((f, i) => {
                  const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length]
                  const isDark = i % 6 === 0
                  return (
                    <div key={i} className={`relative flex gap-4 p-5 rounded-2xl border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${isDark ? 'border-transparent text-white' : 'border-gray-100 bg-white'}`}
                      style={isDark ? { background: `linear-gradient(135deg, #0a1628 0%, #1a2f4e 100%)` } : {}}>
                      {/* Decorative blob */}
                      {isDark && <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20" style={{ background: product.accentColor }} />}
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                        style={{ background: isDark ? product.accentColor + '30' : product.accentColor + '12' }}>
                        <Icon size={20} style={{ color: isDark ? '#fff' : product.accentColor }} />
                      </div>
                      <div className="pt-0.5 relative z-10">
                        <h3 className={`font-bold text-sm leading-snug ${isDark ? 'text-white' : 'text-[#0a1628]'}`}>{f}</h3>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <div className="w-3 h-3 rounded-full flex items-center justify-center" style={{ background: product.accentColor + '25' }}>
                            <div className="w-1 h-1 rounded-full" style={{ background: isDark ? '#fff' : product.accentColor }} />
                          </div>
                          <p className={`text-xs ${isDark ? 'text-white/55' : 'text-gray-400'}`}>Included in base deployment</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* 3. How It Works */}
            <section>
              <SLabel text="How It Works" color={product.accentColor} />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-2 leading-tight">
                From Setup to Live in Weeks
              </h2>
              <p className="text-gray-500 text-base mb-8">A simple, guided process — we handle everything technical.</p>
              <div className="relative">
                <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px z-0" style={{ background: `linear-gradient(90deg, ${product.accentColor}50, ${product.accentColor}, ${product.accentColor}50)` }} />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  {product.userFlow.map((step, i) => (
                    <div key={i} className="relative z-10 group">
                      <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                        {/* Step circle */}
                        <div className="relative flex-shrink-0 md:mb-5">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-black shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${product.accentColor} 0%, ${product.accentColor}cc 100%)` }}>
                            {i + 1}
                          </div>
                          <div className="absolute inset-0 rounded-full opacity-30 blur-md group-hover:opacity-60 transition-opacity" style={{ background: product.accentColor }} />
                        </div>
                        <div className="md:text-center">
                          <div className="font-black text-[#0a1628] text-sm mb-2">{step.title}</div>
                          <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                      {/* Connector dot */}
                      <div className="hidden md:block absolute top-8 -right-2.5 w-5 h-5 rounded-full border-2 border-white z-20 shadow-sm last:hidden" style={{ background: product.accentColor }} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Who Is It For */}
            <section>
              <SLabel text="Who It&apos;s For" color={product.accentColor} />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-2 leading-tight">
                Built for These Businesses
              </h2>
              <p className="text-gray-500 text-base mb-8">Three distinct use cases — each with measurable outcomes.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {product.useCases.map((uc, i) => {
                  const Icon = useCaseIcons[uc.icon]
                  const nums = ['01', '02', '03']
                  return (
                    <div key={i} className="relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group bg-white flex flex-col">
                      {/* Top accent line */}
                      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${product.accentColor}, ${product.accentColor}60)` }} />
                      {/* Gradient header */}
                      <div className="relative px-6 pt-6 pb-5 overflow-hidden" style={{ background: `linear-gradient(135deg, ${product.accentColor}12 0%, ${product.accentColor}05 100%)` }}>
                        {/* Ghost number */}
                        <span className="absolute top-2 right-4 text-5xl font-black leading-none select-none pointer-events-none" style={{ color: product.accentColor + '18' }}>{nums[i]}</span>
                        {/* Icon */}
                        <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${product.accentColor}25, ${product.accentColor}12)` }}>
                          <Icon size={26} style={{ color: product.accentColor }} />
                        </div>
                        <h4 className="relative z-10 font-black text-[#0a1628] text-lg leading-tight">{uc.title}</h4>
                      </div>
                      {/* Divider */}
                      <div className="mx-6 h-px" style={{ background: `linear-gradient(90deg, ${product.accentColor}30, transparent)` }} />
                      {/* Body */}
                      <div className="px-6 py-5 flex flex-col flex-1">
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">{uc.desc}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                          <CheckCircle2 size={14} style={{ color: product.accentColor }} />
                          <span className="text-xs font-bold" style={{ color: product.accentColor }}>Ideal for this business type</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* 5. Build vs Buy */}
            <section>
              <SLabel text="Build vs Buy" color={product.accentColor} />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-2 leading-tight">
                Why Not Build It From Scratch?
              </h2>
              <p className="text-gray-500 text-base mb-8">Every client asks this. Here is an honest comparison.</p>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                {/* Header */}
                <div className="grid grid-cols-3">
                  <div className="px-5 py-5 bg-[#0a1628] border-b border-r border-white/10">
                    <span className="text-xs font-black uppercase tracking-widest text-white/40">Criteria</span>
                  </div>
                  <div className="px-5 py-5 bg-red-50 border-b border-r border-red-100 flex items-center justify-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <XCircle size={13} className="text-red-400" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-red-400">Build From Scratch</span>
                  </div>
                  <div className="px-5 py-5 border-b border-gray-100 flex items-center justify-center gap-2" style={{ background: product.accentColor + '12' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: product.accentColor + '25' }}>
                      <CheckCircle2 size={13} style={{ color: product.accentColor }} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: product.accentColor }}>Kotibox Ready-Made</span>
                  </div>
                </div>
                {BUILD_VS_BUY.map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 ${i < BUILD_VS_BUY.length - 1 ? 'border-b border-gray-100' : ''} ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <div className="px-5 py-4 border-r border-gray-100 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-300" />
                      <span className="font-bold text-[#0a1628] text-sm">{row.criteria}</span>
                    </div>
                    <div className="px-5 py-4 border-r border-gray-100 flex items-start gap-2.5">
                      <XCircle size={14} className="text-red-300 flex-shrink-0 mt-0.5" />
                      <span className="text-red-500 text-sm leading-snug">{row.custom}</span>
                    </div>
                    <div className="px-5 py-4 flex items-start gap-2.5" style={{ background: product.accentColor + '06' }}>
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: product.accentColor }} />
                      <span className="text-sm font-semibold text-[#0a1628] leading-snug">{row.ours}</span>
                    </div>
                  </div>
                ))}
                {/* Footer CTA */}
                <div className="grid grid-cols-3 border-t border-gray-200">
                  <div className="px-5 py-4 bg-gray-50" />
                  <div className="px-5 py-4 bg-red-50 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-400">High risk · High cost</span>
                  </div>
                  <div className="px-5 py-4 flex items-center justify-center" style={{ background: product.accentColor + '10' }}>
                    <span className="text-xs font-bold" style={{ color: product.accentColor }}>Fast · Proven · Affordable</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Screenshots */}
            <section>
              <SLabel text="Screenshots" color={product.accentColor} />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-2 leading-tight">See It in Action</h2>
              <p className="text-gray-500 text-base mb-6">Real screens from the platform.</p>
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden mb-3 relative group shadow-xl border border-gray-100">
                <img src={product.gallery[0]} alt={`${product.title} 1`} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-white/80 text-xs font-semibold">Platform Preview</span>
                </div>
              </div>
              {/* Thumbnail row */}
              <div className="grid grid-cols-2 gap-3">
                {product.gallery.slice(1).map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-sm border border-gray-100 group">
                    <img src={img} alt={`${product.title} ${i + 2}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* 7. FAQs */}
            <section>
              <SLabel text="FAQs" color={product.accentColor} />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a1628] mb-2 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-base mb-8">Technical, commercial, and implementation questions answered.</p>
              <div className="flex flex-col gap-3">
                {product.faqs.map((faq, i) => (
                  <div key={i}
                    className={`border rounded-2xl overflow-hidden transition-all ${openFaq === i ? 'shadow-md' : 'border-gray-200'}`}
                    style={openFaq === i ? { borderColor: product.accentColor + '60' } : {}}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                      <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                      {openFaq === i
                        ? <ChevronUp size={18} style={{ color: product.accentColor }} className="flex-shrink-0" />
                        : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── RIGHT Sidebar ── */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">

            {/* Key Features */}
            <div className="relative bg-[#0a1628] rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl" style={{ background: product.accentColor }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: product.accentColor + '30' }}>
                    <Zap size={15} style={{ color: product.accentColor }} />
                  </div>
                  <span className="text-white font-bold text-base">Key Features</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 py-1.5 border-b border-white/5 last:border-0">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: product.accentColor }} />
                      <span className="text-white/80 text-sm leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0a1628]">
                  <Package size={13} className="text-white" />
                </div>
                <span className="text-[#0a1628] font-bold text-base">What&apos;s Included</span>
              </div>
              <div className="flex flex-col gap-2">
                {product.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-3 py-1.5 border-b border-gray-50 last:border-0">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${product.accentColor}18` }}>
                      <CheckCircle2 size={10} style={{ color: product.accentColor }} />
                    </div>
                    <span className="text-sm text-[#0a1628] font-medium leading-snug">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: product.accentColor + '18' }}>
                  <Code2 size={13} style={{ color: product.accentColor }} />
                </div>
                <span className="text-[#0a1628] font-bold text-base">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#0a1628] border border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deployment Summary */}
            <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-green-50">
                  <Clock size={13} className="text-green-600" />
                </div>
                <span className="text-[#0a1628] font-bold text-base">Deployment</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: 'Timeline', val: '4–8 weeks to go live' },
                  { label: 'White-label', val: 'Full branding — your domain & apps' },
                  { label: 'Support', val: '3 months post-launch included' },
                  { label: 'Hosting', val: 'Cloud-hosted, managed by us' },
                  { label: 'Source Code', val: 'Full ownership on delivery' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-2.5 py-1.5 border-b border-gray-50 last:border-0">
                    <CheckCircle2 size={13} style={{ color: product.accentColor }} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#0a1628]">{item.label}: </span>
                      <span className="text-xs text-gray-500">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2f4e 100%)' }}>
              <div className="w-12 h-1 rounded-full mb-4" style={{ background: product.accentColor }} />
              <h3 className="text-lg font-extrabold mb-2">Interested in this product?</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Get a free demo and custom pricing tailored to your business needs.
              </p>
              <button onClick={openModal}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: product.accentColor }}>
                Request a Free Demo
              </button>
              <Link href="/live-demo"
                className="w-full flex items-center justify-center gap-2 py-3 mt-3 rounded-xl font-semibold text-sm border border-white/20 text-white/80 hover:bg-white/10 transition-all">
                Browse All Products <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Full-width CTA Banner ── */}
      <div className="mx-4 sm:mx-8 lg:mx-16 mb-16 rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #111827 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-[80px]" style={{ background: product.accentColor }} />
        <div className="relative px-8 md:px-14 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: product.accentColor }} />
              <span className="text-white/55 text-xs font-semibold uppercase tracking-widest">Ready-made · Fast Launch</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
              Ready to Launch <span style={{ color: product.accentColor }}>{product.title.split(' ').slice(0, 3).join(' ')}</span>?
            </h2>
            <p className="text-white/55 text-base">
              We&apos;ll walk you through the full platform, show you every screen, and give you a custom pricing estimate — in a free 30-minute demo.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <button onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm"
              style={{ background: product.accentColor }}>
              Request Free Demo <ArrowRight size={16} />
            </button>
            <Link href="/live-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/75 border border-white/20 hover:bg-white/10 transition-all text-sm">
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      <div className="bg-[#f8fafc] py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f5a623]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#f5a623]">Explore More</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1628] mb-10">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/live-demo/${p.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#f5a623]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: p.accentColor }}>
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-[#f5a623] transition-colors mb-2 text-base leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{p.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#f5a623]">
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
