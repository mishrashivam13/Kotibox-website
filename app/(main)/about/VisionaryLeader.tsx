'use client'
import React from 'react';
export default function VisionaryLeader() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left - Text */}
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-[#0a1628] mb-4">
              Meet Our Visionary Leader
            </h2>
            <div className="w-16 h-1 bg-[#f5a623] rounded-full mb-8" />
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                "We at Kotibox Global Tech are committed to creating technology 
                that gives businesses more power. With a background in web and 
                mobile app development, our CEO's vision propels innovation, 
                client success, and sustained digital expansion across sectors.
              </p>
              <p>
                Our goal is to provide top-notch digital solutions that spur 
                development. Guided by our CEO's leadership, we transform ideas 
                into innovative mobile and web products that redefine user 
                experiences and build strong business impact globally.
              </p>
              <p>
                Kotibox Global Tech is influencing the direction of technology 
                under the direction of our CEO. We develop cutting-edge, scalable 
                web platforms and mobile apps that enable companies to prosper 
                in the cutthroat digital marketplace."
              </p>
            </div>
          </div>

          {/* Right - CEO Card */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="h-80 overflow-hidden">
                <img
                  src="/images/about/sir.jpg"
                  alt="Sachin Khandelwal"
                  className="w-full h-full object-cover object-top
                             hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-extrabold text-[#0a1628] mb-1">
                  Sachin Khandelwal
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}