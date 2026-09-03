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
    <section id="tech-stack" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <p className="text-gray-400 font-medium uppercase tracking-wider mb-2 text-sm">
          My Arsenal
        </p>
        <h2 className="text-5xl font-bold text-center text-white">
          Tech <em className="text-gray-400 not-italic">Stack</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all duration-300 group flex flex-col ${
              category.span ? "md:col-span-2 lg:col-span-2 text-center items-center" : ""
            }`}
          >
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 group-hover:text-white transition-colors">
              {category.title}
            </h3>
            {category.description && (
              <p className="text-gray-400 text-xs md:text-sm mb-6 max-w-xl">
                {category.description}
              </p>
            )}

            <div className={`flex flex-wrap gap-2.5 ${category.span ? "justify-center" : ""}`}>
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 text-xs md:text-sm font-medium px-3.5 py-1.5 bg-white/5 hover:bg-white/10 hover:text-white text-gray-300 rounded-full transition-all duration-300 border border-white/10 hover:border-white/30 hover:-translate-y-0.5 cursor-default select-none"
                >
                  {skillIcons[skill] && <span className="text-base opacity-85 text-gray-400 group-hover:text-white">{skillIcons[skill]}</span>}
                  {skill}
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