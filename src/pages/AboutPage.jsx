import { personalInfo, education, certifications, engineeringPrinciples } from "../data/portfolioData";
import { GraduationCap, Award, ArrowUpRight, Terminal, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import profileImg from "../assets/profile.png";

export default function AboutPage() {
  const pillars = [
    {
      title: "1. Engineering Fundamentals",
      icon: Terminal,
      color: "text-ink-900",
      description:
        "Data structures & algorithms, relational schema design, network protocols, type safety, modular systems, and defensive testing. Knowing how systems work beneath the abstraction layer.",
    },
    {
      title: "2. AI-Native Development",
      icon: Cpu,
      color: "text-cobalt",
      description:
        "Leveraging AI coding agents, model APIs (Gemini, Ollama), structured JSON schemas, and automated validation pipelines. Using AI as a high-leverage amplifier with zero blind acceptance of output.",
    },
    {
      title: "3. Product Thinking",
      icon: Sparkles,
      color: "text-terracotta",
      description:
        "Understanding user pain points, building lean MVPs, optimizing time-to-value, communicating clearly with non-technical stakeholders, and shipping maintainable solutions.",
    },
  ];

  const milestones = [
    {
      year: "2023 — 2024",
      phase: "High-Velocity Web Delivery",
      detail:
        "Built and maintained 60+ production client websites across agency roles at Adaan Digital and DI Infotech. Mastered deadline management, client communication, cross-browser debugging, and layout reliability.",
    },
    {
      year: "2024 — Present",
      phase: "CS Rigor & BCA Degree",
      detail:
        "Deepened computer science foundations at IGNOU (BCA). Focused on discrete mathematics, data structures, relational modeling, and systems programming fundamentals.",
    },
    {
      year: "Present",
      phase: "Full-Stack & AI Systems Engineering",
      detail:
        "Architecting production software (LOCO, SiteShot, ContentGuard, Thaddeus Creates) with React 19, Next.js SSR, TypeScript, and AI model orchestration with structured validation.",
    },
  ];

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-6 border-b border-paper-300 pb-12">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-terracotta uppercase tracking-widest font-semibold">
          <span>Engineering Trajectory &amp; Principles</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 mb-6 font-display">
          About &amp; Background
        </h1>
        <p className="text-lg text-ink-600 max-w-2xl leading-relaxed font-sans">
          A deliberate progression from high-velocity web delivery to computer science fundamentals and AI-amplified product engineering.
        </p>
      </section>

      {/* Main Narrative & Facts */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Portrait & Metadata */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-paper-300 p-2 bg-paper-50 rounded-xl shadow-subtle">
              <img
                src={profileImg}
                alt="Anubhav Baghel"
                className="w-full aspect-square object-cover rounded-lg filter grayscale contrast-105"
              />
            </div>

            <div className="bg-paper-100 border border-paper-300 rounded-xl p-5 space-y-3 font-mono text-xs text-ink-700 shadow-subtle">
              <div className="flex justify-between border-b border-paper-200 pb-2">
                <span className="text-ink-500">Name:</span>
                <span className="font-semibold text-ink-900">{personalInfo.name}</span>
              </div>
              <div className="flex justify-between border-b border-paper-200 pb-2">
                <span className="text-ink-500">Role:</span>
                <span>{personalInfo.role}</span>
              </div>
              <div className="flex justify-between border-b border-paper-200 pb-2">
                <span className="text-ink-500">Location:</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex justify-between border-b border-paper-200 pb-2">
                <span className="text-ink-500">Education:</span>
                <span>BCA (Ongoing)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-500">Availability:</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-pulse"></span>
                  Open to Offers
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-ink-800 leading-relaxed font-sans">
            <p>
              I began my technical journey in hands-on website development. Working in fast-paced agency environments at Adaan Digital Solutions and DI Infotech, I took direct responsibility for <strong>60+ client websites</strong> across WordPress, Wix CMS, Shopify, and custom codebases. This experience taught me client empathy, speed, and how to debug real-world layout defects and performance bottlenecks under tight deadlines.
            </p>

            <p>
              Rather than staying purely in visual page builders, I deliberately committed to strengthening my <strong>computer science fundamentals</strong>. Through university coursework at IGNOU (BCA) and independent study, I have focused on data structures and algorithms, relational and document schema design, network protocols, and modern full-stack architectures with React 19, Next.js, and TypeScript.
            </p>

            <p>
              Today, I build software by combining three disciplines: <strong>engineering fundamentals</strong> for sound architecture and maintainable code; <strong>AI-assisted workflows</strong> to accelerate implementation and automate repetitive tasks; and <strong>product thinking</strong> to ensure that every line of code solves a genuine human or operational problem.
            </p>

            <p>
              I view modern AI not as a magic substitute for engineering, but as a high-leverage amplifier. My focus remains on system correctness, validation, boundary testing, clean code, and shipping software that users can genuinely rely on.
            </p>

            <div className="pt-4 border-t border-paper-200">
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold mb-3">
                Core Tooling &amp; Stack:
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">TypeScript &bull; React 19</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">Next.js App Router (SSR)</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">PostgreSQL (Supabase) &bull; MongoDB</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">Google Gemini &amp; Ollama APIs</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">Python Tooling &bull; Electron</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Identity */}
        <div className="space-y-6 pt-10 border-t border-paper-300">
          <div className="border-b border-paper-200 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block mb-1">
              Guiding Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 font-display">
              Three Pillars of My Engineering Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-paper-50 border border-paper-300 rounded-xl p-6 space-y-3 shadow-subtle hover:border-paper-400 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-paper-200 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 font-display">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trajectory Milestones */}
        <div className="space-y-6 pt-16 mt-16 border-t border-paper-300">
          <div className="border-b border-paper-200 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block mb-1">
              Evolutionary Path
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 font-display">
              Trajectory &amp; Career Milestones
            </h2>
          </div>

          <div className="space-y-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-paper-50 border border-paper-300 rounded-xl p-6 flex flex-col md:flex-row md:items-baseline gap-4 shadow-subtle"
              >
                <div className="md:w-48 shrink-0 font-mono text-xs font-semibold text-terracotta">
                  [{m.year}]
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-ink-900 text-base font-display">{m.phase}</h3>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Verified Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 mt-16 border-t border-paper-300">
          <div className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-4 shadow-subtle">
            <div className="flex items-center gap-2.5 text-terracotta">
              <GraduationCap className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-ink-500">
                Formal Education
              </span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-ink-900 font-display">{education.degree}</h4>
              <p className="text-sm font-medium text-ink-700">{education.institution}</p>
              <span className="inline-block mt-1 text-xs font-mono text-ink-500 bg-paper-200 px-2.5 py-0.5 rounded border border-paper-300">
                {education.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
              {education.focus}
            </p>
          </div>

          <div className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-4 shadow-subtle">
            <div className="flex items-center gap-2.5 text-terracotta">
              <Award className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-ink-500">
                Verified Credentials &amp; Challenges
              </span>
            </div>

            <div className="space-y-3">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-2 pb-2.5 border-b border-paper-200 last:border-b-0 text-xs"
                >
                  <div>
                    <h5 className="font-bold text-ink-900 font-sans">{item.title}</h5>
                    <p className="text-ink-500 font-mono text-[11px]">{item.issuer} &bull; {item.year}</p>
                  </div>
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-terracotta hover:underline shrink-0"
                  >
                    <span>Verify</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy Section */}
      <section id="philosophy" className="pt-16 border-t border-paper-300 bg-paper-100/60 pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="border-b border-paper-300 pb-6">
            <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-2">
              Working Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900 font-display">
              Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringPrinciples.map((item) => (
              <div
                key={item.number}
                className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-paper-400 transition-all shadow-subtle"
              >
                <div>
                  <span className="font-mono text-sm font-bold text-terracotta block mb-4">
                    [{item.number}]
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-ink-900 mb-3 tracking-tight leading-snug font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-paper-200 text-[11px] font-mono text-ink-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Engineering Discipline</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
