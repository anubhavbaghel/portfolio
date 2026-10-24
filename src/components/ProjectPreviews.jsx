import { Eye, Terminal, CheckCircle2, FileText, ArrowRight } from "lucide-react";

export function LocoPreview() {
  return (
    <div className="bg-paper-100 rounded-lg border border-paper-300 p-4 font-sans text-xs space-y-3 shadow-inner">
      {/* Mini App Header */}
      <div className="flex items-center justify-between pb-2 border-b border-paper-200">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-terracotta"></span>
          <span className="font-mono font-bold text-ink-900 tracking-wider">LOCO // DISCOVERY</span>
        </div>
        <span className="font-mono text-[10px] text-ink-500">NEW DELHI &bull; LIVE</span>
      </div>

      {/* Vibe Tags Filter */}
      <div className="flex flex-wrap gap-1.5">
        <span className="px-2 py-0.5 rounded bg-ink-900 text-paper-50 font-mono text-[10px]">#All Vibes</span>
        <span className="px-2 py-0.5 rounded bg-paper-200 text-ink-700 font-mono text-[10px]">#Live Music</span>
        <span className="px-2 py-0.5 rounded bg-paper-200 text-ink-700 font-mono text-[10px]">#Art &amp; Coffee</span>
        <span className="px-2 py-0.5 rounded bg-paper-200 text-ink-700 font-mono text-[10px]">#Underground</span>
      </div>

      {/* Simulated Event Card */}
      <div className="bg-paper-50 p-3 rounded border border-paper-200 space-y-2 shadow-xs">
        <div className="flex justify-between items-start">
          <div>
            <h5 className="font-bold text-ink-900 font-display text-sm">Sunday Vinyl &amp; Ceramic Studio</h5>
            <p className="text-ink-500 text-[11px]">Hauz Khas Village &bull; 5:00 PM</p>
          </div>
          <span className="px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] rounded border border-emerald-200 dark:border-emerald-800/60">
            92 Attending
          </span>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-paper-100 font-mono text-[10px] text-ink-400">
          <span>Normalized from 3 feeds</span>
          <span className="text-terracotta">Explore spot &rarr;</span>
        </div>
      </div>
    </div>
  );
}

export function SiteShotPreview() {
  return (
    <div className="bg-ink-900 rounded-lg border border-ink-800 p-4 font-mono text-xs text-paper-100 space-y-3 shadow-inner">
      {/* Mini Crawler Terminal Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-ink-700/80">
        <div className="flex items-center gap-1.5 text-paper-300">
          <Terminal className="w-3.5 h-3.5 text-terracotta" />
          <span className="text-[11px]">siteshot-crawler v1.2</span>
        </div>
        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Gemini 1.5 Pro Connected
        </span>
      </div>

      {/* Simulated Inspection Output */}
      <div className="bg-ink-800/80 p-2.5 rounded border border-ink-700 space-y-1.5 text-[11px]">
        <div className="flex justify-between text-ink-400 text-[10px]">
          <span>TARGET: /gallery/product-hero.webp</span>
          <span className="text-amber-300">HASH: d41d8cd9</span>
        </div>
        <div className="text-paper-100 font-sans text-xs bg-ink-900/90 p-2 rounded border border-ink-700">
          "Minimalist ceramic pour-over coffee dripper on matte oak countertop with morning sunlight."
        </div>
        <div className="flex justify-between pt-1 text-[10px] text-ink-400 font-mono">
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Schema Validated
          </span>
          <span className="text-sky-300">Cache Hit: 85% Saved</span>
        </div>
      </div>
    </div>
  );
}

export function ContentGuardPreview() {
  return (
    <div className="bg-paper-100 rounded-lg border border-paper-300 p-4 font-mono text-xs space-y-3 shadow-inner">
      <div className="flex items-center justify-between pb-2 border-b border-paper-200">
        <div className="flex items-center gap-1.5 text-ink-900">
          <FileText className="w-3.5 h-3.5 text-cobalt" />
          <span className="font-bold text-[11px]">ContentGuard // XML Engine</span>
        </div>
        <span className="text-[10px] text-ink-500">FastAPI &bull; python-docx</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px] font-sans">
        <div className="bg-paper-50 p-2 rounded border border-paper-200">
          <span className="font-mono text-ink-500 block text-[9px] uppercase font-bold">Input Spec</span>
          <p className="text-ink-800 font-mono text-[10px] mt-1">content.json (24 keys)</p>
          <span className="text-emerald-700 dark:text-emerald-400 text-[9px] font-mono mt-1 block">&bull; Schema 100% Valid</span>
        </div>

        <div className="bg-paper-50 p-2 rounded border border-paper-200">
          <span className="font-mono text-ink-500 block text-[9px] uppercase font-bold">Output Document</span>
          <p className="text-ink-800 font-mono text-[10px] mt-1">client_stencil.docx</p>
          <span className="text-terracotta text-[9px] font-mono mt-1 block">&bull; Dynamic CTA Cycled</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-paper-200 text-[10px] text-ink-600">
        <span>Zero formatting drift</span>
        <span className="font-bold text-ink-900">3 hrs/site saved</span>
      </div>
    </div>
  );
}

export function ProjectScreenshotPreview({ imageSrc, altText, link }) {
  return (
    <div className="group relative rounded-lg overflow-hidden border border-paper-300 bg-paper-100 shadow-sm transition-all hover:border-paper-400">
      {/* Browser Bar Frame */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-paper-200 border-b border-paper-300 text-[10px] font-mono text-ink-500">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400"></span>
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        </div>
        <span className="truncate max-w-[180px] text-[10px] opacity-75">{altText}</span>
        <Eye className="w-3 h-3 text-ink-400" />
      </div>

      <div className="relative aspect-video overflow-hidden bg-paper-200">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
        />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-ink-900/0 hover:bg-ink-900/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <span className="px-3 py-1.5 bg-paper-50 text-ink-900 rounded font-mono text-xs font-semibold shadow-md inline-flex items-center gap-1.5">
              <span>View Production Site</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
