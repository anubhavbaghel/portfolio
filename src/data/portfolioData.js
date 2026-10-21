export const personalInfo = {
  name: "Anubhav Baghel",
  role: "Software Developer",
  website: "anubhavbaghel.dev",
  location: "New Delhi, India",
  headline: "Building useful software, thoughtfully.",
  supportingStatement:
    "Software development, AI-assisted engineering, and tools that solve real problems.",
  availability: {
    status: "Available for software engineering roles & product collaboration",
    isOpen: true,
  },
  bio: [
    "I am a software developer working at the intersection of engineering fundamentals, AI-assisted workflows, and practical product thinking. I build web applications, internal developer tools, and systems that solve real problems.",
    "My background combines hands-on web development across 60+ production client websites with a disciplined focus on software engineering: data structures, relational and document databases, modern full-stack architectures (React 19, Next.js, TypeScript), and AI model APIs.",
    "I view modern AI not as a magic substitute for engineering, but as a high-leverage amplifier. My focus remains on system correctness, validation, boundary testing, clean code, and shipping software that users can genuinely rely on.",
  ],
  contacts: {
    email: "code.anubhavbaghel@gmail.com",
    github: "https://github.com/anubhavbaghel",
    linkedin: "https://www.linkedin.com/in/anubhav-baghel/",
    resumeUrl: "/resume.pdf",
  },
};

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Solve the problem before choosing the tool",
    description:
      "Technology choices should follow real constraints—data shape, team capabilities, user latency, and operational cost—rather than trends or resume padding.",
  },
  {
    number: "02",
    title: "Use AI to accelerate work, not replace engineering judgement",
    description:
      "AI coding models generate syntax rapidly, but software engineering is about system architecture, boundary conditions, correctness, and failure modes. You cannot verify what you do not understand.",
  },
  {
    number: "03",
    title: "Prefer understandable solutions over unnecessary complexity",
    description:
      "Clever code is difficult to debug, test, and hand off. The most resilient codebases are readable, boringly predictable, and easy to refactor when requirements evolve.",
  },
  {
    number: "04",
    title: "Validate generated code rather than assuming it is correct",
    description:
      "AI outputs frequently hallucinate edge cases and API contracts. Engineering rigor demands thorough automated tests, type safety, manual sanity checking, and schema validation.",
  },
  {
    number: "05",
    title: "Build, test, deploy, observe, and improve",
    description:
      "Software only proves its value when it encounters real-world users, messy network conditions, and edge cases. Short feedback loops beat prolonged theoretical design every time.",
  },
  {
    number: "06",
    title: "Document important decisions and learn from failure",
    description:
      "Clear technical writing, architectural decision records (ADRs), and honest retrospectives are as important to long-term software health as the code itself.",
  },
];

