'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink,
  BrainCircuit, TrendingUp, Zap, Shield,
  Database, BarChart3, Code2, Globe,
  Clock, Target, Award, Layers,
  ShoppingCart, Heart, Building2,
  GraduationCap, Banknote, Truck, Factory,
  Eye, MessageSquare, Activity, Cpu,
  LineChart, FlaskConical, Rocket, Settings2,
  AlertTriangle, RefreshCw, Search, Filter
} from 'lucide-react'
import { useModal } from '@/components/providers/ModalContext'

const ACCENT = '#0ea5e9'
const ACCENT2 = '#0284c7'
const NAVY = '#0a1628'

// ─── Data ────────────────────────────────────────────────────────────────────

const industryUseCases = [
  {
    industry: 'E-commerce & Retail',
    icon: ShoppingCart,
    color: '#f59e0b',
    tagline: 'Predict what customers want before they search',
    metrics: [
      { label: 'Revenue uplift from recommendations', val: '+32%' },
      { label: 'Reduction in stockouts', val: '48%' },
      { label: 'Churn prediction accuracy', val: '89%' },
    ],
    useCases: [
      'Product recommendation engines (collaborative + content filtering)',
      'Demand forecasting & inventory optimisation',
      'Dynamic pricing based on competition & demand signals',
      'Customer churn prediction & retention triggers',
      'Fraud detection on transactions & accounts',
      'Visual search — find products from uploaded images',
    ],
    model: 'Recommender System',
    modelDesc: 'Hybrid collaborative-filtering + deep neural network trained on 18 months of purchase history, click streams, and product metadata.',
  },
  {
    industry: 'Healthcare',
    icon: Heart,
    color: '#ef4444',
    tagline: 'Clinical-grade predictions that save lives',
    metrics: [
      { label: 'Diagnostic accuracy improvement', val: '+27%' },
      { label: 'Early readmission detection', val: '91%' },
      { label: 'Time saved per radiologist', val: '3hrs/day' },
    ],
    useCases: [
      'Medical image analysis (X-ray, MRI, CT scan classification)',
      'Patient readmission risk scoring',
      'Drug interaction & adverse event prediction',
      'Clinical trial participant matching',
      'Sepsis & ICU deterioration early warning',
      'Insurance claim anomaly detection',
    ],
    model: 'CNN Medical Classifier',
    modelDesc: 'ResNet-50 fine-tuned on labelled radiology datasets, achieving >94% sensitivity for pneumonia detection — HIPAA-compliant inference pipeline.',
  },
  {
    industry: 'Finance & Banking',
    icon: Banknote,
    color: '#0ea5e9',
    tagline: 'Risk models that work in real time',
    metrics: [
      { label: 'Fraud detection precision', val: '97.3%' },
      { label: 'Loan default prediction AUC', val: '0.91' },
      { label: 'Reduction in false positives', val: '62%' },
    ],
    useCases: [
      'Real-time fraud & anomaly detection on transactions',
      'Credit scoring & loan default prediction',
      'Anti-money laundering (AML) pattern detection',
      'Algorithmic trading signal generation',
      'Customer lifetime value (LTV) modelling',
      'Document extraction from KYC forms (OCR + NLP)',
    ],
    model: 'Gradient Boosting Fraud Detector',
    modelDesc: 'XGBoost ensemble with 180+ engineered features, trained on 50M+ transaction records. Real-time inference at <20ms with feature drift monitoring.',
  },
  {
    industry: 'Manufacturing & Industry',
    icon: Factory,
    color: '#8b5cf6',
    tagline: 'Prevent failures before they cost millions',
    metrics: [
      { label: 'Unplanned downtime reduction', val: '67%' },
      { label: 'Defect detection rate', val: '99.2%' },
      { label: 'Maintenance cost savings', val: '41%' },
    ],
    useCases: [
      'Predictive maintenance on IoT sensor streams',
      'Visual quality inspection (defect detection)',
      'Supply chain disruption prediction',
      'Energy consumption optimisation',
      'Root cause analysis from operational logs',
      'Production yield optimisation',
    ],
    model: 'Predictive Maintenance LSTM',
    modelDesc: 'LSTM network processing multivariate time-series from 40+ IoT sensors, predicting equipment failures 72 hours in advance with 93% recall.',
  },
  {
    industry: 'Real Estate',
    icon: Building2,
    color: '#14b8a6',
    tagline: 'Automated valuation at scale',
    metrics: [
      { label: 'AVM prediction error (MAPE)', val: '<4%' },
      { label: 'Lead scoring lift', val: '3.8x' },
      { label: 'Time to valuation', val: '<1 sec' },
    ],
    useCases: [
      'Automated Valuation Models (AVM) for properties',
      'Investment opportunity scoring & ranking',
      'Rental price optimisation (dynamic pricing)',
      'Tenant churn & non-payment risk scoring',
      'Neighbourhood growth trend analysis',
      'Document classification & extraction (deeds, contracts)',
    ],
    model: 'Gradient Boosted AVM',
    modelDesc: 'LightGBM model trained on 2M+ property transactions with 120+ features (location embeddings, macro-economic signals, structural attributes).',
  },
  {
    industry: 'Logistics & Supply Chain',
    icon: Truck,
    color: '#22c55e',
    tagline: 'Route optimisation at millions of permutations per second',
    metrics: [
      { label: 'Delivery ETA accuracy', val: '94%' },
      { label: 'Fuel cost reduction', val: '23%' },
      { label: 'Failed delivery prediction', val: '88%' },
    ],
    useCases: [
      'Delivery ETA prediction & dynamic re-routing',
      'Last-mile route optimisation',
      'Warehouse slotting & picking optimisation',
      'Demand forecasting for distribution centres',
      'Carrier performance prediction',
      'Returns propensity scoring',
    ],
    model: 'XGBoost ETA Predictor',
    modelDesc: 'Gradient boosted ensemble using GPS traces, traffic signals, historical patterns, and weather data — retrained weekly on fresh telemetry.',
  },
]

