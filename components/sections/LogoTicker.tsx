import React from 'react';

// Updated array matching your exact filenames
const logos = [
  { id: 1, name: 'Swiggy', src: '/images/logos/Swiggy.png' },
  { id: 2, name: 'Sparqly', src: '/images/logos/sparqly.png' },
  { id: 3, name: 'Saras Dairy', src: '/images/logos/saras-dairy.png' },
  { id: 4, name: 'Xoto', src: '/images/logos/xoto.png' },
  { id: 5, name: 'Drustee', src: '/images/logos/drustee.png' },
  { id: 6, name: 'Kirana King', src: '/images/logos/Kirana-King (1).png' },
  { id: 7, name: 'Koushi', src: '/images/logos/koshi.png' },
  { id: 8, name: 'Kuku FM', src: '/images/logos/Kuku-FM.png' },
  { id: 9, name: 'SBI Bank', src: '/images/logos/SBI-Bank.png' },
  { id: 10, name: 'Dropd', src: '/images/logos/dropd.png' },
  { id: 11, name: 'Brand Logo', src: '/images/logos/brandlogo.png' }
];

export default function LogoTicker() {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden border-y border-slate-100">
      <div className="max-w-[1600px] mx-auto relative flex items-center">
        
        {/* Left and Right Fading Gradients (For smooth entry/exit effect) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex w-full group">
          
          {/* First List */}
          <div className="flex items-center justify-around min-w-full gap-12 md:gap-24 animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] pr-12 md:pr-24">
            {logos.map((logo) => (
              <img
                key={`first-${logo.id}`}
                src={logo.src}
                alt={logo.name}
                /* Removed grayscale, added hover:scale-105 for a nice pop effect */
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0"
              />
            ))}
          </div>

          {/* Second List (Duplicated for infinite looping effect) */}
          <div className="flex items-center justify-around min-w-full gap-12 md:gap-24 animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] pr-12 md:pr-24">
            {logos.map((logo) => (
              <img
                key={`second-${logo.id}`}
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0"
              />
            ))}
          </div>
          
        </div>
      </div>

      {/* Keyframes custom CSS for the sliding animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </section>
  );
}