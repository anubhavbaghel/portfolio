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
  },
  {
    title: "Hack2skill – PromptWars: Virtual Challenge 3",
    issuer: "Hack2skill",
    year: "2026",
    link: "https://certificate.hack2skill.com/verify/2026H2S06PWVCHL3-A00601",
    badge: "AI & Prompt Engineering",
  },
  {
    title: "DataCamp – GitHub Foundations",
    issuer: "DataCamp",
    year: "2026",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/f868408724fb10af808611b17f96ab1f47d22b70?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
    badge: "Git & Version Control",
  },
  {
    title: "Meta / Coursera – Advanced React",
    issuer: "Meta",
    year: "2026",
    link: "https://coursera.org/share/2f580a97078e7c9c625336d2fd8629b0",
    badge: "Frontend Specialization",
  },
  {
    title: "Meta / Coursera – React Basics, Programming with JavaScript, Intro to Front-End",
    issuer: "Meta",
    year: "2025",
    link: "https://coursera.org/share/661cf40c4d971027907e9b3374d8f6c5",
    badge: "Web Fundamentals",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16">
        <p className="text-gray-400 font-medium uppercase tracking-wider mb-2 text-sm">
          Credentials & Hackathons
        </p>
        <h2 className="text-5xl font-bold text-center text-white">
          Certifications & <em className="text-gray-400 not-italic">Challenges</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((item, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-lg relative overflow-hidden"
          >
            <div>
              <div className="flex justify-between items-start gap-3 mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full">
                  {item.badge}
                </span>
                <span className="text-xs font-medium text-gray-500 bg-white/5 px-2.5 py-0.5 rounded-md">
                  {item.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex items-center gap-1.5">
                <VerifiedIcon className="text-gray-400 !w-4 !h-4" />
                <span>{item.issuer}</span>
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white group-hover:translate-x-1 transition-all"
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
