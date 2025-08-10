import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Shield, TrendingUp, BarChart3, Sparkles, ArrowRight, Cpu, Lock, Mail, Gauge, BookOpen, LogIn } from "lucide-react";

const data = [
  { month: "Jan", nav: 100 }, { month: "Feb", nav: 101.6 }, { month: "Mar", nav: 103.2 }, { month: "Apr", nav: 104.1 },
  { month: "May", nav: 105.8 }, { month: "Jun", nav: 107.9 }, { month: "Jul", nav: 109.7 }, { month: "Aug", nav: 111.3 },
  { month: "Sep", nav: 112.7 }, { month: "Oct", nav: 114.9 }, { month: "Nov", nav: 116.2 }, { month: "Dec", nav: 118.5 },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

export default function ExaltedSite() {
  const [portalOpen, setPortalOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <Header onOpenPortal={() => setPortalOpen(true)} />
      <main>
        <Hero /> <Trustbar /> <Why /> <Process /> <Performance /> <Strategy /> <TechStack /> <Insights /> <About /> <FAQ /> <Contact /> <Disclaimer />
      </main>
      <Footer />
      <InvestorLoginModal open={portalOpen} onClose={() => setPortalOpen(false)} />
    </div>
  );
}

function Wordmark() { return <span className="text-lg tracking-[0.35em] font-semibold">EXALTED</span>; }
function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" className="drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fafafa"/><stop offset="100%" stopColor="#8c8c8c"/></linearGradient>
        </defs>
        <path d="M32 4c10.9 0 20 5.6 20 12.6v15.1c0 7.1-5.7 14.6-12.7 18L32 54.2l-7.3-4.5C17.7 46.3 12 38.8 12 31.7V16.6C12 9.6 21.1 4 32 4z" fill="url(#g)" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M20 22h24M20 32h18M20 42h12" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <Sparkles className="absolute -right-1 -top-1" size={14} />
    </div>
  );
}

function Header({ onOpenPortal }: { onOpenPortal: () => void }) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group"><Logo /><Wordmark /></a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <NavLink href="#why">Why Exalted</NavLink><NavLink href="#process">Process</NavLink><NavLink href="#performance">Performance</NavLink>
            <NavLink href="#strategy">Strategy</NavLink><NavLink href="#insights">Insights</NavLink><NavLink href="#contact">Contact</NavLink>
            <Button className="rounded-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-neutral-900 hover:opacity-90"><a href="#contact">Request Deck</a></Button>
            <Button onClick={onOpenPortal} className="rounded-2xl border border-neutral-700 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 flex items-center gap-2"><LogIn size={16}/> Investor Login</Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="relative inline-block px-1 py-2 text-neutral-400 hover:text-neutral-100 transition-colors">
    <span className="after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-neutral-300 after:transition-all hover:after:w-full"/>{children}
  </a>;
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-neutral-700/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-neutral-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-36">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-8">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">AI-Driven. Execution-First. <span className="text-neutral-300">Excess Return Focused.</span></motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-lg md:text-xl text-neutral-300">Exalted Capital is a research-led investment manager combining <span className="text-neutral-100 font-medium">AI-powered signal discovery</span> with<span className="text-neutral-100 font-medium"> high-frequency execution</span> and institutional risk oversight to pursue durable, uncorrelated returns.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Button className="rounded-2xl bg-neutral-100 text-neutral-900 hover:bg-white"><a href="#contact" className="flex items-center gap-2">Request Information <ArrowRight size={18} /></a></Button>
            <Button className="rounded-2xl border border-neutral-700 bg-neutral-900 text-neutral-100 hover:bg-neutral-800"><a href="#why">Why Exalted</a></Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Trustbar() {
  return (
    <div className="relative overflow-hidden border-y border-neutral-800/60 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
        <div className="flex flex-wrap items-center gap-6 text-neutral-400 text-sm">
          <div className="flex items-center gap-2"><Shield size={16} /><span>Institutional Risk</span></div>
          <div className="flex items-center gap-2"><Cpu size={16} /><span>AI Research</span></div>
          <div className="flex items-center gap-2"><Gauge size={16} /><span>HFT Execution</span></div>
          <div className="flex items-center gap-2"><TrendingUp size={16} /><span>Alpha Discipline</span></div>
          <div className="flex items-center gap-2"><BarChart3 size={16} /><span>Multi-Strategy</span></div>
        </div>
      </div>
    </div>
  );
}

