import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Side: Header & Intro */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-teal-500 font-semibold uppercase tracking-wider mb-2">
            Discover
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <em className="text-teal-600 not-italic">Me</em>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8"></div>
          
          <p className="text-2xl text-gray-300 font-medium leading-snug mb-6">
            I'm a passionate web developer focused on crafting clean, user-friendly experiences.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            Based in New Delhi, I specialize in building responsive frontend applications and robust full-stack solutions. My journey in tech started with a curiosity for how things work on the web, which quickly evolved into a dedicated career.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or turning random ideas into real-world projects. I believe in continuous learning and the power of technology to solve real problems.
          </p>
        </div>

        {/* Right Side: Cards / Values */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {/* Background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card 1 */}
          <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-teal-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <CodeIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Clean Code</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Writing maintainable, scalable, and efficient code is my top priority.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-teal-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg sm:translate-y-8">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <LightbulbIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Creative Logic</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turning complex problems into elegant, intuitive digital solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-teal-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg sm:-translate-y-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <AutoAwesomeIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Modern UI/UX</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Focusing on pixel-perfect, accessible, and engaging interfaces.
            </p>
          </div>

          {/* Card 4 - Projects Highlight */}
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-teal-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center text-center group shadow-lg sm:translate-y-4">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">8+</h3>
            <p className="text-gray-300 font-medium text-sm uppercase tracking-widest">Projects Built</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;