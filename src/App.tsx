import React, { useState } from "react";
import {
  ArrowUpRight, Mail, Github, Linkedin, Youtube,
  LineChart, Boxes, Activity, Users, Trophy, HeartPulse,
  GraduationCap, Briefcase, Terminal, FileText, Radio, Filter,
} from "lucide-react";


const LINKS = {
  email: "mailto:crollila@gmail.com",
  github: "https://github.com/crollila",
  linkedin: "https://www.linkedin.com/in/caseollila/",
  youtube: "https://www.youtube.com/@ExaltedFortnite",
  resume: "/Case_Ollila_Resume.pdf",
  sanctum: "https://sanctum.exaltedcapital.com/sanctum",
};

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Education />
        <Beyond />
        <PlanShiftDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function PlanShiftDownload() {
  const release = "https://github.com/crollila/planshift-releases/releases/download/v0.7.4";
  return (
    <section id="planshift" aria-labelledby="planshift-title" className="scroll-mt-24 border-y border-neutral-200">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-600">Windows desktop app · Version 0.7.4</p>
          <h2 id="planshift-title" className="mt-3 text-3xl font-semibold tracking-tight">PlanShift</h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Review public workforce notices, research retirement plans, and organize potential
            contacts in one place. Keep your tracker on your computer and export approved contacts to Excel.
          </p>
          <a href={`${release}/PlanShift-Setup-0.7.4.exe`}
            className="mt-6 inline-flex min-h-12 items-center rounded-sm bg-neutral-100 px-6 py-3 text-base font-semibold text-neutral-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Download PlanShift for Windows
          </a>
          <p className="mt-3 text-sm text-neutral-600">No Python installation needed. Existing records are kept when upgrading.</p>
          <p className="mt-3 text-sm text-neutral-600">
            <a className="underline underline-offset-4 hover:text-black" href="https://github.com/crollila/planshift-releases/releases/tag/v0.7.4">What changed</a>
            {" · "}<a className="underline underline-offset-4 hover:text-black" href={`${release}/SHA256SUMS.txt`}>Download checksum</a>
          </p>
        </div>
        <div className="rounded-none border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Your first five minutes</h3>
          <ol className="mt-5 list-decimal space-y-4 pl-5 text-base leading-relaxed text-neutral-700">
            <li><strong className="text-neutral-900">Install.</strong> Open the downloaded installer, follow the prompts, then launch PlanShift.</li>
            <li><strong className="text-neutral-900">Try the demo.</strong> Choose Try Demo Mode to explore sample data without connecting accounts.</li>
            <li><strong className="text-neutral-900">Start your tracker.</strong> For real data, complete setup and select Fetch new data on Home. Optional services can be connected later in Settings.</li>
          </ol>
          <p className="mt-5 border-t border-neutral-200 pt-4 text-sm leading-relaxed text-neutral-600">
            Contact research requires a separate provider account and may incur charges.
            Every contact requires your review. PlanShift never contacts anyone automatically.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- chrome --------------------------------- */

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [{ label: "Projects", href: "#work" }, { label: "Sanctum", href: LINKS.sanctum }, { label: "Experience", href: "#experience" }, { label: "Beyond the resume", href: "#beyond" }, { label: "Resume", href: LINKS.resume }];
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Case Ollila home"><span className="text-sm font-medium">Case Ollila<span className="mt-0.5 block text-xs font-normal text-neutral-600">Finance &amp; quantitative research</span></span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm md:flex">{nav.map(n => <a key={n.href} href={n.href} className="text-neutral-700 hover:text-black">{n.label}</a>)}<a href="#contact" className="contact-link">Contact</a></nav>
        <button type="button" className="rounded-lg border border-neutral-200 px-3 py-2 text-sm md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="grid gap-1 border-t border-neutral-200 px-4 pb-4 md:hidden">{[...nav, {label: "Contact", href: "#contact"}].map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-neutral-800 hover:bg-white">{n.label}</a>)}</nav>}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-10 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between md:px-6">
        <span>&copy; {new Date().getFullYear()} Case Ollila &middot; Finance, research &amp; software</span>
        <div className="flex flex-wrap gap-5">
          <a className="transition-colors hover:text-neutral-800" href={LINKS.github}>GitHub</a>
          <a className="transition-colors hover:text-neutral-800" href={LINKS.linkedin}>LinkedIn</a>
          <a className="transition-colors hover:text-neutral-800" href={LINKS.youtube}>YouTube</a>
          <a className="transition-colors hover:text-neutral-800" href={LINKS.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, lede, children }: {
  id: string; eyebrow: string; title: string; lede?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-14">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        {lede && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600">
            {lede}
          </p>
        )}
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

function Pill({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-sm border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-600 hover:text-neutral-900"
    >
      {icon}{children}
    </a>
  );
}

/* ----------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="intro mx-auto max-w-5xl px-4 md:px-6">
      <img className="intro-portrait" src="/case-ollila.jpg" alt="Case Ollila" width="800" height="1000" fetchPriority="high" />
      <div className="intro-copy">
      <p className="text-sm text-neutral-600">Finance · Quantitative research · Software development</p>
      <h1>Case Ollila</h1>
      <p className="intro-summary">Finance graduate from Colorado State University, building financial models, market research systems, and practical software.</p>
      <p className="mt-4 max-w-3xl leading-relaxed text-neutral-600">My work spans options pricing in q/kdb+, Python research pipelines, hedging backtests in R, and desktop applications. I am seeking analyst opportunities in global markets, sales &amp; trading, equity research, and quantitative research.</p>
      <div className="intro-links"><a href={LINKS.resume}>Resume</a><a href={LINKS.github}>GitHub</a><a href={LINKS.linkedin}>LinkedIn</a><a href={LINKS.email}>crollila@gmail.com</a></div>
      <p className="mt-6 text-sm text-neutral-600"><strong className="font-medium text-neutral-800">Technical skills:</strong> Python, Excel, R, q/kdb+, TypeScript, OCaml</p>
      </div>
    </section>
  );
}

/* ----------------------------------- work ---------------------------------- */

type Project = {
  category?: string;
  featured?: boolean;
  title: string;
  blurb: string;
  stack: string[];
  href: string;
  download?: string;
  icon: React.ReactNode;
  highlight?: string;
  since?: string;
};

const PROJECTS: Project[] = [
  {
    title: "PlanShift", category: "Applications",
    blurb: "Developed for KW Capital Advisors / Ameriprise Financial during my private wealth internship. A Windows application that brings together public workforce notices, retirement-plan research, and prospect tracking, with local record storage and Excel exports for advisor review.",
    highlight: "Built for an advisory workflow · Windows application",
    stack: ["Workflow automation", "Retirement-plan research", "Excel exports"],
    href: "#planshift", icon: <Boxes size={18} />,
  },
  {
    title: "Exotic Deal EV Engine",
    category: "Valuation", featured: true,
    blurb: "Underwrites a fictional market-making agreement by modeling warrants, KPI vesting, preferred waterfalls, and financing together. A 15-tab Excel model connects scenario analysis to a Python valuation engine, with a research memo explaining the assumptions and negotiation tradeoffs.",
    highlight: "50,000 simulated paths · Shapley attribution · Synthetic transaction",
    stack: ["Python", "Excel", "Monte Carlo"],
    href: "https://github.com/crollila/exotic-deal-ev-engine", icon: <LineChart size={18} />,
  },
  {
    title: "Fantasy Manager",
    category: "Applications", featured: true,
    blurb: "A Windows application for fantasy football research and injury-aware lineup decisions. Combines ESPN league integration, local data storage, a React interface, and archived forecasts with visible accuracy tracking. Model probabilities remain experimental.",
    highlight: "Windows v0.4.1 · Remembered ESPN sign-in · Local forecast evaluation",
    stack: ["Python", "FastAPI", "React", "SQLite"],
    download: "https://github.com/crollila/fantasy-manager/releases/download/v0.4.1/Fantasy-Manager-Setup-0.4.1.exe",
    href: "https://github.com/crollila/fantasy-manager", icon: <Boxes size={18} />,
  },
  {
    title: "Sanctum — Open Research Lab",
    blurb:
      "An interactive research floor where AI agents generate trading hypotheses, debate them, and run a ten-stage validation pipeline before simulated trading. The public view makes research activity and the evaluation process visible.",
    highlight: "Live now — real research activity, simulated money only",
    since: "Since Aug 2026",
    stack: ["Python", "FastAPI", "Postgres", "React", "LLM agents"],
    href: LINKS.sanctum,
    icon: <Radio size={18} />,
  },
  {
    title: "Regime Lab",
    featured: true, category: "Research",
    blurb:
      "Evaluates four market-regime models using causal filtering, lookahead-detection tests, and walk-forward validation. Compares results against a leverage-matched volatility-targeting control, documenting where apparent performance disappears under stricter evaluation.",
    highlight: "Same logic, 0.44 Sharpe causal against 1.39 with lookahead",
    since: "Since Aug 2026",
    stack: ["Python", "HMM", "Jump models", "BOCPD", "Walk-forward"],
    href: "https://github.com/crollila/regimelab",
    icon: <Activity size={18} />,
  },
  {
    title: "Strategy Survival Funnel",
    blurb:
      "Tests 318 configurations of 47 retail trading strategies across 29 assets and 15 years of daily data. Walk-forward validation, six survival filters, parameter sensitivity, and bootstrap stress tests separate appealing backtests from more robust candidates.",
    highlight: "9,222 backtests in, 67 out — a 0.73% survival rate",
    since: "Since Aug 2026",
    stack: ["Python", "Walk-forward", "Bootstrap"],
    href: "https://github.com/crollila/strategy-survival-funnel",
    icon: <Filter size={18} />,
  },
  {
    title: "Multifractal Time-GPT",
    blurb:
      "Volatility-regime conditioning for news-driven trading: Markov-Switching Multifractal regime detection with Hamilton filtering, fused with LLM news sentiment via empirical-Bayes shrinkage of per-regime betas. On synthetic validation, the edge came from the trades the model refused to take, and a flat-response control confirmed it finds no edge where none exists.",
    highlight: "80 tests; regime service answers in under a millisecond",
    since: "Since Jul 2026",
    stack: ["Python", "MSM", "FastAPI", "TimeGPT"],
    href: "https://github.com/crollila/Multifractal-Time-GPT",
    icon: <Activity size={18} />,
  },
  {
    title: "Implied Volatility Surface with SVI",
    blurb:
      "Builds an implied volatility surface from live equity-index options, calibrating raw SVI per expiry slice with full static-arbitrage diagnostics. Black-Scholes, the implied-vol inversion, and the SVI fit are all written from scratch rather than pulled from a library.",
    highlight: "Median fit error of 15 vol bps on SPY",
    since: "Since Jun 2026",
    stack: ["Python", "NumPy", "SciPy"],
    href: "https://github.com/crollila/implied-vol-surface-svi",
    icon: <Activity size={18} />,
  },
  {
    title: "Monte Carlo Option Pricer in q/kdb+",
    blurb:
      "European, Asian, and knock-out barrier options priced in idiomatic vectorized q, where no loop ever touches a path. Validated against closed-form Black-Scholes, with antithetic variance reduction and a convergence and throughput study.",
    highlight: "Vectorized q implementation with convergence and throughput analysis",
    since: "Since Apr 2026",
    stack: ["q / kdb+", "Monte Carlo"],
    href: "https://github.com/crollila/kdb-monte-carlo-option-pricer",
    icon: <Terminal size={18} />,
  },
  {
    title: "Delta and Delta-Gamma Hedging Backtest",
    blurb:
      "Backtests hedging an option position across 16 years of SPY data, comparing delta-only against delta-gamma hedging through real volatility regimes. Black-Scholes and the full hedging engine implemented from scratch in R.",
    highlight: "16 years of daily data",
    since: "Since May 2026",
    stack: ["R", "Black-Scholes"],
    href: "https://github.com/crollila/delta-gamma-hedging-backtest",
    icon: <LineChart size={18} />,
  },
  {
    title: "Prediction Market Calibration Study",
    blurb:
      "An end-to-end research question: are prediction markets better calibrated than sportsbooks? Includes a live collection daemon, historical backfill, settlement reconciliation, and calibration analysis with event-clustered inference.",
    highlight: "89,000 price snapshots across 351 MLB games",
    since: "Since Mar 2026",
    stack: ["Python", "DuckDB", "Statistics"],
    href: "https://github.com/crollila/pm-calibration",
    icon: <Boxes size={18} />,
  },
  {
    title: "Polymarket vs. Vegas Edge",
    blurb:
      "Quantitative sports-betting research comparing devigged sportsbook lines against live Polymarket prices, with fractional Kelly sizing and closing-line-value tracking. Ships with an honest post-mortem on real positions, including what did not work.",
    highlight: "Post-mortem on 232 real positions",
    since: "Since Jan 2026",
    stack: ["Python", "Kelly criterion", "CLV"],
    href: "https://github.com/crollila/polymarket-vegas-edge",
    icon: <LineChart size={18} />,
  },
  {
    title: "Option Pricing Model Comparison",
    blurb:
      "European and American option pricing implemented three ways, Black-Scholes, CRR binomial trees, and Monte Carlo, then cross-validated against each other and benchmarked against live market quotes. Written in OCaml to make the type system carry the math.",
    since: "Since Mar 2026",
    stack: ["OCaml", "Numerical methods"],
    href: "https://github.com/crollila/option-pricing-model-comparison",
    icon: <Boxes size={18} />,
  },
  {
    title: "News Sentiment Trading Algorithm",
    blurb:
      "An event-driven trading system in Node.js that scores breaking Benzinga headlines through a tailored GPT model, then routes buy, sell, short, and cover decisions through Alpaca, gated by liquidity filters, position sizing, drawdown stops, and fail-safes.",
    highlight: "Event-driven architecture with execution risk controls",
    since: "Since Jan 2025",
    stack: ["Node.js", "OpenAI", "Alpaca", "Benzinga"],
    href: "https://github.com/crollila/High-Frequency-Trading-Algorithm-with-Instant-News-Sentiment-Analysis",
    icon: <Activity size={18} />,
  },
  {
    title: "ExaltedFable News Research",
    blurb:
      "The disciplined follow-up to the trading bot: a research harness that tests whether scored news events actually predict price reactions, using pluggable news providers, sentiment classification, and event studies, before any trading logic is trusted with money.",
    since: "Since Oct 2025",
    stack: ["JavaScript", "Event studies"],
    href: "https://github.com/crollila/exalted-fable-news-trader",
    icon: <Terminal size={18} />,
  },
  {
    title: "Agent Trading Lab",
    blurb:
      "Two teams of research, strategy, and risk agents operate Alpaca paper accounts. A deterministic risk engine enforces exposure limits and a kill switch, while decision logs and daily comparisons with SPY support review.",
    since: "Since Jan 2026",
    stack: ["Python", "LLM agents"],
    href: "https://github.com/crollila/exalted-agent-trading-lab",
    icon: <Boxes size={18} />,
  },
  {
    title: "AlpacaBot",
    blurb:
      "Where this all started. Automated equity-trading software wiring trading signals into Alpaca for programmatic execution, covering signal processing, order generation, position management, monitoring, and the first risk controls I ever had to design myself.",
    highlight: "The earliest of the trading systems, and the start of the timeline",
    since: "Since May 2024",
    stack: ["Python", "Alpaca"],
    href: "https://github.com/crollila/AlpacaBot",
    icon: <Terminal size={18} />,
  },
];

const CATEGORIES = ["All projects", "Valuation", "Research", "Trading systems", "Applications"];
function projectCategory(p: Project) {
  if (p.category) return p.category;
  if (/Sanctum/.test(p.title)) return "Applications";
  if (/Pric|Volatility Surface|Hedging/.test(p.title)) return "Valuation";
  if (/Trading|AlpacaBot|ExaltedFable/.test(p.title)) return "Trading systems";
  return "Research";
}
function Work() {
  const [category, setCategory] = useState("All projects");
  const [expanded, setExpanded] = useState(false);
  const filtered = PROJECTS.filter(p => category === "All projects" || projectCategory(p) === category);
  const visible = expanded || category !== "All projects" ? filtered : filtered.slice(0, 6);
  return (
    <Section id="work" eyebrow="Portfolio" title="Selected projects"
      lede="Independent projects in valuation, market research, and software. Explore the code, methods, and limitations behind each one. Trading systems use research or simulated environments; synthetic results are labeled.">
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{CATEGORIES.map(c => <button type="button" key={c} aria-pressed={category === c} onClick={() => { setCategory(c); setExpanded(false); }} className={category === c ? "filter-button active" : "filter-button"}>{c}</button>)}</div>
      <p role="status" className="mb-5 text-sm text-neutral-600">Showing {visible.length} of {filtered.length} projects{category !== "All projects" ? " in " + category.toLowerCase() : " · selected work"}</p>
      <div className="project-list">{visible.map(p => <ProjectCard key={p.title} {...p} />)}</div>
      <div className="mt-8 flex flex-wrap items-center gap-6">{category === "All projects" && <button type="button" onClick={() => setExpanded(!expanded)} className="filter-button">{expanded ? "Show selected projects" : "Show all " + PROJECTS.length + " projects"}</button>}<a href={LINKS.github} className="inline-flex items-center gap-2 text-sm text-slate-800 hover:text-slate-900">Explore GitHub <ArrowUpRight size={15} /></a></div>
    </Section>
  );
}

function ProjectCard(p: Project) {
  const { title, blurb, stack, href, highlight, since, download } = p;
  return (
    <article className="project-card">
      <div className="project-heading"><h3><a href={href}>{title}</a></h3><span className="text-xs text-neutral-600">{projectCategory(p)}</span></div>
      <p className="mt-3 leading-relaxed text-neutral-600">{blurb}</p>
      {highlight && <p className="mt-3 text-sm text-neutral-700">{highlight}</p>}
      <div className="project-meta"><span>{stack.join(" · ")}{since ? " / " + since : ""}</span><span className="flex flex-wrap gap-5">{download && <a href={download}>Download for Windows <span aria-hidden="true">↓</span></a>}<a href={href}>{href === "#planshift" ? "Details and download" : href === LINKS.sanctum ? "View research floor" : "View repository"} <span aria-hidden="true">↗</span></a></span></div>
    </article>
  );
}

/* -------------------------------- experience ------------------------------- */

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional experience">
      <div className="space-y-5">
        <Role
          icon={<Briefcase size={18} />}
          title="Private Wealth Intern"
          org="KW Capital Advisors / Ameriprise Financial, Boulder, CO"
          when="Summer 2026"
          points={[
            "Sat in on private wealth client meetings covering portfolio reviews, retirement income, tax-aware planning, risk tolerance, and liquidity needs.",
            "Walked clients through 401(k) rollovers end to end after their business was sold, handling enrollment forms, written directions, and follow-up calls.",
            "Prepared mutual fund analysis presentations for advisor investment discussions, and built the client meeting notes and summaries behind them.",
            "Wrote an equity research memo with a full investment thesis, bull and bear cases, valuation, and risk assessment.",
            "Consolidated 15 financial documents into a single client dashboard spanning banking, investment, retirement, stock, and tax records, masking account and identity details throughout.",
            "Learned Salesforce, Advisor Compass, and MoneyGuide; cleaned duplicate accounts and reorganized advisor insights so client opportunities surfaced by priority.",
            "Built PlanShift for KW Capital Advisors / Ameriprise Financial: a Windows application that consolidates public workforce notices, retirement-plan research, and prospect tracking, with Excel exports to support advisor review and follow-up.",
            "Completed more than 150 hours in a professional advisory office.",
          ]}
        />
        <Role
          icon={<Users size={18} />}
          title="Member, Student Fee Review Board"
          org="Colorado State University"
          when="Undergraduate"
          points={[
            "Reviewed budget requests and student fee allocations, weighing funding proposals from campus organizations against a fixed pool of student money.",
            "The exercise was the one finance actually runs on: read a budget critically, question the assumptions behind the ask, and then defend the allocation to the people it affects.",
          ]}
        />
        <Role
          icon={<Youtube size={18} />}
          title="Founder and Full-Time Creator"
          org="Exalted, on YouTube, Twitch, and TikTok"
          when="2013 - 2022"
          points={[
            "Built a Fortnite education channel to 243,000 subscribers and 30.4 million lifetime views, writing, filming, and editing 205 videos solo.",
            "Six videos passed a million views, with the top two reaching 2.9 million each, in a category where the audience is other competitive players and the bar for being taken seriously is high.",
            "Ran the entire operation: content strategy, thumbnail and title testing, retention analysis, SEO, and community management, and negotiated sponsorships with brands including Red Bull.",
            "Earned an Epic Games creator code, and grew connected Discord, Twitch, Instagram, and TikTok audiences alongside the channel.",
            "Left school during COVID to pursue this full time, then chose to come back, a decision I can explain clearly and would make the same way again.",
          ]}
        />
      </div>
    </Section>
  );
}