function Why() {
  const items = [
    { icon: <Cpu />, title: "AI Signal Discovery", desc: "Foundation models fine-tuned on market microstructure, alt‑data, and regime features to identify edges that generalize." },
    { icon: <Gauge />, title: "High-Frequency Execution", desc: "Latency-conscious routing, queue positioning, and micro-alpha capture to improve implementation shortfall." },
    { icon: <Lock />, title: "Risk Architecture", desc: "Dynamic limits by factor, venue, and liquidity with real-time stress, drawdown, and exposure controls." },
  ];
  return (
    <section id="why" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-10">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Why Exalted</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card><CardHeader><CardTitle className="flex items-center gap-3 text-neutral-200"><span className="text-neutral-300">{it.icon}</span>{it.title}</CardTitle></CardHeader><CardContent><p className="text-neutral-400">{it.desc}</p></CardContent></Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Process() {
  const steps = [
    { k: "Data", d: "Clean, labeled limit-order-book, tick, and event streams + alt‑data pipelines." },
    { k: "Models", d: "Self-supervised pretraining; ensemble learners; ablation-tested signals with strict OOS validation." },
    { k: "Execution", d: "Smart order routing, venue selection, and microstructure‑aware sizing to minimize slippage." },
    { k: "Risk", d: "Scenario and pathwise stress; drawdown governance; factor, liquidity, and counterparty controls." },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-10">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Process Over Prediction</motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="hover:border-neutral-600 transition-colors"><CardHeader><CardTitle>{s.k}</CardTitle></CardHeader><CardContent className="text-neutral-400">{s.d}</CardContent></Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Performance() {
  return (
    <section id="performance" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-8">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Illustrative Performance*</motion.h2>
        <Card><CardContent className="pt-6"><div className="h-80"><ResponsiveContainer width="100%" height="100%"><LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}><XAxis dataKey="month" stroke="#9CA3AF" tickLine={false} axisLine={{ stroke: "#262626" }} /><YAxis stroke="#9CA3AF" tickLine={false} axisLine={{ stroke: "#262626" }} domain={[95, 125]} /><Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #262626", color: "#e5e5e5" }} /><Line type="monotone" dataKey="nav" stroke="#e5e5e5" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div><p className="mt-4 text-xs text-neutral-500">*For demonstration only. Not an indication of future results.</p></CardContent></Card>
        <div className="flex flex-wrap items-center gap-4"><Button className="rounded-2xl bg-neutral-100 text-neutral-900 hover:bg-white"><a href="#contact" className="flex items-center gap-2">Request Tear Sheet <ArrowRight size={18} /></a></Button><p className="text-sm text-neutral-400">Detailed track record available to qualified investors upon request.</p></div>
      </motion.div>
    </section>
  );
}

function Strategy() {
  const items = [
    { title: "AI Systematic Macro", points: ["Cross‑asset trend & carry with regime classifiers", "Volatility‑aware exposure", "Tactical overlays"] },
    { title: "AI Long/Short Equities", points: ["Quality & profitability tilts", "Event & microstructure signals", "Pair trades, factor neutrality"] },
    { title: "HFT Micro‑Alpha", points: ["Queue positioning & spread capture", "Venue selection & fee optimization", "Implementation shortfall reduction"] },
  ];
  return (
    <section id="strategy" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-10">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Strategy Pillars</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="hover:border-neutral-600 transition-colors">
                <CardHeader><CardTitle>{s.title}</CardTitle></CardHeader>
                <CardContent><ul className="space-y-2 text-neutral-400">{s.points.map((p, idx) => (<li key={idx} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-500" /><span>{p}</span></li>))}</ul></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TechStack() {
  const items = [
    { title: "Research", bullets: ["Python, Rust", "Differentiable backtesting", "Feature stores & lineage"] },
    { title: "Models", bullets: ["Self‑supervised pretraining", "Ensembles / stacking", "Drift & regime detectors"] },
    { title: "Execution", bullets: ["LOB simulators", "Smart order routing", "Co‑located gateways*"] },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-10">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Technology Stack</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card><CardHeader><CardTitle className="text-neutral-100 flex items-center gap-2"><Cpu size={18}/> {s.title}</CardTitle></CardHeader>
                <CardContent><ul className="space-y-2 text-neutral-400">{s.bullets.map((b, idx) => (<li key={idx} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-500" /><span>{b}</span></li>))}</ul></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-neutral-500">*Subject to venue availability and regulatory requirements.</p>
      </motion.div>
    </section>
  );
}

function Insights() {
  const posts = [
    { title: "Microstructure 101: Where AI Meets Execution", excerpt: "How regime classifiers improve fill quality and slippage." },
    { title: "Building Robust Signals", excerpt: "Ablations, drift tests, and the danger of overfitting in finance." },
    { title: "Risk in Real Time", excerpt: "From factor limits to pathwise stress—lessons from live trading." },
  ];
  return (
    <section id="insights" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-10">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold flex items-center gap-3"><BookOpen size={28}/> Insights</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="hover:border-neutral-600 transition-colors"><CardHeader><CardTitle className="text-neutral-100">{p.title}</CardTitle></CardHeader><CardContent className="text-neutral-400">{p.excerpt}</CardContent></Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Exalted Capital</h2>
          <p className="text-neutral-300 mb-4">We are practitioners who believe <span className="text-neutral-100 font-medium">process beats prediction</span>. Our edge comes from disciplined research, rapid iteration, and tight feedback loops between models, execution, and risk.</p>
          <p className="text-neutral-400">Alignment matters. Our team invests alongside our clients, and our incentive structure emphasizes long-term, risk‑adjusted performance.</p>
        </motion.div>
        <motion.div variants={fadeUp} className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 p-8 shadow-2xl">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-neutral-600/20 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-neutral-500/20 blur-2xl" />
            <div className="grid gap-3">
              <Metric label="Strategy Mix" value="Systematic / HFT / Discretionary" />
              <Metric label="Min. Investment" value="For qualified investors*" />
              <Metric label="Client Types" value="Family offices, HNW, institutions" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
function Metric({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between text-sm text-neutral-300"><span>{label}</span><span className="font-semibold">{value}</span></div>;
}

function FAQ() {
  const qa = [
    { q: "Who can invest?", a: "We work with qualified clients/investors where permitted. Materials available upon verification." },
    { q: "Is this an offer?", a: "No. This site is informational only. Offers are made solely through official offering documents." },
    { q: "Do you publish returns?", a: "We share detailed track records and risk statistics with qualified prospects under NDA." },
  ];
  return (
    <section className="mx-auto max-w-5xl px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {qa.map((x, i) => (<Card key={i}><CardHeader><CardTitle className="text-neutral-100">{x.q}</CardTitle></CardHeader><CardContent className="text-neutral-400">{x.a}</CardContent></Card>))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 md:px-6 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-6">
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold">Request the Investor Deck</motion.h2>
        <motion.p variants={fadeUp} className="text-neutral-300">Share a few details and our team will follow up promptly.</motion.p>
        <motion.form variants={fadeUp} onSubmit={(e) => e.preventDefault()} className="grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-4"><Input placeholder="Full name" /><Input type="email" placeholder="Work email" /></div>
          <div className="grid md:grid-cols-2 gap-4"><Input placeholder="Organization" /><Input placeholder="AUM (optional)" /></div>
          <Textarea placeholder="Tell us what you’re looking for (strategy, mandate, timeline)" />
          <div className="flex items-center justify-between"><p className="text-xs text-neutral-500 flex items-center gap-2"><Mail size={14}/> investor@exalted.capital</p>
            <Button className="rounded-2xl bg-neutral-100 text-neutral-900 hover:bg-white">Request Deck</Button></div>
        </motion.form>
      </motion.div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-10">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 text-xs text-neutral-400 leading-relaxed">
        <p className="mb-2 font-medium text-neutral-300">Important Information</p>
        <p className="mb-2">This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any offer or solicitation will be made only through formal offering documents and only to qualified investors where permitted by law. Past performance is not indicative of future results.</p>
        <p className="mb-2">Certain statements may be forward‑looking and are not guarantees of future performance. Illustrations are hypothetical.</p>
        <p>*“Qualified investors/clients” as defined by applicable regulations.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3"><Logo size={28} /><Wordmark /></div>
        <div className="flex items-center gap-6">
          <a href="#why" className="hover:text-neutral-300">Why</a><a href="#process" className="hover:text-neutral-300">Process</a>
          <a href="#strategy" className="hover:text-neutral-300">Strategy</a><a href="#insights" className="hover:text-neutral-300">Insights</a>
          <span className="text-neutral-600">© {new Date().getFullYear()} Exalted Capital. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function InvestorLoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [password, setPassword] = useState("");
  const valid = password === (import.meta?.env?.VITE_PORTAL_PASSWORD || "Ollila");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-4"><Lock size={18} /><h3 className="text-lg font-semibold">Investor Portal</h3></div>
        <p className="text-sm text-neutral-400 mb-4">Enter your access password to view documents. For access, contact <span className="text-neutral-200">investor@exalted.capital</span>.</p>
        <Input type="password" placeholder="Password" value={password} onChange={(e:any)=>setPassword(e.target.value)} />
        <div className="flex items-center justify-between gap-3 mt-4">
          <Button onClick={onClose} className="border border-neutral-700 bg-neutral-900 text-neutral-100 hover:bg-neutral-800">Close</Button>
          <Button disabled={!valid} className={`bg-neutral-100 text-neutral-900 hover:bg-white ${!valid && "opacity-50 cursor-not-allowed"}`}>
            <a href="/portal" aria-disabled={!valid}>Enter Portal</a>
          </Button>
        </div>
        <p className="mt-3 text-xs text-neutral-500">Tip: Set <code>VITE_PORTAL_PASSWORD</code> in Cloudflare Pages → Settings → Environment Variables.</p>
      </div>
    </div>
  );
}
