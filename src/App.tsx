import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Mail, Github, Linkedin, Youtube, MapPin,
  LineChart, Boxes, Activity, Users, Trophy, HeartPulse,
  GraduationCap, Briefcase, Terminal, FileText,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

const LINKS = {
  email: "mailto:crollila@gmail.com",
  github: "https://github.com/crollila",
  linkedin: "https://www.linkedin.com/in/caseollila/",
  youtube: "https://www.youtube.com/@ExaltedFortnite",
  resume: "/Case_Ollila_Resume.pdf",
};

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 selection:bg-neutral-200 selection:text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Statbar />
        <Work />
        <Experience />
        <Education />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------- chrome --------------------------------- */

function Header() {
  const nav = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Beyond the resume", href: "#beyond" },
    { label: "Resume", href: LINKS.resume },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="text-sm font-semibold tracking-[0.3em]">EXALTED</span>
          <span className="hidden text-sm text-neutral-500 sm:inline">Case Ollila</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-neutral-400 transition-colors hover:text-neutral-100">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={LINKS.email}
          className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 transition hover:bg-white"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-6">
        <span>&copy; {new Date().getFullYear()} Case Ollila &middot; Boulder, Colorado</span>
        <div className="flex flex-wrap gap-5">
          <a className="transition-colors hover:text-neutral-200" href={LINKS.github}>GitHub</a>
          <a className="transition-colors hover:text-neutral-200" href={LINKS.linkedin}>LinkedIn</a>
          <a className="transition-colors hover:text-neutral-200" href={LINKS.youtube}>YouTube</a>
          <a className="transition-colors hover:text-neutral-200" href={LINKS.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, lede, children }: {
  id: string; eyebrow: string; title: string; lede?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
        <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          {eyebrow}
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </motion.h2>
        {lede && (
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-400">
            {lede}
          </motion.p>
        )}
        <motion.div variants={fadeUp} className="mt-12">{children}</motion.div>
      </motion.div>
    </section>
  );
}

function Mono({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-[0.9em] text-neutral-200">{children}</span>;
}

function Pill({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-600 hover:text-neutral-100"
    >
      {icon}{children}
    </a>
  );
}

/* ----------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-neutral-700/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-neutral-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <motion.div initial="hidden" animate="show" variants={stagger} className="grid gap-7">
          <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-neutral-500">
            <MapPin size={14} /> New York, NY
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Case Ollila
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-3xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            Finance graduate who builds the tools instead of waiting for them. Options pricing in{" "}
            <Mono>q/kdb+</Mono>, volatility surfaces in <Mono>Python</Mono>, hedging backtests in <Mono>R</Mono>
            {" "}&mdash; and, before any of that, a 243,000-subscriber channel and a world-ranked competitive team.
          </motion.p>

          <motion.p variants={fadeUp} className="max-w-3xl leading-relaxed text-neutral-400">
            I graduated from Colorado State in August 2026, and I am looking for analyst roles in global markets,
            sales &amp; trading, or quant-adjacent research. The through-line across everything below is the same:
            I get obsessive about a system, learn it faster than is reasonable, and then lead other people through it.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
            <Pill href={LINKS.resume} icon={<FileText size={15} />}>Resume</Pill>
            <Pill href={LINKS.email} icon={<Mail size={15} />}>crollila@gmail.com</Pill>
            <Pill href={LINKS.github} icon={<Github size={15} />}>GitHub</Pill>
            <Pill href={LINKS.linkedin} icon={<Linkedin size={15} />}>LinkedIn</Pill>
            <Pill href={LINKS.youtube} icon={<Youtube size={15} />}>YouTube</Pill>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Statbar() {
  const stats = [
    { n: "243K", label: "subscribers, built solo" },
    { n: "30.4M", label: "lifetime video views" },
    { n: "6", label: "videos past 1M views" },
    { n: "27 mo", label: "independent quant development" },
    { n: "500+", label: "people led across teams" },
  ];
  return (
    <div className="border-y border-neutral-800/60 bg-neutral-900/20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 md:grid-cols-3 md:px-6 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="py-8">
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.n}</div>
            <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------- work ---------------------------------- */

type Project = {
  title: string;
  blurb: string;
  stack: string[];
  href: string;
  icon: React.ReactNode;
  highlight?: string;
  since?: string;
};

const PROJECTS: Project[] = [
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
    highlight: "Written in kdb+, the stack most trading desks actually run on",
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
    highlight: "18 stars and 4 forks on GitHub",
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
      "A sandbox for a question a lot of people are asking badly: can LLM agents actually beat buying SPY? Built to answer it safely, with paper money only and a harness that records every decision for review.",
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

function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Quantitative projects"
      lede="Ten public repositories drawn from roughly 27 months of building trading systems on my own, starting May 2024. This is independent research and paper trading, not a funded desk, and I would rather say that plainly than let anyone assume otherwise. The repositories went up together, so their commit dates understate how long the underlying work actually ran. I picked the hard version on purpose: implementing Black-Scholes, the implied-vol inversion, and the SVI fit by hand teaches far more than importing them."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
      <div className="mt-8">
        <a
          href={LINKS.github}
          className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
        >
          All repositories on GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </Section>
  );
}

