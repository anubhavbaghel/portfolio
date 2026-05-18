import React from "react";

const experienceData = [
  {
    id: 1,
    company: "DI Infotech",
    role: "Web Developer / Frontend Developer",
    duration: "March 2026 – Present",
    about:
      "Working on end-to-end website development for client projects, transforming design mockups into responsive, production-ready digital experiences. Involved in frontend development, WordPress implementation, deployment workflows, and modern web technologies including React and Next.js for experimentation and feature development.",
    responsibilities: [
      "Developed and maintained responsive websites and web pages using WordPress, Elementor, Divi, Astra, Shopify, and custom frontend technologies.",
      "Converted UI/UX mockups into production-ready interfaces, ensuring responsiveness, usability, and design consistency.",
      "Built custom frontend components and sections using HTML, CSS, JavaScript, React, and Next.js.",
      "Worked on website customization, debugging, optimization, and performance improvements.",
      "Developed and customized e-commerce pages and storefront experiences in Shopify.",
      "Managed website deployment, hosting configuration, backups, domains, and server maintenance using cPanel.",
      "Gained hands-on exposure to deployment workflows, server management, version control, and DevOps fundamentals.",
      "Implemented forms, SMTP configurations, plugin integrations, and dynamic website functionalities.",
      "Collaborated with SEO and design teams to ensure technical implementation aligned with business and marketing goals.",
      "Used AI-assisted development tools to accelerate development, debugging, and workflow efficiency.",
    ],
    techStack: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "WordPress",
      "Elementor",
      "Divi",
      "Shopify",
      "cPanel",
      "Git/GitHub",
      "SMTP",
      "Responsive Design",
      "Deployment",
      "Basic DevOps",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <p className="text-teal-500 font-semibold uppercase tracking-wider mb-2">
          My Journey
        </p>
        <h2 className="text-5xl font-bold text-center text-white">
          Work <em className="text-teal-600 not-italic">Experience</em>
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative flex flex-col md:grid md:grid-cols-12 gap-8 items-start">
            {/* Timeline Left Side */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col pt-2 md:sticky md:top-24">
              <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
              <span className="text-teal-500 font-medium tracking-wide mb-3">{exp.duration}</span>
              <p className="text-gray-400 text-sm leading-relaxed hidden md:block">
                {exp.about}
              </p>
            </div>

            {/* Content Right Side */}
            <div className="md:col-span-8 lg:col-span-9 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-teal-500/30 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-teal-400 transition-colors">
                {exp.role}
              </h4>
              
              <ul className="flex flex-col gap-4 mb-8">
                {exp.responsibilities.map((res, idx) => (
                  <li key={idx} className="text-gray-400 text-sm md:text-base flex items-start leading-relaxed">
                    <span className="text-teal-500 mr-3 mt-1 text-lg leading-none">▹</span>
                    {res}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {exp.techStack.map((tech, idx) => (
                  <span key={idx} className="text-xs font-medium px-3 py-1 bg-white/5 hover:bg-teal-500/10 hover:text-teal-300 text-gray-300 rounded-lg transition-colors border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;