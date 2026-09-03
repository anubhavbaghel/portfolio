import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Top Docket Marker */}
      <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
        <span className="stamp-tag text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
          SECTION // 01
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 font-sans">
          Studio Profile & Philosophy
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Side: Editorial Bio */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <p className="text-xl sm:text-2xl text-zinc-200 font-medium leading-relaxed mb-6">
            I am a web developer with hands-on production experience building, maintaining, and delivering high-impact websites.
          </p>
          
          <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            <p>
              Based in New Delhi, I work across <strong className="text-zinc-100 font-semibold">WordPress, Wix, HTML, CSS, JavaScript, React, and Next.js</strong>. My workflow emphasizes design-to-code accuracy, responsive behaviour, accessibility standards, SEO, and rigorous cross-browser testing.
            </p>
            <p>
              Currently contributing to <strong className="text-amber-300 font-semibold">60+ client websites</strong> at Adaan Digital Solutions, ensuring client requirements and designer wireframes translate into high-converting, resilient digital products.
            </p>
          </div>

          {/* Academic Record Docket Card */}
          <div className="paper-card rounded-2xl p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 px-3 py-1 bg-white/[0.04] border-b border-l border-white/10 text-[10px] font-mono text-zinc-400 rounded-bl-lg">
              ACADEMIC RECORD
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 flex-shrink-0 mt-1">
                <SchoolIcon />
              </div>
              <div>
                <h4 className="text-zinc-100 font-semibold text-base">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-zinc-400 text-xs font-mono mt-1">
                  Indira Gandhi National Open University (IGNOU), Delhi &bull; <span className="text-amber-400">2026 – 2029</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Tactile Value Index Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="paper-card rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-white/[0.04] border border-white/10 rounded-lg flex items-center justify-center text-zinc-200">
                <CodeIcon fontSize="small" />
              </div>
              <span className="stamp-tag text-[10px] text-zinc-500 font-mono">SPEC_01</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">Clean Architecture</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Writing maintainable, scalable, semantic code adhering to modern web standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="paper-card rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-1 sm:translate-y-4">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-white/[0.04] border border-white/10 rounded-lg flex items-center justify-center text-zinc-200">
                <LightbulbIcon fontSize="small" />
              </div>
              <span className="stamp-tag text-[10px] text-zinc-500 font-mono">SPEC_02</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">Pragmatic Logic</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Translating design wireframes into intuitive, responsive, high-converting interfaces.
            </p>
          </div>

          {/* Card 3 */}
          <div className="paper-card rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-1 sm:-translate-y-2">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-white/[0.04] border border-white/10 rounded-lg flex items-center justify-center text-zinc-200">
                <AutoAwesomeIcon fontSize="small" />
              </div>
              <span className="stamp-tag text-[10px] text-zinc-500 font-mono">SPEC_03</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-100 mb-2">AI-Augmented Dev</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Leveraging modern AI tooling & prompt workflows for accelerated debugging and delivery.
            </p>
          </div>

          {/* Card 4 - Highlight Stamp */}
          <div className="paper-card bg-[#18181c] rounded-2xl p-6 relative flex flex-col justify-center items-center text-center border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 sm:translate-y-2">
            <span className="stamp-tag text-[10px] text-amber-500 uppercase tracking-widest mb-1">
              PRODUCTION IMPACT
            </span>
            <h3 className="text-4xl sm:text-5xl font-black text-zinc-100 font-mono tracking-tight my-1">
              60+
            </h3>
            <p className="text-zinc-400 text-xs font-mono">Websites Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;