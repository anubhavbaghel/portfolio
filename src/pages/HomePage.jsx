import { Link } from "react-router-dom";
import { personalInfo, selectedProjects, engineeringPrinciples, technicalNotes } from "../data/portfolioData";
import { ArrowRight, Download, Layers, BookOpen, Clock, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = selectedProjects.slice(0, 3);
  const latestNote = technicalNotes[0];

  return (
    <div className="space-y-0">
      {/* Editorial Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-paper-200 border border-paper-300 text-xs font-mono text-ink-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>{personalInfo.availability.status}</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink-900 leading-[1.08] mb-6">
              Building useful software,{" "}
              <span className="italic font-serif font-normal text-terracotta">
                thoughtfully.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-normal text-ink-600 leading-snug mb-8 max-w-3xl">
              {personalInfo.supportingStatement}
            </p>

            <div className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-2xl mb-10 space-y-3 font-normal">
              <p>
                I am a software developer working at the intersection of engineering fundamentals,
                AI-assisted workflows, and practical product thinking. I build reliable web applications,
                internal developer tools, and software designed to solve real problems.
              </p>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-ink-900 text-paper-50 hover:bg-terracotta transition-colors text-sm font-medium"
              >
                <span>Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/notes"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-paper-200 hover:bg-paper-300 border border-paper-300 text-ink-800 transition-colors text-sm font-medium"
              >
                <span>Engineering Notes</span>
                <ArrowRight className="w-4 h-4 text-ink-500" />
              </Link>

              <a
                href={personalInfo.contacts.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded text-ink-600 hover:text-ink-900 text-sm font-mono transition-colors"
              >
                <Download className="w-4 h-4 text-terracotta" />
                <span>Résumé (PDF)</span>
              </a>
            </div>
          </div>

          {/* Technical Credibility Strip */}
          <div className="mt-16 pt-8 border-t border-paper-300 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="border-l-2 border-paper-400 pl-4">
              <span className="block font-mono text-xs text-ink-500 uppercase tracking-wider mb-1">
                Track Record
              </span>
              <span className="block font-bold text-ink-900 text-lg">
                60+ Client Sites
              </span>
              <span className="block text-xs text-ink-600 mt-0.5">
                Production web delivery &amp; maintenance
              </span>
            </div>

            <div className="border-l-2 border-paper-400 pl-4">
              <span className="block font-mono text-xs text-ink-500 uppercase tracking-wider mb-1">
                Core Stack
              </span>
              <span className="block font-bold text-ink-900 text-lg">
                React 19 &bull; Next.js &bull; TS
              </span>
              <span className="block text-xs text-ink-600 mt-0.5">
                Full-stack SSR, API routes, Supabase
              </span>
            </div>

            <div className="border-l-2 border-paper-400 pl-4">
              <span className="block font-mono text-xs text-ink-500 uppercase tracking-wider mb-1">
                AI-Native Tooling
              </span>
              <span className="block font-bold text-ink-900 text-lg">
                Gemini &bull; Ollama &bull; Agents
              </span>
              <span className="block text-xs text-ink-600 mt-0.5">
                Strict schema &amp; verification focus
              </span>
            </div>

            <div className="border-l-2 border-paper-400 pl-4">
              <span className="block font-mono text-xs text-ink-500 uppercase tracking-wider mb-1">
                Location
              </span>
              <span className="block font-bold text-ink-900 text-lg">
                New Delhi, India
              </span>
              <span className="block text-xs text-ink-600 mt-0.5">
                Open to local &amp; remote roles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview Section */}
      <section className="py-24 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-paper-300 gap-4">
            <div>
              <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-2">
                Featured Engineering
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink-900">
                Selected Software Systems
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-terracotta hover:underline"
            >
              <span>View all projects &amp; case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className="bg-paper-50 border border-paper-300 rounded-lg p-6 sm:p-10 hover:border-paper-400 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-paper-200">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-paper-200 text-ink-800 rounded border border-paper-300">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-ink-500">
                      {project.year} &bull; {project.role}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full border bg-paper-200 text-ink-800 border-paper-300">
                    {project.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-1.5 tracking-tight">
                        <Link to={`/work/${project.id}`} className="hover:text-terracotta transition-colors">
                          {project.name}
                        </Link>
                      </h3>
                      <p className="text-sm font-medium text-terracotta">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-paper-200 text-ink-800 text-xs font-mono rounded border border-paper-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/work/${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-medium transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Case Study Analysis</span>
                      </Link>

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 rounded text-xs font-mono border border-paper-300 transition-colors"
                        >
                          <span>Repository</span>
                          <ArrowUpRight className="w-3 h-3 text-ink-500" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-paper-100 border border-paper-300 rounded p-5 space-y-3 font-mono text-xs">
                    <span className="font-semibold text-ink-800 flex items-center gap-1.5 border-b border-paper-200 pb-2">
                      <Layers className="w-3.5 h-3.5 text-terracotta" />
                      <span>Architecture Spec</span>
                    </span>
                    {Object.entries(project.architecture).map(([layer, desc]) => (
                      <div key={layer} className="space-y-0.5">
                        <span className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold block">{layer}</span>
                        <div className="p-2 bg-paper-50 rounded border border-paper-200 text-ink-800 font-sans text-xs">
                          {desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-paper-200 hover:bg-paper-300 border border-paper-300 text-ink-900 rounded text-sm font-medium transition-colors"
            >
              <span>Explore All Projects, DevOps &amp; Web Track</span>
              <ArrowRight className="w-4 h-4 text-terracotta" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Callout Strip */}
      <section className="py-20 border-b border-paper-300 bg-paper-100/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-paper-300 gap-4">
            <div>
              <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-1">
                Engineering Discipline
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink-900">
                How I Approach Software
              </h2>
            </div>
            <Link to="/about" className="text-xs font-mono text-terracotta hover:underline">
              Read full philosophy &amp; trajectory &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringPrinciples.slice(0, 3).map((item) => (
              <div key={item.number} className="bg-paper-50 border border-paper-300 p-6 rounded space-y-2">
                <span className="font-mono text-xs font-bold text-terracotta">[{item.number}]</span>
                <h3 className="font-bold text-ink-900 text-base leading-snug">{item.title}</h3>
                <p className="text-xs text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Note Feature & Contact Prompt */}
      <section className="py-20 border-b border-paper-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 bg-paper-50 border border-paper-300 rounded p-8 space-y-4 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
            <span className="font-mono text-xs text-terracotta uppercase tracking-wider font-semibold block">
              Recent Engineering Note
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">
              <Link to={`/notes/${latestNote.id}`} className="hover:text-terracotta transition-colors">
                {latestNote.title}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
              {latestNote.summary}
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-paper-200 text-xs font-mono">
              <span className="text-ink-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-terracotta" />
                {latestNote.readTime}
              </span>
              <Link to={`/notes/${latestNote.id}`} className="text-terracotta hover:underline">
                Read Article &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-ink-500 uppercase tracking-widest font-semibold block">
              Start a Conversation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              Looking for a thoughtful software builder?
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed">
              I am open to full-time software engineering roles, technical internships, and product collaborations.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-mono transition-colors"
              >
                <span>Get in touch directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
