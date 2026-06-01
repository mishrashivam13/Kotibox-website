import React from 'react';

const processSteps = [
  {
    id: 1,
    title: "Select Your Service's",
    description: "We can help, regardless of whether you require a single service or wish to combine all six for optimal effect.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" // Replace with your "phone/checkmark" image path
  },
  {
    id: 2,
    title: "Describe Your Startup to Us",
    description: "We adapt everything to the particular requirements of your startup. Provide us with information about your company, stage, and objectives by completing our short form.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" // Replace with your "team meeting" image path
  },
  {
    id: 3,
    title: "Pay and let's make it happen.",
    description: "Use our safe Stripe payment method to finish your purchase. After confirmation, we'll get to work helping you launch your business.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" // Replace with your "woman with credit card" image path
  },
  {
    id: 4,
    title: "Launch & Grow",
    description: "We'll help you implement everything smoothly and support your next growth steps.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" // Replace with your "upward arrows" image path
  }
];

export default function StartupProcessSteps() {
  return (
    <section className="bg-white py-14 md:py-24 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div 
              key={step.id} 
              className="group relative aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden shadow-lg cursor-default"
            >
              
              {/* Background Image */}
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default Light Gradient (So images aren't totally flat) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Hover Overlay Container */}
              {/* The gradient perfectly mimics the dark blue fade seen in screenshots */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/80 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out
                              flex flex-col justify-center p-8 md:p-10">
                
                {/* Text Content (Slides up slightly on hover) */}
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl font-bold text-white mb-5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}