function Role({ title, org, when, points }: {
  icon: React.ReactNode; title: string; org: string; when: string; points: string[];
}) {
  return (
    <div className="experience-entry">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">

          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-neutral-600">{org}</p>
          </div>
        </div>
        <span className="text-sm text-neutral-600">{when}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-sm bg-neutral-600" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------- education -------------------------------- */

function Education() {
  const groups = [
    {
      heading: "Markets and finance",
      courses: [
        "Debt Securities Analysis", "Derivative Securities", "Advanced Portfolio Management",
        "Financial Markets and Institutions", "Principles of Investments",
        "International Business Finance", "Principles of Finance",
      ],
    },
    {
      heading: "Analytics and computing",
      courses: [
        "Analytics and AI in Business", "AI and Strategic Value Creation",
        "Statistics with Business Applications", "Computational Thinking",
        "Data Structures", "Culture and Coding: Python",
      ],
    },
    {
      heading: "Business and strategy",
      courses: [
        "Strategic Management", "Fundamentals of Entrepreneurship", "Marketing",
        "Business Writing and Communication", "Managerial Accounting", "Financial Accounting",
      ],
    },
  ];

  return (
    <Section id="education" eyebrow="Education" title="Colorado State University">
      <div className="education-entry">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">

            <div>
              <h3 className="text-lg font-medium">B.S. Business Administration, Concentration in Finance</h3>
              <p className="text-sm text-neutral-600">
                Previously biology and pre-med at Ohio State; Associate of Science, Front Range Community College
              </p>
            </div>
          </div>
          <span className="text-sm text-neutral-600">Conferred August 2026</span>
        </div>

        <p className="mt-6 max-w-3xl leading-relaxed text-neutral-600">
          I started in biology because I wanted to be a surgeon, and I still think the body is the most interesting
          system there is. Markets turned out to be the other system I could not stop taking apart, and they rewarded
          the same competitive instinct. The coursework below reflects both, plus the computer science I added because
          the finance questions I cared about needed code to answer.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.heading}>
              <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-600">{g.heading}</h4>
              <ul className="mt-3 space-y-1.5">
                {g.courses.map((c) => <li key={c} className="text-sm text-neutral-600">{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------- beyond --------------------------------- */

function Beyond() {
  return (
    <Section
      id="beyond"
      eyebrow="Creator, competitor, and community leader"
      title="Beyond the resume"
      lede="Before finance, I built an audience and led competitive teams. Those experiences shaped how I prepare, communicate, and take responsibility for outcomes."
    >
      <div className="grid items-start gap-5 md:grid-cols-2">
        <StoryCard
          icon={<Trophy size={18} />}
          title="Professional Fortnite"
          id="fortnite"
          lede="41 top-1,000 finishes · 8 top-200 finishes · 3 top-100 finishes"
          body={
            <>
              <p>Professional Fortnite competitor with appearances at Twitch Rivals and in-person LAN tournaments in the United States and internationally.</p>
              <ul className="leadership-points">
                <li><strong>World Cup weekly online finalist:</strong> Placed 459th in regional Solo Week 9 qualifying and advanced to the weekly online finals during the 2019 Fortnite World Cup—a competition that drew over 40 million participants worldwide.</li>
                <li><strong>Repeated high placements in large competitive fields:</strong> Competed in open qualifying and cup fields of 10,000+ teams or players, earning 41 top-1,000 finishes—including eight top-200 and three top-100 finishes—across 110 recorded qualifying, finals, and other competitive sessions.</li>
                <li><strong>Three top-100 team finishes:</strong> Placed 53rd in Trios Week 3 qualifying, 68th in Luxe Cup NA West qualifying, and 83rd in the NA West Trios Cash Cup. The Luxe Cup result alone ranks within the top 0.68% of a documented field of at least 10,000 teams.</li>
                <li><strong>Discipline and execution:</strong> Maintained a dedicated practice routine, adapted strategies with teammates, and stayed composed through tournament setbacks. Relocated to Ashburn, Virginia to reduce network latency and improve competitive conditions.</li>
              </ul>
              <p className="mt-4">Competed during an era when Fortnite reached <a href="https://www.fortnite.com/news/fall-skirmish-details?lang=en-US" className="underline underline-offset-4">78.3 million monthly players (August 2018)</a>. Built my <a href="#youtube" className="underline underline-offset-4">independent creator business</a> alongside competition, turning firsthand experience into educational content.</p>
              <details className="mt-5 text-sm text-neutral-600">
                <summary className="cursor-pointer font-medium text-neutral-900">Results and sources</summary>
                <ul className="leadership-points">
                  <li>World Cup Solo Week 9: 459th in the opening round on June 8, 2019; 810th in the weekly online finals on June 9.</li>
                  <li>Top-100 finishes: 53rd, Trios Week 3 opening round (September 1, 2019); 68th, Luxe Cup NA West opening round (March 30, 2019); 83rd, NA West Trios Cash Cup (August 30, 2019).</li>
                  <li>Other top-200 finishes: 112th in Duos Test Event; 119th and 138th in FNCS Trios Week 1 rounds; 145th in World Cup Warmup; 154th in PlayVS Collegiate.</li>
                </ul>
                <p className="mt-3">Counts come from 110 sessions in my recorded event history, including qualifying rounds, finals, collegiate competition, and a test event. Top-100 finishes are included in the top-200 and top-1,000 totals.</p>
                <p className="mt-3">The 10,000+ field context reflects the opening-round and cup leaderboards I reviewed on Fortnite Tracker, which stop displaying results at rank 10,000. The <a href="https://fortnitetracker.com/events/epicgames_LuxeCup_NAW?window=LuxeCup_NAW_Event1&amp;page=99" className="underline underline-offset-4">Luxe Cup leaderboard</a> is one documented example: 68 ÷ 10,000 = 0.68%. The finish counts also include later rounds with smaller qualified fields, collegiate competition, and a test event; they do not represent 41 separate fields of 10,000+. Totals beyond the display cap remain unknown.</p>
                <p className="mt-3"><a href="https://www.fortnite.com/news/the-fortnite-world-cup-a-record-setting-tournament?lang=en-US" className="underline underline-offset-4">Epic’s 40-million figure</a> covers the worldwide World Cup campaign, not an individual regional round. Weekly online finals preceded the World Cup Finals in New York.</p>
                <p className="mt-3"><a href="https://fortnitetracker.com/profile/all/0%20Ping%20Exalted/events" className="underline underline-offset-4">Tournament history ↗</a> · <a href="https://fortnite-esports.fandom.com/wiki/Exalted" className="underline underline-offset-4">Esports results archive ↗</a> · <a href="https://www.fortnite.com/news/fortnite-champion-series-season-x-official-rules" className="underline underline-offset-4">FNCS qualification rules ↗</a></p>
              </details>
            </>
          }
        />

        <YouTubeFeature />

        <StoryCard
          icon={<Users size={18} />}
          title="World of Warcraft — Leading Ashes"
          body={<AshesLeadership />}
        />

        <StoryCard
          icon={<HeartPulse size={18} />}
          title="Type 1 diabetic since age three, training for an Ironman"
          body={
            <>
              <p>
                Twenty-three years with Type 1 means twenty-three years of reading continuous data, dosing under
                uncertainty, and managing a system that punishes inattention immediately. I did not pick that as a
                discipline exercise, but it is the reason risk management feels intuitive to me rather than academic.
              </p>
              <p className="mt-3">
                I ran the Bolder Boulder 10K at age eleven and still run it; this May I went 56:39. The twelve months
                behind that are logged: 241 sessions, 150 hours, 623 miles of running. A first sub-hour 10K in October
                2025, the Houston Half Marathon in 1:58 in January, a 77-mile peak month in November.
              </p>
              <p className="mt-3">
                I rode a bike for the first time on May 27 and swam my first open water in August. At least 160 miles
                on the bike since, the longest 40 at 17.3 mph, alongside 2,000-meter pool sessions. The Ironman is the
                point of it, but the part I would actually defend is the log itself: a year of small, boring, measured
                additions that only look like progress in aggregate.
              </p>
            </>
          }
        />

        <StoryCard
          icon={<Users size={18} />}
          title="Communities, teams, and a long competitive streak"
          body={
            <>
              <p>
                Before Ashes there was a pattern: top-rank Vainglorious in Vainglory, top six in Clash Royale, one of
                the first Town Hall 9 Champions in my Clash of Clans circle, Scarab Lord in WoW. I have led the guild
                or the clan in essentially every game I have played seriously, including a Discord community of 12,000
                members.
              </p>
              <p className="mt-3">
                Away from a screen: piano, guitar, magic tricks, competitive swimming as a kid, lacrosse, tennis, and
                an unreasonable board-game win rate. In GLO-BUS my team ranked first in class and top 100 in North
                America, then placed 3rd in the finals.
              </p>
            </>
          }
        />
      </div>
    </Section>
  );
}

function YouTubeFeature() {
  return (
    <StoryCard id="youtube" icon={<Youtube size={18} />} title="Independent Creator — Exalted"
      lede="243,000 subscribers · 30.4 million lifetime views · 205 videos created solo"
      body={<>
        <p>Built and independently operated a Fortnite education channel, with six videos exceeding one million views. Owned the creative process and the business behind it.</p>
        <ul className="leadership-points">
          <li><strong>End-to-end production:</strong> Researched topics, taught competitive strategies, wrote scripts, recorded gameplay, edited videos, and managed publishing.</li>
          <li><strong>Audience development:</strong> Used retention analytics, search optimization, and thumbnail and title testing to guide content decisions and improve engagement.</li>
          <li><strong>Business management:</strong> Negotiated sponsorships with brands including Red Bull, participated in the Epic Games creator program, and managed sponsor relationships.</li>
          <li><strong>Community building:</strong> Managed engagement across YouTube, Discord, Twitch, Instagram, and TikTok, translating complex gameplay into accessible instruction.</li>
        </ul>
        <p className="mt-4">Built the channel alongside my <a href="#fortnite" className="underline underline-offset-4">professional Fortnite career</a>. Competition informed the educational content; the channel developed a separate audience and commercial business around that expertise.</p>
        <a href={LINKS.youtube} className="mt-5 inline-block text-sm underline underline-offset-4">Visit the Exalted YouTube channel ↗</a>
      </>} />
  );
}

function AshesLeadership() {
  return (
    <div>
      <h4 className="font-semibold">Founder &amp; Guild Leader, Ashes</h4>
      <p className="mt-2 text-sm text-neutral-600">2021–2023</p>
      <p className="mt-2 text-sm text-neutral-600">World of Warcraft Classic · Season of Mastery &amp; Season of Discovery</p>
      <p className="mt-4 leading-relaxed text-neutral-600">Founded and led a community of more than 500 players, coordinating recruitment, team development, and competitive performance across multiple raid teams.</p>
      <ul className="leadership-points">
        <li>Taught advanced raid strategies and adapted emerging tactics into practical assignments, preparation guides, and coaching for individual players and team leaders.</li>
        <li>Used spreadsheets, combat logs, and recorded gameplay (VOD) reviews to organize rosters, evaluate performance, diagnose mistakes, and track improvement.</li>
        <li>Maintained morale through demanding progression, repeated setbacks, and lengthy preparation and resource-gathering sessions; kept volunteer teams motivated through clear goals, constructive feedback, and recognition.</li>
        <li>Managed scheduling, recruitment, conflict resolution, and community expectations across teams, while using YouTube videos and the Ashes channel to promote achievements and attract players.</li>
      </ul>
      <h4 className="mt-6 text-sm font-semibold">Selected competitive results</h4>
      <ul className="leadership-points">
        <li><strong>Season of Mastery:</strong> World-first AQ40 Hard Mode 4 clear; world #1 All-Star guild rankings in AQ40 and Naxxramas; more than 300 top-rated individual boss performances (100 parses).</li>
        <li><strong>Season of Discovery:</strong> Sunken Temple clear in 30:05, ranked #1 server Alliance and #15 worldwide; seven teams completed the raid.</li>
        <li><strong>Team development:</strong> Scaled to 16 Blackfathom Deeps raid teams during Season of Discovery, with eight recording clears under 20 minutes.</li>
      </ul>
      <div className="intro-links text-sm"><a href="https://vanilla.warcraftlogs.com/guild/id/655060">Season of Mastery records</a><a href="https://sod.warcraftlogs.com/guild/us/crusader-strike/ashes">Season of Discovery records</a><a href="https://youtu.be/YbYxGtJGQa8">Sunken Temple run</a><a href="https://www.youtube.com/@ashes42069">Ashes YouTube</a></div>
    </div>
  );
}

function StoryCard({ id, title, lede, body }: { id?: string; icon: React.ReactNode; title: string; lede?: string; body: React.ReactNode }) {
  return (
    <div id={id} className="rounded-none border border-neutral-200 bg-white p-6 md:p-8">
      <div className="flex items-center gap-3">

        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      {lede && <p className="mt-3 text-sm leading-relaxed text-neutral-600">{lede}</p>}
      <details className="mt-5"><summary className="cursor-pointer text-sm text-slate-800">Read the story</summary><div className="mt-4 leading-relaxed text-neutral-600">{body}</div></details>
    </div>
  );
}

/* --------------------------------- contact --------------------------------- */

function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Contact
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            I graduated in August 2026 and am available now, looking for analyst roles in global markets, sales &amp;
            trading, equity research, private wealth, or quant-adjacent research. Open to New York, Denver, Boulder,
            and Chicago, and happy to relocate for the right desk.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={LINKS.email}
              className="inline-flex items-center gap-2 rounded-sm bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition hover:bg-white"
            >
              <Mail size={17} /> crollila@gmail.com
            </a>
            <Pill href={LINKS.resume} icon={<FileText size={15} />}>Resume</Pill>
            <Pill href={LINKS.linkedin} icon={<Linkedin size={15} />}>LinkedIn</Pill>
            <Pill href={LINKS.github} icon={<Github size={15} />}>GitHub</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