function ProjectCard({ title, blurb, stack, href, icon, highlight, since }: Project) {
  return (
    <a
      href={href}
      className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-600 hover:bg-neutral-900/70"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-neutral-300">{icon}</span>
          <h3 className="text-lg font-medium leading-snug">{title}</h3>
        </div>
        <ArrowUpRight size={18} className="mt-2 shrink-0 text-neutral-600 transition group-hover:text-neutral-200" />
      </div>

      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-neutral-400">{blurb}</p>

      {highlight && (
        <p className="mt-4 border-l-2 border-neutral-700 pl-3 text-sm text-neutral-300">{highlight}</p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-full border border-neutral-800 px-2.5 py-1 text-xs text-neutral-500">{s}</span>
        ))}
        {since && <span className="ml-auto text-xs text-neutral-600">{since}</span>}
      </div>
    </a>
  );
}

/* -------------------------------- experience ------------------------------- */

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have worked">
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
            "Prototyped an AI-assisted prospecting tool that scrapes daily signals for people going through job transitions.",
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

function Role({ icon, title, org, when, points }: {
  icon: React.ReactNode; title: string; org: string; when: string; points: string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-neutral-300">{icon}</span>
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-neutral-400">{org}</p>
          </div>
        </div>
        <span className="text-sm text-neutral-500">{when}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
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
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-neutral-300">
              <GraduationCap size={18} />
            </span>
            <div>
              <h3 className="text-lg font-medium">B.S. Business Administration, Concentration in Finance</h3>
              <p className="text-sm text-neutral-400">
                Previously biology and pre-med at Ohio State; Associate of Science, Front Range Community College
              </p>
            </div>
          </div>
          <span className="text-sm text-neutral-500">Conferred August 2026</span>
        </div>

        <p className="mt-6 max-w-3xl leading-relaxed text-neutral-400">
          I started in biology because I wanted to be a surgeon, and I still think the body is the most interesting
          system there is. Markets turned out to be the other system I could not stop taking apart, and they rewarded
          the same competitive instinct. The coursework below reflects both, plus the computer science I added because
          the finance questions I cared about needed code to answer.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.heading}>
              <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-500">{g.heading}</h4>
              <ul className="mt-3 space-y-1.5">
                {g.courses.map((c) => <li key={c} className="text-sm text-neutral-400">{c}</li>)}
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
      eyebrow="Beyond the resume"
      title="The part that does not fit on one page"
      lede="A resume gives me about six lines. These are the things that actually explain how I work: leading teams that had no obligation to follow me, competing where the feedback is immediate and public, and managing a body that has never once been on autopilot."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <StoryCard
          icon={<Trophy size={18} />}
          title="Professional Fortnite"
          body={
            <>
              <p>
                I moved to Oregon for a year, then to Ashburn, Virginia for another, to train and compete alongside
                the top of the scene. I qualified for FNCS, played DreamHack, and competed at Twitch Rivals, TwitchCon
                in California, and an international tournament in Saudi Arabia, earning prize money across more than
                50 tournaments before my contract ended and I went back to school.
              </p>
              <p className="mt-3">
                What actually transferred: performing when the outcome is public and immediate, reviewing losses
                without flinching, and the fact that I was never the most mechanically gifted player in the lobby, so
                I had to out-prepare people instead.
              </p>
            </>
          }
        />

        <StoryCard
          icon={<Users size={18} />}
          title="Guild Master of Ashes"
          body={
            <>
              <p>
                I founded and led Ashes, a World of Warcraft Classic guild of more than 500 members with a 40-person
                raid core, to world-ranked clears on Crusader Strike. Our documented records include the world&rsquo;s
                fastest Mythic Naxxramas and the world&rsquo;s fastest Scarlet Enclave, alongside a world #2 Alliance
                progression finish.
              </p>
              <p className="mt-3">
                Running it meant recruiting, scheduling across time zones, performance review, roster cuts, and
                conflict resolution, all unpaid, with volunteers who could walk away whenever they liked. It is still
                the hardest management job I have had.
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Records on{" "}
                <a className="underline underline-offset-4 hover:text-neutral-300" href="https://sod.warcraftlogs.com/guild/us/crusader-strike/ashes">
                  Warcraft Logs
                </a>{" "}
                and the{" "}
                <a className="underline underline-offset-4 hover:text-neutral-300" href="https://www.youtube.com/@ashes42069">
                  Ashes channel
                </a>.
              </p>
            </>
          }
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

function StoryCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="rounded-lg border border-neutral-800 bg-neutral-950 p-2 text-neutral-300">{icon}</span>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="mt-5 leading-relaxed text-neutral-400">{body}</div>
    </div>
  );
}

/* --------------------------------- contact --------------------------------- */

function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-800/60">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight md:text-5xl">
            Let us talk.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
            I graduated in August 2026 and am available now, looking for analyst roles in global markets, sales &amp;
            trading, equity research, private wealth, or quant-adjacent research. Open to New York, Denver, Boulder,
            and Chicago, and happy to relocate for the right desk.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a
              href={LINKS.email}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-900 transition hover:bg-white"
            >
              <Mail size={17} /> crollila@gmail.com
            </a>
            <Pill href={LINKS.resume} icon={<FileText size={15} />}>Resume</Pill>
            <Pill href={LINKS.linkedin} icon={<Linkedin size={15} />}>LinkedIn</Pill>
            <Pill href={LINKS.github} icon={<Github size={15} />}>GitHub</Pill>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