const mlPipeline = [
  {
    step: '01',
    name: 'Data Discovery & Audit',
    icon: Search,
    color: ACCENT,
    desc: 'We audit your existing data sources, assess quality, identify gaps, and map the signals most predictive of your target outcome.',
    deliverable: 'Data readiness report + feature opportunity list',
  },
  {
    step: '02',
    name: 'Data Engineering',
    icon: Database,
    color: '#6366f1',
    desc: 'Raw data is cleaned, joined across sources, and transformed into analysis-ready feature tables. Pipelines are automated and versioned.',
    deliverable: 'Automated ETL pipeline + feature store',
  },
  {
    step: '03',
    name: 'Exploratory Analysis & Feature Engineering',
    icon: BarChart3,
    color: '#8b5cf6',
    desc: 'We explore distributions, correlations, and interactions. Then we engineer domain-specific features that substantially improve model performance.',
    deliverable: 'Feature importance analysis + engineered feature set',
  },
  {
    step: '04',
    name: 'Model Training & Selection',
    icon: BrainCircuit,
    color: '#a855f7',
    desc: 'Multiple algorithm families are trained and compared (tree ensembles, neural networks, linear models). Hyperparameters are tuned via Bayesian optimisation.',
    deliverable: 'Benchmark report comparing 5–8 model candidates',
  },
  {
    step: '05',
    name: 'Evaluation & Validation',
    icon: FlaskConical,
    color: '#ec4899',
    desc: 'Models are evaluated on held-out test sets with business-relevant metrics. Bias audits, fairness checks, and adversarial tests are run before any deployment.',
    deliverable: 'Model card with performance, bias, and limitation report',
  },
  {
    step: '06',
    name: 'Deployment & API Serving',
    icon: Rocket,
    color: '#f59e0b',
    desc: 'The champion model is containerised and deployed as a low-latency REST API or batch inference pipeline — integrated with your systems.',
    deliverable: 'Production API endpoint + integration documentation',
  },
  {
    step: '07',
    name: 'Monitoring & Drift Detection',
    icon: Activity,
    color: '#22c55e',
    desc: 'We monitor prediction quality, input feature drift, and model degradation in production. Automated alerts trigger retraining when performance drops below thresholds.',
    deliverable: 'Live monitoring dashboard + retraining pipeline',
  },
]

