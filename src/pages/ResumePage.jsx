import { personalInfo, education, webEngineeringTrack } from "../data/portfolioData";
import { Download, MapPin, Briefcase, Cpu, GraduationCap, Award } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-paper-300 gap-4">
          <div>
            <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block mb-2">
              Curriculum Vitae
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 font-display">
              Résumé
            </h1>
          </div>

          <a
            href={personalInfo.contacts.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-ink-900 hover:bg-ink-800 text-paper-50 rounded text-xs font-mono transition-colors shadow-subtle hover:shadow-card cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
        </div>

        {/* Clean Formatted Résumé Document */}
        <div className="bg-paper-50 border border-paper-300 rounded-xl p-8 sm:p-12 shadow-card space-y-10 text-ink-800">
          {/* Header */}
          <div className="border-b border-paper-200 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight font-display">
                {personalInfo.name}
              </h2>
              <p className="text-base text-ink-600 dark:text-ink-300 font-medium mt-1 font-sans">
                {personalInfo.role} &bull; Full-Stack &amp; Product Developer
              </p>
              <p className="text-xs text-ink-500 font-mono mt-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-ink-500" />
                <span>{personalInfo.location}</span>
              </p>
            </div>

            <div className="text-xs font-mono space-y-1.5 text-ink-600 sm:text-right">
              <div>
                <a href={`mailto:${personalInfo.contacts.email}`} className="hover:text-ink-900 dark:hover:text-ink-100 hover:underline transition-colors">
                  {personalInfo.contacts.email}
                </a>
              </div>
              <div>
                <a href={personalInfo.contacts.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink-900 dark:hover:text-ink-100 hover:underline transition-colors">
                  github.com/anubhavbaghel
                </a>
              </div>
              <div>
                <a href={personalInfo.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink-900 dark:hover:text-ink-100 hover:underline transition-colors">
                  linkedin.com/in/anubhav-baghel
                </a>
              </div>
              <div>
                <a href="https://anubhavbaghel.dev" target="_blank" rel="noopener noreferrer" className="text-ink-900 dark:text-ink-100 hover:underline">
                  anubhavbaghel.dev
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold">
              Professional Summary
            </h3>
            <p className="text-sm text-ink-700 leading-relaxed font-sans">
              Software and product developer experienced in building production full-stack web applications, internal developer tools, and desktop utilities. Strong grounding in computer science fundamentals (BCA), full-stack SSR architectures (React 19, Next.js, TypeScript), relational &amp; document databases, and AI-assisted engineering with schema-validated outputs.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold border-b border-paper-200 pb-2 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-ink-600 dark:text-ink-300" />
              <span>Workplace Experience</span>
            </h3>

            {webEngineeringTrack.workplaceExperience.map((job, jIdx) => (
              <div key={jIdx} className="space-y-2 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="font-bold text-ink-900 text-base font-display">
                    {job.role} <span className="font-normal text-ink-500">at</span> {job.company}
                  </div>
                  <span className="font-mono text-xs text-ink-500 bg-paper-200 px-2 py-0.5 rounded border border-paper-300">{job.period}</span>
                </div>

                <p className="text-xs text-ink-600 leading-relaxed font-sans">
                  {job.summary}
                </p>

                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-ink-700 font-sans">
                  {job.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold border-b border-paper-200 pb-2 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-ink-600 dark:text-ink-300" />
              <span>Featured Software Projects &amp; Systems</span>
            </h3>

            <div className="space-y-4 text-xs font-sans">
              <div className="p-3 bg-paper-100 rounded-lg border border-paper-200 space-y-1">
                <div className="font-bold text-ink-900 font-display text-sm">
                  SiteShot — Website Accessibility Alt-Text Suite &amp; Desktop Crawler
                </div>
                <p className="text-ink-600 leading-relaxed">
                  Electron, Chrome Manifest V3, Gemini 1.5 Pro API, Ollama (Moondream/Llava). Multi-page crawler and in-page inspector with 85%+ quota reduction via image hashing and request batching.
                </p>
              </div>

              <div className="p-3 bg-paper-100 rounded-lg border border-paper-200 space-y-1">
                <div className="font-bold text-ink-900 font-display text-sm">
                  LOCO — City Discovery &amp; Curated Vibe Platform
                </div>
                <p className="text-ink-600 leading-relaxed">
                  Next.js 15 App Router, TypeScript, MongoDB, Zustand, Tailwind CSS. Data normalization pipeline, connection pooling, and sub-100ms client filtering.
                </p>
              </div>

              <div className="p-3 bg-paper-100 rounded-lg border border-paper-200 space-y-1">
                <div className="font-bold text-ink-900 font-display text-sm">
                  ContentGuard — Automated Document Assembly &amp; Copy Consistency Engine
                </div>
                <p className="text-ink-600 leading-relaxed">
                  Python, FastAPI, python-docx, WordprocessingML XML manipulation. Stencil cloning preventing copy discrepancies in high-volume production operations.
                </p>
              </div>

              <div className="p-3 bg-paper-100 rounded-lg border border-paper-200 space-y-1">
                <div className="font-bold text-ink-900 font-display text-sm">
                  Thaddeus Creates — Full-Stack SSR Keepsakes Studio
                </div>
                <p className="text-ink-600 leading-relaxed">
                  React 19, TanStack Start SSR, TypeScript, Supabase PostgreSQL, WhatsApp ordering flow. Production live at thaddeuscreates.shop.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold border-b border-paper-200 pb-2">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-paper-100 rounded border border-paper-200">
                <span className="text-ink-500 block mb-1 uppercase text-[10px] font-bold">Languages &amp; Core:</span>
                <span className="text-ink-800">TypeScript, JavaScript (ES6+), Python, HTML5, CSS3, SQL</span>
              </div>
              <div className="p-3 bg-paper-100 rounded border border-paper-200">
                <span className="text-ink-500 block mb-1 uppercase text-[10px] font-bold">Frameworks &amp; Libraries:</span>
                <span className="text-ink-800">React 19, Next.js (App Router), TanStack Start, FastAPI, Tailwind CSS</span>
              </div>
              <div className="p-3 bg-paper-100 rounded border border-paper-200">
                <span className="text-ink-500 block mb-1 uppercase text-[10px] font-bold">Databases &amp; Backend:</span>
                <span className="text-ink-800">Supabase (PostgreSQL), MongoDB / Mongoose, REST APIs</span>
              </div>
              <div className="p-3 bg-paper-100 rounded border border-paper-200">
                <span className="text-ink-500 block mb-1 uppercase text-[10px] font-bold">CMS, DevOps &amp; Tooling:</span>
                <span className="text-ink-800">WordPress, Wix, Shopify, Electron, Git, cPanel, Docker, Gemini API</span>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 font-semibold border-b border-paper-200 pb-2 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-ink-600 dark:text-ink-300" />
              <span>Education &amp; Credentials</span>
            </h3>
            <div className="text-xs space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-ink-900 font-display text-sm">{education.degree}</span>
                <span className="font-mono text-ink-500">{education.institution} ({education.status})</span>
              </div>
              <div className="flex items-center gap-2 text-ink-600 font-mono text-[11px]">
                <Award className="w-3.5 h-3.5 text-ink-600 dark:text-ink-300 shrink-0" />
                <span>Google Solution Challenge Finalist &bull; Hack2skill PromptWars Winner &bull; Meta Coursera Advanced React &bull; DataCamp GitHub Foundations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
