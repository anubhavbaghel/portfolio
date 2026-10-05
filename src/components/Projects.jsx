import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaElementor,
  FaShopify,
  FaReact,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import {
  SiCpanel,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpo,
} from "react-icons/si";
import wdcImg from "../assets/wdc_ss.png";
import flydheeraImg from "../assets/flydheera_Ss.png";
import puravaImg from "../assets/purava_ss.png";
import divyaImg from "../assets/divyajewellers.png";
import drAnilImg from "../assets/dranilkumarsharma.png";
import womancartImg from "../assets/womancart.png";
import sewaexpoImg from "../assets/sewaexpo.png";
import syandanImg from "../assets/syandan.png";

const colorThemes = {
  blue: {
    border: "hover:border-blue-500/40",
    id: "group-hover:text-blue-500/15",
    title: "group-hover:text-blue-400",
    role: "text-blue-400",
    icon: "group-hover:text-blue-400",
    btn: "hover:bg-blue-500 hover:border-blue-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  orange: {
    border: "hover:border-orange-500/40",
    id: "group-hover:text-orange-500/15",
    title: "group-hover:text-orange-400",
    role: "text-orange-400",
    icon: "group-hover:text-orange-400",
    btn: "hover:bg-orange-500 hover:border-orange-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  },
  cyan: {
    border: "hover:border-cyan-500/40",
    id: "group-hover:text-cyan-500/15",
    title: "group-hover:text-cyan-400",
    role: "text-cyan-400",
    icon: "group-hover:text-cyan-400",
    btn: "hover:bg-cyan-500 hover:border-cyan-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
  amber: {
    border: "hover:border-amber-500/40",
    id: "group-hover:text-amber-500/15",
    title: "group-hover:text-amber-400",
    role: "text-amber-400",
    icon: "group-hover:text-amber-400",
    btn: "hover:bg-amber-500 hover:border-amber-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  emerald: {
    border: "hover:border-emerald-500/40",
    id: "group-hover:text-emerald-500/15",
    title: "group-hover:text-emerald-400",
    role: "text-emerald-400",
    icon: "group-hover:text-emerald-400",
    btn: "hover:bg-emerald-500 hover:border-emerald-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  fuchsia: {
    border: "hover:border-fuchsia-500/40",
    id: "group-hover:text-fuchsia-500/15",
    title: "group-hover:text-fuchsia-400",
    role: "text-fuchsia-400",
    icon: "group-hover:text-fuchsia-400",
    btn: "hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]",
  },
  indigo: {
    border: "hover:border-indigo-500/40",
    id: "group-hover:text-indigo-500/15",
    title: "group-hover:text-indigo-400",
    role: "text-indigo-400",
    icon: "group-hover:text-indigo-400",
    btn: "hover:bg-indigo-500 hover:border-indigo-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
  },
  sky: {
    border: "hover:border-sky-500/40",
    id: "group-hover:text-sky-500/15",
    title: "group-hover:text-sky-400",
    role: "text-sky-400",
    icon: "group-hover:text-sky-400",
    btn: "hover:bg-sky-500 hover:border-sky-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
  },
  teal: {
    border: "hover:border-teal-500/40",
    id: "group-hover:text-teal-500/15",
    title: "group-hover:text-teal-400",
    role: "text-teal-400",
    icon: "group-hover:text-teal-400",
    btn: "hover:bg-teal-500 hover:border-teal-500 hover:text-black",
    glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
  },
};

const projectsData = [
  {
    id: "01",
    title: "WDC India",
    role: "Full-stack frontend build",
    desc: "Took the project from zero — designed UI mockups, then coded the complete website with custom HTML, CSS, and JavaScript. No frameworks, full ownership.",
    categories: ["html"],
    tags: ["Vanilla Stack"],
    pills: ["Pixel Perfect", "Zero Frameworks", "Hand-coded", "Fluid UI"],
    tech: ["HTML", "CSS", "JS"],
    image: wdcImg,
    link: "https://wdc-design-2.vercel.app/",
    color: "blue",
  },
  {
    id: "02",
    title: "Flydheera",
    role: "Design to delivery",
    desc: "Created wireframes and visual mockups, then built the site in Elementor. Managed the complete flow from initial design concept through final client delivery.",
    categories: ["elementor", "wp"],
    tags: ["WP Elementor"],
    pills: ["Visual Dev", "Wireframing", "Turnkey Delivery"],
    tech: ["WordPress", "Elementor"],
    image: flydheeraImg,
    link: "https://flydheera.com/",
    color: "orange",
  },
  {
    id: "03",
    title: "Purava",
    role: "Design to delivery",
    desc: "Led end-to-end development — from mockup design through Elementor implementation and final handoff. Maintained brand consistency across all pages.",
    categories: ["elementor", "wp"],
    tags: ["WP Elementor"],
    pills: ["Brand Identity", "End-to-End", "Figma to Web"],
    tech: ["WordPress", "Elementor"],
    image: puravaImg,
    link: "https://puravabath.com/",
    color: "cyan",
  },
  {
    id: "04",
    title: "Divya Jewellers",
    role: "Multi-page redesign",
    desc: "Redesigned multiple pages for this jewellery brand using both Elementor and Divi, bringing a refined, luxury aesthetic to the existing site.",
    categories: ["elementor", "wp"],
    tags: ["WP/Divi/Elementor"],
    pills: ["Luxury UI", "E-com Revamp", "Multi-builder"],
    tech: ["WordPress", "Elementor", "Divi"],
    image: divyaImg,
    link: "https://divyajewellers.co.in/",
    color: "amber",
  },
  {
    id: "05",
    title: "Dr. Anil Kumar Sharma",
    role: "Complete website build",
    desc: "Developed a full professional website for a doctor client using WordPress and Divi — covering design, development, and deployment.",
    categories: ["wp"],
    tags: ["WP Divi"],
    pills: ["Healthcare Tech", "Rapid Build", "SEO Ready"],
    tech: ["WordPress", "Divi"],
    image: drAnilImg,
    link: "https://dranilkumarsharma.com/",
    color: "emerald",
  },
  {
    id: "06",
    title: "Womancart",
    role: "Shopify page development",
    desc: "Built and customised multiple pages on this Shopify store — working within theme constraints while delivering polished, conversion-focused layouts.",
    categories: ["shopify"],
    tags: ["Shopify Liquid"],
    pills: ["Conversion UX", "Theme Mod", "Storefront"],
    tech: ["Shopify"],
    image: womancartImg,
    link: "https://womancart.com.au/",
    color: "fuchsia",
  },
  {
    id: "07",
    title: "SewaExpo & Multi-Site",
    role: "Deployment & management",
    desc: "Deployed and actively manages SewaExpo and several other websites on cPanel. Handles version control, backups, domain management, and ongoing maintenance.",
    categories: ["devops", "wp"],
    tags: ["cPanel DevOps"],
    pills: ["Server Ops", "CI/CD", "Uptime Guarantee"],
    tech: ["cPanel", "WordPress"],
    image: sewaexpoImg,
    link: "https://www.sewaexpo.com/",
    color: "indigo",
  },
  {
    id: "08",
    title: "Syandan Aviations",
    role: "Multi-page development",
    desc: "Built multiple pages for this aviation brand's website, focusing on professional presentation and smooth user experience across the entire site.",
    categories: ["wp", "elementor"],
    tags: ["WP Elementor"],
    pills: ["Aero UI", "Corporate Site", "Scalable"],
    tech: ["WordPress", "Elementor"],
    image: syandanImg,
    link: "https://flydheera.com/",
    color: "sky",
  },
];

const filters = [
  { id: "all", label: "All Works" },
  { id: "wp", label: "WordPress" },
  { id: "elementor", label: "Elementor" },
  { id: "html", label: "Vanilla" },
  { id: "shopify", label: "Shopify" },
  { id: "devops", label: "DevOps" },
];

const logoMap = {
  HTML: <FaHtml5 className="w-full h-full" />,
  CSS: <FaCss3Alt className="w-full h-full" />,
  JS: <FaJs className="w-full h-full" />,
  React: <FaReact className="w-full h-full text-cyan-400" />,
  "Next.js": <SiNextdotjs className="w-full h-full text-white" />,
  TypeScript: <SiTypescript className="w-full h-full text-blue-400" />,
  MongoDB: <SiMongodb className="w-full h-full text-emerald-400" />,
  WordPress: <FaWordpress className="w-full h-full" />,
  Elementor: <FaElementor className="w-full h-full" />,
  Divi: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.294 5h5.176l-2.582 6.959-2.594-6.959zm-1.54 8.041l-2.582-6.96h5.175l-.019.052-2.574 6.908zm6.668 0l-2.574-6.908-.019-.052h5.175l-2.582 6.96z" />
    </svg>
  ),
  Shopify: <FaShopify className="w-full h-full" />,
  cPanel: <SiCpanel className="w-full h-full" />,
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const carouselRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  // Multiply items for seamless continuous looping
  const carouselItems = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    if (filteredProjects.length === 1) {
      return [
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
      ];
    }
    if (filteredProjects.length === 2) {
      return [
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
      ];
    }
    return [...filteredProjects, ...filteredProjects];
  }, [filteredProjects]);

  // Reset scroll on filter change
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
    }
  }, [activeFilter]);

  // 60fps Smooth Automatic Horizontal Running Carousel
  useEffect(() => {
    const container = carouselRef.current;
    if (!container || carouselItems.length === 0) return;

    let animationFrameId;
    let lastTime = null;
    const scrollSpeed = 0.85; // Pixels per frame at ~60fps

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      const effectivePause = isPaused || isManualPaused || isDraggingRef.current;

      if (!effectivePause && container) {
        // Adjust scroll increment relative to 60fps standard
        const increment = scrollSpeed * (deltaTime / 16.67);
        container.scrollLeft += increment;

        // Loop seamlessly back once reaching half of the duplicated scroll area
        const halfScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= halfScroll) {
          container.scrollLeft -= halfScroll;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isManualPaused, carouselItems]);

  // Manual scroll controls
  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const cardWidth = window.innerWidth < 640 ? 320 : 420;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll Handlers (for Desktop & Touch)
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - (carouselRef.current?.offsetLeft || 0);
    scrollLeftRef.current = carouselRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <div id="projects" className="py-20 px-4 md:px-6 max-w-full mx-auto z-10 relative overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 max-w-7xl mx-auto text-center">
        <h2
          className="sr-only"
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
          }}
        >
          Projects section
        </h2>
        <p className="text-teal-500 font-semibold uppercase tracking-wider mb-2">
          Selected work
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-center">
          Projects I've <em className="text-teal-600 not-italic">built</em>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl">
          Explore a live rotating showcase of my web projects. Hover or touch to pause, or swipe freely horizontally.
        </p>
      </div>

      {/* Filter Tabs & Navigation Controls */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-10 px-2">
        {/* Categories */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border text-sm sm:text-base transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-teal-500 text-black border-teal-500 font-semibold shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                  : "border-gray-700 text-gray-300 hover:border-teal-500 hover:text-teal-400 bg-black/40 backdrop-blur-sm"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Carousel Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-teal-500/20 hover:border-teal-500/50 hover:text-teal-400 text-gray-300 flex items-center justify-center transition-all duration-300 backdrop-blur-md active:scale-95"
            title="Previous project"
            aria-label="Previous project"
          >
            <FaChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsManualPaused(!isManualPaused)}
            className={`w-10 h-10 rounded-full border text-sm flex items-center justify-center transition-all duration-300 backdrop-blur-md active:scale-95 ${
              isManualPaused
                ? "bg-teal-500 text-black border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                : "border-white/10 bg-white/5 hover:bg-teal-500/20 hover:border-teal-500/50 hover:text-teal-400 text-gray-300"
            }`}
            title={isManualPaused ? "Resume Auto-Carousel" : "Pause Auto-Carousel"}
            aria-label={isManualPaused ? "Resume Auto-Carousel" : "Pause Auto-Carousel"}
          >
            {isManualPaused ? <FaPlay className="w-3.5 h-3.5 ml-0.5" /> : <FaPause className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-teal-500/20 hover:border-teal-500/50 hover:text-teal-400 text-gray-300 flex items-center justify-center transition-all duration-300 backdrop-blur-md active:scale-95"
            title="Next project"
            aria-label="Next project"
          >
            <FaChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track Container */}
      <div className="relative w-full">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-black via-black/60 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-black via-black/60 to-transparent z-20" />

        {/* Scrolling Viewport */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseUpOrLeave();
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-6 px-4 md:px-8 cursor-grab active:cursor-grabbing select-none"
        >
          {carouselItems.map((project, index) => {
            const theme = colorThemes[project.color] || colorThemes.teal;
            return (
              <div
                key={`${project.id}-${index}`}
                className={`group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden ${theme.border} ${theme.glow} transition-all duration-500 flex flex-col w-[85vw] sm:w-[380px] md:w-[420px] flex-shrink-0 hover:-translate-y-1.5`}
              >
                {/* Image Section */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <span className={`text-6xl sm:text-7xl font-black text-white/[0.04] absolute right-4 top-2 select-none ${theme.id} transition-colors duration-300 z-10 pointer-events-none`}>
                    {project.id}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow relative z-20 -mt-4 bg-[#0a0a0a]">
                  <h3 className={`text-xl sm:text-2xl font-bold text-white mb-1 ${theme.title} transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs sm:text-sm ${theme.role} mb-3.5 tracking-wide font-medium`}>
                    {project.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Bottom section of the card */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    {/* Tech Stack Logos */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        {project.tech.map((techName) => (
                          <div key={techName} title={techName} className="flex items-center">
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 ${theme.icon} transition-colors duration-300`}>
                              {logoMap[techName] || (
                                <span className="text-xs font-bold text-gray-400">{techName}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                      {project.pills.map((pill) => (
                        <span
                          key={pill}
                          className="text-[11px] sm:text-xs font-medium px-2.5 py-1 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-colors border border-white/5"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseDown={(e) => e.stopPropagation()}
                        className={`flex-1 text-center px-4 py-2.5 bg-white/5 border border-white/10 text-gray-200 rounded-xl ${theme.btn} font-medium transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-2`}
                      >
                        <span>{project.github && !project.link.includes("vercel") ? "View Release" : "Live Demo"}</span>
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseDown={(e) => e.stopPropagation()}
                          className="px-3.5 py-2.5 bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center justify-center"
                          title="GitHub Repository"
                        >
                          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-8 flex flex-col items-center gap-2 text-center">
        <span className="text-gray-500 text-xs sm:text-sm font-medium">
          Showing {filteredProjects.length} projects &bull; Continuous Auto-Run &bull; Swipe / Hover to interact
        </span>
      </div>
    </div>
  );
};

export default Projects;
