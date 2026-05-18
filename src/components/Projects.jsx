import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaElementor, FaShopify } from "react-icons/fa";
import { SiCpanel } from "react-icons/si";
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
    border: "hover:border-blue-500/30",
    id: "group-hover:text-blue-500/10",
    title: "group-hover:text-blue-400",
    role: "text-blue-500",
    icon: "group-hover:text-blue-400",
    btn: "hover:bg-blue-500 hover:border-blue-500"
  },
  orange: {
    border: "hover:border-orange-500/30",
    id: "group-hover:text-orange-500/10",
    title: "group-hover:text-orange-400",
    role: "text-orange-500",
    icon: "group-hover:text-orange-400",
    btn: "hover:bg-orange-500 hover:border-orange-500"
  },
  cyan: {
    border: "hover:border-cyan-500/30",
    id: "group-hover:text-cyan-500/10",
    title: "group-hover:text-cyan-400",
    role: "text-cyan-500",
    icon: "group-hover:text-cyan-400",
    btn: "hover:bg-cyan-500 hover:border-cyan-500"
  },
  amber: {
    border: "hover:border-amber-500/30",
    id: "group-hover:text-amber-500/10",
    title: "group-hover:text-amber-400",
    role: "text-amber-500",
    icon: "group-hover:text-amber-400",
    btn: "hover:bg-amber-500 hover:border-amber-500"
  },
  emerald: {
    border: "hover:border-emerald-500/30",
    id: "group-hover:text-emerald-500/10",
    title: "group-hover:text-emerald-400",
    role: "text-emerald-500",
    icon: "group-hover:text-emerald-400",
    btn: "hover:bg-emerald-500 hover:border-emerald-500"
  },
  fuchsia: {
    border: "hover:border-fuchsia-500/30",
    id: "group-hover:text-fuchsia-500/10",
    title: "group-hover:text-fuchsia-400",
    role: "text-fuchsia-500",
    icon: "group-hover:text-fuchsia-400",
    btn: "hover:bg-fuchsia-500 hover:border-fuchsia-500"
  },
  indigo: {
    border: "hover:border-indigo-500/30",
    id: "group-hover:text-indigo-500/10",
    title: "group-hover:text-indigo-400",
    role: "text-indigo-500",
    icon: "group-hover:text-indigo-400",
    btn: "hover:bg-indigo-500 hover:border-indigo-500"
  },
  sky: {
    border: "hover:border-sky-500/30",
    id: "group-hover:text-sky-500/10",
    title: "group-hover:text-sky-400",
    role: "text-sky-500",
    icon: "group-hover:text-sky-400",
    btn: "hover:bg-sky-500 hover:border-sky-500"
  },
  teal: {
    border: "hover:border-teal-500/30",
    id: "group-hover:text-teal-500/10",
    title: "group-hover:text-teal-400",
    role: "text-teal-500",
    icon: "group-hover:text-teal-400",
    btn: "hover:bg-teal-500 hover:border-teal-500"
  }
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
    <div id="projects" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-12">
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
          Projects section — 8 client projects
        </h2>
        <p className="text-teal-500 font-semibold uppercase tracking-wider mb-2">
          Selected work
        </p>
        <h2 className="text-5xl font-bold text-center">
          Projects I've <em className="text-teal-600 not-italic">built</em>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-teal-500 text-black border-teal-500 font-medium"
                : "border-gray-600 text-gray-300 hover:border-teal-500 hover:text-teal-500"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const theme = colorThemes[project.color] || colorThemes.teal;
          return (
          <div
            key={project.id}
            className={`group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden ${theme.border} transition-all duration-300 flex flex-col`}
          >
            {/* Image Section */}
            <div className="relative h-56 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow relative z-20 -mt-6">
              <span className={`text-6xl font-black text-white/[0.03] absolute right-4 top-2 select-none ${theme.id} transition-colors duration-300`}>
                {project.id}
              </span>
              <h3 className={`text-2xl font-bold text-white mb-1 ${theme.title} transition-colors duration-300`}>{project.title}</h3>
              <p className={`text-sm ${theme.role} mb-4 tracking-wide font-medium`}>{project.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Bottom section of the card */}
              <div className="mt-auto pt-4">
                {/* Tech Stack Logos */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {project.tech.map((techName) => (
                      <div key={techName} title={techName}>
                        <div className={`w-6 h-6 text-gray-500 ${theme.icon} transition-colors duration-300`}>
                          {logoMap[techName]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs font-medium px-3 py-1 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-colors border border-white/5"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Visit Project Button */}
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-4 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:text-black ${theme.btn} transition-colors duration-300`}
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <div className="mt-16 flex flex-col items-center gap-6">
        <span className="text-gray-400 font-medium">
          Showing {filteredProjects.length} of {projectsData.length} projects
        </span>
      </div>
    </div>
  );
};

export default Projects;
