import {
  Rocket, ShieldCheck, Clock, BadgeCheck,
  Users, BrainCircuit,
} from 'lucide-react';

const pillars = [
  {
    icon: BrainCircuit,
    title: 'Google-Certified AI Agency',
    description: 'Officially certified by Google — our AI systems are production-ready, scalable, and enterprise-grade from day one.',
  },
  {
    icon: Rocket,
    title: '50% Faster Delivery',
    description: 'AI-accelerated workflows and battle-tested templates cut your development time in half without compromising quality.',
  },
  {
    icon: BadgeCheck,
    title: 'Fixed-Price, No Surprises',
    description: 'Transparent milestone-based pricing. You know the exact cost before we write a single line of code.',
  },
  {
    icon: ShieldCheck,
    title: 'NDA & Full IP Ownership',
    description: 'Signed NDAs before discovery. All intellectual property is transferred entirely to you upon project completion.',
  },
  {
    icon: Clock,
    title: '24/7 Dedicated Support',
    description: 'Post-launch maintenance, priority bug fixes, and ongoing support. We stay with you long after launch day.',
  },
  {
    icon: Users,
    title: '98% Client Retention',
    description: 'Most clients return for their next project. Our long-term partnerships are the strongest testimonial we have.',
  },
];

export default function WhyKotibox() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold text-[#f5a623] tracking-[0.2em] uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold
                         text-[#0a1628] mb-4 leading-tight max-w-2xl">
            What Sets Kotibox Apart From Every Other Agency
          </h2>
          <div className="w-12 h-[2px] bg-[#f5a623] rounded-full mb-5" />
          <p className="text-slate-500 text-[0.95rem] md:text-base max-w-xl leading-relaxed">
            We don't just deliver code — we deliver outcomes. Here's why 2,000+ businesses
            across 45+ countries trust us with their most critical digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group bg-white p-7 md:p-8 hover:bg-slate-50 transition-colors duration-200 cursor-default"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#0a1628]/5 flex items-center justify-center mb-5
                                group-hover:bg-[#f5a623] transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.8}
                    className="text-[#0a1628] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-[#0a1628] font-semibold text-base mb-2.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-[0.875rem] leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