const capabilities = [
  {
    type: 'Supervised Learning',
    icon: Target,
    color: ACCENT,
    tagline: 'Predict labelled outcomes from historical data',
    examples: ['Churn prediction', 'Credit scoring', 'Price forecasting', 'Diagnosis classification'],
    algorithms: ['XGBoost', 'LightGBM', 'Random Forest', 'Neural Networks', 'Logistic Regression'],
    whenToUse: 'You have labelled historical data and a clear target variable to predict.',
  },
  {
    type: 'Unsupervised Learning',
    icon: Layers,
    color: '#6366f1',
    tagline: 'Discover hidden structure in unlabelled data',
    examples: ['Customer segmentation', 'Anomaly detection', 'Topic modelling', 'Recommendation engines'],
    algorithms: ['K-Means', 'DBSCAN', 'Autoencoders', 'LDA', 'Matrix Factorisation'],
    whenToUse: 'You want to find patterns, clusters, or anomalies without predefined labels.',
  },
  {
    type: 'Deep Learning',
    icon: BrainCircuit,
    color: '#8b5cf6',
    tagline: 'Complex patterns requiring large data & neural architectures',
    examples: ['Image classification', 'Speech recognition', 'Text generation', 'Time-series forecasting'],
    algorithms: ['CNNs', 'RNNs / LSTMs', 'Transformers', 'GANs', 'Diffusion Models'],
    whenToUse: 'Problems with raw inputs (images, text, audio) or very complex non-linear relationships.',
  },
  {
    type: 'NLP & Text Analytics',
    icon: MessageSquare,
    color: '#ec4899',
    tagline: 'Turn unstructured text into structured intelligence',
    examples: ['Sentiment analysis', 'Document classification', 'Named entity extraction', 'Summarisation'],
    algorithms: ['BERT / RoBERTa', 'GPT fine-tuning', 'spaCy', 'CRF', 'Sentence Transformers'],
    whenToUse: 'You have customer reviews, contracts, support tickets, or any text data to analyse.',
  },
  {
    type: 'Computer Vision',
    icon: Eye,
    color: '#f59e0b',
    tagline: 'Automate visual inspection and understanding',
    examples: ['Defect detection', 'Object detection', 'Medical imaging', 'Visual search'],
    algorithms: ['ResNet / EfficientNet', 'YOLO', 'Detectron2', 'SAM', 'ViT'],
    whenToUse: 'You have image or video data requiring automated analysis or quality control.',
  },
  {
    type: 'Time Series & Forecasting',
    icon: LineChart,
    color: '#22c55e',
    tagline: 'Predict future values from temporal patterns',
    examples: ['Demand forecasting', 'Predictive maintenance', 'Anomaly detection', 'Stock/pricing signals'],
    algorithms: ['Prophet', 'ARIMA', 'N-BEATS', 'Temporal Fusion Transformer', 'LSTM'],
    whenToUse: 'You need to forecast future values — sales, load, failures — from time-indexed data.',
  },
]

