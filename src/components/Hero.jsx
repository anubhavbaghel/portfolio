import React from "react";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-16 max-w-7xl mx-auto z-10">
      {/* Drafting Board Top Metadata */}
      <div className="w-full flex flex-wrap justify-between items-center gap-4 border-b border-white/10 pb-4 mb-12 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500/80 rounded-sm"></span>
          <span>[ FOLIO: AB-2026 // WEB DEV ]</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>LOC: DELHI, INDIA (28.6139° N)</span>
          <span>SPEC: FULL-STACK & CMS</span>
          <span className="text-emerald-400 font-medium">● ACTIVE PRODUCTION</span>
        </div>
      </div>

      {/* Main Headline & Character */}
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
          <span className="text-amber-400">✦</span> Crafting High-Performance Websites & Tools
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1]">
          Turning raw ideas into <br />
          <span className="font-serif italic font-normal text-amber-200/90 underline decoration-amber-500/30 underline-offset-8">
            tangible digital experiences
          </span>
        </h1>

        {/* Profile Card / Studio Spec Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 bg-[#141417] border border-white/10 p-2.5 sm:pr-6 rounded-2xl shadow-lg relative group">
          <div className="relative">
            <img
              src={profileImg}
              alt="Anubhav Baghel"
              className="w-14 h-14 rounded-xl object-cover border border-white/15 group-hover:scale-105 transition-transform"
            />
            <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 bg-amber-500 text-black font-mono text-[9px] font-bold rounded">
              DEV
            </span>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="font-bold text-base text-zinc-100">Anubhav Baghel</span>
              <span className="text-xs text-zinc-500 font-mono">/ Delhi, IN</span>
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              WordPress • Wix • React • Next.js • TypeScript
            </p>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="mailto:code.anubhavbaghel@gmail.com"
            className="px-6 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm transition-all shadow-[0_2px_10px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
          >
            <span>Let's Discuss a Project</span>
            <span className="text-base">→</span>
          </a>

          <a
            href="/assets/Anubhav_Wordpress_Dev_Resume.pdf"
            download="Anubhav_Baghel_Resume.pdf"
            className="px-6 py-3 rounded-xl bg-[#18181b] hover:bg-[#202024] text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 font-mono text-xs font-medium transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>DOWNLOAD CV [PDF]</span>
          </a>
        </div>

        <div className="text-xs font-mono text-zinc-500 mt-2">
          Direct Inquiries:{" "}
          <a href="mailto:code.anubhavbaghel@gmail.com" className="text-zinc-300 hover:text-amber-400 underline decoration-zinc-700 transition-colors">
            code.anubhavbaghel@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;