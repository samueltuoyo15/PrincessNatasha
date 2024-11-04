import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation will happen every time the element comes into view
    });
  }, []);

  return (
    <section className="w-full px-6 md:px-12 py-16 bg-gray-50 mt-32">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-5xl font-serif mb-8 text-center md:text-left"
          data-aos="fade-right"
        >
          <span className="italic">Here's What I Can Do,</span>{" "}
          <span className="text-[#b83330] text-4xl md:text-5xl">For You!</span>
        </h2>
        <p
          className="text-lg md:text-xl font-['AncientKai'] mb-8 text-center md:text-left"
          style={{ fontFamily: 'AncientKai' }}
          data-aos="fade-up"
        >
          Tell your brand story in a way that converts passing leads to loyal
          paying customers
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-8" data-aos="fade-up">
            {/* Content Writing Section */}
            <div>
              <h3 className="text-[32px] md:text-[43.1px] font-['Radley'] italic mb-4 text-[#9b4819]">
                Content Writing
              </h3>
              <p className="text-black-400 mb-6 text-[18px] md:text-[21px] font-['AncientKai']">
                Writing to connect with your audience at that harmonious
                creative & content level of expertise that will all writers are
                expected to have. Frankly, I've spent a lot of time honing my
                skills, working with clients from across the globe, and
                gathering SEO knowledge/certifications like infinity stones. So,
                I know my onions, and I can be the secret to your success!
              </p>
            </div>

            {/* Content Strategy Section */}
            <div>
              <h3 className="text-[32px] md:text-[43.1px] font-['Radley'] italic mb-4 text-[#9b4819]">
                Content Strategy
              </h3>
              <p className="text-black-400 mb-6 text-[18px] md:text-[21px] font-['AncientKai']">
                Want to let those business goals hit? Don't know where to start?
                Leave the dirty work to me. From audience identification and
                channel selection to brand voice and my fire content creative
                plan, which we will share, your content will be in line with
                your target audience - perfectly curated to convert at first
                sight.
              </p>
            </div>
          </div>

          {/* Video/GIF Section */}
          <div
            className="md:w-1/2 rounded-lg overflow-hidden"
            data-aos="fade-left"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[900px] rounded-lg object-cover ml-auto mb-8"
              style={{
                borderRadius: '20px',
                backgroundColor: '#8B4513',
              }}
            >
              <source src="/Servicesimg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="bg-[#b83330] text-white px-8 py-2 rounded-md mx-auto block relative overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#b83330] before:to-[#a12d2a] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
            <span className="relative z-10">I Want In!</span>
          </button>
        </div>
      </div>
    </section>
  );
}