export const selectedProjects = [
  {
    id: "loco",
    name: "LOCO",
    badge: "Product in Development",
    tagline: "City discovery platform for events, spaces, and local vibes",
    summary:
      "A modern discovery web application designed to help people find events and things to do in their city without fragmented searches across multiple social channels and aggregators.",
    status: "Active Development",
    year: "2026",
    role: "Sole Product Architect & Full-Stack Developer",
    stack: ["Next.js (App Router)", "TypeScript", "MongoDB", "Mongoose", "Zustand", "Tailwind CSS"],
    highlights: [
      "Lightweight schema normalization pipeline in Mongoose for categorizing dynamic city events",
      "Unified server API route (/api/events) with efficient connection pooling for serverless environments",
      "Client-side state synchronization using Zustand to ensure zero redundant re-renders",
    ],
    architecture: {
      client: "Next.js 15 App Router + Zustand reactive store",
      server: "Next Server Routes with connection caching",
      database: "MongoDB Atlas with compound index on date/category",
    },
    caseStudy: {
      problem:
        "Finding current local events, niche markets, live music, and community gatherings in a city requires bouncing between Instagram stories, ticketing apps, and outdated blog posts. Information is fragmented, stale, or buried behind algorithm feeds.",
      audience:
        "Urban residents, explorers, and travelers looking for reliable, categorized, and curated things to do today or this weekend without decision fatigue.",
      approach:
        "Built a minimalist, high-speed discovery interface with a focus on curated 'vibes' rather than overwhelming directories. Designed a clean event data model in MongoDB that stores event timing, location coordinates, category tags, and source attribution.",
      architectureDetails:
        "Employed Next.js App Router for server-rendered landing pages combined with client-side reactive filtering powered by Zustand. The MongoDB connection helper implements connection caching to prevent connection exhaustion in serverless function environments.",
      challenges: [
        "Handling heterogeneous data shapes: Events from different sources have missing end dates, vague venues, or non-standard timezones.",
        "Serverless connection management: Preventing Mongoose from establishing new database connections on every serverless API invocation.",
        "Data freshness: Designing a schema that automatically filters out past events without executing expensive date-parsing on the client.",
      ],
      testingValidation:
        "Verified schema constraints with Mongoose validation rules, tested API response latencies with mocked datasets, and conducted responsive testing across mobile viewports.",
      tradeoffs:
        "Prioritized a lean document model over a complex relational schema to allow rapid prototyping and flexibility in event metadata as source integrations evolve.",
      nextMilestones:
        "Implement automated source ingestion scrapers with deduplication algorithms, introduce geographic radius search using MongoDB 2dsphere indexes, and add verified event submission workflows.",
    },
    links: {
      github: "https://github.com/anubhavbaghel/loco",
      demo: null,
    },
  },
  {
    id: "siteshot",
    name: "SiteShot",
    badge: "Working Toolset",
    tagline: "AI-powered accessibility alt-text suite & multi-page website crawler",
    summary:
      "A dual-tool accessibility utility comprising an interactive Chrome Extension (Manifest V3) for in-page alt-text generation and an Electron desktop crawler for batch-analyzing entire websites with Google Gemini and local Ollama vision models.",
    status: "Completed & Deployed Tool",
    year: "2026",
    role: "Desktop & Extension Software Developer",
    stack: [
      "Electron",
      "Chrome Manifest V3",
      "JavaScript (ES6+)",
      "Google Gemini 1.5 Pro API",
      "Ollama Vision (Moondream/Llava)",
      "HTML5 / CSS3",
    ],
    highlights: [
      "Single-batch multi-modal Gemini API requests saving 85%+ of API quotas during multi-page crawls",
      "Interactive checklist UX: in-page overlay badges switch from green (pending) to red (copied) to track review progress",
      "Offline inference support using local Ollama vision models for sensitive or private staging environments",
      "Resilient retry mechanism with exponential backoff on HTTP 429/503 rate limits with live UI countdowns",
    ],
    architecture: {
      extension: "Manifest V3 background service worker + content script DOM parser",
      desktop: "Electron main process with headless crawl engine + IPC renderer",
      inference: "Google Gemini 1.5 Pro multimodal API + Local Ollama fallback",
    },
    caseStudy: {
      problem:
        "Writing accurate, contextual alt-text for hundreds of website images is tedious, leading content teams and web developers to either skip accessibility compliance or write useless generic descriptions like 'image1.jpg'.",
      audience:
        "Web developers, QA engineers, content editors, and accessibility auditors needing to review and supply high-quality image descriptions quickly across large websites.",
      approach:
        "Engineered two complementary tools: A lightweight browser extension for immediate, interactive inspection of live pages and preview URLs, and an Electron desktop app that crawls entire client websites headlessly, packages screenshots, and generates a standalone interactive HTML audit report.",
      architectureDetails:
        "The desktop application uses Node.js and headless browser scraping to traverse internal links while strictly respecting domain boundaries. It resolves lazy-loaded images (`data-src`, `data-lazy-src`, `srcset`), captures screenshots, and batches images into a unified Gemini 1.5 Pro request. The extension uses `chrome.storage.local` to cache generated results, ensuring zero repeat API calls when re-visiting pages.",
      challenges: [
        "API Rate Limits: Gemini API returns 429/503 during burst multi-page crawls. Implemented token-bucket throttling and automatic retry with UI countdown timers.",
        "Lazy-loading bypass: Many modern themes only populate `src` upon scroll. Implemented programmatic viewport scrolling and attribute fallback parsing before screenshot capture.",
        "Local inference compatibility: Designed an abstraction layer allowing users to switch seamlessly between cloud-based Gemini and offline Ollama (`moondream` / `llava`).",
      ],
      testingValidation:
        "Benchmarked quota usage (verified 85% drop in API calls via batching), validated cross-origin security policies on Manifest V3, and generated complete HTML reports for 15+ live production domains.",
      tradeoffs:
        "Chose Electron for the desktop crawler to allow cross-platform local disk and filesystem access for report generation, accepting a larger installer footprint in exchange for complete offline utility.",
      nextMilestones:
        "Add automated WCAG contrast checking alongside alt-text, and export reports directly to CSV/JSON for CMS ingestion.",
    },
    links: {
      github: "https://github.com/anubhavbaghel/siteshot",
      demo: null,
    },
  },
  {
    id: "contentguard",
    name: "ContentGuard / Document Studio",
    badge: "Internal Developer Tool",
    tagline: "Automated document assembly and website copy consistency engine",
    summary:
      "A developer productivity tool and web application that automates the generation of Word stencils (.docx) from structured JSON packages, preventing copy discrepancies between client content plans and published websites.",
    status: "Completed & Operational",
    year: "2026",
    role: "Backend & Tooling Developer",
    stack: ["Python", "FastAPI", "python-docx", "WordprocessingML XML", "Streamlit", "Tailwind CSS", "Docker"],
    highlights: [
      "Custom WordprocessingML schema manipulation preserving font hierarchies, bold spans, and formatting tables",
      "Dynamic CTA cycling algorithms that prevent repetitive button copy across generated page templates",
      "FastAPI web interface featuring live JSON pre-flight inspection and 1-click stencil generation",
    ],
    architecture: {
      backend: "FastAPI + python-docx XML transformation engine",
      frontend: "Lightweight HTML5 + Tailwind client with live pre-flight preview",
      runtime: "Docker container with Streamlit alternative deployment option",
    },
    caseStudy: {
      problem:
        "In fast-paced web agency environments, copywriters draft site copy in JSON or spreadsheets, which is manually pasted into Word documentation and CMS pages. This manual step introduces human copy errors, broken CTA buttons, and hours of repetitive formatting.",
      audience:
        "Website production teams, technical copywriters, and QA specialists delivering dozens of client sites each month.",
      approach:
        "Built a specialized document generation engine in Python that parses structured `content.json` files and programmatically populates XML-compliant Word templates. Added intelligent CTA cycling to automatically rotate between approved lead and in-text button pools.",
      architectureDetails:
        "The core engine (`fill_template.py`) directly manipulates WordprocessingML runs and paragraphs to ensure that character formatting, line breaks, and heading hierarchy remain clean. Wrapped the engine in a FastAPI web server with drag-and-drop file upload and pre-flight validation.",
      challenges: [
        "XML formatting corruption: Word templates easily corrupt if run tags (`<w:r>`) are replaced naively. Implemented paragraph-level run cloning to preserve styles.",
        "Variable page depth: Different websites have varying numbers of subpages. Built recursive template section cloners to accommodate dynamic page counts.",
      ],
      testingValidation:
        "Processed dozens of production content packages, verifying that generated DOCX files open cleanly in Microsoft Word and Google Docs without formatting degradation.",
      tradeoffs:
        "Focused strictly on WordprocessingML generation rather than a full WYSIWYG editor to keep the software lean, predictable, and immediately useful for existing agency workflows.",
      nextMilestones:
        "Add bidirectional diffing to compare published HTML pages directly against the source JSON specification.",
    },
    links: {
      github: "https://github.com/anubhavbaghel/Content-maker-tool",
      demo: null,
    },
  },
  {
    id: "thaddeus",
    name: "Thaddeus Creates",
    badge: "Production Live System",
    tagline: "Full-stack SSR handmade keepsakes studio with WhatsApp checkout",
    summary:
      "A production e-commerce platform built with React 19, TanStack Start SSR, Tailwind CSS, and Supabase. Features automated WhatsApp checkout flows, admin management portal, bot protection, and Schema.org rich snippet SEO.",
    status: "Live in Production",
    year: "2026",
    role: "Full-Stack Software Engineer & Designer",
    stack: ["React 19", "TanStack Start SSR", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Schema.org"],
    highlights: [
      "Full-stack SSR architecture delivering sub-second initial page loads and zero layout shift",
      "Zero-friction checkout flow generating pre-formatted WhatsApp orders for direct merchant communication",
      "Authenticated administrative dashboard for product inventory, pricing, and orders",
      "Structured JSON-LD schema integration for rich product snippets in Google search results",
    ],
    architecture: {
      frontend: "React 19 + TanStack Start SSR on Edge runtime",
      backend: "Server Functions + Supabase PostgreSQL with Row Level Security",
      seo: "Dynamic OpenGraph generation + Schema.org Product metadata",
    },
    caseStudy: {
      problem:
        "Traditional e-commerce platforms (Shopify, WooCommerce) have high monthly overhead, slow plugin-heavy page loads, and impersonal checkout flows for bespoke artisan businesses where custom order discussions happen over WhatsApp.",
      audience:
        "Artisan creators selling personalized handmade gifts to customers who prefer personal messaging over rigid checkout gateways.",
      approach:
        "Engineered a purpose-built storefront from scratch using React 19 and TanStack Start for server-side rendering, paired with Supabase PostgreSQL for lightweight relational product storage. Custom order builder compiles customer choices directly into an authenticated WhatsApp link.",
      architectureDetails:
        "Employs server components and SSR loaders to fetch catalog data at the network edge. Integrates Cloudflare Turnstile for spam/bot protection and Supabase Row Level Security (RLS) to safeguard administrative mutations.",
      challenges: [
        "TanStack Start SSR lifecycle: Navigating early-adoption patterns in TanStack Start while ensuring zero hydration mismatches in React 19.",
        "Mobile checkout conversion: Crafting a multi-step gift personalization selector that works smoothly on budget mobile devices.",
      ],
      testingValidation:
        "Tested live across desktop and mobile devices; achieved 98+ Lighthouse scores on performance and SEO; successfully processing production customer inquiries.",
      tradeoffs:
        "Chose WhatsApp-mediated checkout over automated payment gateway integrations to preserve the personal consultation required for customized artisan keepsakes.",
      nextMilestones:
        "Implement automated order tracking updates via webhooks and customer order lookup portal.",
    },
    links: {
      github: "https://github.com/anubhavbaghel/thaddeus-creates",
      demo: "https://thaddeuscreates.shop/",
    },
  },
  {
    id: "sales-insightify",
    name: "Sales Insightify",
    badge: "Analytical Showcase",
    tagline: "Executive sales analytics dashboard and data modeling suite",
    summary:
      "A comprehensive Power BI data visualization and analytics project that translates multi-year transactional retail data into interactive executive dashboards for revenue forecasting, customer segmentation, and product performance.",
    status: "Completed Project",
    year: "2025",
    role: "Data Analyst & Dashboard Designer",
    stack: ["Power BI", "DAX", "Power Query (M)", "Data Modeling", "Excel"],
    highlights: [
      "Star-schema relational model connecting sales transactions, store locations, and product hierarchies",
      "Advanced DAX measures for Year-over-Year (YoY) revenue growth, moving averages, and margin tracking",
      "High-contrast, accessible executive layout eliminating visual clutter for immediate decision-making",
    ],
    architecture: {
      etl: "Power Query M scripts for cleansing and type coercion",
      model: "Star schema with 1 fact table and 4 dimension tables",
      viz: "Interactive cross-filtering Power BI executive view",
    },
    caseStudy: {
      problem:
        "Raw transactional sales data in spreadsheets is too noisy for managers to identify underperforming regions, customer churn patterns, and seasonal margin compression.",
      audience:
        "Sales leadership, operations managers, and inventory planners seeking clear visual answers to commercial questions.",
      approach:
        "Designed a clean star schema to eliminate redundant joins, created calculated DAX measures for dynamic time-intelligence reporting, and built focused views answering specific business questions.",
      architectureDetails:
        "Normalized messy raw sources through Power Query M transformations. Developed DAX formulas for dynamic date hierarchies, product basket analysis, and target variance.",
      challenges: [
        "Handling missing historical pricing and fragmented customer records without distorting YoY trends.",
        "Maintaining dashboard interactivity and sub-second filtering across multi-thousand row datasets.",
      ],
      testingValidation:
        "Cross-reconciled calculated totals against raw database totals to confirm 100% calculation accuracy across fiscal periods.",
      tradeoffs:
        "Focused strictly on executive-level KPIs rather than granular operational logs to keep visual comprehension immediate.",
      nextMilestones:
        "Integrate automated data refresh pipelines connecting directly to cloud SQL databases.",
    },
    links: {
      github: null,
      demo: null,
    },
  },
  {
    id: "onroute",
    name: "OnRoute",
    badge: "Concept Prototype",
    tagline: "Corporate commute companion & shared transit coordinator",
    summary:
      "A product concept and user-experience prototype exploring shared corporate transit, route optimization, and live colleague pickup coordination for distributed tech teams in congested urban corridors.",
    status: "Design & Scoping Prototype",
    year: "2025",
    role: "Product Scoping & UI Designer",
    stack: ["Product Scoping", "User Flow Architecture", "Figma", "Interactive Prototyping"],
    highlights: [
      "User research into daily corporate commute bottlenecks in Delhi-NCR",
      "Dynamic route grouping concept pairing colleagues by shift timing and geographic clusters",
      "High-fidelity mobile wireframes detailing driver-rider communication and arrival alerts",
    ],
    architecture: {
      scoping: "Problem framing, persona interviews, and workflow diagrams",
      prototype: "Interactive multi-screen prototype in Figma",
    },
    caseStudy: {
      problem:
        "Corporate employees waste 2-3 hours daily in uncoordinated, stressful single-car commutes or unreliable public transit, while company cab routing remains rigid and inefficient.",
      audience:
        "Mid-to-large company employees working in tech hubs with shared office shift schedules.",
      approach:
        "Conducted informal user interviews, mapped out the journey from morning alarm to office desk, and designed an intuitive companion app focused on dynamic grouping, real-time vehicle ETAs, and verified coworker trust badges.",
      architectureDetails:
        "Architected complete user state diagrams covering scheduling, route confirmation, live tracking, and cancellation fallback rules.",
      challenges: [
        "Balancing route efficiency with walking distance tolerance for riders.",
        "Designing intuitive pickup reschedule interfaces that do not disrupt other riders on the route.",
      ],
      testingValidation:
        "Validated prototype flows with peers; gathered feedback on cognitive load during morning commute rush hours.",
      tradeoffs:
        "Kept as a design and functional prototype to thoroughly validate user assumptions prior to committing backend engineering resources.",
      nextMilestones:
        "Build a lightweight React Native MVP with simulated GPS feeds to test actual pickup coordination.",
    },
    links: {
      github: null,
      demo: null,
    },
  },
];

export const webEngineeringTrack = {
  headline: "Production Web Development Track",
  subheadline: "60+ client websites delivered with reliability, SEO, and precision.",
  overview:
    "Parallel to my software and product engineering, I have built, maintained, and delivered 60+ production websites for businesses across healthcare, e-commerce, hospitality, and aviation through agency roles at Adaan Digital Solutions and DI Infotech Leaders. This experience instilled deep respect for design fidelity, Core Web Vitals, accessibility, cross-browser compatibility, and real client deadlines.",
  workplaceExperience: [
    {
      company: "Adaan Digital Solutions",
      role: "SaaS Web Builder & WordPress Developer Intern",
      period: "June 2026 – Present",
      location: "New Delhi, India",
      summary:
        "Active contributor to 60+ client websites, executing end-to-end SaaS web building and WordPress workflows across diverse client industries.",
      responsibilities: [
        "Translate client UI/UX designs into pixel-perfect, accessible pages across desktop, tablet, and mobile viewports.",
        "Maintain production websites on WordPress and Wix CMS, resolving layout defects and functional issues using browser developer tools.",
        "Perform cross-browser QA testing, technical SEO audit remediation, and page speed optimization.",
      ],
      skills: ["WordPress", "Wix CMS", "Responsive Web Design", "HTML5", "CSS3", "JavaScript", "SEO", "QA Testing"],
    },
    {
      company: "DI Infotech Leaders Pvt. Ltd.",
      role: "WordPress Intern",
      period: "Jan 2026 – May 2026",
      location: "New Delhi, India",
      summary:
        "Built and delivered 10+ client websites converting designer wireframes into fast, responsive web interfaces.",
      responsibilities: [
        "Built and customized WordPress websites using Elementor and Divi, writing custom HTML/CSS/JS components when builders fell short.",
        "Configured SMTP email delivery, contact form workflows, and Core Web Vitals optimizations.",
        "Managed cPanel server environments, database backups, domain DNS configurations, and live deployments.",
      ],
      skills: ["WordPress", "Elementor", "Divi", "Shopify", "cPanel", "DNS & Hosting", "Core Web Vitals", "Git"],
    },
  ],
  selectedClientBuilds: [
    {
      title: "WDC India",
      type: "Bespoke Frontend",
      tech: "HTML5, CSS3, JavaScript",
      description: "Handcrafted frontend built from scratch with zero third-party frameworks for maximum performance.",
      link: "https://wdc-design-2.vercel.app/",
    },
    {
      title: "Flydheera",
      type: "Aviation & Travel",
      tech: "WordPress, Elementor",
      description: "End-to-end design and delivery from initial wireframes to turnkey client handoff.",
      link: "https://flydheera.com/",
    },
    {
      title: "Purava",
      type: "Luxury Brand",
      tech: "WordPress, Elementor",
      description: "High-converting brand showcase maintaining strict typography and visual guidelines across all pages.",
      link: "https://puravabath.com/",
    },
    {
      title: "Divya Jewellers",
      type: "E-Commerce & Retail",
      tech: "WordPress, Divi, Elementor",
      description: "Multi-page luxury redesign focusing on high-resolution image galleries and responsive browsing.",
      link: "https://divyajewellers.co.in/",
    },
    {
      title: "Dr. Anil Kumar Sharma",
      type: "Healthcare Practice",
      tech: "WordPress, Divi",
      description: "Professional doctor profile with appointment scheduling workflows and medical SEO structure.",
      link: "https://dranilkumarsharma.com/",
    },
    {
      title: "SewaExpo & Server Infrastructure",
      type: "Hosting & DevOps",
      tech: "cPanel, DNS, WordPress",
      description: "Server management, automated backup strategies, and multi-domain configuration for high uptime.",
      link: "https://www.sewaexpo.com/",
    },
  ],
};

export const technicalNotes = [
  {
    id: "ai-assisted-engineering-verification",
    title: "On AI-Assisted Engineering: Why Verification Is the Real Bottleneck",
    date: "October 2026",
    readTime: "5 min read",
    category: "Software Engineering & AI",
    summary:
      "When code generation becomes near-instantaneous, the primary constraint shifts from typing syntax to understanding systems, designing strict schemas, and validating edge cases.",
    content: [
      "In the past year, using coding agents and LLM APIs has fundamentally altered my development rhythm. But contrary to common hype, it has not made software engineering 'effortless.' In fact, it has made certain engineering disciplines far more critical.",
      "When an agent can output 200 lines of React or Python in five seconds, your bottleneck is no longer how fast you type. Your bottleneck is your ability to read, comprehend, and rigorously verify whether those 200 lines respect system boundaries, avoid race conditions, and correctly handle failure modes.",
      "I treat AI-assisted development like pairing with an eager, highly productive junior developer who has memorized every API manual but lacks situational awareness. They will write code that looks entirely plausible until you test the boundary conditions.",
      "The practical practices that keep me in control of quality:",
      "1. Type contracts first: Defining strict TypeScript interfaces or Pydantic schemas before asking for implementation prevents 80% of hallucinated fields.",
      "2. Micro-commit reviews: Reviewing small, atomic diffs rather than entire multi-file rewrites.",
      "3. Negative testing: Explicitly writing tests for invalid inputs, missing network connections, and rate-limited APIs.",
      "The future belongs not to prompt whisperers who cannot code, but to disciplined engineers who use AI to build deeper, more reliable systems in less time.",
    ],
  },
  {
    id: "content-parity-contentguard",
    title: "Architecting for Content Parity: Building ContentGuard",
    date: "September 2026",
    readTime: "4 min read",
    category: "Developer Tooling",
    summary:
      "How WordprocessingML XML manipulation and lightweight FastAPI services solved the persistent copy discrepancy problem in fast-paced web agencies.",
    content: [
      "In any high-volume web development agency, there is an invisible tax paid on copy-paste errors. A copywriter drafts content in structured documents. A developer pastes it into a CMS or HTML template. A QA tester discovers that three buttons have broken links, a heading was dropped, and a pricing tier is missing.",
      "Building ContentGuard was born out of direct frustration with this manual tax. I wanted a tool that would accept a single source of truth—a clean JSON specification—and automatically populate Word stencils without human interference.",
      "The primary technical hurdle was that Microsoft Word documents (.docx) are zipped archives of WordprocessingML XML files. If you naively perform string search-and-replace on the raw XML, you break Word's run structure (`<w:r>`), corrupting formatting and rendering the document unreadable.",
      "The solution was building an AST-like traversal with python-docx that preserves character formatting runs, cycles CTA button variants intelligently, and handles dynamic section counts recursively.",
      "The takeaway: Great internal tools do not need to be massive SaaS platforms. A 300-line Python service that eliminates 3 hours of repetitive weekly human error pays for itself on day one.",
    ],
  },
  {
    id: "building-ssr-storefront-react-19",
    title: "Lessons from Shipping a Production Full-Stack SSR Storefront",
    date: "August 2026",
    readTime: "6 min read",
    category: "Full-Stack Architecture",
    summary:
      "Trade-offs in choosing TanStack Start, React 19, Supabase, and WhatsApp checkout for an artisan keepsake brand over Shopify.",
    content: [
      "When building the storefront for Thaddeus Creates (thaddeuscreates.shop), the initial impulse from friends was 'just set up a Shopify store.' But for bespoke artisan keepsakes, traditional e-commerce paradigms break down quickly.",
      "Every product is custom-made. Customers need to discuss engravings, upload custom photos, and verify delivery dates before paying. Standard credit card checkouts create friction for this specific audience.",
      "By building with React 19 and TanStack Start SSR on Edge infrastructure, we achieved:",
      "- Sub-second initial page render with zero layout shift (CLS: 0.00).",
      "- Zero recurring monthly subscription overhead.",
      "- Dynamic Schema.org structured data rendered directly on the server for Google rich snippets.",
      "- A seamless multi-step configurator that compiles order details directly into an authenticated WhatsApp link.",
      "Using Supabase for PostgreSQL persistence and Row Level Security gave us a rock-solid database and administrative suite with minimal operational burden. Choosing the simpler, bespoke path created a faster experience for users and a much more reliable business tool for the merchant.",
    ],
  },
];

export const certifications = [
  {
    title: "Google Solution Challenge",
    issuer: "Google / Hack2skill",
    year: "2026",
    verificationUrl: "https://certificate.hack2skill.com/verify/2026H2S07SCBWAI-PS02140",
    badge: "Hackathon / Challenge",
  },
  {
    title: "PromptWars: Virtual Challenge 3",
    issuer: "Hack2skill",
    year: "2026",
    verificationUrl: "https://certificate.hack2skill.com/verify/2026H2S06PWVCHL3-A00601",
    badge: "AI Engineering Challenge",
  },
  {
    title: "GitHub Foundations",
    issuer: "DataCamp",
    year: "2026",
    verificationUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/track/f868408724fb10af808611b17f96ab1f47d22b70?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
    badge: "Version Control & Git",
  },
  {
    title: "Advanced React & Frontend Specialization",
    issuer: "Meta / Coursera",
    year: "2026",
    verificationUrl: "https://coursera.org/share/2f580a97078e7c9c625336d2fd8629b0",
    badge: "Frontend Engineering",
  },
  {
    title: "Programming with JavaScript & React Basics",
    issuer: "Meta / Coursera",
    year: "2025",
    verificationUrl: "https://coursera.org/share/661cf40c4d971027907e9b3374d8f6c5",
    badge: "Web Fundamentals",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Indira Gandhi National Open University (IGNOU)",
  status: "In Progress (Ongoing)",
  focus:
    "Core computer science curriculum: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Discrete Mathematics.",
};
