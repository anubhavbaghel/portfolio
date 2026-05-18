import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-end h-screen max-w-full gap-5 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_25%)] pointer-events-none" />

      <h1 className="text-5xl md:text-7xl font-bold z-10">
        Turning ideas into <br></br>{" "}
        <span className="italic text-teal-600">web experiences</span>
      </h1>
      <div className="flex flex-col items-center gap-2 z-10">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Hi, I'm</h2>
          <h2 className="text-2xl md:text-3xl font-semibold">Anubhav</h2>
          <img
            src="./src/assets/profile.png"
            alt="anubhav"
            className="border-none rounded-full w-[60px]"
          />
          <h2 className="text-2xl md:text-3xl font-semibold">A Web Developer</h2>
        </div>
        {/* <p className="w-[40%] text-center text-xl ">
          Software developer and creative thinker from New Delhi who loves
          building digital experiences, exploring new technologies, and turning
          random ideas into real projects at the intersection of tech,
          creativity, and curiosity.
        </p> */}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center z-10 mb-4">
        <button className="border border-gray-600 rounded-full px-4 py-2 hover:bg-teal-500 hover:text-black">
          Let's Connect
        </button>
        <div className="text-sm sm:text-base">
          <a href="mailto:code.anubhavbaghel@gmail.com">
            code.anubhavbaghel@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
