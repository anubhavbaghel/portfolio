import { Link } from "react-router-dom";
import { technicalNotes } from "../data/portfolioData";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export default function NotesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 border-b border-paper-300 pb-12 mb-16">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-terracotta uppercase tracking-widest font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Writing &amp; Reflections</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 mb-6 font-display">
          Engineering Notes
        </h1>
        <p className="text-lg text-ink-600 leading-relaxed font-sans">
          Observations, architectural lessons, and technical retrospectives from building software, testing AI agents, and shipping production systems.
        </p>
      </section>

      {/* Articles Index */}
      <section className="max-w-4xl mx-auto px-6 space-y-10">
        {technicalNotes.map((note, index) => (
          <article
            key={note.id}
            className="bg-paper-50 border border-paper-300 rounded-xl p-8 sm:p-10 hover:border-paper-400 transition-all shadow-subtle space-y-4"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-500 pb-3 border-b border-paper-200">
              <span className="text-terracotta font-semibold">NOTE_0{index + 1}</span>
              <span>&bull;</span>
              <span>{note.date}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-ink-400" />
                {note.readTime}
              </span>
              <span>&bull;</span>
              <span className="text-ink-700 bg-paper-200 px-2 py-0.5 rounded border border-paper-300">{note.category}</span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight leading-snug mb-2 font-display">
                <Link to={`/notes/${note.id}`} className="hover:text-terracotta transition-colors">
                  {note.title}
                </Link>
              </h2>
              <p className="text-sm sm:text-base text-ink-700 leading-relaxed font-sans">
                {note.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-paper-200 flex items-center justify-between">
              <Link
                to={`/notes/${note.id}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink-900 hover:text-terracotta transition-colors"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs font-mono text-ink-400">anubhavbaghel.dev</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
