import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Side: Header & Intro */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-gray-400 font-medium uppercase tracking-wider mb-2 text-sm">
            Discover
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <em className="text-gray-400 not-italic">Me</em>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mb-8"></div>
          
          <p className="text-2xl text-gray-200 font-medium leading-snug mb-6">
            Web Developer with hands-on experience building, maintaining and delivering production-ready websites.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            Based in New Delhi, I build responsive, accessible, and high-performance websites using <strong className="text-white font-semibold">WordPress, Wix, HTML, CSS, JavaScript, React, and Next.js</strong>. Experienced in responsive implementation, UI/UX development, website maintenance, troubleshooting, SEO, and QA testing.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            Currently contributing to <strong className="text-white font-semibold">60+ client websites</strong> at Adaan Digital Solutions, ensuring design-to-code accuracy, cross-browser compatibility, and seamless user experiences across desktop, tablet, and mobile.
          </p>

          {/* Education Card */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 mt-2 flex items-start gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white flex-shrink-0 mt-1">
              <SchoolIcon />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-gray-400 text-sm">Indira Gandhi National Open University (IGNOU), Delhi &bull; <span className="text-gray-300">2026 – 2029</span></p>
            </div>
          </div>
        </div>

        {/* Right Side: Cards / Values */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {/* Card 1 */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300">
              <CodeIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">Clean Code</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Writing maintainable, scalable, and responsive code with modern web standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg sm:translate-y-8">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300">
              <LightbulbIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">Creative Logic</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turning complex design wireframes into intuitive, high-converting digital products.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg sm:-translate-y-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300">
              <AutoAwesomeIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">AI & Innovation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leveraging AI-assisted development and prompt engineering to build smarter web tools.
            </p>
          </div>

          {/* Card 4 - Projects Highlight */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center text-center group shadow-lg sm:translate-y-4">
            <h3 className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">60+</h3>
            <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Websites Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;