import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-end min-h-screen max-w-full gap-5 px-4 pt-24 pb-12 text-center relative z-10 overflow-hidden">
      {/* Subtle Dynamic Moving Glow Background */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -35, 20, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[380px] bg-gradient-to-r from-teal-500/20 via-cyan-500/15 to-emerald-500/20 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 30, -25, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[380px] h-[380px] bg-teal-500/15 rounded-full blur-[110px] pointer-events-none -z-10"
      />

      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -40, 25, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 translate-x-1/2 w-[340px] h-[340px] bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none -z-10"
      />

      <h1 className="text-4xl md:text-7xl font-bold z-10">
        Turning ideas into <br />
        <span className="italic text-teal-600">web experiences</span>
      </h1>

      <div className="flex flex-col items-center gap-3 z-10">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Hi, I'm Anubhav</h2>
          <img
            src={profileImg}
            alt="Anubhav Baghel"
            className="border-none rounded-full w-[60px] h-[60px] object-cover hover:scale-125 transition-transform duration-300"
          />
          <h2 className="text-2xl md:text-3xl font-semibold">A Web Developer</h2>
        </div>
        <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
          WordPress &bull; Wix &bull; React &bull; Next.js
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center z-10 mt-4 mb-[6%]">
        <a
          href="mailto:code.anubhavbaghel@gmail.com"
          className="border border-gray-600 rounded-full px-6 py-2.5 hover:bg-teal-500 hover:text-black hover:border-teal-500 font-medium transition-all duration-300 cursor-pointer"
        >
          Let's Connect
        </a>
        <a
          href="/assets/Anubhav_Wordpress_Dev_Resume.pdf"
          download="Anubhav_Baghel_Resume.pdf"
          className="bg-white/10 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/20 text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 flex items-center gap-2"
        >
          <span>Download CV</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        <div className="text-sm sm:text-base text-gray-400">
          <a href="mailto:code.anubhavbaghel@gmail.com" className="hover:text-teal-400 transition-colors">
            code.anubhavbaghel@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;