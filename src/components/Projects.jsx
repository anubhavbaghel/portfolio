import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaElementor, FaShopify, FaReact, FaGithub } from "react-icons/fa";
import { SiCpanel, SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import wdcImg from "../assets/wdc_ss.png";
import flydheeraImg from "../assets/flydheera_Ss.png";
import puravaImg from "../assets/purava_ss.png";
import divyaImg from "../assets/divyajewellers.png";
import drAnilImg from "../assets/dranilkumarsharma.png";
import womancartImg from "../assets/womancart.png";
import sewaexpoImg from "../assets/sewaexpo.png";
import syandanImg from "../assets/syandan.png";

const projectsData = [
  {
    id: "01",
    title: "Loco — Social Discovery Platform",
    role: "Full-Stack Web Application",
    desc: "Built a responsive full-stack application using Next.js, React and TypeScript for exploring events, locations, food, and music. Integrated MongoDB/Mongoose, API routes and Zustand with Tailwind CSS.",
    categories: ["react", "nextjs", "fullstack"],
    tags: ["Full-Stack App"],
    pills: ["Next.js", "TypeScript", "MongoDB", "Zustand", "Tailwind CSS"],
    tech: ["Next.js", "React", "TypeScript", "MongoDB"],
    image: puravaImg,
    link: "https://loco-wine.vercel.app/",
    github: "https://github.com/anubhavbaghel/loco",
    badge: "FEATURED",
  },
  {
    id: "02",
    title: "SiteShot — AI Web Accessibility Tool",
    role: "Browser Tool & Extension",
    desc: "Developed a browser-based accessibility tool that analyses webpage content and visual assets to generate meaningful alternative text, boosting digital inclusivity.",
    categories: ["ai", "react", "html"],
    tags: ["AI Accessibility"],
    pills: ["AI-Assisted", "Alt Text", "Accessibility", "Browser Tool"],
    tech: ["JS", "HTML", "CSS"],
    image: wdcImg,
    link: "https://github.com/anubhavbaghel/siteshot/releases/tag/v1.9.10",
    github: "https://github.com/anubhavbaghel/siteshot",
    badge: "AI TOOL",
  },
  {
    id: "03",
    title: "Hydra App — Mobile Client",
    role: "React Native Application",
    desc: "Developed a cross-platform mobile application using React Native and Expo, focusing on responsive mobile layout, smooth gestures, and client application functionality.",
    categories: ["react", "mobile"],
    tags: ["React Native"],
    pills: ["React Native", "Expo", "Android", "Mobile UI"],
    tech: ["React", "HTML", "JS"],
    image: flydheeraImg,
    link: "https://github.com/anubhavbaghel/hydra/releases/tag/Hydra_v1.2",
    github: "https://github.com/anubhavbaghel/hydra",
    badge: "MOBILE",
  },
  {
    id: "04",
    title: "WDC India",
    role: "Full-Stack Frontend Build",
    desc: "Took the project from zero — designed UI mockups, then coded the complete website with custom HTML, CSS, and JavaScript. No frameworks, full ownership.",
    categories: ["html"],
    tags: ["Vanilla Stack"],
    pills: ["Pixel Perfect", "Zero Frameworks", "Hand-coded", "Fluid UI"],
    tech: ["HTML", "CSS", "JS"],
    image: wdcImg,
    link: "https://wdc-design-2.vercel.app/",
    badge: "VANILLA",
  },
  {
    id: "05",
    title: "Flydheera",
    role: "Design to Delivery",
    desc: "Created wireframes and visual mockups, then built the site in Elementor. Managed the complete flow from initial design concept through final client delivery.",
    categories: ["elementor", "wp"],
    tags: ["WP Elementor"],
    pills: ["Visual Dev", "Wireframing", "Turnkey Delivery"],
    tech: ["WordPress", "Elementor"],
    image: flydheeraImg,
    link: "https://flydheera.com/",
    badge: "CLIENT SITE",
  },
  {
    id: "06",
    title: "Purava",
    role: "Design to Delivery",
    desc: "Led end-to-end development — from mockup design through Elementor implementation and final handoff. Maintained brand consistency across all pages.",
    categories: ["elementor", "wp"],
    tags: ["WP Elementor"],
    pills: ["Brand Identity", "End-to-End", "Figma to Web"],
    tech: ["WordPress", "Elementor"],
    image: puravaImg,
    link: "https://puravabath.com/",
    badge: "CLIENT SITE",
  },
  {
    id: "07",
    title: "Divya Jewellers",
    role: "Multi-Page Redesign",
    desc: "Redesigned multiple pages for this jewellery brand using both Elementor and Divi, bringing a refined, luxury aesthetic to the existing site.",
    categories: ["elementor", "wp"],
    tags: ["WP/Divi/Elementor"],
    pills: ["Luxury UI", "E-com Revamp", "Multi-builder"],
    tech: ["WordPress", "Elementor", "Divi"],
    image: divyaImg,
    link: "https://divyajewellers.co.in/",
    badge: "E-COMMERCE",
  },
  {
    id: "08",
    title: "Dr. Anil Kumar Sharma",
    role: "Complete Website Build",
    desc: "Developed a full professional website for a doctor client using WordPress and Divi — covering design, development, and deployment.",
    categories: ["wp"],
    tags: ["WP Divi"],
    pills: ["Healthcare Tech", "Rapid Build", "SEO Ready"],
    tech: ["WordPress", "Divi"],
    image: drAnilImg,
    link: "https://dranilkumarsharma.com/",
    badge: "HEALTHCARE",
  },
  {
    id: "09",
    title: "Womancart",
    role: "Shopify Page Development",
    desc: "Built and customised multiple pages on this Shopify store — working within theme constraints while delivering polished, conversion-focused layouts.",
    categories: ["shopify"],
    tags: ["Shopify Liquid"],
    pills: ["Conversion UX", "Theme Mod", "Storefront"],
    tech: ["Shopify"],
    image: womancartImg,
    link: "https://womancart.com.au/",
    badge: "SHOPIFY",
  },
  {
    id: "10",
    title: "SewaExpo & Multi-Site",
    role: "Deployment & Management",
    desc: "Deployed and actively manages SewaExpo and several other websites on cPanel. Handles version control, backups, domain management, and ongoing maintenance.",
    categories: ["devops", "wp"],
    tags: ["cPanel DevOps"],
    pills: ["Server Ops", "CI/CD", "Uptime Guarantee"],
    tech: ["cPanel", "WordPress"],
    image: sewaexpoImg,
    link: "https://www.sewaexpo.com/",
    badge: "SERVER OPS",
  },
  {
    id: "11",
    title: "Syandan Aviations",
    role: "Multi-Page Development",
    desc: "Built multiple pages for this aviation brand's website, focusing on professional presentation and smooth user experience across the entire site.",
    categories: ["wp", "elementor"],
    tags: ["WP Elementor"],
    pills: ["Aero UI", "Corporate Site", "Scalable"],
    tech: ["WordPress", "Elementor"],
    image: syandanImg,
    link: "https://flydheera.com/",
    badge: "CORPORATE",
  },
];

const filters = [
  { id: "all", label: "ALL DOSSIERS", num: "11" },
  { id: "fullstack", label: "FULL-STACK / REACT", num: "03" },
  { id: "wp", label: "WORDPRESS", num: "06" },
  { id: "elementor", label: "ELEMENTOR", num: "04" },
  { id: "html", label: "VANILLA JS", num: "02" },
  { id: "shopify", label: "SHOPIFY", num: "01" },
  { id: "devops", label: "DEVOPS & CPANEL", num: "01" },
];

const logoMap = {
  HTML: <FaHtml5 className="w-full h-full" />,
  CSS: <FaCss3Alt className="w-full h-full" />,
  JS: <FaJs className="w-full h-full" />,
  React: <FaReact className="w-full h-full" />,
  "Next.js": <SiNextdotjs className="w-full h-full" />,
  TypeScript: <SiTypescript className="w-full h-full" />,
  MongoDB: <SiMongodb className="w-full h-full" />,
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

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Docket Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="stamp-tag text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
            SECTION // 02
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
            Selected Works & Dossiers
          </h2>
        </div>
        <span className="font-mono text-xs text-zinc-500">
          SHOWING [{filteredProjects.length.toString().padStart(2, "0")} / {projectsData.length.toString().padStart(2, "0")}] RECORDS
        </span>
      </div>

      {/* Drawer Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`font-mono text-xs px-3.5 py-2 rounded-lg border transition-all flex items-center gap-2 ${
              activeFilter === filter.id
                ? "bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold shadow-md"
                : "bg-[#141417] text-zinc-400 border-white/10 hover:border-white/20 hover:text-zinc-200"
            }`}
          >
            <span>{filter.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded ${activeFilter === filter.id ? "bg-zinc-900 text-zinc-100" : "bg-white/5 text-zinc-500"}`}>
              {filter.num}
            </span>
          </button>
        ))}
      </div>

      {/* Dossier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="paper-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Top Sheet Header */}
            <div className="p-4 bg-[#18181c] border-b border-white/10 flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-zinc-300 font-bold">DOSSIER // #{project.id}</span>
              </div>
              <span className="px-2 py-0.5 bg-white/[0.06] text-zinc-400 border border-white/10 rounded text-[10px]">
                {project.badge}
              </span>
            </div>

            {/* Preview Image */}
            <div className="relative h-48 w-full overflow-hidden bg-zinc-950 border-b border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Body Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-amber-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-amber-400/90 mb-3 uppercase tracking-wider">
                {project.role}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Technical Specifications */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.pills.map((pill) => (
                    <span
                      key={pill}
                      className="font-mono text-[11px] px-2.5 py-1 bg-white/[0.04] text-zinc-300 rounded border border-white/[0.08]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>{project.github && !project.link.includes("vercel") ? "View Release" : "Live Demo"}</span>
                    <span>↗</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 bg-[#18181c] hover:bg-[#222228] text-zinc-300 hover:text-white border border-white/10 rounded-lg transition-all flex items-center justify-center"
                      title="Source Code"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
