import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="pt-40 pb-32 text-center max-w-xl mx-auto px-6 space-y-6">
      <span className="font-mono text-xs text-terracotta uppercase tracking-wider font-semibold block">
        Error 404
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 font-display">
        Page Not Found
      </h1>
      <p className="text-base text-ink-600 leading-relaxed font-sans">
        The requested URL or case study does not exist or has been relocated.
      </p>
      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 hover:bg-terracotta text-paper-50 rounded text-xs font-mono transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