const techStack = [
  {
    category: 'Frameworks',
    items: ['PyTorch', 'TensorFlow / Keras', 'scikit-learn', 'Hugging Face', 'XGBoost', 'LightGBM', 'JAX'],
  },
  {
    category: 'MLOps & Deployment',
    items: ['MLflow', 'Weights & Biases', 'BentoML', 'Seldon Core', 'FastAPI', 'Docker / Kubernetes', 'Ray Serve'],
  },
  {
    category: 'Data & Feature Store',
    items: ['Apache Spark', 'dbt', 'Feast', 'Great Expectations', 'DVC', 'Delta Lake', 'Polars'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS SageMaker', 'GCP Vertex AI', 'Azure ML', 'Databricks', 'Modal', 'Replicate'],
  },
]

const packages = [
  {
    name: 'Proof of Concept',
    color: ACCENT,
    ideal: 'Validate an ML use case before full investment',
    scope: '1 model, 1 dataset, 4–6 weeks',
    includes: [
      'Problem scoping & feasibility analysis',
      'Data audit & quality assessment',
      'Baseline model + 2 improved iterations',
      'Performance benchmark vs current approach',
      'Model card & recommendation report',
      '30-min readout with business stakeholders',
    ],
    notIncluded: ['Production deployment', 'API serving', 'Monitoring'],
    timeline: '4–6 weeks',
    outcome: 'Go / No-go decision with hard performance numbers',
  },
  {
    name: 'Full Production Build',
    color: '#6366f1',
    ideal: 'End-to-end ML system built for real-world deployment',
    scope: '1–3 models, full pipeline, 8–16 weeks',
    includes: [
      'Complete data engineering pipeline',
      'Feature store + automated feature refresh',
      'Model training, tuning, and validation',
      'REST API or batch inference deployment',
      'A/B testing framework for model rollout',
      'Monitoring dashboard + drift alerts',
      'Handover documentation + team training',
      '6-month post-launch support SLA',
    ],
    notIncluded: [],
    timeline: '8–16 weeks',
    outcome: 'Production ML system integrated with your stack',
    recommended: true,
  },
  {
    name: 'ML Retainer',
    color: '#f59e0b',
    ideal: 'Ongoing ML engineering & model improvement',
    scope: 'Monthly engagement, unlimited models',
    includes: [
      'Monthly model performance review & retraining',
      'Feature engineering for new data sources',
      'New model development on demand',
      'Incident response for model degradation',
      'Quarterly ML roadmap planning session',
      'Access to senior ML engineers (dedicated Slack)',
      'Priority deployment turnaround',
      '12-month contract, rolling thereafter',
    ],
    notIncluded: [],
    timeline: 'Ongoing',
    outcome: 'ML capability that compounds over time',
  },
]

const implementationTimeline = [
  {
    week: 'Week 1–2',
    phase: 'Discovery & Data',
    color: ACCENT,
    tasks: ['Problem definition workshop', 'Data source inventory', 'Feasibility & baseline assessment', 'Infrastructure setup'],
  },
  {
    week: 'Week 3–5',
    phase: 'Data Engineering',
    color: '#6366f1',
    tasks: ['ETL pipeline development', 'Data cleaning & validation', 'Feature engineering sprint', 'Train/val/test splits'],
  },
  {
    week: 'Week 6–10',
    phase: 'Model Development',
    color: '#8b5cf6',
    tasks: ['Baseline modelling', 'Iterative improvement', 'Hyperparameter tuning', 'Bias & fairness audit'],
  },
  {
    week: 'Week 11–14',
    phase: 'Deployment & Launch',
    color: '#22c55e',
    tasks: ['API containerisation', 'Integration testing', 'A/B test design & launch', 'Monitoring setup & go-live'],
  },
]

const faqs = [
  {
    q: 'How much data do we need to get started?',
    a: 'It depends on the problem type. For tabular supervised learning (churn, fraud, pricing), 10,000–50,000 labelled rows are typically sufficient for a strong baseline. Deep learning problems (computer vision, NLP) usually need more — 50K+ images or documents — though transfer learning with pre-trained models can dramatically reduce this. We always start with a data audit to give you a clear answer for your specific use case before any development begins.',
  },
  {
    q: 'How is this different from just using ChatGPT / off-the-shelf AI tools?',
    a: 'Off-the-shelf AI tools are built on general-purpose models trained on internet data. They have no knowledge of your business, your customers, or your historical performance. A custom ML model is trained exclusively on your data to predict your specific outcome — making it dramatically more accurate for your use case. A generic LLM cannot predict customer churn on your platform. A model we build from your CRM data, trained on 2 years of your churn history, can hit 85–92% accuracy on your specific cohort.',
  },
  {
    q: 'What happens when the model starts making worse predictions over time?',
    a: 'This is called model drift — a completely normal phenomenon that happens when the real world changes and training data no longer reflects it. All our production deployments include a monitoring layer that tracks prediction accuracy, input feature distributions, and outcome labels in real time. When performance drops below a configurable threshold, automated alerts trigger a retraining run using fresh data. We also conduct scheduled monthly performance reviews on retainer engagements to proactively catch degradation.',
  },
  {
    q: 'Can you work with our existing data infrastructure (Snowflake, BigQuery, etc.)?',
    a: 'Yes. We are infrastructure-agnostic. We have built ML pipelines on top of Snowflake, BigQuery, Databricks, Redshift, and on-premise SQL databases. We do not require you to move your data — we connect to your existing warehouse, build feature engineering pipelines there, and deploy models that read from and write back to your systems. If you have no data warehouse yet, we can help you stand one up as part of the engagement.',
  },
  {
    q: 'How do you ensure the model is not biased or discriminatory?',
    a: 'Before any production deployment, we run a structured fairness and bias audit. This includes checking model performance across demographic slices, testing for disparate impact, and examining which features are driving predictions. For regulated industries (finance, healthcare, HR), we adhere to explainability requirements — every prediction can be explained using SHAP values so there is a clear audit trail of why the model made a decision. We document all findings in a model card delivered before go-live.',
  },
  {
    q: 'Do you build models we can understand and explain to stakeholders?',
    a: 'Always. We separate model complexity from model explainability. For a high-complexity model (gradient boosted ensemble or neural network), we layer on post-hoc explainability using SHAP or LIME — producing feature importance rankings, individual prediction explanations, and summary charts your team can use with executives, regulators, or auditors. For some use cases (regulated credit scoring, HR decisions), we build inherently interpretable models (scorecards, logistic regression) by design.',
  },
  {
    q: 'Will we be locked in to you for model maintenance?',
    a: 'No. We deliver full model ownership — source code, training scripts, data pipeline code, trained artefacts, and documentation. Your team can run, retrain, and modify everything independently. We also offer training workshops for your data/engineering teams so they can manage the system internally after handover. Many clients choose our retainer for ongoing improvement and new model development, but it is never a requirement.',
  },
  {
    q: 'How do you measure whether an ML model is actually delivering business value?',
    a: 'We establish business metrics upfront — not just model metrics. A model\'s AUC or F1 score only tells you how accurate it is; it does not tell you if it is profitable. Before we start, we define the business metric we are targeting (e.g., revenue uplift, cost reduction, churn rate) and set up A/B tests or controlled experiments so we can measure causal impact post-deployment. This means you get a clear ROI number, not just a technical score.',
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ text, color = ACCENT }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-[2px] rounded-full" style={{ background: color }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{text}</span>
    </div>
  )
}

