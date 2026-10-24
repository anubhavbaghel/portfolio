import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Please write a message";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      const mailtoUrl = `mailto:${personalInfo.contacts.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <section className="border-b border-paper-300 pb-12 mb-16">
          <span className="font-mono text-xs text-terracotta uppercase tracking-widest font-semibold block mb-2">
            Initiate Contact &amp; Inquiries
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 mb-6 font-display">
            Get in Touch
          </h1>
          <p className="text-lg text-ink-600 max-w-2xl leading-relaxed font-sans">
            I am available for software engineering roles, technical internships, and product collaborations. Reach out directly or send an inquiry below.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900 tracking-tight font-display">
                Direct Channels
              </h2>
              <p className="text-sm text-ink-700 leading-relaxed font-sans">
                Whether you have an engineering role opening, a project proposal, or want to discuss architecture and software tools, I respond to all authentic inquiries.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="flex items-center gap-3 p-4 bg-paper-50 border border-paper-300 rounded-lg hover:border-terracotta transition-all text-ink-800 shadow-subtle hover:shadow-card"
              >
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <span className="truncate">{personalInfo.contacts.email}</span>
              </a>

              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-paper-50 border border-paper-300 rounded-lg hover:border-terracotta transition-all text-ink-800 shadow-subtle hover:shadow-card"
              >
                <GithubIcon className="w-4 h-4 text-ink-600 shrink-0" />
                <span>github.com/anubhavbaghel</span>
              </a>

              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-paper-50 border border-paper-300 rounded-lg hover:border-terracotta transition-all text-ink-800 shadow-subtle hover:shadow-card"
              >
                <LinkedinIcon className="w-4 h-4 text-ink-600 shrink-0" />
                <span>linkedin.com/in/anubhav-baghel</span>
              </a>
            </div>

            <div className="p-5 bg-paper-100 rounded-xl border border-paper-300 text-xs text-ink-600 font-mono space-y-2 shadow-subtle">
              <span className="text-ink-700 block uppercase tracking-wider font-semibold">Location &amp; Availability:</span>
              <p>Based in New Delhi, India (IST UTC+5:30).</p>
              <p>Open to on-site, hybrid, and remote opportunities.</p>
              <p className="text-terracotta pt-1 font-semibold">Typical response time: Within 24 hours.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-paper-50 border border-paper-300 rounded-xl p-6 sm:p-10 shadow-card">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-ink-900 font-display">Message Prepared</h3>
                <p className="text-sm text-ink-600 max-w-sm mx-auto leading-relaxed font-sans">
                  Your mail client has been opened with your message. If it did not launch automatically, feel free to write directly to: <strong className="text-ink-900">{personalInfo.contacts.email}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-paper-200 text-xs font-mono text-ink-800 rounded hover:bg-paper-300 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-sm" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-ink-600">
                      Your Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Patel"
                      className={`w-full bg-paper-100 border px-3.5 py-3 rounded-lg text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors font-sans ${
                        errors.name ? "border-red-400 bg-red-50/20" : "border-paper-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-ink-600">
                      Email Address <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@company.com"
                      className={`w-full bg-paper-100 border px-3.5 py-3 rounded-lg text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors font-sans ${
                        errors.email ? "border-red-400 bg-red-50/20" : "border-paper-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-ink-600">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Role at [Company] / Engineering Chat"
                    className="w-full bg-paper-100 border border-paper-300 px-3.5 py-3 rounded-lg text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-ink-600">
                    Message <span className="text-terracotta">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full bg-paper-100 border px-3.5 py-3 rounded-lg text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors resize-y font-sans ${
                      errors.message ? "border-red-400 bg-red-50/20" : "border-paper-300"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink-900 hover:bg-terracotta hover:text-white text-paper-50 rounded text-xs font-mono font-medium transition-colors cursor-pointer shadow-subtle hover:shadow-card"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
