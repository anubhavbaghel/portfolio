import React from "react";
import profileImg from "../assets/profile.png";
import DigitalConnections from "./DigitalConnections";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-end min-h-screen max-w-full gap-5 px-4 pt-24 pb-12 text-center relative z-10 overflow-hidden">
      {/* Subtle Sci-Fi Digital Connection Network */}
      <DigitalConnections />

      <h1 className="text-4xl md:text-7xl font-bold z-10 text-white">
        Turning ideas into <br />
        <span className="italic text-gray-400">web experiences</span>
      </h1>

      <div className="flex flex-col items-center gap-3 z-10">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Hi, I'm Anubhav</h2>
          <img
            src={profileImg}
            alt="Anubhav Baghel"
            className="border-none rounded-full w-[60px] h-[60px] object-cover hover:scale-125 transition-transform duration-300"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-white">A Web Developer</h2>
        </div>
        <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
          WordPress &bull; Wix &bull; React &bull; Next.js
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center z-10 mt-4 mb-[6%]">
        <a
          href="mailto:code.anubhavbaghel@gmail.com"
          className="bg-white text-black font-semibold rounded-full px-6 py-2.5 hover:bg-gray-200 border border-white transition-all duration-300 cursor-pointer text-sm md:text-base"
        >
          Let's Connect
        </a>
        <a
          href="/assets/Anubhav_Wordpress_Dev_Resume.pdf"
          download="Anubhav_Baghel_Resume.pdf"
          className="bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/15 text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
        >
          <span>Download CV</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        <div className="text-sm sm:text-base text-gray-400">
          <a href="mailto:code.anubhavbaghel@gmail.com" className="hover:text-white transition-colors">
            code.anubhavbaghel@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;