function FaqItem({ faq, index, open, onToggle }: {
  faq: { q: string; a: string }; index: number; open: boolean; onToggle: (i: number) => void
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'border-gray-200'}`}
      style={open ? { borderColor: `${ACCENT}60` } : {}}>
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-sky-50/40 transition-colors">
        <span className="text-[#0a1628] font-semibold text-sm md:text-base pr-4">{faq.q}</span>
        {open
          ? <ChevronUp size={18} style={{ color: ACCENT }} className="flex-shrink-0" />
          : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MachineLearningPage() {
  const { openModal } = useModal()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeCapability, setActiveCapability] = useState(0)
  const [activePackage, setActivePackage] = useState(1)
  const [activeTech, setActiveTech] = useState(0)

  const industry = industryUseCases[activeIndustry]
  const capability = capabilities[activeCapability]
  const IndustryIcon = industry.icon

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #020d1a 0%, #0a1628 55%, #011827 100%)' }}>
        <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full opacity-[0.12] blur-[140px]" style={{ background: ACCENT }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full opacity-[0.07] blur-[120px]" style={{ background: '#6366f1' }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium bg-white/8 border border-white/15 px-4 py-2 rounded-full transition-colors mb-10">
            <ArrowLeft size={15} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-extrabold tracking-wider uppercase" style={{ background: ACCENT }}>
                  <BrainCircuit size={12} /> AI Development
                </span>
                <span className="text-white/40 text-sm">Machine Learning Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Custom ML Models<br />
                <span style={{ color: '#7dd3fc' }}>Built on Your Data,</span><br />
                Deployed in Production
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                We engineer, train, and deploy machine learning systems that predict churn, detect fraud, optimise pricing, and automate decisions — integrated directly into your product or operations.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { val: '94%', label: 'Avg. model accuracy' },
                  { val: '<20ms', label: 'Inference latency' },
                  { val: '6+', label: 'ML verticals served' },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl px-4 py-3 text-center border border-white/10" style={{ background: 'rgba(14,165,233,0.10)' }}>
                    <div className="text-xl font-black text-white">{s.val}</div>
                    <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all shadow-lg" style={{ background: ACCENT }}>
                  Start with a Free Audit <ArrowRight size={16} />
                </button>
                <Link href="/live-demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:bg-white/10 transition-all">
                  See Live Projects <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            {/* Right — model training visual */}
            <div className="relative hidden lg:block">
              {/* Main card: model metrics */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 p-6" style={{ background: '#020d1a' }}>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/40 text-[11px] font-semibold uppercase tracking-widest">Model Training Run</p>
                    <p className="text-white font-black text-lg mt-0.5">Customer Churn Predictor v3.2</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: `${ACCENT}18`, border: `1px solid ${ACCENT}40` }}>
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
                    <span className="text-[11px] font-bold" style={{ color: '#22c55e' }}>Training complete</span>
                  </div>
                </div>

                {/* Metric rows */}
                <div className="space-y-3 mb-5">
                  {[
                    { metric: 'Accuracy', val: '91.4%', bar: 91, color: ACCENT },
                    { metric: 'Precision', val: '88.7%', bar: 89, color: '#6366f1' },
                    { metric: 'Recall', val: '93.1%', bar: 93, color: '#22c55e' },
                    { metric: 'AUC-ROC', val: '0.966', bar: 97, color: '#f59e0b' },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white/50 text-[11px] font-medium">{m.metric}</span>
                        <span className="text-white text-[13px] font-black">{m.val}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${m.bar}%`, background: m.color }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature importance */}
                <div className="rounded-2xl p-4 border border-white/10" style={{ background: 'rgba(14,165,233,0.06)' }}>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Top Predictive Features (SHAP)</p>
                  <div className="space-y-2">
                    {[
                      { feat: 'days_since_last_purchase', pct: 78 },
                      { feat: 'support_tickets_90d', pct: 61 },
                      { feat: 'login_frequency_decline', pct: 54 },
                      { feat: 'plan_downgrade_flag', pct: 47 },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-white/40 text-[10px] font-mono w-44 truncate flex-shrink-0">{f.feat}</span>
                        <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${f.pct}%`, background: `${ACCENT}90` }} />
                        </div>
                        <span className="text-white/50 text-[10px] w-7 text-right">{f.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-5 -right-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={12} style={{ color: ACCENT }} />
                  <span className="text-white text-xs font-semibold">+34% churn reduction</span>
                </div>
                <div className="text-white/40 text-[10px]">After 90-day deployment</div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0a1628] border rounded-2xl px-4 py-3 shadow-xl z-10" style={{ borderColor: `${ACCENT}40` }}>
                <div className="flex items-center gap-2">
                  <Clock size={12} style={{ color: '#7dd3fc' }} />
                  <span className="text-white text-xs font-semibold">14ms inference p99</span>
                </div>
                <div className="text-white/40 text-[10px]">Served via REST API, auto-scaled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Strip ──────────────────────────────────────────────── */}
      <section style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: BrainCircuit, val: '6+', label: 'ML disciplines mastered', color: ACCENT },
              { icon: BarChart3, val: '94%', label: 'Average model accuracy delivered', color: '#7dd3fc' },
              { icon: Zap, val: '<20ms', label: 'Production inference latency', color: '#22c55e' },
              { icon: Shield, val: '100%', label: 'Model ownership transferred to client', color: '#f59e0b' },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex flex-col items-center text-center py-8 px-4">
                  <Icon size={20} className="mb-2" style={{ color: s.color }} />
                  <div className="text-2xl md:text-3xl font-black text-white">{s.val}</div>
                  <div className="text-white/40 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── Industry Use Cases ───────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Industry Use Cases" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            ML That Moves the Metrics Your Business Cares About
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Every industry has its highest-value prediction problem. We have built production systems across these six verticals — each with measurable business outcomes.
          </p>

          {/* Industry tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industryUseCases.map((ind, i) => {
              const Icon = ind.icon
              return (
                <button key={i} onClick={() => setActiveIndustry(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeIndustry === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                  style={activeIndustry === i ? { background: ind.color } : {}}>
                  <Icon size={13} />
                  {ind.industry.split(' ')[0]}
                </button>
              )
            })}
          </div>

          {/* Active industry panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {/* Left — metrics + model */}
            <div className="p-6 lg:p-8" style={{ background: `${industry.color}06`, borderRight: '1px solid #e5e7eb' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${industry.color}20` }}>
                  <industry.icon size={18} style={{ color: industry.color }} />
                </div>
                <div>
                  <div className="font-black text-[#0a1628] text-base">{industry.industry}</div>
                  <div className="text-gray-400 text-xs">{industry.tagline}</div>
                </div>
              </div>

              {/* Business metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {industry.metrics.map((m, i) => (
                  <div key={i} className="rounded-xl p-3 text-center bg-white border border-gray-200">
                    <div className="font-black text-lg" style={{ color: industry.color }}>{m.val}</div>
                    <div className="text-gray-400 text-[10px] mt-0.5 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Model detail card */}
              <div className="rounded-2xl p-4 border border-gray-200 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit size={14} style={{ color: industry.color }} />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Example Model</span>
                </div>
                <p className="font-black text-[#0a1628] text-sm mb-2">{industry.model}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{industry.modelDesc}</p>
              </div>
            </div>

            {/* Right — use cases */}
            <div className="p-6 lg:p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                ML Problems We Solve in {industry.industry}
              </div>
              <div className="space-y-3 mb-8">
                {industry.useCases.map((uc, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-white">
                    <CheckCircle2 size={15} style={{ color: industry.color }} className="flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{uc}</span>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: industry.color }}>
                Build an ML Model for {industry.industry.split(' ')[0]} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* ── ML Capabilities ──────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="ML Capabilities" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Six ML Disciplines, One Engineering Team
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            From classic supervised models to deep learning and NLP — we match the right technique to your problem rather than forcing every problem into the same framework.
          </p>

          {/* Capability grid selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <button key={i} onClick={() => setActiveCapability(i)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all ${activeCapability === i ? 'shadow-md' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                  style={activeCapability === i ? { borderColor: cap.color, background: `${cap.color}08` } : {}}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${cap.color}15` }}>
                    <Icon size={18} style={{ color: cap.color }} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-700 leading-snug">{cap.type}</span>
                </button>
              )
            })}
          </div>

          {/* Active capability detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden">
            {/* Col 1 */}
            <div className="p-7 lg:border-r border-gray-200" style={{ background: `${capability.color}06` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${capability.color}20` }}>
                <capability.icon size={22} style={{ color: capability.color }} />
              </div>
              <div className="font-black text-[#0a1628] text-xl mb-2">{capability.type}</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{capability.tagline}</p>
              <div className="rounded-xl p-4 bg-white border border-gray-200">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">When to use</p>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.whenToUse}</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="p-7 border-b lg:border-b-0 lg:border-r border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Common Applications</p>
              <div className="space-y-2.5 mb-6">
                {capability.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white">
                    <CheckCircle2 size={13} style={{ color: capability.color }} className="flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3 */}
            <div className="p-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Algorithms & Tools We Use</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {capability.algorithms.map((algo) => (
                  <span key={algo} className="px-3 py-1.5 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 bg-white hover:border-gray-300 transition-colors">
                    {algo}
                  </span>
                ))}
              </div>
              <button onClick={openModal} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all w-full justify-center" style={{ background: capability.color }}>
                Discuss {capability.type} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* ── ML Pipeline ──────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <SectionLabel text="How It Works" />
              <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
                Our End-to-End ML Engineering Process
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                We do not just train a model and hand it over. Our process takes you from raw data to a monitored production system — with full documentation and team knowledge transfer.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Business metric-first', desc: 'Every model is tied to a measurable business outcome, not just a technical score.' },
                  { label: 'Versioned & reproducible', desc: 'Every training run is tracked. Results are fully reproducible 6 months later.' },
                  { label: 'No black boxes', desc: 'Every model ships with SHAP explainability so your team understands what drives predictions.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${ACCENT}20` }}>
                      <CheckCircle2 size={11} style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a1628] text-sm">{item.label}</div>
                      <div className="text-gray-400 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: ACCENT }}>
                See a Project Walkthrough <ArrowRight size={14} />
              </button>
            </div>

            {/* Pipeline steps */}
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {mlPipeline.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <div key={i} className="relative">
                      {i < mlPipeline.length - 1 && (
                        <div className="absolute left-[22px] top-[52px] w-0.5 h-6 z-0" style={{ background: `${step.color}30` }} />
                      )}
                      <div className="relative z-10 flex gap-4 p-4 border border-gray-200 rounded-2xl hover:shadow-sm transition-all bg-white">
                        <div className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: `${step.color}15` }}>
                          <Icon size={18} style={{ color: step.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: step.color }}>{step.step}</span>
                            <span className="font-bold text-[#0a1628] text-sm">{step.name}</span>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed mb-2">{step.desc}</p>
                          <div className="flex items-center gap-2">
                            <Award size={11} style={{ color: step.color }} />
                            <span className="text-[11px] font-semibold" style={{ color: step.color }}>{step.deliverable}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech Stack ───────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Tech Stack" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            Best-in-Class Tools, No Vendor Lock-in
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            We choose the right tool for each job. Our stack spans the full ML lifecycle — from raw data to monitored production inference.
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((ts, i) => (
              <button key={i} onClick={() => setActiveTech(i)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeTech === i ? 'text-white border-transparent' : 'text-gray-500 border-gray-200 hover:border-gray-300'}`}
                style={activeTech === i ? { background: ACCENT } : {}}>
                {techStack[i].category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack[activeTech].items.map((item) => (
              <div key={item} className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
                <span className="text-gray-700 text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>

          {/* Infrastructure note */}
          <div className="mt-10 rounded-2xl p-6 border border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, color: '#22c55e', title: 'Cloud Agnostic', desc: 'AWS, GCP, Azure, or your own on-premise infra. We deploy where your data lives.' },
                { icon: Code2, color: ACCENT, title: 'Open Source Core', desc: 'We build on battle-tested open-source frameworks — no surprise licensing costs.' },
                { icon: RefreshCw, color: '#f59e0b', title: 'Full Ownership', desc: 'You receive all source code, training scripts, and model artefacts on delivery.' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0a1628] text-sm mb-1">{item.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Implementation Timeline ──────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Timeline" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            From Data Audit to Production Model in 14 Weeks
          </h2>
          <p className="text-gray-500 text-base mb-12 max-w-2xl">
            Our structured delivery process turns an ML problem into a live, monitored system — with clearly defined milestones and deliverables at each stage.
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationTimeline.map((t, i) => (
                <div key={i} className="relative z-10">
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 p-5 border border-gray-200 rounded-2xl bg-white hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-md lg:mb-4" style={{ background: t.color }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="lg:text-center">
                      <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: t.color }}>{t.week}</div>
                      <div className="font-bold text-[#0a1628] text-sm mb-3">{t.phase}</div>
                      <div className="space-y-1.5">
                        {t.tasks.map(task => (
                          <div key={task} className="flex items-start gap-1.5 lg:justify-center">
                            <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: t.color }} />
                            <span className="text-gray-400 text-[11px] leading-relaxed lg:text-center">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <SectionLabel text="Engagement Models" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">
            From Proof of Concept to Full MLOps System
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-2xl">
            Whether you want to validate an idea first or go straight to production, we have an engagement model that fits where you are today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i}
                className={`rounded-3xl overflow-hidden border-2 transition-all cursor-pointer ${activePackage === i ? 'shadow-xl scale-[1.02]' : 'border-gray-200 hover:shadow-md'}`}
                style={{ borderColor: activePackage === i ? pkg.color : undefined }}
                onClick={() => setActivePackage(i)}>

                <div className="px-7 py-6 relative" style={{ background: `${pkg.color}10` }}>
                  {pkg.recommended && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest" style={{ background: pkg.color }}>
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: pkg.color }}>{pkg.name}</div>
                  <div className="font-black text-[#0a1628] text-lg mb-1">{pkg.scope}</div>
                  <div className="text-gray-400 text-xs italic mt-1">{pkg.ideal}</div>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-gray-400 text-xs">{pkg.timeline}</span>
                  </div>
                </div>

                <div className="px-7 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What's Included</div>
                  <div className="space-y-2 mb-5">
                    {pkg.includes.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} style={{ color: pkg.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl p-3.5 mb-5" style={{ background: `${pkg.color}08`, border: `1px solid ${pkg.color}25` }}>
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: pkg.color }}>Outcome</div>
                    <div className="text-gray-700 text-xs">{pkg.outcome}</div>
                  </div>

                  <button onClick={openModal} className="w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-all" style={{ background: pkg.color }}>
                    Start — {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #020d1a 0%, #0a1628 100%)' }}>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]" style={{ background: ACCENT }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-10" style={{ background: '#6366f1' }} />
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">Free Data Audit</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  What Could ML Predict<br />
                  <span style={{ color: '#7dd3fc' }}>in Your Business?</span>
                </h2>
                <p className="text-white/55 text-base max-w-md">
                  Share your data setup with our ML team. We identify the highest-value prediction problem, assess data readiness, and give you an honest feasibility report — no commitment required.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <button onClick={openModal} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm whitespace-nowrap" style={{ background: ACCENT }}>
                  Request Free Data Audit <ArrowRight size={16} />
                </button>
                <Link href="/services/ai-automation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-sm">
                  Explore AI Automation <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────────────────────── */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3 leading-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-base mb-10">Technical and commercial questions answered directly.</p>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} open={openFaq === i} onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)} />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Related Services ─────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionLabel text="Related Services" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-3">Complete Your AI Stack</h2>
          <p className="text-gray-500 text-base mb-10">ML models work best alongside these complementary AI and data services.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { slug: 'ai-automation', tag: 'AI Automation', title: 'AI Workflow Automation', desc: 'Operationalise your ML predictions — trigger automated workflows when the model surfaces a risk or opportunity.', color: '#10b981', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
              { slug: 'generative-ai', tag: 'Generative AI', title: 'Generative AI Solutions', desc: 'Combine predictive ML with generative AI for systems that both predict outcomes and produce content or recommendations.', color: '#8b5cf6', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
              { slug: 'ai-chatbot', tag: 'AI Chatbot', title: 'AI Chatbot Development', desc: 'Embed ML-powered intent detection and personalisation into your conversational AI layer.', color: '#6366f1', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80' },
              { slug: 'ai-consulting', tag: 'AI Consulting', title: 'AI Strategy Consulting', desc: 'Not sure where to start? Our AI strategy team helps you identify the highest-ROI ML use case for your business.', color: '#f5a623', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
            ].map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
                <div className="h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-3" style={{ background: s.color }}>{s.tag}</span>
                  <h3 className="font-bold text-[#0a1628] group-hover:text-sky-600 transition-colors mb-1.5 text-sm leading-snug">{s.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: s.color }}>
                    Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
