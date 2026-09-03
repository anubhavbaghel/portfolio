import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const certificationsData = [
  {
    title: "Google – Solution Challenge",
    issuer: "Google / Hack2skill",
    year: "2026",
    link: "https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS02140",
    badge: "HACKATHON CHALLENGE",
    id: "CERT-01",
  },
  {
    title: "Hack2skill – PromptWars: Virtual Challenge 3",
    issuer: "Hack2skill",
    year: "2026",
    link: "https://certificate.hack2skill.com/verify/2026H2S06PWVCHL3-A00601",
    badge: "AI & PROMPTING",
    id: "CERT-02",
  },
  {
    title: "DataCamp – GitHub Foundations",
    issuer: "DataCamp",
    year: "2026",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/f868408724fb10af808611b17f96ab1f47d22b70?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
    badge: "VERSION CONTROL",
    id: "CERT-03",
  },
  {
    title: "Meta / Coursera – Advanced React",
    issuer: "Meta",
    year: "2026",
    link: "https://coursera.org/share/2f580a97078e7c9c625336d2fd8629b0",
    badge: "REACT SPECIALIZATION",
    id: "CERT-04",
  },
  {
    title: "Meta / Coursera – React Basics, JavaScript, Front-End Intro",
    issuer: "Meta",
    year: "2025",
    link: "https://coursera.org/share/661cf40c4d971027907e9b3374d8f6c5",
    badge: "WEB FOUNDATIONS",
    id: "CERT-05",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Docket Header */}
      <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
        <span className="stamp-tag text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
          SECTION // 05
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Verified Credentials & Challenge Dockets
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((item, index) => (
          <div
            key={index}
            className="paper-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative"
          >
            <div>
              {/* Card Docket Head */}
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5 text-xs font-mono">
                <span className="text-amber-400/90 font-semibold">{item.id}</span>
                <span className="text-[10px] px-2 py-0.5 bg-white/[0.04] text-zinc-400 border border-white/10 rounded">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-amber-200 transition-colors leading-snug">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-6">
                <VerifiedIcon className="!w-4 !h-4 text-emerald-400" />
                <span>{item.issuer}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-500">{item.year}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2.5 bg-[#18181c] hover:bg-zinc-100 hover:text-zinc-950 text-zinc-300 font-mono text-xs rounded-lg border border-white/10 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>OPEN REGISTRY RECORD</span>
                <OpenInNewIcon className="!w-3.5 !h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
