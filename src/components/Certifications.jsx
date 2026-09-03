import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const certificationsData = [
  {
    title: "Google – Solution Challenge",
    issuer: "Google / Hack2skill",
    year: "2026",
    link: "https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS02140",
    badge: "Hackathon / Challenge",
    color: "from-blue-500/20 to-teal-500/10",
  },
  {
    title: "Hack2skill – PromptWars: Virtual Challenge 3",
    issuer: "Hack2skill",
    year: "2026",
    link: "https://certificate.hack2skill.com/verify/2026H2S06PWVCHL3-A00601",
    badge: "AI & Prompt Engineering",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "DataCamp – GitHub Foundations",
    issuer: "DataCamp",
    year: "2026",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/f868408724fb10af808611b17f96ab1f47d22b70?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
    badge: "Git & Version Control",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Meta / Coursera – Advanced React",
    issuer: "Meta",
    year: "2026",
    link: "https://coursera.org/share/2f580a97078e7c9c625336d2fd8629b0",
    badge: "Frontend Specialization",
    color: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Meta / Coursera – React Basics, Programming with JavaScript, Intro to Front-End",
    issuer: "Meta",
    year: "2025",
    link: "https://coursera.org/share/661cf40c4d971027907e9b3374d8f6c5",
    badge: "Web Fundamentals",
    color: "from-amber-500/20 to-orange-500/10",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <p className="text-teal-500 font-semibold uppercase tracking-wider mb-2">
          Credentials & Hackathons
        </p>
        <h2 className="text-5xl font-bold text-center text-white">
          Certifications & <em className="text-teal-600 not-italic">Challenges</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((item, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-teal-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-lg relative overflow-hidden"
          >
            {/* Background gradient hint */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

            <div>
              <div className="flex justify-between items-start gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-white/5 text-teal-400 border border-teal-500/20 rounded-full">
                  {item.badge}
                </span>
                <span className="text-xs font-medium text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-md">
                  {item.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex items-center gap-1.5">
                <VerifiedIcon className="text-teal-400 !w-4 !h-4" />
                <span>{item.issuer}</span>
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 group-hover:translate-x-1 transition-all"
              >
                <span>Verify Certificate</span>
                <OpenInNewIcon className="!w-4 !h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
