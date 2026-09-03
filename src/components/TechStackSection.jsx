import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaElementor, FaShopify,
  FaServer, FaRocket, FaCodeBranch, FaGitAlt, FaGithub, FaFigma, FaNodeJs,
  FaDatabase, FaBox, FaTh, FaPaintBrush, FaDesktop, FaGlobe, FaStar, FaExchangeAlt,
  FaWix, FaUniversalAccess, FaSearch, FaCheckCircle, FaRobot
} from "react-icons/fa";
import {
  SiNextdotjs, SiCpanel, SiAndroidstudio, SiCanva,
  SiExpress, SiMongodb, SiGooglechrome, SiTypescript, SiTailwindcss
} from "react-icons/si";

const DiviIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.294 5h5.176l-2.582 6.959-2.594-6.959zm-1.54 8.041l-2.582-6.96h5.175l-.019.052-2.574 6.908zm6.668 0l-2.574-6.908-.019-.052h5.175l-2.582 6.96z" />
  </svg>
);

const skillIcons = {
  "HTML5": <FaHtml5 />,
  "CSS3": <FaCss3Alt />,
  "JavaScript (ES6+)": <FaJs />,
  "TypeScript": <SiTypescript />,
  "React.js": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Responsive Design": <FaDesktop />,
  "WordPress": <FaWordpress />,
  "Wix": <FaWix />,
  "Wix CMS": <FaWix />,
  "Elementor": <FaElementor />,
  "Divi": <DiviIcon />,
  "Astra": <FaStar />,
  "Shopify": <FaShopify />,
  "UI/UX Implementation": <FaPaintBrush />,
  "Design-to-Code": <FaPaintBrush />,
  "Accessibility": <FaUniversalAccess />,
  "SEO": <FaSearch />,
  "Core Web Vitals": <FaRocket />,
  "QA Testing": <FaCheckCircle />,
  "cPanel": <SiCpanel />,
  "Hosting Management": <FaServer />,
  "Domain Configuration": <FaGlobe />,
  "Website Deployment": <FaRocket />,
  "Version Control": <FaCodeBranch />,
  "Git": <FaGitAlt />,
  "GitHub": <FaGithub />,
  "VS Code": <FaCodeBranch />,
  "Chrome DevTools": <SiGooglechrome />,
  "Android Studio": <SiAndroidstudio />,
  "Figma": <FaFigma />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "REST APIs": <FaExchangeAlt />,
  "AI-assisted Dev": <FaRobot />,
  "Prompt Engineering": <FaRobot />,
};

const techCategories = [
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
    description: "Build fast, interactive, and responsive web applications with modern frontend engineering.",
  },
  {
    title: "CMS & Website Builders",
    skills: ["WordPress", "Wix", "Wix CMS", "Elementor", "Divi", "Astra", "Shopify"],
    description: "Develop, customize, and deliver scalable client websites and storefronts across leading platforms.",
  },
  {
    title: "Design, QA & Optimization",
    skills: ["UI/UX Implementation", "Design-to-Code", "Accessibility", "SEO", "Core Web Vitals", "QA Testing"],
    description: "Ensure pixel-perfect fidelity, high accessibility scores, search engine visibility, and optimal speed.",
  },
  {
    title: "Backend, Tools & DevOps",
    skills: ["Git", "GitHub", "MongoDB", "REST APIs", "cPanel", "Website Deployment", "Chrome DevTools", "VS Code"],
    description: "Deploy, manage databases, troubleshoot, and streamline version control and hosting workflows.",
  },
  {
    title: "AI & Innovation",
    skills: ["AI-assisted Dev", "Prompt Engineering"],
    description: "Leverage AI-assisted workflows and modern developer tooling to ship faster and smarter.",
    span: true,
  },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Docket Header */}
      <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
        <span className="stamp-tag text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
          SECTION // 04
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Curated Toolbox & Stack Specifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className={`paper-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 ${
              category.span ? "md:col-span-2 bg-[#161619]" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="stamp-tag text-xs text-amber-500 font-mono">
                  DRAWER // 0{index + 1}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  {category.skills.length} SPECIFICATIONS
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-100 tracking-tight mb-2">
                {category.title}
              </h3>
              {category.description && (
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  {category.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 bg-white/[0.04] text-zinc-200 rounded-lg border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.08] transition-all cursor-default select-none"
                >
                  {skillIcons[skill] && <span className="text-sm text-zinc-400">{skillIcons[skill]}</span>}
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;