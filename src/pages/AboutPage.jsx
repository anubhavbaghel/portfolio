import { personalInfo, education, certifications } from "../data/portfolioData";
import { GraduationCap, Award, ArrowUpRight, Terminal, Cpu, Sparkles } from "lucide-react";
import projectImages from "../assets/projectImages";

export default function AboutPage() {
  const trajectory = [
    {
      period: "2023 — 2024",
      milestone: "Frontend Architecture & Internal Tooling",
      takeaway:
        "Engineered production client-facing interfaces, custom component libraries, and internal automation tools. Mastered cross-browser layout reliability, client communication, and performance optimization.",
    },
    {
      period: "2024 — Present",
      milestone: "Computer Science Rigor (BCA Ongoing)",
      takeaway:
        "Deepening computer science foundations at IGNOU. Focused on data structures, relational schema design, network protocols, and systems programming.",
    },
    {
      period: "Present",
      milestone: "Full-Stack Products & AI Automation",
      takeaway:
        "Architecting software products (LOCO, SiteShot, ContentGuard, Thaddeus Creates) with React 19, Next.js App Router, TypeScript, and schema-validated AI workflows.",
    },
  ];

  const pillars = [
    {
      title: "1. Engineering Fundamentals",
      icon: Terminal,
      color: "text-ink-900 dark:text-ink-100",
      description:
        "Data structures, algorithms, relational schema design, network protocols, type safety, and defensive testing. Knowing how systems work beneath the abstraction layer.",
    },
    {
      title: "2. AI-Native Acceleration",
      icon: Cpu,
      color: "text-ink-900 dark:text-ink-100",
      description:
        "Leveraging AI coding agents and model APIs (Gemini, Ollama) with strict JSON schemas and validation pipelines. High leverage with zero unverified code.",
    },
    {
      title: "3. Product Thinking",
      icon: Sparkles,
      color: "text-ink-900 dark:text-ink-100",
      description:
        "Understanding user pain points, building lean MVPs, optimizing time-to-value, communicating clearly with stakeholders, and shipping maintainable solutions.",
    },
  ];

  return (
    <div className="pt-32 pb-24 space-y-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 border-b border-paper-300 pb-12">
        <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block mb-2">
          Background &amp; Direction
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 mb-6 font-display">
          About &amp; Trajectory
        </h1>
        <p className="text-lg text-ink-600 max-w-2xl leading-relaxed font-sans">
          A deliberate progression from high-velocity web delivery to computer science fundamentals and AI-amplified product engineering.
        </p>
      </section>

      {/* Main Narrative & Facts */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Portrait & Metadata */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-paper-300 p-2 bg-paper-50 rounded-xl shadow-subtle">
              <img
                src={projectImages.profile}
                alt="Anubhav Baghel"
                className="w-full aspect-square object-cover rounded-lg filter grayscale contrast-105"
              />
            </div>

            <div className="bg-paper-100 border border-paper-300 rounded-xl p-5 space-y-2.5 font-mono text-xs text-ink-700 shadow-xs">
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
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></span>
                  Open to Roles
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Story (Concise & Directional) */}
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-ink-800 leading-relaxed font-sans">
            <p>
              I am a software developer working at the intersection of computer science fundamentals, modern full-stack SSR architectures, and AI-accelerated workflows. I specialize in building web applications, internal developer tools, and data systems that solve genuine operational problems.
            </p>

            <p>
              Rather than staying purely in visual website tools, I chose to deepen my <strong>computer science foundations</strong> through BCA coursework at IGNOU and independent study—mastering data structures, relational modeling, and modern full-stack architectures (React 19, Next.js, TypeScript).
            </p>

            <p>
              Today, I build software by combining three disciplines: <strong>engineering fundamentals</strong> for sound architecture and maintainability; <strong>AI-assisted workflows</strong> to accelerate syntax and automate repetitive tasks; and <strong>product thinking</strong> to ensure every line of code solves a genuine human or business problem.
            </p>

            <div className="pt-4 border-t border-paper-200">
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold mb-3">
                Core Stack:
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">TypeScript &bull; React 19</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">Next.js App Router (SSR)</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">Supabase (PostgreSQL) &bull; MongoDB</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">Google Gemini &amp; Ollama APIs</span>
                <span className="px-3 py-1 bg-paper-200 rounded text-ink-800 border border-paper-300">Python Tooling &bull; Docker</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="space-y-6 pt-10 border-t border-paper-300">
          <div className="border-b border-paper-200 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block mb-1">
              Guiding Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 font-display">
              Three Pillars of My Approach
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

        {/* Trajectory */}
        <div className="space-y-6 pt-16 border-t border-paper-300">
          <div className="border-b border-paper-200 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold block mb-1">
              Career Trajectory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 font-display">
              Where I Come From &amp; Where I'm Headed
            </h2>
          </div>

          <div className="space-y-4">
            {trajectory.map((t, idx) => (
              <div
                key={idx}
                className="bg-paper-50 border border-paper-300 rounded-xl p-5 flex flex-col md:flex-row md:items-baseline gap-4 shadow-subtle"
              >
                <span className="md:w-44 shrink-0 font-mono text-xs font-semibold text-ink-900 dark:text-ink-100">
                  [{t.period}]
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-ink-900 text-base font-display">{t.milestone}</h4>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">{t.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Verified Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-paper-300">
          <div className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-4 shadow-subtle">
            <div className="flex items-center gap-2 text-ink-900 dark:text-ink-100">
              <GraduationCap className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-ink-500">
                Formal Education
              </span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-ink-900 font-display">{education.degree}</h4>
              <p className="text-sm font-medium text-ink-700">{education.institution}</p>
              <span className="inline-block mt-1 text-xs font-mono text-ink-500 bg-paper-200 px-2 py-0.5 rounded border border-paper-300">
                {education.status}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-sans">
              {education.focus}
            </p>
          </div>

          <div className="bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-8 space-y-4 shadow-subtle">
            <div className="flex items-center gap-2 text-ink-900 dark:text-ink-100">
              <Award className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-ink-500">
                Verified Credentials &amp; Challenges
              </span>
            </div>

            <div className="space-y-2.5">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-2 pb-2 border-b border-paper-200 last:border-b-0 text-xs"
                >
                  <div>
                    <h5 className="font-bold text-ink-900 font-sans">{item.title}</h5>
                    <p className="text-ink-500 font-mono text-[11px]">{item.issuer} &bull; {item.year}</p>
                  </div>
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-ink-900 dark:text-ink-100 hover:underline shrink-0"
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
    </div>
  );
}
