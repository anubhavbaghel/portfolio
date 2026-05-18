import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaElementor, FaShopify,
  FaServer, FaRocket, FaCodeBranch, FaGitAlt, FaGithub, FaFigma, FaNodeJs,
  FaDatabase, FaBox, FaTh, FaPaintBrush, FaDesktop, FaGlobe, FaStar, FaExchangeAlt
} from "react-icons/fa";
import {
  SiNextdotjs, SiCpanel, SiAndroidstudio, SiCanva,
  SiExpress, SiMongodb, SiGooglechrome
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
  "React.js": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Responsive Design": <FaDesktop />,
  "WordPress": <FaWordpress />,
  "Elementor": <FaElementor />,
  "Divi": <DiviIcon />,
  "Astra": <FaStar />,
  "Shopify": <FaShopify />,
  "CSS": <FaCss3Alt />,
  "Flexbox": <FaBox />,
  "Grid": <FaTh />,
  "UI/UX Implementation": <FaPaintBrush />,
  "Responsive Web Design": <FaDesktop />,
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
  "SQL": <FaDatabase />,
  "REST APIs": <FaExchangeAlt />,
};

const techCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Responsive Design"],
    description: "Build responsive, interactive, and user-friendly web interfaces with modern frontend practices.",
  },
  {
    title: "CMS & Website Builders",
    skills: ["WordPress", "Elementor", "Divi", "Astra", "Shopify"],
    description: "Develop, customize, and manage scalable business and e-commerce websites.",
  },
  {
    title: "Styling & UI",
    skills: ["CSS", "Flexbox", "Grid", "UI/UX Implementation", "Responsive Web Design"],
    description: "Transform design mockups into pixel-perfect, responsive user interfaces.",
  },
  {
    title: "Deployment & DevOps",
    skills: ["cPanel", "Hosting Management", "Domain Configuration", "Website Deployment", "Version Control"],
    description: "Deploy, maintain, troubleshoot, and manage production websites and hosting environments.",
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Android Studio"],
    description: null,
  },
  {
    title: "Design & Productivity",
    skills: ["Figma", "Adobe Illustrator", "Canva"],
    description: null,
  },
  {
    title: "Learning & Exploring",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"],
    description: "Currently exploring modern web technologies and backend fundamentals to become a better full-stack developer.",
    span: true,
  },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <p className="text-teal-500 font-semibold uppercase tracking-wider mb-2">
          My Arsenal
        </p>
        <h2 className="text-5xl font-bold text-center text-white">
          Tech <em className="text-teal-600 not-italic">Stack</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-teal-500/30 transition-all duration-300 group flex flex-col ${
              category.span ? "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto text-center items-center" : ""
            }`}
          >
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 group-hover:text-teal-400/70 transition-colors">
              {category.title}
            </h3>

            <div className={`flex flex-wrap gap-3 ${category.span ? "justify-center" : ""}`}>
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 text-sm md:text-base font-medium px-4 py-2 bg-white/5 hover:bg-teal-500/10 hover:text-teal-300 text-gray-300 rounded-full transition-all duration-300 border border-white/10 hover:border-teal-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:-translate-y-1 cursor-default select-none"
                >
                  {skillIcons[skill] && <span className="text-lg opacity-80">{skillIcons[skill]}</span>}
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