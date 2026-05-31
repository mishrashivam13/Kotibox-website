import React from 'react';
import { 
  ArrowRight, 
  BrainCircuit, 
  Users, 
  Settings, 
  MessageSquareShare 
} from 'lucide-react';

export default function GrowthJourney() {
  const cards = [
    {
      id: 1,
      icon: BrainCircuit,
      title: 'AI-Powered Transformation',
      description: 'From predictive analytics to intelligent automation, we deploy AI to solve complex business challenges and uncover new opportunities.',
      // Image added to maintain grid balance, you can change this
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' // AI abstract image
    },
    {
      id: 2,
      icon: Users,
      title: 'Human-Centric Approach',
      description: 'While AI accelerates processes, our seasoned developers ensure the human touch remains at the core, crafting exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' 
    },
    {
      id: 3,
      icon: Settings,
      title: 'Future-Proof Scalability',
      description: 'We build solutions that can adapt and grow with your business. Our architecture ensures your platform scales seamlessly for future needs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' 
    },
    {
      id: 4,
      icon: MessageSquareShare,
      title: 'Transparent Collaboration',
      description: 'Stay informed throughout the entire development process with clear timelines, regular updates, and completely open communication.',
      // Image added to maintain grid balance
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800' // Collaboration image
    }
  ];

  return (
    <section className="bg-[#f8fafc] py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fdf4e6] border border-[#f5a623]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f5a623]"></span>
            <span className="text-[#f5a623] text-sm font-bold tracking-wide uppercase">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-[#0a1628] leading-tight mb-6 tracking-tight">
            How We Empower Your <br className="hidden md:block" /> 
            <span className="text-[#f5a623] relative inline-block mt-2 md:mt-0">
              Digital Growth
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#f5a623]/20 rounded-full"></span>
            </span> Journey
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We blend innovation, strategy, and technology to accelerate your digital growth 
            with scalable, future-ready solutions.
          </p>
        </div>

        {/* --- Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            
            return (
              <div 
                key={card.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-[#f5a623]/30 transition-all duration-500 flex flex-col h-full cursor-default hover:-translate-y-1"
              >
                {/* Top Image Banner */}
                <div className="h-48 w-full overflow-hidden relative bg-slate-100">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Very subtle light overlay to make images look soft */}
                  <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                </div>

                {/* Card Content */}
                <div className="p-8 md:p-10 flex flex-col flex-grow relative">
                  
                  {/* Floating Icon Box (Overlaps the image slightly) */}
                  <div className="absolute -top-10 left-8 md:left-10 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-slate-50 group-hover:bg-[#f5a623] transition-colors duration-500 z-10">
                    <Icon strokeWidth={2} className="w-8 h-8 text-[#f5a623] group-hover:text-white transition-colors duration-500" />
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-[#0a1628] mb-4">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-[15.5px] leading-relaxed mb-8 flex-grow">
                      {card.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <button className="flex items-center gap-2 text-[#f5a623] font-semibold text-sm hover:text-[#d98c19] transition-colors cursor-pointer w-fit">
                      Explore Strategy 
                      <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}